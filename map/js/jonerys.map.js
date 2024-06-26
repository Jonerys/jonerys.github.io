const widthPx = 4833;
const heightPx = 4101;
const kmPerPx = 4;
const widthKm = widthPx * kmPerPx;
const heightKm = heightPx * kmPerPx;
const mapcenter = [widthPx / 2, heightPx / 2];

const image_url = './images/RoC_map_4.0.webp';

const MapEvents = () => {
	useMapEvents({
	  click(e) {
		console.log(e.latlng.lat + ' ' + e.latlng.lng);
	  },
	});
	return false;
}

var yx = L.latLng;

var xy = function (x, y) {
	if (L.Util.isArray(x)) {
		return yx(x[1], x[0]);
	}
	return yx(y, x);
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
}).setView(mapcenter, -2);

//map.getContainer().style.cursor = 'crosshair';

map.on('click', function(e) {
	console.log('[' + Math.round(e.latlng.lat) + ', ' + Math.round(e.latlng.lng) + '],');
});

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

var scale_options = {
	fill: 'fill',
	kmPerPx: kmPerPx,
	numUnits: 3,
	scaleUnit: ' km'
};

new L.Control.RoCGraphicScale(scale_options).addTo(map);

//new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);

var measureControl = new L.Control.Measure({ 
	position: 'bottomright',
	formatDistance: function (val) {
      return Math.round(val * kmPerPx);
    }
}).addTo(map);

new L.Control.Fullscreen({ position: 'topleft' }).addTo(map);

var control = new L.Control.Button({
	position: 'topleft',
	className: 'leaflet-control-menu',
	buttonFunction: function() {
		//$("#mapmenu").toggle("'slide', {direction: 'down' }, 1000");
		$("#mapmenu").slideToggle();
		$(".leaflet-bottom.leaflet-left").toggle();
	},
	title: 'Меню'
}).addTo(map);

map.on("popupopen", function(e) {
	$(".leaflet-popup-content img:last").one("load", function() {
		e.popup._updateLayout();
		e.popup._updatePosition();
	});
	/*var px = map.project(e.target._popup._latlng);
	px.y -= e.target._popup._container.clientHeight / 2;
	map.panTo(map.unproject(px), { animate: true });*/
});

map.on('drag', function() {
	map.panInsideBounds(bounds, { animate: false });
});

map.on('zoomend', function(e){
	updateMarkers(e);
});

function onEachFeature(feature, layer) {
	
	var capital = "<tr><td><div class=popup-label>"
			+ "Столица:</div><div class=popup-data>" 
			+ feature.properties.capital + "</div></td></tr>";
	
	var leaderLabel = "Глава";
	
	if (feature.properties.leaderLabel) {
		leaderLabel = feature.properties.leaderLabel;
	}
	
	var leader = "<tr><td><div class=popup-label>"
			+ leaderLabel + ":</div><div class=popup-data>" 
			+ feature.properties.leader + "</div></td></tr>";
	
	var government = "<tr><td><div class=popup-label>Форма правления:   </div><div class=popup-data>" + 
		feature.properties.government + "</div></td></tr>";
	
	var dipStatus = "<tr><td><div class=popup-label>"
			+"Дип. статус:</div><div class=popup-data>" 
			+ feature.properties.status + "</div></td></tr>";
			
	if ((feature.properties.playerName != NO_PLAYER) && (feature.properties.playerName != PLAYER_ZOG)) {
		var player = "<tr><td><div class=popup-label>" 
				+ "Владелец:</div><div class=popup-data><div class=\"black-link player\">"
				+ "<a href=https://doublebrick.ru/forums/memberlist.php?mode=viewprofile&u=" 
				+ feature.properties.playerUrl + ">  " 
				+ feature.properties.playerName + "</a></div></div></td></tr>";
	} else {
		var player = "<tr><td><div class=popup-label>"
				+ "Владелец:</div><div class=\"popup-data player npc-player\">" 
				+ feature.properties.playerName + "</div></td></tr>";
	}
	
	if (feature.properties.url != NO_TOPIC) {
		var countryName = "<a href=https://doublebrick.ru/forums/viewtopic.php?t="   
			+ feature.properties.url + ">" + feature.properties.name + "</a>";
	} else {
		var countryName = feature.properties.name;
	}
	
	var popup = "<div class=content><div class=content-head><table><tr><td class=flag-td><img class=flag-popup alt=\"" 
			+ feature.properties.tag + "\"  src=images/country_flags/" 
			+ feature.properties.flag.image 
			+ " /></td><td class=country-name-td><div class=\"black-link country-name\">" + countryName + "</div></td></tr></table></div>";
			
	popup += "<div class=content-body><table>";
	
	
	if (feature.properties.capital) popup += capital;
	if (feature.properties.leader) popup += leader;
	if (feature.properties.government) popup += government;
	if (feature.properties.status) popup += dipStatus;
	if (feature.properties.playerName) popup += player;
	
	
	popup += "</table></div></div>";
	
	layer.bindPopup(popup, {
		autoClose: false
	});
}

var countryLayer = L.geoJSON(map_icons.features, {
	pointToLayer: function (feature) {
		var marker = L.marker(feature.geometry.coordinates, {icon: capitalIcon});
		markers.push(marker);
		return markers[markers.length - 1];
    },
	onEachFeature: onEachFeature
});

var layers = L.layerGroup([
	countryLayer
]).addTo(map, true);

$(".mapmenu-layers input").click(function( event ) {
	let layerCb = window[event.target.value];
	try {
		if (map.hasLayer(layerCb)) {
			map.removeLayer(layerCb);
		}
		else{
			map.addLayer(layerCb);
		}
	} catch(e) {
		
	}
});