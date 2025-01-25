const FLAG_IMAGES_PATH = 'images/country_flags/';

const CustomMarker = L.Marker.extend({
	options: {
		iconsSet: {}
	},
	getIcon(scale) {
		switch(scale) {
			case 2:
				return this.options.iconsSet.icon_x2;
			case 4:
				return this.options.iconsSet.icon_x4;
			default:
				return this.options.iconsSet.icon_x1;
		}
	}
})

function pointToLayer(feature) {
	let marker = new CustomMarker(feature.geometry.coordinates, {
		icon: icons.find(a => a.type == feature.icontype).icon_x1, 
		iconsSet: icons.find(a => a.type == feature.icontype)
	});
	markers.push(marker);
	return markers[markers.length - 1];
};

var countryLayer = L.geoJSON(countries.features, {
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
				
		if (feature.properties.player.url) {
			player = "<div><div class=popup-label>" 
					+ "Владелец:</div><div class=popup-data><div class=\"black-link player\">"
					+ "<a href=https://doublebrick.ru/forums/memberlist.php?mode=viewprofile&u=" 
					+ feature.properties.player.url + ">  " 
					+ feature.properties.player.username + "</a></div></div></div>";
		} else {
			player = "<div><div class=popup-label>"
					+ "Владелец:</div><div class=\"popup-data player npc-player\">" 
					+ feature.properties.player.username + "</div></div>";
		}
		
		if (feature.properties.url != NO_TOPIC) {
			countryName = "<a href=https://doublebrick.ru/forums/viewtopic.php?t="   
				+ feature.properties.url + ">" + feature.properties.name + "</a>";
		} else {
			countryName = feature.properties.name;
		}
		
		let popup = "<div class=content><div class=content-head><img class=flag-popup alt=\"" 
				+ feature.properties.tag + "\"  src=" + FLAG_IMAGES_PATH 
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
		if (feature.properties.player.username) {
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
		let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" 
		+ feature.properties.name + "</div></div>";
		layer.bindPopup(popup, {
			autoClose: false
		});
	}
});

var waterLayer = L.geoJSON(waterPlaces.features, {
	pointToLayer: (feature) => pointToLayer(feature),
	onEachFeature: function (feature, layer) {
		let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" 
		+ feature.properties.name + "</div></div>";
		layer.bindPopup(popup, {
			autoClose: false
		});
	}
});

var archLayer = L.geoJSON(archPlaces.features, {
	pointToLayer: (feature) => pointToLayer(feature),
	onEachFeature: function (feature, layer) {
		let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" 
		+ feature.properties.name + "</div></div>";
		layer.bindPopup(popup, {
			autoClose: false
		});
	}
});

/*var continentMarkerLayer = L.geoJSON(continentMarkers.features, {
	pointToLayer: (feature) => pointToLayer(feature),
	onEachFeature: function (feature, layer) {
		let popup = "<div class=content><div class=\"content-head continent-head\"><img style='width: 25px' src='"
        + icons.find(a => a.type == feature.icontype).icon_x1.options.iconUrl
        + "'/><div class=\"black-link country-name\">" 
		+ feature.properties.name + "</div></div>";
        popup += "<div class='content-body continent-body'>"
        popup += "<div class='continent-info'>" + feature.properties.info;
        popup += "</div><div style='height: 9px; background-color: white;'></div></div>";
        layer.bindPopup(popup, {
            autoClose: false
        })
	}
});

continentMarkerLayer.addTo(continentLayer);*/

var needtoopen = null;

let animend = function(e){
	if (needtoopen) {
		needtoopen.layer.openPopup();
		needtoopen = null;
	}
}

//кластеризация маркеров работает, но надо доводить до ума
var countryLayerGroup = L.markerClusterGroup({
	showCoverageOnHover: false,
	maxClusterRadius: 80,
	disableClusteringAtZoom: -2,
	spiderfyOnMaxZoom: false,
	iconCreateFunction: function(cluster) {
		return new L.DivIcon({html: '<div><span>' + cluster.getChildCount() 
								+ '</span></div>', className: 'marker-cluster marker-cluster-capital', iconSize: new L.Point(40, 40)});
	},
}).on({
	animationend: animend
});

var placeLayerGroup = L.markerClusterGroup({
	showCoverageOnHover: false,
	maxClusterRadius: 80,
	disableClusteringAtZoom: -2,
	spiderfyOnMaxZoom: false,
	iconCreateFunction: function(cluster) {
		return new L.DivIcon({html: '<div><span>' + cluster.getChildCount() 
								+ '</span></div>', className: 'marker-cluster marker-cluster-place', iconSize: new L.Point(40, 40)});
	},
}).on({
	animationend: animend
});

var waterLayerGroup = L.markerClusterGroup({
	showCoverageOnHover: false,
	maxClusterRadius: 80,
	disableClusteringAtZoom: -2,
	spiderfyOnMaxZoom: false,
	iconCreateFunction: function(cluster) {
		return new L.DivIcon({html: '<div><span>' + cluster.getChildCount() 
								+ '</span></div>', className: 'marker-cluster marker-cluster-water', iconSize: new L.Point(40, 40)});
	},
}).on({
	animationend: animend
});

mapLayers.addLayer(countryLayerGroup.addLayer(countryLayer));
//mapLayers.addLayer(
	placeLayerGroup.addLayer(placeLayer)
//);
//mapLayers.addLayer(
	waterLayerGroup.addLayer(waterLayer)
//);

if (mapLayers.hasLayer(countryLayerGroup)) {
	$('#countryLayer').attr('checked','');
}
if (mapLayers.hasLayer(placeLayerGroup)) {
	$('#placeLayer').attr('checked','');
}
if (mapLayers.hasLayer(waterLayerGroup)) {
	$('#waterLayer').attr('checked','');
}
if (mapLayers.hasLayer(archLayer)) {
	$('#archLayer').attr('checked','');
}
if (mapLayers.hasLayer(continentLayer)) {
	$('#continentLayer').attr('checked','');
}

function openCountryDiplomacy(elem) {
	if (!$("#diplomacy").is(":visible")) {
		openDiplomacy();
	}	
	chooseCountry(elem);
}

$(".menu-layers input").click(function(event) {
	let layerCb = window[event.target.value];
	try {
		if (mapLayers.hasLayer(layerCb)) {
            mapLayers.removeLayer(layerCb);
			//map.removeLayer(layerCb);
		}
		else{
            mapLayers.addLayer(layerCb);
			//map.addLayer(layerCb);
		}
	} catch(e) {

	}
});