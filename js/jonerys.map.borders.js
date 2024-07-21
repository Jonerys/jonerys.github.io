var continents = [ContinentAnchor, ContinentSunrise, ContinentLilly, ContinentRebirth];
var continentLayer = L.layerGroup();


function onEachFeatureBound(feature, layer) {
    layer.on({
        mouseover: function (e) {
            var layer = e.target;
            layer.setStyle({
                weight: 4,
                color: "yellow",
                fillOpacity: 0.8
            });
        },
        mouseout: function (e) {
            var layer = e.target;
            layer.setStyle(layer.feature.properties.style);
        },
    });
    layer.bindTooltip(feature.properties.continent, {
        sticky: "true",
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