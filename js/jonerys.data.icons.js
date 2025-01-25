const MARKER_ICONS_PATH = 'images/icons/';

const SIZE_NORMAL = 1; 		// множитель по умолчанию
const SIZE_BIG = 2;		// множитель на зуме x2
const SIZE_LARGE = 4;		// множитель на зуме x4

const ICON_CAPITAL = 'capital';
const iconCapitalSize = 20;	// размер иконки по умолчанию
const iconCapitalPA = -(iconCapitalSize / 2 + 1);	// координата якоря подсказки по умолчанию

const ICON_PLACE = 'place';
const iconPlaceSize = 24;	// размер иконки по умолчанию
const iconPlacePA = -((iconPlaceSize % 2 == 0) ? iconPlaceSize / 2 + 1 : (Math.ceil(iconPlaceSize / 2)));	// координата якоря подсказки по умолчанию

const ICON_SALTWATER = 'saltwater';
const iconSaltWaterSize = 20;	// размер иконки по умолчанию
const iconSaltWaterPA = -((iconSaltWaterSize % 2 == 0) ? iconSaltWaterSize / 2 + 1: Math.ceil(iconSaltWaterSize / 2));	// координата якоря подсказки по умолчанию

const ICON_FRESHWATER = 'freshwater';
const iconFreshWaterSize = 20;	// размер иконки по умолчанию
const iconFreshWaterPA = -((iconFreshWaterSize % 2 == 0) ? iconFreshWaterSize / 2 + 1: Math.ceil(iconFreshWaterSize / 2));	// координата якоря подсказки по умолчанию

const ICON_BUILDING = 'building';
const iconBuildingSizeX = 19;	// размер иконки по умолчанию
const iconBuildingSizeY = 20;	// размер иконки по умолчанию
const iconBuildingPA = -15;	// координата якоря подсказки по умолчанию

const ICON_CONTINENT = 'continent';
const iconContinentSizeX = 20;	// размер иконки по умолчанию
const iconContinentSizeY = 20;	// размер иконки по умолчанию
const iconContinentPA = -((iconContinentSizeX % 2 == 0) ? iconContinentSizeX / 2 + 1: Math.ceil(iconContinentSizeX / 2));	// координата якоря подсказки по умолчанию

const ICON_CONTINENT_Y = 'continent_yellow';
const iconContinentYSizeX = 20;	// размер иконки по умолчанию
const iconContinentYSizeY = 20;	// размер иконки по умолчанию
const iconContinentYPA = -((iconContinentYSizeX % 2 == 0) ? iconContinentYSizeX / 2 + 1: Math.ceil(iconContinentYSizeX / 2));	// координата якоря подсказки по умолчанию


var icons = [];

var startPathIcon = new L.Icon({
	iconUrl: MARKER_ICONS_PATH + 'marker_start.webp',
	iconSize: [20,20],
	iconAnchor: [0.5,20]
});

var finishPathIcon = new L.Icon({
	iconUrl: MARKER_ICONS_PATH + 'marker_finish.webp',
	iconSize: [20,20],
	iconAnchor: [0.5,20]
});

icons.push({
	type: ICON_CAPITAL,
	icon_x1: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_capital.webp',
		iconSize:     [iconCapitalSize, iconCapitalSize],
		iconAnchor:   [iconCapitalSize - iconCapitalSize * SIZE_NORMAL / 2, iconCapitalSize],
		popupAnchor:  [0, iconCapitalPA]
	}),
	icon_x2: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_capital_x2.webp',
		iconSize:	[iconCapitalSize * SIZE_BIG, iconCapitalSize * SIZE_BIG],
		iconAnchor:	[iconCapitalSize, iconCapitalSize * SIZE_BIG],
		popupAnchor:[0, iconCapitalPA * SIZE_BIG]
	}),
	icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_capital_x4.webp',
		iconSize:	[iconCapitalSize * SIZE_LARGE, iconCapitalSize * SIZE_LARGE],
		iconAnchor:	[iconCapitalSize * SIZE_BIG, iconCapitalSize * SIZE_LARGE],
		popupAnchor:[0, iconCapitalPA * SIZE_LARGE]
	})
});
icons.push({
	type: ICON_PLACE,
	icon_x1: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_place.webp',
		iconSize:     [iconPlaceSize, iconPlaceSize],
		iconAnchor:   [iconPlaceSize - iconPlaceSize * SIZE_NORMAL / 2 , iconPlaceSize],
		popupAnchor:  [0, iconPlacePA]
	}),
	icon_x2: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_place_x2.webp',
		iconSize:	[iconPlaceSize * SIZE_BIG, iconPlaceSize * SIZE_BIG],
		iconAnchor:	[iconPlaceSize * SIZE_NORMAL, iconPlaceSize * SIZE_BIG],
		popupAnchor:[0, iconPlacePA * SIZE_BIG]
	}),
	icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_place_x4.webp',
		iconSize:	[iconPlaceSize * SIZE_LARGE, iconPlaceSize * SIZE_LARGE],
		iconAnchor:	[iconPlaceSize * SIZE_BIG, iconPlaceSize * SIZE_LARGE],
		popupAnchor:[0, iconPlacePA * SIZE_LARGE]
	})
});
icons.push({
	type: ICON_SALTWATER,
	icon_x1: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_saltwater.webp',
		iconSize:     [iconSaltWaterSize, iconSaltWaterSize],
		iconAnchor:   [iconSaltWaterSize - iconSaltWaterSize * SIZE_NORMAL / 2, iconSaltWaterSize],
		popupAnchor:  [0, iconSaltWaterPA]
	}),
	icon_x2: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_saltwater_x2.webp',
		iconSize:	[iconSaltWaterSize * SIZE_BIG, iconSaltWaterSize * SIZE_BIG],
		iconAnchor:	[iconSaltWaterSize * SIZE_NORMAL, iconSaltWaterSize * SIZE_BIG],
		popupAnchor:[0, iconSaltWaterPA * SIZE_BIG]
	}),
	icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_saltwater_x4.webp',
		iconSize:	[iconSaltWaterSize * SIZE_LARGE, iconSaltWaterSize * SIZE_LARGE],
		iconAnchor:	[iconSaltWaterSize * SIZE_BIG, iconSaltWaterSize * SIZE_LARGE],
		popupAnchor:[0, iconSaltWaterPA * SIZE_LARGE]
	})
});
icons.push({
	type: ICON_FRESHWATER,
	icon_x1: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_freshwater.webp',
		iconSize:     [iconFreshWaterSize, iconFreshWaterSize],
		iconAnchor:   [iconFreshWaterSize - iconFreshWaterSize * SIZE_NORMAL / 2, iconFreshWaterSize],
		popupAnchor:  [0, iconFreshWaterPA]
	}),
	icon_x2: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_freshwater_x2.webp',
		iconSize:	[iconFreshWaterSize * SIZE_BIG, iconFreshWaterSize * SIZE_BIG],
		iconAnchor:	[iconFreshWaterSize * SIZE_NORMAL, iconFreshWaterSize * SIZE_BIG],
		popupAnchor:[0, iconFreshWaterPA * SIZE_BIG]
	}),
	icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_freshwater_x4.webp',
		iconSize:	[iconFreshWaterSize * SIZE_LARGE, iconFreshWaterSize * SIZE_LARGE],
		iconAnchor:	[iconFreshWaterSize * SIZE_BIG, iconFreshWaterSize * SIZE_LARGE],
		popupAnchor:[0, iconFreshWaterPA * SIZE_LARGE]
	})
});
icons.push({
	type: ICON_BUILDING,
	icon_x1: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_building.webp',
		iconSize:     [iconBuildingSizeX, iconBuildingSizeY],
		iconAnchor:   [iconBuildingSizeX - iconBuildingSizeX * SIZE_NORMAL / 2, iconBuildingSizeY],
		popupAnchor:  [0, iconBuildingPA]
	}),
	icon_x2: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_building.webp',
		iconSize:     [iconBuildingSizeX, iconBuildingSizeY],
		iconAnchor:   [iconBuildingSizeX - iconBuildingSizeX * SIZE_NORMAL / 2, iconBuildingSizeY],
		popupAnchor:  [0, iconBuildingPA]
	}),
	icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_building_x2.webp',
		iconSize:     [iconBuildingSizeX * SIZE_BIG, iconBuildingSizeY * SIZE_BIG],
		iconAnchor:   [iconBuildingSizeX * SIZE_NORMAL, iconBuildingSizeY * SIZE_BIG],
		popupAnchor:  [0, iconBuildingPA * SIZE_BIG]
	}),
	/*icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_building_x4.webp',
		iconSize:     [iconBuildingSizeX* SIZE_LARGE, iconBuildingSizeY* SIZE_LARGE],
		iconAnchor:   [iconBuildingSizeX * SIZE_BIG, iconBuildingSizeY * SIZE_LARGE],
		popupAnchor:  [0, iconBuildingPA * SIZE_LARGE]
	}),*/
});
icons.push({
	type: ICON_CONTINENT,
	icon_x1: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_continent.webp',
		iconSize:     [iconContinentSizeX * SIZE_BIG, iconContinentSizeY * SIZE_BIG],
		iconAnchor:   [iconContinentSizeX * SIZE_NORMAL, iconContinentSizeY * SIZE_BIG],
		popupAnchor:  [0, iconContinentPA * SIZE_BIG]
	}),
	icon_x2: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_continent.webp',
		iconSize:     [iconContinentSizeX * SIZE_BIG, iconContinentSizeY * SIZE_BIG],
		iconAnchor:   [iconContinentSizeX * SIZE_NORMAL, iconContinentSizeY * SIZE_BIG],
		popupAnchor:  [0, iconContinentPA * SIZE_BIG]
	}),
	icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_continent.webp',
		iconSize:     [iconContinentSizeX * SIZE_LARGE, iconContinentSizeY * SIZE_LARGE],
		iconAnchor:   [iconContinentSizeX * SIZE_BIG, iconContinentSizeY * SIZE_LARGE],
		popupAnchor:  [0, iconContinentPA * SIZE_LARGE]
	}),
});
/*icons.push({
	type: ICON_CONTINENT,
	icon_x1: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_continent_y.webp',
		iconSize:     [iconContinentYSizeX * 1.5, iconContinentYSizeY * 1.5],
		iconAnchor:   [iconContinentYSizeX * 1.5 / 2, iconContinentYSizeY * 1.5],
		popupAnchor:  [0, iconContinentYPA * 1.5]
	}),
	icon_x2: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_continent_y.webp',
		iconSize:     [iconContinentYSizeX * SIZE_BIG, iconContinentYSizeY * SIZE_BIG],
		iconAnchor:   [iconContinentYSizeX * SIZE_NORMAL, iconContinentYSizeY * SIZE_BIG],
		popupAnchor:  [0, iconContinentYPA * SIZE_BIG]
	}),
	icon_x4: new L.Icon({
		iconUrl: MARKER_ICONS_PATH + 'marker_continent_y.webp',
		iconSize:     [iconContinentYSizeX * SIZE_LARGE, iconContinentYSizeY * SIZE_LARGE],
		iconAnchor:   [iconContinentYSizeX * SIZE_BIG, iconContinentYSizeY * SIZE_LARGE],
		popupAnchor:  [0, iconContinentYPA * SIZE_LARGE]
	}),
});*/