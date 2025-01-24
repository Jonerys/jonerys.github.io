var countriesSearch = new Fuse(countries.features, {
	threshold: 0.3,
	minMatchCharLength: 2,
	keys: [{
            name: 'properties.name',
            weight: 0.5
        },
        {
            name: 'properties.shortname',
            weight: 0.3
        },
        {
            name: 'properties.tag',
            weight: 0.1
        },
	]
});
var archSearch = new Fuse(archPlaces.features, {
	threshold: 0.3,
	minMatchCharLength: 2,
	keys: [{
        name: 'properties.name',
        weight: 0.5
	},
	]
}); 
var placesSearch = new Fuse(places.features, {
	threshold: 0.3,
	minMatchCharLength: 2,
	keys: [{
        name: 'properties.name',
        weight: 0.5
	},
	]
}); 
var waterSearch = new Fuse(waterPlaces.features, {
	threshold: 0.3,
	minMatchCharLength: 2,
	keys: [{
        name: 'properties.name',
        weight: 0.5
	},
	]
});
var continentSearch = new Fuse(continents.features, {
	threshold: 0.3,
	minMatchCharLength: 2,
	keys: [{
        name: 'properties.name',
        weight: 0.5
	},
	]
});

function memesearch(str) {
    let jsons = [];
    if (str.match(/сам(ая|ый)мощн(ая|ый)империя/)) {
        jsons = jsons.concat(countriesSearch.search('Ro'));
        return jsons;
    } else if (str.match(/^(вкраю(великого)?(вельденвальда)?)$/)) {
        jsons = jsons.concat(countriesSearch.search('We'));
        return jsons;
    } else if (str.match(/сосиск[аи]/)) {
        jsons = jsons.concat(countriesSearch.search('Rm'))
                    .concat(countriesSearch.search('Ku'))
                    .concat(countriesSearch.search('Md'));
        return jsons;
    } else if (str.match(/б[оа]*льшо*й/) || str.match(/мамка/))  {
        jsons = jsons.concat(countriesSearch.search('Mm'));
        return jsons;
    } else if (str.match(/кайзерр[ае]йх/)) {
        jsons = jsons.concat(countriesSearch.search('As'))
                    .concat(countriesSearch.search('Wr'))
                    .concat(countriesSearch.search('Ws'))
                    .concat(countriesSearch.search('Kf'))
                    .concat(countriesSearch.search('Mt'))
                    .concat(countriesSearch.search('Mn'))
                    .concat(countriesSearch.search('Sw'))
                    .concat(countriesSearch.search('Ar'));
        return jsons;
    } else if (str.match(/бархуда(р)*/)) {
        jsons = jsons.concat(countriesSearch.search('Bx'))
                    .concat(countriesSearch.search('We'))
                    .concat(countriesSearch.search('Gz'))
                    .concat(countriesSearch.search('Ku'))
                    .concat(countriesSearch.search('Cs'))
                    .concat(countriesSearch.search('Hm'))
                    .concat(countriesSearch.search('Es'));
        return jsons;
    } else {
        return null;
    }
}

const CustomSearch = L.Control.Search.extend({
    showAlert: function(a) {
        var b = this;
        $('input.search-input').css("border", "1.6px solid red");
        this.timerAlert = setTimeout(function() {
            b.hideAlert();
        }, 1100);
        return 0;
    },
    hideAlert: function() {
        $('input.search-input').css("border", "1.6px solid transparent");
        return 0;
    }
})

var search = new CustomSearch({
	layer: mapLayers,
	propertyName: 'name',
	position: 'topright',
	zoom: -2,
	autoType: false,
    marker: false,
	collapsed: false,
	minLength: 2,
	tooltipLimit: 10,
	autoResize: false,
	textErr: 'Не найдено',
	textCancel: 'Сбросить',			
	textPlaceholder: 'Поиск…      ',	
	filterData: function (text, records) {
        let jsons = [];
        let str = text.toLowerCase().replaceAll(' ', '');
        let memes = memesearch(str);
        if (memes) {
            jsons = jsons.concat(memes);
        } else {
            if (mapLayers.hasLayer(countryLayerGroup)) {
                jsons = jsons.concat(countriesSearch.search(text));
            }
            if (mapLayers.hasLayer(placeLayerGroup)) {
                jsons = jsons.concat(placesSearch.search(text));
            }
            if (mapLayers.hasLayer(waterLayerGroup)) {
                jsons = jsons.concat(waterSearch.search(text));
            }
            if (mapLayers.hasLayer(archLayer)) {
                jsons = jsons.concat(archSearch.search(text));
            }
            if (mapLayers.hasLayer(continentLayer)) {
                jsons = jsons.concat(continentSearch.search(text));
            }
        }
        this.resetLayer(mapLayers);
        let	ret = {};
        let key;
        for(var i in jsons) {
            key = jsons[i].item.properties.name;
            ret[key] = records[key];
        }
        return ret;
    },
    moveToLocation: function(a, b, c) {
        if (b == CONTINENT_ANCHOR || b == CONTINENT_LILLY || b == CONTINENT_REBIRTH || b == CONTINENT_SUNRISE) {
            for (let continent of continents.features) {
                if (b == continent.properties.name) {
                    a.lat = continent.properties.popupPosition.lat;
                    a.lng = continent.properties.popupPosition.lng;
                }
            }
        }
        this.options.zoom ? this._map.setView(a, this.options.zoom) : this._map.panTo(a)
    }
}).on('search:locationfound', function(e) {
    map.closePopup();
    e.layer.openPopup();
    needtoopen = e;
}).on('search:cancel', function(){
    $('.search-input').blur();
}).addTo(map);

$('.search-input').on('focus', function() {
    if (!$('.search-input').hasClass('widened')) {
        $('.search-input').addClass('widened');
    }
}).on('focusout', function() {
    if ($('.search-input').hasClass('widened') && $('.search-tooltip').is(":hidden")) {
        $('.search-input').removeClass('widened');
    }
})
