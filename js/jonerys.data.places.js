var places = {
	type: 'FeatureCollection',
    features: [
		{
			type: 'Feature',
			icontype: ICON_PLACE,
			geometry: {
				type: 'Point',
				coordinates: [748, 1779]
			},
			properties: {
				name: 'Остров Принца Карла'
			}
		},
	]
}

var waterPlaces = {
	type: 'FeatureCollection',
    features: [
		{
			type: 'Feature',
			icontype: ICON_SALTWATER,
			geometry: {
				type: 'Point',
				coordinates: [1936, 2352]
			},
			properties: {
				name: 'Гремландское море'
			}
		},
		{
			type: 'Feature',
			icontype: ICON_FRESHWATER,
			geometry: {
				type: 'Point',
				coordinates: [1575, 2139]
			},
			properties: {
				name: 'Озеро Роль-Гу'
			}
		},
	]
}

var archPlaces = {
	type: 'FeatureCollection',
	features: [
		/*{
			type: 'Feature',
			icontype: ICON_BUILDING,
			geometry: {
				type: 'Point',
				coordinates: [1933, 2428]
			},
			properties: {
				name: 'Здание'
			}
		},*/
	]
}