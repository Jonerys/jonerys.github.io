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

L.Control.Measure.prototype._formatDistance = function(val) {
	if (typeof this.options.formatDistance === 'function') {
		return this.options.formatDistance(val);
	}
	return Math.round(val);
}

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

var measureControl = new L.Control.Measure({ position: 'topleft' }).addTo(map);

map.setMaxBounds(bounds);
map.on('drag', function() {
	map.panInsideBounds(bounds, { animate: false });
});

var capitalIconZ2 = new capIcon();
var capitalIconZ1 = new capIcon({
	iconSize:     [20 * 2, 20 * 2],
	iconAnchor:   [10 * 2, 20 * 2]
});
var capitalIconZ0 = new capIcon({
	iconSize:     [20 * 4, 20 * 4],
	iconAnchor:   [10 * 4, 20 * 4]
});

function onEachFeature(feature, layer) {
	var popup = L.popup({
		offset: [-20, 0],
		content: "<div><table><tr><td><img class=flag-popup src=" + 
			feature.properties.flag.image + " /></td><td>" + feature.properties.name + "</td></tr></table></div>"
	});
	layer.bindPopup(popup);
}

var countryLayerZoom2 = L.geoJSON(map_icons.features, {
	pointToLayer: function (feature) {
		return L.marker(feature.geometry.coordinates, {icon: capitalIconZ2});
    },
	onEachFeature: onEachFeature
});

var countryLayerZoom1 = L.geoJSON(map_icons.features, {
	pointToLayer: function (feature) {
		return L.marker(feature.geometry.coordinates, {icon: capitalIconZ1});
    },
	onEachFeature: onEachFeature
});

var countryLayerZoom0 = L.geoJSON(map_icons.features, {
	pointToLayer: function (feature) {
		return L.marker(feature.geometry.coordinates, {icon: capitalIconZ0});
    },
	onEachFeature: onEachFeature
});

var countries = L.layerGroup([countryLayerZoom2]).addTo(map);


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