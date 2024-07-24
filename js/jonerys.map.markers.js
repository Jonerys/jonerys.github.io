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
		let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" 
		+ feature.properties.continent + "</div></div>";
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

var continentMarkerLayer = L.geoJSON(continentMarkers.features, {
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


countryLayer.addTo(mapLayers);

if (mapLayers.hasLayer(countryLayer)) {
	$('#countryLayer').attr('checked','');
}
if (mapLayers.hasLayer(placeLayer)) {
	$('#placeLayer').attr('checked','');
}
if (mapLayers.hasLayer(waterPlaces)) {
	$('#waterPlaces').attr('checked','');
}
if (mapLayers.hasLayer(archLayer)) {
	$('#archLayer').attr('checked','');
}
if (mapLayers.hasLayer(continentLayer)) {
	$('#continentLayer').attr('checked','');
}

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

continentMarkerLayer.addTo(continentLayer);

$(".menu-layers input").click(function( event ) {
	let layerCb = window[event.target.value];
	try {
		if (map.hasLayer(layerCb)) {
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