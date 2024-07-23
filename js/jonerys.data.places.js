var places = {
	type: 'FeatureCollection',
    features: [
		{
			type: 'Feature',
			icontype: ICON_PLACE,
			geometry: {
				type: 'Point',
				coordinates: [2029, 2466]
			},
			properties: {
				name: 'Манты-Хансийск'
			}
		},
	]
}

var waterPlaces = {
	type: 'FeatureCollection',
    features: [
		{
			type: 'Feature',
			icontype: ICON_WATER,
			geometry: {
				type: 'Point',
				coordinates: [2126, 2420]
			},
			properties: {
				name: 'Гремландское море'
			}
		},
	]
}

var archPlaces = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			icontype: ICON_BUILDING,
			geometry: {
				type: 'Point',
				coordinates: [1933, 2428]
			},
			properties: {
				name: 'Здание'
			}
		},
	]
}