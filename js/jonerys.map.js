const widthPx = 4833;
const heightPx = 4101;
const kmPerPxDefault = 4;
const mapScale = 1;
const kmPerPx = kmPerPxDefault / mapScale;
const widthKm = widthPx * kmPerPx;
const heightKm = heightPx * kmPerPx;
const mapcenter = [widthPx / 2, heightPx / 2];
const image_url = './images/RoC_map_4.0.webp';

var mapLayers = L.layerGroup();
var markers = [];

/*const MapEvents = () => {
	useMapEvents({
	  click(e) {
		console.log(e.latlng.lat + ' ' + e.latlng.lng);
	  },
	});
	return false;
}*/

var xy = function (x, y) {
	if (L.Util.isArray(x)) {
		return L.latLng(x[1], x[0]);
	}
	return L.latLng(y, x);
}

L.CRS.RoCCRS = L.extend({}, L.CRS.Simple, {
	transformation: new L.Transformation(4, 0, 4, 0),
});

map = L.map('map', {                                                       
	crs: L.CRS.RoCCRS,
	center: mapcenter,
	zoomControl:false,
	continuousWorld: false,
	attributionControl: true, 
	autoPan : true,
	noWrap: true,
	maxZoom: 0,                                                     
	minZoom: -4
}).on({
	popupopen: function(e) {
		$(".leaflet-popup-content img:last").one("load", function() {
			e.popup._updateLayout();
			e.popup._updatePosition();
		});
	},
	drag: function() {
		map.panInsideBounds(bounds, { animate: false });
	},
	zoomend: function(e){
		var scale = Math.pow(2, e.target.getZoom()) / Math.pow(2, -2);
		markers.forEach(function (item) {
			item.setIcon(item.getIcon(scale));
		});
		if (e.target._popup ) {
			e.target._popup._updateLayout();
			e.target._popup._updatePosition();
		}
	}
}).setView(mapcenter, -2);

const renderer = L.canvas({ padding: 10 });
map.getRenderer(renderer).options.padding = 10;

//map.getContainer().style.cursor = 'crosshair';

var southWest = map.unproject([0, heightPx], -2);
var northEast = map.unproject([widthPx, 0], -2);
var bounds = L.latLngBounds(southWest, northEast);
var image = L.imageOverlay(image_url, bounds).addTo(map);
map.fitBounds(bounds);

// для расширения видимого пространства
southWest = map.unproject([-500, heightPx + 500], -2);
northEast = map.unproject([widthPx + 500, -500], -2);
bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);

map.attributionControl.addAttribution(
	'<img class=attribution-flag src="images/country_flags/Flag_of_Shtalfeld.webp"/> Königreich von Stahlfeld, 1903');

var hash = new L.Hash(map);

new L.Control.RoCGraphicScale({
	fill: 'fill',
	kmPerPx: kmPerPx,
	numUnits: 3,
	scaleUnit: ' km',
	unitPx: 50
}).addTo(map);

//new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);

var measureControl = new L.Control.Measure({ 
	position: 'bottomright',
	formatDistance: (val) => Math.round(val * kmPerPx)
}).addTo(map);

new L.Control.Fullscreen({ position: 'topleft' }).addTo(map);

new L.Control.Button({
	position: 'topleft',
	className: 'leaflet-control-menu',
	buttonFunction: function() {
		if ($("#menu").is(":hidden")) {
			$(".leaflet-bottom.leaflet-left").toggle();
			$("#menu").slideToggle();
		} else {
			$("#menu").slideToggle(400, function() {
				$(".leaflet-bottom.leaflet-left").toggle();
			});
		}
	},
	title: 'Меню'
}).addTo(map);

mapLayers.addTo(map);

map.on('click', function(e) {
	console.log('[' + Math.round(e.latlng.lat) + ', ' + Math.round(e.latlng.lng) + '],');
	//console.log('[' + Math.round(e.latlng.lng) + ', ' + Math.round(e.latlng.lat) + '],');
});