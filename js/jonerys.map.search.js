var countriesSearch = new Fuse(data.features, {
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
var buildingSearch = new Fuse(buildingPlaces.features, {
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

const CustomSearch = L.Control.Search.extend({
    showAlert: function(a) {
        var b = this;
        $('input.search-input').css("border", "1.6px solid red");
        this.timerAlert = setTimeout(function() {
            b.hideAlert();
        }, 1000);
        return 0;
    },
    hideAlert: function() {
        $('input.search-input').css("border", "0");
        return 0;
    }
})

var search = new CustomSearch({
	layer: mapLayers,
	propertyName: 'name',
	position: 'topright',
	zoom: -2,
	autoType: false,
	collapsed: false,
	minLength: 2,
	tooltipLimit: 10,
	autoResize: false,
	textErr: 'Не найдено',
	textCancel: 'Сбросить',			
	textPlaceholder: 'Поиск…      ',	
	filterData: function (text, records) {
        let jsons = [];
        if ((text.toLowerCase().replaceAll(' ', '') == 'самыймощныйимперия') || (text.toLowerCase().replaceAll(' ', '') == 'самаямощнаяимперия')) {
            jsons = jsons.concat(countriesSearch.search('Ro'));
        } else if ((text.toLowerCase().replaceAll(' ', '') == 'вкраю') || (text.toLowerCase().replaceAll(' ', '') == 'вкраювеликого')) {
            jsons = jsons.concat(countriesSearch.search('We'));
        } else if ((text.toLowerCase().replaceAll(' ', '') == 'сосиска')) {
            jsons = jsons.concat(countriesSearch.search('Rm'));
            jsons = jsons.concat(countriesSearch.search('Ku'));
            jsons = jsons.concat(countriesSearch.search('Md'));
        } else {
            if (map.hasLayer(countryLayer)) {
                jsons = jsons.concat(countriesSearch.search(text));
            }
            if (map.hasLayer(placeLayer)) {
                jsons = jsons.concat(placesSearch.search(text));
            }
            if (map.hasLayer(waterLayer)) {
                jsons = jsons.concat(waterSearch.search(text));
            }
            if (map.hasLayer(buildingLayer)) {
                jsons = jsons.concat(buildingSearch.search(text));
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
    }
}).on('search:locationfound', function(e) {
    map.closePopup();
	e.layer.openPopup();
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
