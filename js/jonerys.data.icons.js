const SIZE_NORMAL = 1; 		// множитель по умолчанию
const SIZE_BIG = 2;		// множитель на зуме x2
const SIZE_LARGE = 4;		// множитель на зуме x4

const ICON_CAPITAL = 'capital';
const iconCapitalSize = 20;	// размер иконки по умолчанию
const iconCapitalPA = -11;	// координата якоря подсказки по умолчанию

const ICON_PLACE = 'place';
const ICON_PLACE2 = 'place2';
const iconPlaceSize = 20;	// размер иконки по умолчанию
const iconPlacePA = -11;	// координата якоря подсказки по умолчанию

const ICON_WATER = 'water';
const iconWaterSize = 20;	// размер иконки по умолчанию
const iconWaterPA = -11;	// координата якоря подсказки по умолчанию

const ICON_BUILDING = 'building';
const iconBuildingSizeX = 19;	// размер иконки по умолчанию
const iconBuildingSizeY = 20;	// размер иконки по умолчанию
const iconBuildingPA = -15;	// координата якоря подсказки по умолчанию

const ICON_CONTINENT = 'continent';
const iconContinentSizeX = 20;	// размер иконки по умолчанию
const iconContinentSizeY = 20;	// размер иконки по умолчанию
const iconContinentPA = -11;	// координата якоря подсказки по умолчанию

const ICON_CONTINENT_Y = 'continent_yellow';
const iconContinentYSizeX = 20;	// размер иконки по умолчанию
const iconContinentYSizeY = 20;	// размер иконки по умолчанию
const iconContinentYPA = -11;	// координата якоря подсказки по умолчанию


var icons = [];

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
	type: ICON_PLACE2,
	icon_x1: new CustomIcon({
		iconUrl: 'markers/marker_place2.webp',
		iconSize:     [iconPlaceSize, iconPlaceSize],
		iconAnchor:   [iconPlaceSize - iconPlaceSize * SIZE_NORMAL / 2 , iconPlaceSize],
		popupAnchor:  [0, iconPlacePA]
	}),
	icon_x2: new CustomIcon({
		iconUrl: 'markers/marker_place2_x2.webp',
		iconSize:	[iconPlaceSize * SIZE_BIG, iconPlaceSize * SIZE_BIG],
		iconAnchor:	[iconPlaceSize * SIZE_NORMAL, iconPlaceSize * SIZE_BIG],
		popupAnchor:[0, iconPlacePA * SIZE_BIG]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_place2_x4.webp',
		iconSize:	[iconPlaceSize * SIZE_LARGE, iconPlaceSize * SIZE_LARGE],
		iconAnchor:	[iconPlaceSize * SIZE_BIG, iconPlaceSize * SIZE_LARGE],
		popupAnchor:[0, iconPlacePA * SIZE_LARGE]
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
		iconUrl: 'markers/marker_building.webp',
		iconSize:     [iconBuildingSizeX, iconBuildingSizeY],
		iconAnchor:   [iconBuildingSizeX - iconBuildingSizeX * SIZE_NORMAL / 2, iconBuildingSizeY],
		popupAnchor:  [0, iconBuildingPA]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_building_x2.webp',
		iconSize:     [iconBuildingSizeX * SIZE_BIG, iconBuildingSizeY * SIZE_BIG],
		iconAnchor:   [iconBuildingSizeX * SIZE_NORMAL, iconBuildingSizeY * SIZE_BIG],
		popupAnchor:  [0, iconBuildingPA * SIZE_BIG]
	}),
	/*icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_building_x4.webp',
		iconSize:     [iconBuildingSizeX* SIZE_LARGE, iconBuildingSizeY* SIZE_LARGE],
		iconAnchor:   [iconBuildingSizeX * SIZE_BIG, iconBuildingSizeY * SIZE_LARGE],
		popupAnchor:  [0, iconBuildingPA * SIZE_LARGE]
	}),*/
});
icons.push({
	type: ICON_CONTINENT,
	icon_x1: new CustomIcon({
		iconUrl: 'markers/marker_continent.webp',
		iconSize:     [iconContinentSizeX * SIZE_BIG, iconContinentSizeY * SIZE_BIG],
		iconAnchor:   [iconContinentSizeX * SIZE_NORMAL, iconContinentSizeY * SIZE_BIG],
		popupAnchor:  [0, iconContinentPA * SIZE_BIG]
	}),
	icon_x2: new CustomIcon({
		iconUrl: 'markers/marker_continent.webp',
		iconSize:     [iconContinentSizeX * SIZE_BIG, iconContinentSizeY * SIZE_BIG],
		iconAnchor:   [iconContinentSizeX * SIZE_NORMAL, iconContinentSizeY * SIZE_BIG],
		popupAnchor:  [0, iconContinentPA * SIZE_BIG]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_continent.webp',
		iconSize:     [iconContinentSizeX * SIZE_LARGE, iconContinentSizeY * SIZE_LARGE],
		iconAnchor:   [iconContinentSizeX * SIZE_BIG, iconContinentSizeY * SIZE_LARGE],
		popupAnchor:  [0, iconContinentPA * SIZE_LARGE]
	}),
});
/*icons.push({
	type: ICON_CONTINENT,
	icon_x1: new CustomIcon({
		iconUrl: 'markers/marker_continent_y.webp',
		iconSize:     [iconContinentYSizeX * 1.5, iconContinentYSizeY * 1.5],
		iconAnchor:   [iconContinentYSizeX * 1.5 / 2, iconContinentYSizeY * 1.5],
		popupAnchor:  [0, iconContinentYPA * 1.5]
	}),
	icon_x2: new CustomIcon({
		iconUrl: 'markers/marker_continent_y.webp',
		iconSize:     [iconContinentYSizeX * SIZE_BIG, iconContinentYSizeY * SIZE_BIG],
		iconAnchor:   [iconContinentYSizeX * SIZE_NORMAL, iconContinentYSizeY * SIZE_BIG],
		popupAnchor:  [0, iconContinentYPA * SIZE_BIG]
	}),
	icon_x4: new CustomIcon({
		iconUrl: 'markers/marker_continent_y.webp',
		iconSize:     [iconContinentYSizeX * SIZE_LARGE, iconContinentYSizeY * SIZE_LARGE],
		iconAnchor:   [iconContinentYSizeX * SIZE_BIG, iconContinentYSizeY * SIZE_LARGE],
		popupAnchor:  [0, iconContinentYPA * SIZE_LARGE]
	}),
});*/