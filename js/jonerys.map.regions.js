var continentLayer = L.layerGroup({
    interactive: false
});

function onEachFeatureBound(feature, layer) {
    layer.on({
        mouseover: function (e) {
            let layer = e.target;
            layer.setStyle({
                weight: 4,
                color: "yellow",
                fillOpacity: CONTINENT_OPACITY_ACTIVE
            });
        },
        mouseout: function (e) {
            let layer = e.target;
            layer.setStyle(layer.feature.properties.style);
        },
        popupopen: function(e) {
            let layer = e.target;
            e.popup.setLatLng(layer.feature.properties.popupPosition)
        },
        click: function (e) {
            /*for (let marker of markers) {
                if (e.target.feature.properties.name == marker.feature.properties.name) {
                    marker.openPopup();
                }
            }*/
        }
    });
    layer.bindTooltip(feature.properties.name, {
        sticky: "true",
    });

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

function createContinent(continent) {
    let layer = L.geoJSON(continent, {
        style: continent.properties.style,
        onEachFeature: onEachFeatureBound
    });
    return layer;
}

function loadContinents() {
    for (let continent of continents.features) {
        let layer = createContinent(continent)
        layer.addTo(continentLayer);
    }
}

loadContinents();
