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
}).setView(mapcenter, -2);

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
	formatDistance: (val) => Math.round(val * kmPerPx)
}).addTo(map);

new L.Control.Fullscreen({ position: 'topleft' }).addTo(map);

new L.Control.Button({
	position: 'topleft',
	className: 'leaflet-control-menu',
	buttonFunction: function() {
		//$("#mapmenu").toggle("'slide', {direction: 'down' }, 1000");
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

map.on("popupopen", function(e) {
	//console.log(e);
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
	var scale = Math.pow(2, e.target.getZoom()) / Math.pow(2, -2);
	markers.forEach(function (item) {
		item.setIcon(item.getIcon(scale));
	});
	if (e.target._popup ) {
		e.target._popup._updateLayout();
		e.target._popup._updatePosition();
	}
});

function pointToLayer(feature) {
	let marker = new CustomMarker(feature.geometry.coordinates, {
		icon: icons.find(a => a.type == feature.icontype).icon_x1, 
		iconsSet: icons.find(a => a.type == feature.icontype)
	});
	markers.push(marker);
	return markers[markers.length - 1];
};

var countryLayer = L.geoJSON(data.features, {
	pointToLayer: (feature) => pointToLayer(feature),
	onEachFeature: function (feature, layer) {
		let player, countryName;
		let capital = "<div><div class=popup-label>"
				+ "Столица:</div><div class=popup-data>" 
				+ feature.properties.capital + "</div></div>";
		
				let leaderLabel = "Глава";
		
		if (feature.properties.leaderLabel) leaderLabel = feature.properties.leaderLabel;
		
		let leader = "<div><div class=popup-label>"
				+ leaderLabel + ":</div><div class=popup-data>" 
				+ feature.properties.leader + "</div></div>";
		
		let government = "<div><div class=popup-label>Форма правления:   </div><div class=popup-data>" + 
			feature.properties.government + "</div></div>";
		
		let dipStatus = "<div><div class=popup-label>"
				+"Дип. статус:</div><div class=popup-data>" 
				+ feature.properties.status + "</div></div>";
				
		if ((feature.properties.playerName != NO_PLAYER) && (feature.properties.playerName != PLAYER_ZOG)) {
			player = "<div><div class=popup-label>" 
					+ "Владелец:</div><div class=popup-data><div class=\"black-link player\">"
					+ "<a href=https://doublebrick.ru/forums/memberlist.php?mode=viewprofile&u=" 
					+ feature.properties.playerUrl + ">  " 
					+ feature.properties.playerName + "</a></div></div></div>";
		} else {
			player = "<div><div class=popup-label>"
					+ "Владелец:</div><div class=\"popup-data player npc-player\">" 
					+ feature.properties.playerName + "</div></div>";
		}
		
		if (feature.properties.url != NO_TOPIC) {
			countryName = "<a href=https://doublebrick.ru/forums/viewtopic.php?t="   
				+ feature.properties.url + ">" + feature.properties.name + "</a>";
		} else {
			countryName = feature.properties.name;
		}
		
		let popup = "<div class=content><div class=content-head><img class=flag-popup alt=\"" 
				+ feature.properties.tag + "\"  src=images/country_flags/" 
				+ feature.properties.flag.image 
				+ " /><div class=\"black-link country-name\">" + countryName + "</div></div>";
				
		popup += "<div class=content-body>";
		
		if (feature.properties.capital) {
			popup += capital;
		}
		if (feature.properties.leader) {
			popup += leader;
		} 
		if (feature.properties.government) {
			popup += government;
		} 
		if (feature.properties.status) {
			popup += dipStatus;
		} 
		if (feature.properties.playerName) {
			popup += player;
		} 
		popup += '<div><p onclick="openCountryDiplomacy(this.children[0].value)">' 
				+ '<input type=radio style="display:none" value=' + feature.properties.id + '>Дипломатические отношения >></p> </div>'
		
		popup += "</div></div>";
		
		layer.bindPopup(popup, {
			autoClose: false
		});
	}
});

var placeLayer = L.geoJSON(places.features, {
	pointToLayer: (feature) => pointToLayer(feature),
	onEachFeature: function (feature, layer) {
		let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" + feature.properties.name + "</div></div>";
		layer.bindPopup(popup, {
			autoClose: false
		});
	}
});

var waterLayer = L.geoJSON(waterPlaces.features, {
	pointToLayer: (feature) => pointToLayer(feature),
	onEachFeature: function (feature, layer) {
		let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" + feature.properties.name + "</div></div>";
		layer.bindPopup(popup, {
			autoClose: false
		});
	}
});

var buildingLayer = L.geoJSON(buildingPlaces.features, {
	pointToLayer: (feature) => pointToLayer(feature),
	onEachFeature: function (feature, layer) {
		let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" + feature.properties.name + "</div></div>";
		layer.bindPopup(popup, {
			autoClose: false
		});
	}
});

var mapLayers = L.layerGroup([
	countryLayer
	//, placeLayer
	//, waterLayer
	//, buildingLayer
]).addTo(map, true);

// кластеризация маркеров работает, но надо доводить до ума
/*var countries = L.markerClusterGroup();
countries.addLayer(countryLayer);
map.addLayer(countries);*/

function openCountryDiplomacy(elem) {
	if (!$("#diplomacy").is(":visible")) {
		openDiplomacy();
	}	
	chooseCountry(elem);
}

$(".menu-layers input").click(function( event ) {
	let layerCb = window[event.target.value];
	try {
		if (map.hasLayer(layerCb)) {
            mapLayers.removeLayer(layerCb);
			map.removeLayer(layerCb);
		}
		else{
            mapLayers.addLayer(layerCb);
			map.addLayer(layerCb);
		}
	} catch(e) {

	}
});