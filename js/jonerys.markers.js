const SIZE_NORMAL = 1; 		// множитель по умолчанию
const SIZE_BIG = 2;		// множитель на зуме x2
const SIZE_LARGE = 4;		// множитель на зуме x4

const ICON_CAPITAL = 'capital';
const iconCapitalSize = 20;	// размер иконки по умолчанию
const iconCapitalPA = -11;	// координата якоря подсказки по умолчанию

const ICON_PLACE = 'place';
const iconPlaceSize = 20;	// размер иконки по умолчанию
const iconPlacePA = -11;	// координата якоря подсказки по умолчанию

const ICON_WATER = 'water';
const iconWaterSize = 20;	// размер иконки по умолчанию
const iconWaterPA = -11;	// координата якоря подсказки по умолчанию

const ICON_BUILDING = 'building';
const iconBuildingSizeX = 19;	// размер иконки по умолчанию
const iconBuildingSizeY = 20;	// размер иконки по умолчанию
const iconBuildingPA = -15;	// координата якоря подсказки по умолчанию

var markers = [];
var icons = [];

var CustomMarker = L.Marker.extend({
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

var DebugIcon = L.Icon.extend({
	options: {
		iconUrl: 'markers/marker_debug.webp',
		iconSize:     [10, 10],
		iconAnchor:   [5, 5],
		popupAnchor:  [0, -5]
	}
});

var debi = new DebugIcon();

var CustomIcon = L.Icon.extend({
	options: {
		iconUrl: 'markers/marker_capital.webp',
		iconSize:     [iconCapitalSize, iconCapitalSize],
		iconAnchor:   [iconCapitalSize - iconCapitalSize / 2 * SIZE_NORMAL, iconCapitalSize],
		popupAnchor:  [0, iconCapitalPA]
	}
});

var startPathIcon = new L.Icon({
	iconUrl: 'markers/marker_start.webp',
	iconSize: [20,20],
	iconAnchor: [0.5,20]
});

var finishPathIcon = new L.Icon({
	iconUrl: 'markers/marker_finish.webp',
	iconSize: [20,20],
	iconAnchor: [0.5,20]
});

icons.push({
	type: ICON_CAPITAL,
	icon_x1: new CustomIcon({
		iconUrl: 'markers/marker_capital.webp',
		iconSize:     [iconCapitalSize, iconCapitalSize],
		iconAnchor:   [iconCapitalSize - iconCapitalSize * SIZE_NORMAL / 2, iconCapitalSize],
		popupAnchor:  [0, iconCapitalPA]
	}),
	icon_x2: new CustomIcon({
		iconUrl: 'markers/marker_capital_x2.webp',
		iconSize:	[iconCapitalSize * SIZE_BIG, iconCapitalSize * SIZE_BIG],
		iconAnchor:	[iconCapitalSize, iconCapitalSize * SIZE_BIG],
		popupAnchor:[0, iconCapitalPA * SIZE_BIG]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_capital_x4.webp',
		iconSize:	[iconCapitalSize * SIZE_LARGE, iconCapitalSize * SIZE_LARGE],
		iconAnchor:	[iconCapitalSize * SIZE_BIG, iconCapitalSize * SIZE_LARGE],
		popupAnchor:[0, iconCapitalPA * SIZE_LARGE]
	})
});
icons.push({
	type: ICON_PLACE,
	icon_x1: new CustomIcon({
		iconUrl: 'markers/marker_place.webp',
		iconSize:     [iconPlaceSize, iconPlaceSize],
		iconAnchor:   [iconPlaceSize - iconPlaceSize * SIZE_NORMAL / 2 , iconPlaceSize],
		popupAnchor:  [0, iconPlacePA]
	}),
	icon_x2: new CustomIcon({
		iconUrl: 'markers/marker_place_x2.webp',
		iconSize:	[iconPlaceSize * SIZE_BIG, iconPlaceSize * SIZE_BIG],
		iconAnchor:	[iconPlaceSize * SIZE_NORMAL, iconPlaceSize * SIZE_BIG],
		popupAnchor:[0, iconPlacePA * SIZE_BIG]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_place_x4.webp',
		iconSize:	[iconPlaceSize * SIZE_LARGE, iconPlaceSize * SIZE_LARGE],
		iconAnchor:	[iconPlaceSize * SIZE_BIG, iconPlaceSize * SIZE_LARGE],
		popupAnchor:[0, iconPlacePA * SIZE_LARGE]
	})
});
icons.push({
	type: ICON_WATER,
	icon_x1: new CustomIcon({
		iconUrl: 'markers/marker_water.webp',
		iconSize:     [iconWaterSize, iconWaterSize],
		iconAnchor:   [iconWaterSize - iconWaterSize * SIZE_NORMAL / 2, iconWaterSize],
		popupAnchor:  [0, iconWaterPA]
	}),
	icon_x2: new CustomIcon({
		iconUrl: 'markers/marker_water_x2.webp',
		iconSize:	[iconWaterSize * SIZE_BIG, iconWaterSize * SIZE_BIG],
		iconAnchor:	[iconWaterSize * SIZE_NORMAL, iconWaterSize * SIZE_BIG],
		popupAnchor:[0, iconWaterPA * SIZE_BIG]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_water_x4.webp',
		iconSize:	[iconWaterSize * SIZE_LARGE, iconWaterSize * SIZE_LARGE],
		iconAnchor:	[iconWaterSize * SIZE_BIG, iconWaterSize * SIZE_LARGE],
		popupAnchor:[0, iconWaterPA * SIZE_LARGE]
	})
});
icons.push({
	type: ICON_BUILDING,
	icon_x1: new CustomIcon({
		iconUrl: 'markers/marker_building.webp',
		iconSize:     [iconBuildingSizeX, iconBuildingSizeY],
		iconAnchor:   [iconBuildingSizeX - iconBuildingSizeX * SIZE_NORMAL / 2, iconBuildingSizeY],
		popupAnchor:  [0, iconBuildingPA]
	}),
	icon_x2: new CustomIcon({
		iconUrl: 'markers/marker_building_x2.webp',
		iconSize:     [iconBuildingSizeX * SIZE_BIG, iconBuildingSizeY * SIZE_BIG],
		iconAnchor:   [iconBuildingSizeX * SIZE_NORMAL, iconBuildingSizeY * SIZE_BIG],
		popupAnchor:  [0, iconBuildingPA * SIZE_BIG]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_building_x4.webp',
		iconSize:     [iconBuildingSizeX* SIZE_LARGE, iconBuildingSizeY* SIZE_LARGE],
		iconAnchor:   [iconBuildingSizeX * SIZE_BIG, iconBuildingSizeY * SIZE_LARGE],
		popupAnchor:  [0, iconBuildingPA * SIZE_LARGE]
	}),
});