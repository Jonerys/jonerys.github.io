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

//var bounds = [xy(0, 0), xy(width_km, height_km)];
var southWest = map.unproject([0, 4101], -2);
var northEast = map.unproject([4833, 0], -2);
var bounds = L.latLngBounds(southWest, northEast);
var image = L.imageOverlay(image_url, bounds);
image.addTo(map);
map.fitBounds(bounds);

var hash = new L.Hash(map);

var scale_options = {
	fill: 'fill',
	kmPerPx: 4,
	numUnits: 3,
	scaleUnit: ' km'
};

new L.Control.RoCGraphicScale(scale_options).addTo(map);

//new L.Control.RoCScale({imperial: false, metric: true, position: 'bottomleft'}).addTo(map);
//new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);
var measureControl = new L.Control.Measure({ position: 'topleft' }).addTo(map);

map.setMaxBounds(bounds);
map.on('drag', function() {
	map.panInsideBounds(bounds, { animate: false });
});
//var bounds = [xy(0, 0), xy(18432, 16384)]


var capIcon = L.Icon.extend({
	options: {
		iconUrl: 'markers/marker_capital.webp',
		shadowUrl: '',
		iconSize:     [20, 20],
		iconAnchor:   [10, 20],
		popupAnchor:  [0, -20]
	}
});

var capitalIcon = new capIcon();

var rumania = xy(2302, 2361);
L.marker(rumania, {icon: capitalIcon}).addTo(map).bindPopup('Румания');

var thierdal = xy(1722, 2069);
L.marker(thierdal, {icon: capitalIcon}).addTo(map).bindPopup('Тиердаль');

var modravia = xy(2138, 919);
L.marker(modravia, {icon: capitalIcon}).addTo(map).bindPopup('Донатия');

var civilia = xy(2926, 2061);
L.marker(civilia, {icon: capitalIcon}).addTo(map).bindPopup('Цивилия');

var kulinburg = xy(2285, 2200);
L.marker(kulinburg, {icon: capitalIcon}).addTo(map).bindPopup('Кюлинбург');