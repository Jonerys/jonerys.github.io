const DEVELOPER_MODE = false;
const HISTORY_ACT_DELETE = 'delete';
const HISTORY_ACT_CREATE = 'create';
const buttonRemove = "<button class='remove'>del</button>";
const buttonLog = "<button class='log'>log</button>";

var PLACE_POINTS = false;
var DRAW_POINTS = false;

var markerID = 0;

var activeLayer;
var remHistory = [];
var continentAnchorLayer;
var startCoords = [], startPoints = [], pointsToCreate = [], startPointsFilled = false;
var userMarkerGroups = [];
var userPointsLayer = L.layerGroup().addTo(map, true);
var boundPointsLayer = L.layerGroup().addTo(map, true);
var prevcoords;
var prevcursor;
var continentLayers = [];
var continents = [ContinentAnchor, ContinentSunrise];

map.on('click', function(e) {
	//console.log('[' + Math.round(e.latlng.lat) + ', ' + Math.round(e.latlng.lng) + '],');
	//console.log('[' + Math.round(e.latlng.lng) + ', ' + Math.round(e.latlng.lat) + '],');
});

//1. Удалить из массива маркеров
//2. Удалить из набора координат
//3. Перезагрузить слой точек
//4. Перезагрузить слой границ

var UserCustomMarker = L.Marker.extend({
	options: {
		mID: -1,
        deletable: false
	},
    getCoordinates() {
        return {
            lat: this._latlng.lat,
            lng: this._latlng.lng
        };
    },
    getID() {
        return this.options.mID;
    },
    isDeletable() {
        return this.options.deletable;
    }
})

function styleBound(feature) {
    return feature.properties.style;
}

function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 4,
        color: "yellow",
        fillOpacity: 0.6
    });
}

function resetHighlight(e) {
    var layer = e.target;
    layer.setStyle(layer.feature.properties.style);
}

function onEachFeatureBound(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
    layer.bindTooltip(feature.properties.continent, {
        sticky: "true",
    })
}

function contNum(continent) {
    switch (continent) {
        case CONTINENT_ANCHOR:
            return 0;
        case CONTINENT_SUNRISE:
            return 1;
        case CONTINENT_LILLY:
            return 2;
        case CONTINENT_REBIRTH_NORTH:
            return 3;
        case CONTINENT_REBIRTH_EAST:
            return 4;
        case CONTINENT_REBIRTH_SOUTH:
            return 5;
        case CONTINENT_REBIRTH_WEST:
            return 6;
    }
}

//////////////////////////////////////////////

function findMarkerByID(marker, arr) {
    for (let elem of arr) {
        if (elem.getID() == marker.getID()) {
            return elem;
        }
    }
}

function refreshBounds(layer, data) {
	map.removeLayer(layer);
	return L.geoJSON(data, {
        style: styleBound,
        onEachFeature: onEachFeatureBound
    });
}

function refreshBounds() {
    for (let layer of continentLayers) {
        console.log(layer)
    }
}

function changeCoords(newcoords) {
    for (let coordsl1 of ContinentAnchor.geometry.coordinates) {
        for (let coordsl2 of coordsl1) {
            for (let coordsl3 of coordsl2) {
                if (coordsl3[0] == prevcoords.lat && coordsl3[1] == prevcoords.lng) {
                    coordsl3[0] = newcoords.lat;
                    coordsl3[1] = newcoords.lng;
                }
            }
        }
    }
}

function createMarker(point, canbedeleted, draggable) {
    let temp = new UserCustomMarker(point, {
        icon: debi,
        draggable: draggable,
        mID: markerID++,
        deletable: canbedeleted
    }).on({
        dragstart: function(e) {
            prevcoords = e.target.getCoordinates();
        },
        dragend: function(e) {
            let newcoordp = e.target.getCoordinates();
            e.target.setLatLng({lat: newcoordp.lat, lng: newcoordp.lng});
            if (e.target.isDeletable()) {
                e.target.setPopupContent('[' + newcoordp.lat.toFixed(4) + ',<br>' + newcoordp.lng.toFixed(4) + ']<br>' + buttonRemove + buttonLog);
            } 
            else {
                e.target.setPopupContent('[' + newcoordp.lat.toFixed(4) + ',<br>' + newcoordp.lng.toFixed(4) + ']<br>' + buttonLog);
            }
            //changeCoords(newcoordp);
            //refreshBounds();
            //activeLayer = refreshBounds(activeLayer);
            //parentLayer = refreshBounds(parentLayer, ContinentAnchor);
            //parentLayer.addTo(map);
        },
        popupopen: function(){
            const marker = this;
            const btn = document.querySelector(".remove");
            const btn2 = document.querySelector(".log");
            btn2.addEventListener("click", function () {
                let coords = marker.getCoordinates();
                console.log('[' + coords.lat.toFixed(4) + ',<br>' + coords.lng.toFixed(4) + '],')
            });
            if (marker.isDeletable()) {
                btn.addEventListener("click", function () {
                    remHistory.push({
                        type: HISTORY_ACT_DELETE,
                        object: marker
                    });
                    if (activeLayer.hasLayer(marker)) {
                        activeLayer.removeLayer(marker);
                    }
                    /*userPointsLayer.removeLayer(marker);
                    boundPointsLayer.removeLayer(marker);
                    for (layer of userMarkerGroups) {
                        layer.removeLayer(marker);
                    }*/
                });
            }
        }
    });
    if (temp.isDeletable()) {
        temp.bindPopup(L.popup({minWidth:100})
        .setContent('[' + point[0].toFixed(4) + ',<br>' + point[1].toFixed(4) + ']<br>' + buttonRemove + buttonLog));
    } else {
        temp.bindPopup(L.popup({minWidth:100})
        .setContent('[' + point[0].toFixed(4) + ',<br>' + point[1].toFixed(4) + ']<br>' + buttonLog));
    }
    return temp;
}

function spawnContinentPoints(layer, continent) {
    if (DRAW_POINTS) {
        pointsToCreate.length = 0;
        for (let coordsl1 of continent.geometry.coordinates) {
            for (let coordsl2 of coordsl1) {
                for (let coordsl3 of coordsl2) {
                    pointsToCreate.push(coordsl3);
                }
            }
        }
        for (let point of pointsToCreate) {
            let temp = createMarker(point, false, false);
            temp.addTo(layer);
        }
    }
    return layer;
}

function spawnArea(continent) {
    let layer = L.geoJSON(continent, {
        style: styleBound,
        onEachFeature: onEachFeatureBound
    }).on({
        click: function(e) {
            //changeActiveLayer(e.target);
        }
    });
    let temp = jQuery.extend(true, [], continent.geometry.coordinates);
    startCoords.push(temp);
    return layer;
}

function setAreas() {
    DRAW_POINTS = !DRAW_POINTS;
    for (let continent of continents) {
        continentLayers.push({
            boundLayer: spawnArea(continent),
            markerLayer: spawnContinentPoints(new L.layerGroup(), continent),
            startCoordinates: jQuery.extend(true, [], continent.geometry.coordinates)
        });
        continentLayers[contNum(continent.properties.continent)].boundLayer.addTo(map);
    }
    DRAW_POINTS = !DRAW_POINTS;
    activeLayer = userPointsLayer;
}

function addMarker(e) {
	if (PLACE_POINTS && DEVELOPER_MODE && activeLayer == userPointsLayer) {
        let coords = [e.latlng.lat, e.latlng.lng];
        let temp = createMarker(coords, true, true);
        temp.addTo(activeLayer);
        remHistory.push({
            type: HISTORY_ACT_CREATE,
            object: temp
        });
	}
}

map.on("click", function(e) {
	addMarker(e);
}); 

function resetPoints() {
    for (let continent of continentLayers) {
        if (DRAW_POINTS) {
            continent.markerLayer.addTo(map);
        } else {
            map.removeLayer(continent.markerLayer);
        }
    }
}

function printPoints() {
    if (DRAW_POINTS) {
        console.log('================#Маркеры границ#================');
        $.each(boundPointsLayer._layers, function (ml) {
            let temp = boundPointsLayer._layers[ml]._latlng;
            console.log('[' + temp.lat + ', ' + temp.lng +'],');
        });
    }
    console.log('======#Маркеры, добавленные пользователем#======');
    $.each(userPointsLayer._layers, function (ml) {
        let temp = userPointsLayer._layers[ml]._latlng;
        console.log('[' + temp.lat + ', ' + temp.lng +'],');
    });
    if (userMarkerGroups.length > 0) {
        console.log('=======#Группы пользовательских маркеров#=======');
        let groupNumber = 1;
        for (group of userMarkerGroups) {
            console.log('=====#Группа пользовательских маркеров ' + groupNumber++ + ' #=====');
            $.each(group._layers, function (ml) {
                let temp = group._layers[ml]._latlng;
                console.log('[' + temp.lat + ', ' + temp.lng +'],');
            });
        }
    }
}

function savePointsToGroup() {
    let newLayer = L.layerGroup();
    $.each(userPointsLayer._layers, function (ml) {
        userPointsLayer._layers[ml].addTo(newLayer);
        userPointsLayer.removeLayer(userPointsLayer._layers[ml]);
    });
    userMarkerGroups.push(newLayer);
    newLayer.addTo(map);
}

$(document).on("keydown", function(e){
    if (e.keyCode == 90 && e.ctrlKey) {
        if (remHistory.length > 0) {
            let temp = remHistory.pop();
            if (temp.type == HISTORY_ACT_CREATE) {
                activeLayer.removeLayer(temp.object);
            }
            if (temp.type == HISTORY_ACT_DELETE) {
                temp.object.addTo(activeLayer);
            }
        }
    }
})

if (DEVELOPER_MODE) setAreas();

var resetAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {
            html: '🔄',
            tooltip: 'Вернуть в исходное состояние'
        }
    },
    addHooks: function () {
        //resetAll();
    }
});
var showPointsAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {
            html: '👁',
            tooltip: 'Показать/скрыть точки границ'
        }
    },
    addHooks: function () {
        DRAW_POINTS = !DRAW_POINTS;
        resetPoints();
    }
});
var placePointsAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {
            html: '📍',
            tooltip: 'Включить постановку точек'
        }
    },
    addHooks: function () {
        $(this._link).toggleClass('activebutton');
        PLACE_POINTS = !PLACE_POINTS;
        if (PLACE_POINTS) {
            prevcursor = map._container.style.cursor
		    map._container.style.cursor = 'crosshair';
        } else {
            map._container.style.cursor = prevcursor;
        }
    }
});
var printPointsAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {
            html: '🖨',
            tooltip: 'Вывести список точек в консоль'
        }
    },
    addHooks: function () {
        printPoints();
    }
});
var saveToGroupAction = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {
            html: '💾',
            tooltip: 'Сохранить текущий набор точек в отдельную группу'
        }
    },
    addHooks: function () {
        savePointsToGroup();
    }
});
var returnToUserLayer = L.Toolbar2.Action.extend({
    options: {
        toolbarIcon: {
            html: '↩️',
            tooltip: 'Вернуться к пользовательскому слою'
        }
    },
    addHooks: function () {
        //changeActiveLayer(userPointsLayer);
    }
});

var toolbar = new L.Toolbar2.Control({
    position: 'topleft',
    actions: [
        //resetAction,
        showPointsAction,
        placePointsAction,
        printPointsAction,
        saveToGroupAction//,
        //returnToUserLayer
    ]
});
if (DEVELOPER_MODE) toolbar.addTo(map);