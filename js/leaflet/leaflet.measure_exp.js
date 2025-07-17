L.Control.Measure = L.Control.extend({
	options: {
		position:'topleft',
		keyboard:true,
		activeKeyCode:'M'.charCodeAt(0),
		cancelKeyCode: 27,
		lineColor:'red',
		lineWeight:2,
		lineDashArray:'6, 6',
		lineOpacity:1,
		formatDistance:null,
		textColor:'black'
	},
	initialize: function(options) {
		L.Util.setOptions(this,options)
	},
	onAdd: function(map) {
		var className = 'leaflet-control-zoom leaflet-bar leaflet-control'
		var container = L.DomUtil.create('div',className)
		this._createButton('&#8674;','Измерение расстояния','leaflet-control-measure leaflet-bar-part leaflet-bar-part-top-and-bottom',container,this._toggleMeasure,this)
		if (this.options.keyboard) {
			L.DomEvent.on(document,'keydown',this._onKeyDown,this)
		}
		return container
	},
	onRemove: function(map) {
		if(this.options.keyboard) {
			L.DomEvent.off(document,'keydown',this._onKeyDown,this)
		}
	},
	_createButton: function(html,title,className,container,fn,context) {
		var link = L.DomUtil.create('a',className,container)
		//link.innerHTML=html
		link.href = '#'
		link.title = title
		L.DomEvent.on(link,'click',L.DomEvent.stopPropagation)
			.on(link,'click',L.DomEvent.preventDefault)
			.on(link,'click',fn,context)
			.on(link,'dbclick',L.DomEvent.stopPropagation)
		return link
	},
	_toggleMeasure: function(){
		this._measuring = !this._measuring
		if (this._measuring) {
			L.DomUtil.addClass(this._container,'leaflet-control-measure-on')
			this._startMeasuring()
		} else { 
			L.DomUtil.removeClass(this._container,'leaflet-control-measure-on')
			this._stopMeasuring()
		}
	},
	_startMeasuring:function() {
		this._oldCursor = this._map._container.style.cursor
		this._map._container.style.cursor = 'crosshair'
		this._doubleClickZoom = this._map.doubleClickZoom.enabled()
		this._map.doubleClickZoom.disable()
		this._isRestarted = false
		L.DomEvent.on(this._map,'mousemove',this._mouseMove,this)
			.on(this._map,'click',this._mouseClick,this)
			.on(this._map,'dbclick',this._finishPath,this)
		if (!this._layerPaint) {
			this._layerPaint = L.layerGroup().addTo(this._map)
		}
		if (!this._points) {
			this._points=[]
		}
		this._markers = []
		this._markers.push([])
	},
	_stopMeasuring: function() {
		this._map._container.style.cursor = this._oldCursor
		L.DomEvent.off(this._map,'mousemove',this._mouseMove,this)
			.off(this._map,'click',this._mouseClick,this)
			.off(this._map,'dbclick',this._finishPath,this)
		if (this._doubleClickZoom) {
			this._map.doubleClickZoom.enabled()
		}
		if (this._layerPaint) {
			this._layerPaint.clearLayers()
		}
		this._restartPath()
	},
	_mouseMove: function(e) {
		if (!e.latlng||!this._lastPoint) {
			return
		}
		if (!this._layerPaintPathTemp) {
			this._layerPaintPathTemp = L.polyline([this._lastPoint,e.latlng],{
				color: this.options.lineColor, 
				weight: this.options.lineWeight,
				opacity:this.options.lineOpacity,
				className: 'measure-line',
				clickable:false,
				dashArray:this.options.lineDashArray,
				interactive:false
			}).addTo(this._layerPaint)
		} else {
			this._layerPaintPathTemp.getLatLngs().splice(0,2,this._lastPoint, e.latlng)
			this._layerPaintPathTemp.redraw()
		}
		if (this._tooltip) {
			if(!this._distance) {
				this._distance=0
			}
			this._updateTooltipPosition(e.latlng)
			var distance=this._map.distance(e.latlng, this._lastPoint)
			this._updateTooltipDistance(this._distance + distance, distance)
		}
	},
	_mouseClick: function(e) {
		if(!e.latlng)
		{
			return
		}
		if (this._isRestarted) {
			this._isRestarted=false
			return
		}
		if (this._lastPoint && this._tooltip) {
			if (!this._distance) {
				this._distance=0
			}
			this._updateTooltipPosition(e.latlng)
			var distance = this._map.distance(e.latlng, this._lastPoint)
			this._updateTooltipDistance(this._distance+distance,distance)
			this._distance += distance
		}
		this._createTooltip(e.latlng)
		if (this._lastPoint && !this._layerPaintPath) {		
			this._layerPaintPath = L.polyline([this._lastPoint],{
												color: this.options.lineColor,
												weight: this.options.lineWeight,
												className: 'measure-line',
												opacity: this.options.lineOpacity,
												clickable: false,
												interactive: false}
												).addTo(this._layerPaint)}
		if (this._layerPaintPath){
			this._layerPaintPath.addLatLng(e.latlng)
		}
		if (this._lastPoint) {
			if (this._lastMarker) {
				this._lastMarker.off('click',this._finishPath,this)
			}
			this._lastMarker = this._createCircle(e.latlng).addTo(this._layerPaint)
			this._layerPaint.removeLayer(this._markers[this._markers.length - 1][0].marker)
			this._markers[this._markers.length - 1][0].marker.addTo(this._layerPaint)
		} else {
			if (!e.originalEvent.ctrlKey) {
				this._finished = false;
				this._lastMarker = this._createCircle(e.latlng).addTo(this._layerPaint)
				this._startMarker = L.marker(e.latlng, {
					icon: startPathIcon,
					clickable:false,
					interactive:false
					}).addTo(this._layerPaint)
			}
		}

		

		if (this._lastMarker !== undefined) {

			this._lastMarker.on('click',this._finishPath,this);
			this._lastPoint=e.latlng;

			this._markers[this._markers.length - 1].push(
				{
					marker: this._lastMarker,
					flag: null,
					tooltip: this._prevToolTip,
					path: this._layerPaintPath
				}
			);

			let circle = this._lastMarker;
			let curTooltip = this._prevToolTip;
			let root = this;

			const mouseMoveHandler = function (e) {
				let marker = root._findMarker(circle);
				let pathID = marker.pathID;
				let pointID = marker.pointID;

				if (curTooltip !== undefined) 
					curTooltip.setLatLng(e.latlng);

				let lstm = root._markers[pathID][0].marker;
				let total = 0;
				let diff = 0;

				root._markers[pathID].forEach((point) => {
					diff = root._map.distance(point.marker.getLatLng(), lstm.getLatLng());
					if (point.tooltip !== undefined)
						root._updateTooltipDistance(total + diff, diff, point.tooltip);
					total += diff;
					lstm = point.marker;
				});

				if (pointID == 0 || pointID == root._markers[pathID].length - 1)
					root._markers[pathID][pointID].flag.setLatLng(e.latlng)

				circle.setLatLng(e.latlng);

				let points = root._markers[pathID][1].path.getLatLngs();

				points[pointID].lat = circle.getLatLng().lat;
				points[pointID].lng = circle.getLatLng().lng;

				root._markers[pathID][1].path.setLatLngs(points);
				
			}

			circle.on('mousedown', () => {
				if (this._finished) {
					this._map.dragging.disable();
					this._map.on('mousemove', mouseMoveHandler);
				}
			})
			this._map.on('mouseup', () => {
				if (this._finished) {
					this._map.off('mousemove', mouseMoveHandler);
					this._map.dragging.enable();
				}
			})
			this._map.on('mouseout', () => {
				if (this._finished) {
					this._map.off('mousemove', mouseMoveHandler);
					this._map.dragging.enable();
				}
			})

			this._prevToolTip = this._tooltip;
		}
	},
	_findMarker: function(marker) {
		let pathID = 0;
		let pointID = 0;
		for(let i = 0; i < this._markers.length; i++) {
			for(let j = 0; j < this._markers[i].length; j++) {
				if (this._markers[i][j].marker._leaflet_id == marker._leaflet_id) {
					return {
						pathID: i,
						pointID: j,
						marker: this._markers[i][j].marker
					} 
				}
			}
		}
	},
	_finishPath: function(e) {
		if(e){
			L.DomEvent.preventDefault(e)
		}
		if (this._lastMarker){
			this._lastMarker.off('click',this._finishPath,this)
		}
		if (this._tooltip){ 
			this._layerPaint.removeLayer(this._tooltip)
		}
		if (this._layerPaint&&this._layerPaintPathTemp){
			this._layerPaint.removeLayer(this._layerPaintPathTemp)
		}
		if (this._markers[this._markers.length - 1].length > 1) {
			this._finishMarker = L.marker(this._lastPoint, {
				icon: finishPathIcon,
				clickable:false,
				interactive:false
				}).addTo(this._layerPaint)
			
			this._markers[this._markers.length - 1][0].flag = this._startMarker;
			const lastPointNum = this._markers[this._markers.length - 1].length - 1;
			this._markers[this._markers.length - 1][lastPointNum].flag = this._finishMarker;
			
		} else {
			this._layerPaint.removeLayer(this._lastMarker);
			this._layerPaint.removeLayer(this._startMarker);
		}
		this._restartPath()
	},
	_restartPath: function() {
		this._finished = true
		this._distance=0
		this._lastMarker = undefined
		this._lastPoint=undefined
		this._tooltip=undefined
		this._prevToolTip=undefined
		this._layerPaintPath=undefined
		this._layerPaintPathTemp=undefined
		this._isRestarted=true
		this._markers.push([])
	},
	_createCircle:function(latlng){
		return new L.CircleMarker(latlng,{color:'black',opacity:1,weight:1,fillColor:'white',fill:true,fillOpacity:1,radius:4,
			clickable:Boolean(this._lastMarker),draggable:true,interactive:true})
	},
	_createTooltip:function(position){
		var icon=L.divIcon({className:'leaflet-measure-tooltip',iconAnchor:[-5,-5]})
		this._tooltip=L.marker(position,{icon:icon,clickable:false,interactive:false}).addTo(this._layerPaint)
	},
	_updateTooltipPosition:function(position){this._tooltip.setLatLng(position)
	},
	_updateTooltipDistance:function(total,difference,tooltip=this._tooltip){
		if(!tooltip._icon){return}
		var totalRound=this._formatDistance(total)
		var differenceRound=this._formatDistance(difference)
		var text='<div class="leaflet-measure-tooltip-total" style="color:'+this.options.textColor+'">'+totalRound
		if(differenceRound>0&&totalRound!==differenceRound){text+='<span class="leaflet-measure-tooltip-difference"> (+'+differenceRound + ')</span>'}
		text+=' км</div>'
		tooltip._icon.innerHTML=text
	},
	_formatDistance: function(val) {
		if(typeof this.options.formatDistance==='function'){return this.options.formatDistance(val);}
		if(val<1000){return Math.round(val)}else{return Math.round((val/1000)*100)/100}
	},
	_onKeyDown:function(e){
		switch(e.keyCode){
			case this.options.activeKeyCode:
				if (e.altKey) {
					if(!this._measuring) {
						this._toggleMeasure()
					}
					else {
						if(!this._lastPoint) {
							this._toggleMeasure()
						}
						else {
							this._finishPath()
							this._isRestarted=false
						}
					}
				}
				break
			case this.options.cancelKeyCode: 
				if (this._measuring) {
					if(!this._lastPoint) {
						this._toggleMeasure()
					}
					else {
						this._finishPath()
						this._isRestarted=false
					}
				}
				break
		}
	}
})

L.control.measure=function(options){
	return new L.Control.Measure(options)
}

L.Map.mergeOptions({measureControl:false})

L.Map.addInitHook(function(){if(this.options.measureControl){this.measureControl=new L.Control.Measure()

this.addControl(this.measureControl)}})