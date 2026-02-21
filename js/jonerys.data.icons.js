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

function createIconSet(fileName, baseSize, popupAnchor) {
	let baseSizeX, baseSizeY;
	if (Array.isArray(baseSize)) {
		baseSizeX = baseSize[0];
		baseSizeY = baseSize[1];
	} else {
		baseSizeX = baseSize;
		baseSizeY = baseSize;
	}
    const createIcon = (mult, scaleName) => new L.Icon({
        iconUrl: `${MARKER_ICONS_PATH}${'marker_' + fileName}${scaleName}.webp`,
        iconSize: [baseSizeX * mult, baseSizeY * mult],
        iconAnchor: [baseSizeX * mult / 2, baseSizeY * mult],
        popupAnchor: [0, popupAnchor * mult]
    });

    return {
        icon_x1: createIcon(SIZE_NORMAL, ''),
        icon_x2: createIcon(SIZE_BIG, '_x2'),
        icon_x4: createIcon(SIZE_LARGE, '_x4')
    };
}

icons.push({
	type: ICON_CAPITAL,
	...createIconSet(ICON_CAPITAL, iconCapitalSize, iconCapitalPA)
},
{
	type: ICON_PLACE,
	...createIconSet(ICON_PLACE, iconPlaceSize, iconPlacePA)
},
{
	type: ICON_SALTWATER,
	...createIconSet(ICON_SALTWATER, iconSaltWaterSize, iconSaltWaterPA)
},
{
	type: ICON_FRESHWATER,
	...createIconSet(ICON_FRESHWATER, iconFreshWaterSize, iconFreshWaterPA)
},
{
	type: ICON_BUILDING,
	...createIconSet(ICON_BUILDING, [iconBuildingSizeX, iconBuildingSizeY], iconBuildingPA)
},
{
	type: ICON_CONTINENT,
	...createIconSet(ICON_CONTINENT, [iconContinentSizeX, iconContinentSizeY], iconContinentPA)
});

