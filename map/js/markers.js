var capIcon = L.Icon.extend({
	options: {
		iconUrl: 'markers/marker_capital.webp',
		iconSize:     [20, 20],
		iconAnchor:   [10, 20],
		popupAnchor:  [0, -11]
	},
	
});

var map_icons = {
	"type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2361, 2302]
        },
        "properties": {
            "name": "Румания",
			"flag": {
				"image": "images/country_flags/RSFPR_Flag.webp"
			}
        }
    },
	{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2069, 1722]
        },
        "properties": {
            "name": "Тиердаль",
			"flag": {
				"image": "images/country_flags/Thierdal_Flag.webp"
			}
        }
    },
	{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [919, 2138]
        },
        "properties": {
            "name": "Модравия",
			"flag": {
				"image": "images/country_flags/Modravia_Flag.webp",
			}
        }
    },
	{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2061, 2926]
        },
        "properties": {
            "name": "Цивилия",
			"flag": {
				"image": "images/country_flags/Civilia_Flag.webp"
			}
        }
    },
	{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [2200, 2285]
        },
        "properties": {
            "name": "Кюлинбург",
			"flag": {
				"image": "images/country_flags/Kulinburg_Flag.webp",
			}
        }
    }
	]
};