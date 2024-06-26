const mD = 1; 		// множитель по умолчанию
const mX2 = 2;		// множитель на зуме x2
const mX4 = 4;		// множитель на зуме x4
const dISize = 20;	// размер иконки по умолчанию
const dPA = -11;	// координата якоря подсказки по умолчанию

var markers = [];

var capIcon = L.Icon.extend({
	options: {
		iconUrl: 'markers/marker_capital.webp',
		iconSize:     [dISize, dISize],
		iconAnchor:   [dISize - 10 * mD, dISize],
		popupAnchor:  [0, dPA]
	},
	
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

var capitalIcon = new capIcon();

var capitalIcon2 = new capIcon({
	iconUrl: 'markers/marker_capital_40.webp',
	iconSize:	[dISize * mX2, dISize * mX2],
	iconAnchor:	[dISize, dISize * mX2],
	popupAnchor:[0, dPA * mX2]
});

var capitalIcon4 = new capIcon({
	iconUrl: 'markers/marker_capital_80.webp',
	iconSize:	[dISize * mX4, dISize * mX4],
	iconAnchor:	[dISize * mX2, dISize * mX4],
	popupAnchor:[0, dPA * mX4]
});

function updateMarkers(e) {
	var scale = Math.pow(2, e.target.getZoom()) / Math.pow(2, -2);
	switch (scale) {
		case 2:
			markers.forEach(function (item) {
				item.setIcon(capitalIcon2);
			});
			break;
		case 4:
			markers.forEach(function (item) {
				item.setIcon(capitalIcon4);
			});
			break;
		default:
			markers.forEach(function (item) {
				item.setIcon(capitalIcon);
			});
			break;
	}
	if (e.target._popup ) {
		e.target._popup._updateLayout();
		e.target._popup._updatePosition();
	}
}
