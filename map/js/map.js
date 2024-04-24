const width_px = 4833;
const height_px = 4101;
const km_per_px = 4;
const width_km = width_px * km_per_px;
const height_km = height_px * km_per_px;
const mapcenter = [width_px / 2, height_px / 2];

const image_url = './images/RoC_map_4.0.webp';

const MapEvents = () => {
	useMapEvents({
	  click(e) {
		// setState your coords here
		// coords exist in "e.latlng.lat" and "e.latlng.lng"
		console.log(e.latlng.lat + ' ' + e.latlng.lng);
		//console.log(e.latlng.lng);
	  },
	});
	return false;
}

var yx = L.latLng;

var xy = function (x, y) {
  if (L.Util.isArray(x)) { // When doing xy([x, y]);
	return yx(x[1], x[0]);
  }
  return yx(y, x); // When doing xy(x, y);
}

// calculate Euclidean distance:
var getDistance = function (pointA, pointB) {
  var xA = pointA.lng
  var yA = pointA.lat
  var xB = pointB.lng
  var yB = pointB.lat

  var distance = Math.sqrt(Math.pow((xB - xA), 2) + Math.pow((yB - yA), 2))
  return distance
}
//console.log('getDistance(hobbiton, minasMorgul): ' + getDistance(hobbiton, minasMorgul) + 'km')

L.CRS.RoCCRS = L.extend({}, L.CRS.Simple, {
	transformation: new L.Transformation(4, 0, 4, 0),
});

map = L.map('map', {                                                       
	crs: L.CRS.RoCCRS,
	center: mapcenter,
	zoomControl:false,
	continuousWorld: false,
	attributionControl: false, 
	autoPan : true,
	noWrap: true,
	maxZoom: 0,                                                     
	minZoom: -4
}).setView(mapcenter, -2);  

//map.getContainer().style.cursor = 'crosshair';

map.on('mousemove', function(e) {
	//console.log(e.latlng.lat + ' ' + e.latlng.lng);
});

var southWest = map.unproject([0, height_px], -2);
var northEast = map.unproject([width_px, 0], -2);
var bounds = L.latLngBounds(southWest, northEast);
var image = L.imageOverlay(image_url, bounds).addTo(map);
map.fitBounds(bounds);

var hash = new L.Hash(map);

var scale_options = {
	fill: 'fill',
	kmPerPx: 4,
	numUnits: 3,
	scaleUnit: ' km'
};

new L.Control.RoCGraphicScale(scale_options).addTo(map);

//new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);

var measureControl = new L.Control.Measure({ 
	position: 'topleft',
	formatDistance: function (val) {
      return Math.round(val * km_per_px);
    }
}).addTo(map);

map.setMaxBounds(bounds);
map.on('drag', function() {
	map.panInsideBounds(bounds, { animate: false });
});

var capitalIcon = new capIcon();

function onEachFeature(feature, layer) {
	var popup = "<div><table><tr><td><img class=flag-popup src=" + 
			feature.properties.flag.image + " /></td><td><h3>" + feature.properties.name + "</h3></td></tr></table></div>";
	var pop = L.responsivePopup({hasTip: true}).setContent(popup);
	layer.bindPopup(pop);
}

var countryLayer = L.geoJSON(map_icons.features, {
	pointToLayer: function (feature) {
		return L.marker(feature.geometry.coordinates, {icon: capitalIcon});
    },
	onEachFeature: onEachFeature
});

var countries = L.layerGroup([countryLayer]).addTo(map);

map.on('popupopen', (e) => {
	var px = map.project(e.target._popup._latlng); // find the pixel location on the map where the popup anchor is
	px.y -= e.target._popup._container.clientHeight / 2; // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
	map.panTo(map.unproject(px), { animate: true }); // pan to new center
});


map.on('zoomend', function() {
	/*scale = Math.pow(2, map.getZoom()) / Math.pow(2, -2);
	switch (scale) {
		case 2:
			map.removeLayer(countryLayerZoom2);
			map.removeLayer(countryLayerZoom0);
			map.addLayer(countryLayerZoom1);
			break;
		case 4:
			map.removeLayer(countryLayerZoom1);
			map.removeLayer(countryLayerZoom2);
			map.addLayer(countryLayerZoom0);
			break;
		default:
			map.removeLayer(countryLayerZoom1);
			map.removeLayer(countryLayerZoom0);
			map.addLayer(countryLayerZoom2);
			break;
	}*/
});