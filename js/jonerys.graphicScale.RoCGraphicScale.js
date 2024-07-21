L.Control.RoCGraphicScale = L.Control.GraphicScale.extend({ 
	options: {
		kmPerPx: 4, 
		scaleUnit: null,
		numUnits: 2,
		unitPx: 50
	},
	_update: function () { 
		default_zoom = -2;
		var mapScale = Math.pow(2, this._map.getZoom()) / Math.pow(2, default_zoom);
		dist = this.options.kmPerPx / mapScale;
		this._updateScale(mapScale);
	},
	_getRoCMapScale: function(zoom) {
		var numUnits = this.options.numUnits;
		var numSubunits = 2;
		var unitDivision = 1;
		var unitPx = this.options.unitPx;

		var unitMeters = this.options.kmPerPx * unitPx * (1 / zoom);
		var totalWidthPx = numUnits * unitPx;
		
		var unitFactor = 1;
		var subunitFactor = 1;
		var subunitDivision = 0.5;
		var subunitPx = unitPx * subunitDivision;
		var subunitMeters = unitMeters * subunitDivision;
		var total = numSubunits * subunitMeters;

		var scale = {
			numUnits: numUnits,
			totalWidthPx: totalWidthPx,
			score: 0,
			subunits: {
				numSubunits: numSubunits,
				subunit: {
					subunitDivision: subunitDivision,
					subunitFactor: subunitFactor,
					subunitMeters: subunitMeters,
					subunitPx: subunitPx
				},
				total: total
			},
			unit: {
				unitDivision: unitDivision,
				unitFactor: unitFactor, 
				unitMeters: unitMeters,
				unitPx: unitPx, 
				unitScore: 0
			}
		};
		return scale;
	},
	_updateScale: function(mapScale) {
		this._render(this._getRoCMapScale(mapScale));
	},
	_getDisplayUnit: function(units) { 
		if (this.options.scaleUnit) { 
			return { 
				unit: this.options.scaleUnit, 
				amount: units 
			}; 
		} else { 
			var displayUnit = (units<1000) ? 'm' : 'km'; 
			return { 
				unit: displayUnit, 
				amount: (displayUnit === 'km') ? units / 1000 : units }; 
		} 
	},
	_buildScale: function() {
        var root = document.createElement("div");
        root.className = "leaflet-control-graphicscale-inner";
        var subunits = L.DomUtil.create("div", "subunits", root);
        var units = L.DomUtil.create("div", "units", root);
        this._units = [];
        this._unitsLbls = [];
        this._subunits = [];
        for (var i = 0; i < 5; i++) {
            var unit = this._buildDivision(i % 2 === 0);
            units.appendChild(unit);
            this._units.push(unit);
            var unitLbl = this._buildDivisionLbl();
            unit.appendChild(unitLbl);
            this._unitsLbls.push(unitLbl);
            var subunit = this._buildDivision(i % 2 === 1);
            subunits.appendChild(subunit);
            this._subunits.unshift(subunit)
        }
        this._unitLbl = L.DomUtil.create("div", "label unitLabel");
        this._zeroLbl = L.DomUtil.create("div", "label zeroLabel");
        this._zeroLbl.innerHTML = "0";
        this._units[0].appendChild(this._zeroLbl);
        this._subunitsLbl = L.DomUtil.create("div", "label subunitsLabel");
        this._subunitsLbl.innerHTML = "?";
        this._subunits[4].appendChild(this._subunitsLbl);
        return root
    },
	_buildDivision: function(fill) {
        var item = L.DomUtil.create("div", "division");
        var l1 = L.DomUtil.create("div", "line");
        item.appendChild(l1);
        var l2 = L.DomUtil.create("div", "line2");
        item.appendChild(l2);
        if (this.options.fill === "double") {
            if (fill) {
                l1.appendChild(L.DomUtil.create("div", "fill"));
                l2.appendChild(L.DomUtil.create("div", "secondary-fill"))
            } else {
                l1.appendChild(L.DomUtil.create("div", "secondary-fill"));
                l2.appendChild(L.DomUtil.create("div", "fill"))
            }
        } else {
            if (fill)
                l1.appendChild(L.DomUtil.create("div", "fill"));
            if (!fill)
				l1.appendChild(L.DomUtil.create("div", "secondary-fill"));
                l2.appendChild(L.DomUtil.create("div", "fill"))
        }
        return item
    },
});