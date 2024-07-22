var continents = [ContinentAnchor, ContinentSunrise, ContinentLilly, ContinentRebirth];
var continentLayer = L.layerGroup();

function onEachFeatureBound(feature, layer) {
    layer.on({
        mouseover: function (e) {
            let layer = e.target;
            layer.setStyle({
                weight: 4,
                color: "yellow",
                fillOpacity: 0.7
            });
        },
        mouseout: function (e) {
            let layer = e.target;
            layer.setStyle(layer.feature.properties.style);
        },
        popupopen: function(e) {
            let layer = e.target;
            e.popup.setLatLng(layer.feature.properties.popupPosition)
        }
    });
    layer.bindTooltip(feature.properties.continent, {
        sticky: "true",
    });
    let popup = "<div class=content><div class=content-head></><div class=\"black-link country-name\">" 
		+ layer.feature.properties.continent + "</div></div>";
    popup += "<div class=continent-info>" + layer.feature.properties.info;
    popup += "</div>";
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
    for (let continent of continents) {
        let layer = createContinent(continent)
        layer.addTo(continentLayer);
    }
}

loadContinents();