function contNum(continent) {
    switch (continent) {
        case CONTINENT_ANCHOR:
            return 0;
        case CONTINENT_SUNRISE:
            return 1;
        case CONTINENT_LILLY:
            return 2;
        case CONTINENT_REBIRTH:
            return 3;
        case CONTINENT_REBIRTH_NORTH:
            return 4;
        case CONTINENT_REBIRTH_EAST:
            return 5;
        case CONTINENT_REBIRTH_SOUTH:
            return 6;
        case CONTINENT_REBIRTH_WEST:
            return 7;  
    }
}

var countries = {
	type: 'FeatureCollection',
    features: [
	{
		type: 'Feature',
		icontype: ICON_CAPITAL,
		geometry: {
			type: 'Point',
			coordinates: [1568, 1727]
		},
		properties: {
			id: 1,
			name: 'Королевство Авемор',
			shortname: 'Авемор',
			tag: 'Av',
			continent: CONTINENT_REBIRTH_WEST,
			url: '21530',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
		}
	},
	{
		type: 'Feature',
		icontype: ICON_CAPITAL,
		geometry: {
			type: 'Point',
			coordinates: [1695, 2420]
		},
		properties: {
			id: 2,
			name: 'Королевство Аглардор',
			shortname: 'Аглардор',
			tag: 'Ag',
			continent: CONTINENT_REBIRTH_EAST,
			url: '27385',
			capital: 'Аглар',
			leader: 'Маргол',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Aglardor.webp'
			}
		}
	},
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2047, 2355]
        },
        properties: {
			id: 3,
            name: 'Королевство Айзэн',
            shortname: 'Айзэн',
			tag: 'Az',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '31402',
			capital: 'Хельтис',
			leader: 'де В\'альтер Мудрый Кёнинг I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Eisen.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2016, 1299]
        },
        properties: {
			id: 4,
            name: 'Каганат Ай-Суру',
            shortname: 'Ай-Суру',
			tag: 'Sr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '37224',
			capital: 'Айтернак',
			leader: 'Оспаривается',
			government: 'Каганат',
			status: STATUS_MINOR,
			playerName: 'Имперский командор',
			playerUrl: '10808',
			flag: {
				image: 'Flag_of_AiSuru.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1913, 1990]
        },
        properties: {
			id: 5,
            name: 'Халифат Ай\'Шераф',
            shortname: 'Ай\'Шераф',
			tag: 'Is',
			continent: CONTINENT_REBIRTH_EAST,
			url: '47282',
			capital: 'Кердишахаль',
			leader: 'Абдула-аль-Алмас',
			government: 'Халифат',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1160, 3531]
        },
        properties: {
			id: 6,
            name: 'Герцогство Акрония',
            shortname: 'Акрония',
			tag: 'Ak',
			continent: CONTINENT_LILLY,
			url: '49527',
			capital: 'Лиденбург',
			leader: 'Фредерик Акронский (Хогландский)',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1569, 2439]
        },
        properties: {
			id: 7,
            name: 'Халифат Алеман',
            shortname: 'Алеман',
			tag: 'Al',
			continent: CONTINENT_REBIRTH_EAST,
			url: '30263',
			capital: 'Аррани',
			leader: 'Абдулла ибн Рашит',
			government: 'Халифат',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Aleman.webp'
			}
        }
    },
	{
		type: 'Feature',
		icontype: ICON_CAPITAL,
		geometry: {
			type: 'Point',
			coordinates: [1149, 564]
		},
		properties: {
			id: 8,
			name: 'Королевство Аракад',
			shortname: 'Аракад',
			tag: 'Aa',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '21175',
			capital: 'Фариа',
			leader: 'Робар I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
		}
	},
	{
		type: 'Feature',
		icontype: ICON_CAPITAL,
		geometry: {
			type: 'Point',
			coordinates: [1388, 1676]
		},
		properties: {
			id: 9,
			name: 'Аспийская империя',
			shortname: 'Аспия',
			tag: 'As',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '17818',
			capital: 'Кёнигштадт',
			leader: 'Фридрих Вильгельм I Адлербург',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_GREAT,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Aspia.webp'
			}
		}
	},
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2025, 1873]
        },
        properties: {
			id: 10,
            name: 'Эльфийское королевство Атель Лорен',
            shortname: 'Атель Лорен',
			tag: 'Ao',
			continent: CONTINENT_REBIRTH_WEST,
			url: '58430',
			capital: 'Альтштедт',
			leader: 'Аэнарион',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Ork',
			playerUrl: '11517',
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2202, 2405]
        },
        properties: {
			id: 11,
            name: 'Королевство Атеншьёг',
            shortname: 'Атеншьёг',
			tag: 'At',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '61459',
			capital: 'Драц',
			leader: 'Ференц VI Итертин',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Enkeltea',
			playerUrl: '33778',
			flag: {
				image: 'Flag_of_Atensjoeg.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2711, 2963]
        },
        properties: {
			id: 12,
            name: 'Атлантия',
            shortname: 'Атлантия',
			tag: 'Ca',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50728',
			capital: 'Атлантия',
			leader: 'Окторус I Великий',
			government: 'Представительская монархия',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2028, 2413]
        },
        properties: {
			id: 13,
            name: 'Великое Герцогство Аугебург-Хоэнхоф',
            shortname: 'Аугебург-Хоэнхоф',
			tag: 'Au',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '58430',
			capital: 'Альтштедт',
			leader: 'Карл III Маттиас Лейденфельдт-Хоэнхоф',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Corporal',
			playerUrl: '29631',
			flag: {
				image: 'Flag_of_Augeburg.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2239, 1646]
        },
        properties: {
			id: 14,
            name: 'Герцогство Аэт\'Дайне',
            shortname: 'Аэт\'Дайне',
			tag: 'An',
			continent: CONTINENT_REBIRTH_WEST,
			url: '61137',
			capital: 'Аэталь',
			leader: 'Джейко IV Тера-Палед',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Тинувель Секунда',
			playerUrl: '30987',
			flag: {
				image: 'Flag_of_AetDayne.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1288, 2469]
        },
        properties: {
			id: 15,
            name: 'Имамат Бахчистан',
            shortname: 'Бахчистан',
			tag: 'Bx',
			continent: CONTINENT_REBIRTH_EAST,
			url: '59173',
			capital: 'Бахчин-Абад',
			leader: 'Фарис Изетбег-Заде',
			government: GOV_THEOCRACY,
			status: STATUS_MINOR,
			playerName: 'Ник Токарев',
			playerUrl: '28378',
			flag: {
				image: 'Flag_of_Bahchistan.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1987, 1805]
        },
        properties: {
			id: 16,
            name: 'Королевство Берглэнд',
            shortname: 'Берглэнд',
			tag: 'Bg',
			continent: CONTINENT_REBIRTH_WEST,
			url: '39754',
			capital: 'Беринбург',
			leader: 'Малькольм I',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Bergland.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1173, 2631]
        },
        properties: {
			id: 17,
            name: 'Королевство Болнисия',
            shortname: 'Болнисия',
			tag: 'Bn',
			continent: CONTINENT_REBIRTH_EAST,
			url: '19266',
			capital: 'Руджелл',
			leader: 'Валерий Максимин',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Bolnisia.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1730, 1608]
        },
        properties: {
			id: 18,
            name: 'Герцогство Бриар',
            shortname: 'Бриар',
			tag: 'Br',
			continent: CONTINENT_REBIRTH_WEST,
			url: '41142',
			capital: 'Бриар',
			leader: 'Макабр дё Бриар',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1895, 2434]
        },
        properties: {
			id: 19,
            name: 'Варгренское Королевство',
            shortname: 'Варгрен',
			tag: 'Wr',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '49371',
			capital: 'Кернсгольм',
			leader: 'Фредерик I Дюбуа-Кремвельский',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Wargren.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1262, 2420]
        },
        properties: {
			id: 20,
            name: 'Республика Вельденвальд',
            shortname: 'Вельденвальд',
			tag: 'We',
			continent: CONTINENT_REBIRTH_EAST,
			url: '58777',
			capital: 'Вальденборг',
			leader: 'Мартин-Эрик Эстен-Винтерфельд',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			playerName: 'Ник Токарев',
			playerUrl: '28378',
			flag: {
				image: 'Flag_of_Weldenwald.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1594, 1165]
        },
        properties: {
			id: 21,
            name: 'Королевство Верисс',
            shortname: 'Верисс',
			tag: 'Vg',
			continent: CONTINENT_REBIRTH_WEST,
			url: '23836',
			capital: 'Правен',
			leader: 'Фридрих I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1495, 1832]
        },
        properties: {
			id: 22,
            name: 'Королевство Вестландия',
            shortname: 'Вестландия',
			tag: 'Ws',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '23904',
			capital: 'Концгельм',
			leader: 'Вильгельм I Диссель-Контабергин',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Westland.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [866, 3316]
        },
        properties: {
			id: 23,
            name: 'Вивольдовское королевство',
            shortname: 'Вивольд',
			tag: 'Vv',
			continent: CONTINENT_LILLY,
			url: '57199',
			capital: 'Генхцберг',
			leader: 'Вивольд I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Vivold.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1286, 3834]
        },
        properties: {
			id: 24,
            name: 'Всевеликое Царствие Вятическое',
            shortname: 'Ц. Вятическое',
			tag: 'Vt',
			continent: CONTINENT_LILLY,
			url: '53229',
			capital: 'Которин',
			leader: 'Ярополк Кроншков',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2434, 2129]
        },
        properties: {
			id: 25,
            name: 'Газоцко-Меран',
            shortname: 'Газоцко-Меран',
			tag: 'Gz',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: NO_TOPIC,
			capital: 'Велика Мостава',
			leader: 'Штефан Дрекслер-Завала',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			playerName: 'Ник Токарев',
			playerUrl: '28378',
			flag: {
				image: 'Flag_of_Gazotsko-Meran.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2513, 2552]
        },
        properties: {
			id: 26,
            name: 'Гатулат Унур',
            shortname: 'Гатулат Унур',
			tag: 'Un',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1900, 4254]
        },
        properties: {
			id: 27,
            name: 'Гачиванг',
            shortname: 'Гачиванг',
			tag: 'Hv',
			continent: CONTINENT_SUNRISE,
			url: NO_TOPIC,
			capital: 'Гачиванг',
			leaderLabel: 'Губернатор',
			leader: 'Уильям Керрингтон',
			status: STATUS_COLONY + ' (Тиердаль)',
			playerName: 'MAYAK57',
			playerUrl: '21169',
			flag: {
				image: 'Flag_of_Hachivang.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2429, 1952]
        },
        properties: {
			id: 28,
            name: 'Геленийская конфедерация',
            shortname: 'Геления',
			tag: 'Ge',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '61499',
			capital: 'Дилдойл',
			leaderLabel: 'Губернатор',
			leader: 'Джеймс Ливингем',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_PROTECTORATE + ' (Тиердаль)',
			playerName: 'Enkeltea',
			playerUrl: '33778',
			flag: {
				image: 'Flag_of_Gelenia.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2475, 2259]
        },
        properties: {
			id: 29,
            name: 'Графство Гринвуд',
            shortname: 'Гринвуд',
			tag: 'Gw',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '31440',
			capital: 'Гринвэй',
			leader: 'Рональд I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [906, 3165]
        },
        properties: {
			id: 30,
            name: 'Королевство Гросское',
            shortname: 'Гроссия',
			tag: 'Gs',
			continent: CONTINENT_LILLY,
			url: '32894',
			capital: UNKNOWN,
			leader: 'Родриго IV Дейл',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1894, 2096]
        },
        properties: {
			id: 31,
            name: 'Дария (север)',
            shortname: 'Дария (север)',
			tag: 'Da',
			continent: CONTINENT_REBIRTH_EAST,
			url: '37908',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1930, 2197]
        },
        properties: {
			id: 32,
            name: 'Дария (юг)',
            shortname: 'Дария (юг)',
			tag: 'Da',
			continent: CONTINENT_REBIRTH_EAST,
			url: '37908',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2582, 2270]
        },
        properties: {
			id: 33,
            name: 'Графство Даркния',
            shortname: 'Даркния',
			tag: 'Dk',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '49330',
			capital: 'Штэрнхолм',
			leader: 'Сандро Ассилум',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1929, 1911]
        },
        properties: {
			id: 34,
            name: 'Деселийское королевство',
            shortname: 'Деселия',
			tag: 'Ds',
			continent: CONTINENT_REBIRTH_EAST,
			url: '59009',
			capital: 'Сан-Гелиано',
			leader: 'Хосе VI де Нарриа',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: 'Flag_of_Deselia.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2068, 2386]
        },
        properties: {
			id: 35,
            name: 'Графство Деслания',
            shortname: 'Деслания',
			tag: 'Dl',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '24154',
			capital: UNKNOWN,
			leader: 'Генрих IV Блэкоурен',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [539, 997]
        },
        properties: {
			id: 36,
            name: 'Королевство Драгон Айленд',
            shortname: 'Драгон Айленд',
			tag: 'Di',
			continent: CONTINENT_REBIRTH_NORTH,
			url: NO_TOPIC,
			capital: 'Гримнир',
			leader: UNKNOWN,
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2622, 3040]
        },
        properties: {
			id: 37,
            name: 'Королевство Драмор',
            shortname: 'Драмор',
			tag: 'Dm',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '40564',
			capital: 'Тайтонус',
			leader: 'Дамнар Безликий',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1850, 1691]
        },
        properties: {
			id: 38,
            name: 'Дрэгленд',
            shortname: 'Дрэгленд',
			tag: 'Dr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '22289',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1354, 1545]
        },
        properties: {
			id: 39,
            name: 'Королевство Каэрн',
            shortname: 'Каэрн',
			tag: 'Ka',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '16181',
			capital: 'Кан',
			leader: UNKNOWN,
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1673, 1692]
        },
        properties: {
			id: 40,
            name: 'Корденийская Империя',
            shortname: 'Кордения',
			tag: 'Kr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '37235',
			capital: 'Марос',
			leader: 'Александра Боне',
			government: GOV_ABS_MONARCHY,
			status: STATUS_GREAT,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Kordenia.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2037, 2698]
        },
        properties: {
			id: 41,
            name: 'Конгорская империя',
            shortname: 'Конгор',
			tag: 'Kg',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '58680',
			capital: 'Катралия',
			leader: 'Оливер I Аслетим',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: 'Flag_of_Kongor.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1117, 1795]
        },
        properties: {
			id: 42,
            name: 'Кофердская империя',
            shortname: 'Коферд',
			tag: 'Kf',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '61226',
			capital: 'Лангерра',
			leader: 'Карл I и Мария I Авершер-Адлербург',
			government: GOV_ABS_MONARCHY,
			status: STATUS_GREAT,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Koferd.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [556, 3826]
        },
        properties: {
			id: 43,
            name: 'Кратер',
            shortname: 'Кратер',
			tag: 'Cr',
			continent: CONTINENT_LILLY,
			url: '55983',
			capital: NONE,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1203, 2206]
        },
        properties: {
			id: 44,
            name: 'Революционная Республика Круновия',
			shortname: 'Круновия',
			tag: 'Ku',
			continent: CONTINENT_REBIRTH_EAST,
			url: '58777',
			capital: 'Червони Крунов',
			leader: 'Тадеуш Серпинский',
			government: GOV_SOCIALIST,
			status: STATUS_MINOR,
			playerName: 'Ник Токарев',
			playerUrl: '28378',
			flag: {
				image: 'Flag_of_Krunoviya.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1290, 2376]
        },
        properties: {
			id: 45,
            name: 'Республика Кьезанотто',
            shortname: 'Кьезанотто',
			tag: 'Cs',
			continent: CONTINENT_REBIRTH_EAST,
			url: NO_TOPIC,
			capital: 'Сторрьён',
			leader: 'Альфред Фиорелли',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			playerName: 'Ник Токарев',
			playerUrl: '28378',
			flag: {
				image: 'Flag_of_Chiesanotto.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2421, 2541]
        },
        properties: {
			id: 46,
            name: 'Кэтроэлн',
            shortname: 'Кэтроэлн',
			tag: 'Ke',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '58781',
			capital: 'Кэтнон',
			leader: 'Гарольд I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Ketroeln.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2201, 2286]
        },
        properties: {
			id: 47,
            name: 'Кюлинбургская конфедерация',
			shortname: 'Кюлинбург',
			tag: 'Kl',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '38291',
			capital: 'Кюлинбург',
			leader: 'Иоганн I ван Тейнес-Роттебург',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			playerName: 'Le capitaine Avare',
			playerUrl: '23533',
			flag: {
				image: 'Flag_of_Kulinburg.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [573, 3267]
        },
        properties: {
			id: 48,
            name: 'Королевство Лайтхайзен',
            shortname: 'Лайтхайзен',
			tag: 'Lz',
			continent: CONTINENT_LILLY,
			url: '56409',
			capital: 'Тиалдари-дур',
			leader: 'Траллоск I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2142, 2334]
        },
        properties: {
			id: 49,
            name: 'Латонский Союз',
			shortname: 'Латония',
			tag: 'La',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '61236',
			capital: 'Терт',
			leader: 'Андрус Веберс',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			playerName: 'Le capitaine Avare',
			playerUrl: '23533',
			flag: {
				image: 'Flag_of_Laton_Union.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1703, 2114]
        },
        properties: {
			id: 50,
            name: 'Литланд',
            shortname: 'Литланд',
			tag: 'Lt',
			continent: CONTINENT_REBIRTH_EAST,
			url: '21275',
			capital: 'Азар',
			leader: 'Ода Тори',
			government: GOV_ABS_MONARCHY,
			status: STATUS_PROTECTORATE + ' (Аспия)',
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1221, 3308]
        },
        properties: {
			id: 51,
            name: 'Литавия',
            shortname: 'Литавия',
			tag: 'Li',
			continent: CONTINENT_LILLY,
			url: NO_TOPIC,
			capital: 'Старобряжен',
			leader: 'Витовт I Барда',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Имперский командор',
			playerUrl: '10808',
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1682, 1453]
        },
        properties: {
			id: 52,
            name: 'Локтарская Империя',
			shortname: 'Локтария',
			tag: 'Lk',
			continent: CONTINENT_REBIRTH_WEST,
			url: '23879',
			capital: 'Вельдерон',
			leader: 'Рауль IV Дюбуа',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_GREAT,
			playerName: 'Black King',
			playerUrl: '11231',
			flag: {
				image: 'Flag_of_Loktaria.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1940, 1714]
        },
        properties: {
			id: 53,
            name: 'Королевство Лытань',
			shortname: 'Лытань',
			tag: 'Lh',
			continent: CONTINENT_REBIRTH_WEST,
			url: '34163',
			capital: 'Ньюбург',
			leader: 'Джерольд III',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Lytan.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1312, 1485]
        },
        properties: {
			id: 54,
            name: 'Королевство Мализон',
			shortname: 'Мализон',
			tag: 'Mz',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '61291',
			capital: 'Мальзтирр',
			leader: 'Эжен Д\'Арно',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Armageddon Of Rome',
			playerUrl: '33636',
			flag: {
				image: 'Flag_of_Malizon.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1448, 2373]
        },
        properties: {
			id: 55,
            name: 'Султанат Мамлакат',
			shortname: 'Мамлакат',
			tag: 'Mm',
			continent: CONTINENT_REBIRTH_EAST,
			url: '19649',
			capital: 'Акбар',
			leader: 'Азамат Асад',
			government: 'Султанат',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Mamlakat.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1310, 2674]
        },
        properties: {
			id: 56,
            name: 'Султанат Мариам',
			shortname: 'Мариам',
			tag: 'Ma',
			continent: CONTINENT_REBIRTH_EAST,
			url: '26949',
			capital: 'Бадрийя',
			leader: 'Асир Барира I',
			government: 'Султанат',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [954, 2373]
        },
        properties: {
			id: 57,
            name: 'Великое Мариенское Королевство',
			shortname: 'Мариен',
			continent: CONTINENT_REBIRTH_EAST,
			tag: 'Mr',
			url: '57210',
			capital: 'Мариенбург',
			leader: 'Вебранд II',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Marien.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2225, 2564]
        },
        properties: {
			id: 58,
            name: 'Вольный город Мершент',
			shortname: 'Мершент',
			tag: 'Me',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: 'Мершент',
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1754, 1904]
        },
        properties: {
			id: 59,
            name: 'Великое Герцогство Миленское',
			shortname: 'Милен',
			tag: 'Ml',
			continent: CONTINENT_REBIRTH_WEST,
			url: '38880',
			capital: 'Милен',
			leader: 'Григорий Пришковский-Элебленский',
			status: STATUS_PROTECTORATE + ' (Кордения)',
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Milen.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2613, 2366]
        },
        properties: {
			id: 60,
            name: 'Королевство Михельт',
			shortname: 'Михельт',
			tag: 'Mh',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '22886',
			capital: 'Рэйхальд',
			leader: 'Ричард I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [920, 2139]
        },
        properties: {
			id: 61,
            name: 'Модравcкая Республика',
			shortname: 'Модравия',
			tag: 'Md',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '57951',
			capital: 'Миломиеста',
			leader: 'Йозеф Железнов',
			government: GOV_SOCIALIST,
			status: STATUS_MINOR,
			playerName: 'Yugo',
			playerUrl: '29549',
			flag: {
				image: 'Flag_of_Modravia.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1662, 1598]
        },
        properties: {
			id: 62,
            name: 'Королевство Монсеран',
			shortname: 'Монсеран',
			tag: 'Ms',
			continent: CONTINENT_REBIRTH_WEST,
			url: '38784',
			capital: 'Телль',
			leader: 'Доминик I Лефевр',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Monseran.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1268, 1921]
        },
        properties: {
			id: 63,
            name: 'Королевство Монтания',
			shortname: 'Монтания',
			tag: 'Kt',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '57958',
			capital: 'Краффштуфф',
			leader: 'Алоиз II Губертонет',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Montania.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1620, 1969]
        },
        properties: {
			id: 64,
            name: 'Княжеский союз Морния',
			shortname: 'Морния',
			tag: 'Mo',
			continent: CONTINENT_REBIRTH_WEST,
			url: NO_TOPIC,
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1259, 1644]
        },
        properties: {
			id: 65,
            name: 'Королевство Моэния',
			shortname: 'Моэния',
			tag: 'Mn',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '61287',
			capital: 'Кёнигсбург',
			leader: 'Вильгельм I Адлербург-Нойердорф',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Moenia.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1368, 3865]
        },
        properties: {
			id: 66,
            name: 'Племенной союз Мрацкгора',
			shortname: 'Мрацкгор',
			tag: 'Mg',
			continent: CONTINENT_LILLY,
			url: '56108',
			capital: 'Нет',
			leader: UNKNOWN,
			government: 'Геронто-демархия',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2094, 1518]
        },
        properties: {
			id: 67,
            name: 'Нигольфайд',
			shortname: 'Нигольфайд',
			tag: 'Nf',
			continent: CONTINENT_REBIRTH_WEST,
			url: NO_TOPIC,
			capital: 'Терра',
			leader: 'Фанкториас III Дрененмак',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Имперский командор',
			playerUrl: '10808',
			flag: {
				image: 'Flag_of_Nigolfajd.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2271, 2609]
        },
        properties: {
			id: 68,
            name: 'Нирийское королевство',
			shortname: 'Нирия',
			tag: 'Nr',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '40975',
			capital: 'Ронас',
			leader: 'Эллем I Ньоринтелл',
			government: GOV_ABS_MONARCHY,
			status: STATUS_PROTECTORATE + ' (Цивилия)',
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: 'Flag_of_Niria.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1497, 2069]
        },
        properties: {
			id: 69,
            name: 'Орден святых паладинов',
			shortname: 'Орден св. паладинов',
			tag: 'Po',
			continent: CONTINENT_REBIRTH_EAST,
			url: '18281',
			capital: 'Грифонхил',
			leader: 'Артес',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2503, 2398]
        },
        properties: {
			id: 70,
            name: 'Королевство Пилиталь',
			shortname: 'Пилиталь',
			tag: 'Pt',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '25730',
			capital: 'Соннек',
			leader: 'Ричард II',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2195, 2688]
        },
        properties: {
			id: 71,
            name: 'Племенной город',
			shortname: 'Племенной город',
			tag: 'Tc',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: 'Племенной город',
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2493, 617]
        },
        properties: {
			id: 72,
            name: 'Племенной союз Поухатан',
			shortname: 'Поухатан',
			tag: 'Ph',
			continent: CONTINENT_ANCHOR,
			url: '50728',
			capital: 'Тлачемилько',
			leader: 'Ашайякатль',
			government: GOV_THEOCRACY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1620, 3754]
        },
        properties: {
			id: 73,
            name: 'Ромейская Империя',
			shortname: 'Ромей',
			tag: 'Ro',
			continent: CONTINENT_LILLY,
			url: '61213',
			capital: 'Ромей',
			leader: 'Квинт Юлий Август',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Armageddon Of Rome',
			playerUrl: '33636',
			flag: {
				image: 'Flag_of_Rome.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2362, 2303]
        },
        properties: {
			id: 74,
            name: 'Руманская Советская Федеративная Народная Республика',
			shortname: 'РСФНР',
			tag: 'Rm',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '59132',
			capital: 'Белушоара',
			leader: 'Ангел Лучков',
			government: GOV_SOCIALIST,
			status: STATUS_MINOR,
			playerName: 'MAYAK57',
			playerUrl: '21169',
			flag: {
				image: 'Flag_of_RSFPR.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2597, 2873]
        },
        properties: {
			id: 75,
            name: 'Сагрития',
			shortname: 'Сагрития',
			tag: 'Sg',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '40350',
			capital: 'Авер',
			leader: 'Маргион Великий и Великолепный',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [3069, 1355]
        },
        properties: {
			id: 76,
            name: 'Орден Слепой Секиры',
			shortname: 'Орден Слепой Секиры',
			tag: 'So',
			continent: CONTINENT_ANCHOR,
			url: '60354',
			capital: 'Гексакрон',
			leader: 'Ксенобира Кобольдская',
			government: GOV_THEOCRACY,
			status: STATUS_MINOR,
			playerName: 'Тинувель Секунда',
			playerUrl: '30987',
			flag: {
				image: 'Flag_of_Sekira.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1039, 3085]
        },
        properties: {
			id: 77,
            name: 'Тандрийская империя',
			shortname: 'Тандрия',
			tag: 'Td',
			continent: CONTINENT_LILLY,
			url: '30688',
			capital: 'Контр-штадт',
			leader: 'Эцио I',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2070, 1723]
        },
        properties: {
			id: 78,
            name: 'Тиердальская империя',
			shortname: 'Тиердаль',
			tag: 'Tr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '19850',
			capital: 'Тиерданд',
			leader: 'Карл I Тиерд',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_GREAT,
			playerName: 'Имперский командор',
			playerUrl: '10808',
			flag: {
				image: 'Flag_of_Thierdal.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2384, 2483]
        },
        properties: {
			id: 79,
            name: 'Племенной союз орков Тирольф',
			shortname: 'Тирольф',
			tag: 'Tf',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '22341',
			capital: NONE,
			leader: 'Кэир, вождь Черных; Дэир, вождь Фиолетовых',
			government: 'Племенной союз',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [3044, 1149]
        },
        properties: {
			id: 80,
            name: 'Троллгар',
			shortname: 'Троллгар',
			tag: 'Tg',
			continent: CONTINENT_ANCHOR,
			url: '61208',
			capital: 'Гул-Гар',
			leader: 'Рагалак',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Trollgar.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [492, 1539]
        },
        properties: {
			id: 81,
            name: 'Королевство Т\'харра',
			shortname: 'Т\'харра',
			tag: 'Th',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '39011',
			capital: 'Солдвейн',
			leader: 'Ричард I Браун',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Black King',
			playerUrl: '11231',
			flag: {
				image: 'Flag_of_Tharra.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1513, 1957]
        },
        properties: {
			id: 82,
            name: 'Ультаренский Орден',
			shortname: 'Ультарен',
			tag: 'Ae',
			continent: CONTINENT_REBIRTH_EAST,
			url: '14767',
			capital: 'Ришаль',
			leader: 'Гаррус фон Ришельдер',
			government: 'Капитул',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2317, 2480]
        },
        properties: {
			id: 83,
            name: 'Королевство Фаминория',
			shortname: 'Фаминория',
			tag: 'Fn',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '38952',
			capital: UNKNOWN,
			leader: 'Фридрих Полководец',
			government: 'Феодальная монархия',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [559, 2774]
        },
        properties: {
			id: 84,
            name: 'Фермунг',
			shortname: 'Фермунг',
			tag: 'Fm',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '46883',
			capital: 'Фермунгард',
			leader: 'Марк Северий',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			playerName: 'Грешник',
			playerUrl: '22262',
			flag: {
				image: 'Flag_of_Fermung.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2148, 1928]
        },
        properties: {
			id: 85,
            name: 'Королевство Фиёрра',
			shortname: 'Фиёрра',
			tag: 'Fi',
			continent: CONTINENT_REBIRTH_WEST,
			url: '26779',
			capital: 'Митра',
			leader: 'Круэл Вальмонт',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Fiorra.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1568, 2054]
        },
        properties: {
			id: 86,
            name: 'Фламасский орден',
            shortname: 'Фламасский орден',
			tag: 'Fo',
			continent: CONTINENT_REBIRTH_EAST,
			url: '16883',
			capital: 'Мальборк',
			leader: 'Конрад фон Визенранд',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1853, 1524]
        },
        properties: {
			id: 87,
            name: 'Королевство Фрониард',
			shortname: 'Фрониард',
			tag: 'Fr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '40190',
			capital: 'Нервингтон',
			leader: 'Коул Ливингстон',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: 'Flag_of_Froniard.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2276, 2752]
        },
        properties: {
			id: 88,
            name: 'Вольный город Хаарватерн',
			shortname: 'Хаарватерн',
			tag: 'Ha',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: 'Хаарватерн',
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1170, 3673]
        },
        properties: {
			id: 89,
            name: 'Графство Хаугланд',
			shortname: 'Хаугланд',
			tag: 'Ho',
			continent: CONTINENT_LILLY,
			url: '40494',
			capital: 'Мукачеф',
			leader: 'Вольтмар фон Раук цу Хаугланд',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1126, 2112]
        },
        properties: {
			id: 90,
            name: 'Королевство Хомрул',
			shortname: 'Хомрул',
			tag: 'Hm',
			continent: CONTINENT_REBIRTH_EAST,
			url: '61535',
			capital: 'Стридо-Ново',
			leader: UNKNOWN,
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			playerName: 'Ник Токарев',
			playerUrl: '28378',
			flag: {
				image: 'Flag_of_Homrul.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [935, 3393]
        },
        properties: {
			id: 91,
            name: 'Хортенское королевство',
			shortname: 'Хортен',
			tag: 'Ht',
			continent: CONTINENT_LILLY,
			url: '57201',
			capital: 'Виндшторм',
			leader: 'Хортен I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2062, 2927]
        },
        properties: {
			id: 92,
            name: 'Цивилийская империя',
			shortname: 'Цивилия',
			tag: 'Cv',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '36450',
			capital: 'Цельмий',
			leader: 'Рио ван Реццо, Странник XIII',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Раван',
			playerUrl: '9999',
			flag: {
				image: 'Flag_of_Civilia.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1375, 1791]
        },
        properties: {
			id: 93,
            name: 'Королевство Шварцланд',
			shortname: 'Шварцланд',
			tag: 'Sw',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '24710',
			capital: 'Фридгард',
			leader: 'Христофор I Лихтенцоллерн',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Schwarzland.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1787, 2436]
        },
        properties: {
			id: 94,
            name: 'Королевство Штальфельд',
			shortname: 'Штальфельд',
			tag: 'Sf',
			continent: CONTINENT_REBIRTH_EAST,
			url: '57698',
			capital: 'Заальберг',
			leader: 'Фердинанд I Эйзенбах',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'MAYAK57',
			playerUrl: '21169',
			flag: {
				image: 'Flag_of_Shtalfeld.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [817, 3468]
        },
        properties: {
			id: 95,
            name: 'Штреймарское королевство',
			shortname: 'Штреймар',
			tag: 'Sm',
			continent: CONTINENT_LILLY,
			url: '56958',
			capital: 'Лиденбург',
			leader: 'Фридрих II фон Виттельсбург',
			government: 'Феодальная монархия',
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1346, 1880]
        },
        properties: {
			id: 96,
            name: 'Великое княжество Эркелия',
			shortname: 'Эркелия',
			tag: 'Ar',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '31108',
			capital: 'Шванбург',
			leader: 'Георг I Лан',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'KaiseR',
			playerUrl: '4131',
			flag: {
				image: 'Flag_of_Erkelia.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1187, 2258]
        },
        properties: {
			id: 97,
            name: 'Королевство Эстервальд',
			shortname: 'Эстервальд',
			tag: 'Es',
			continent: CONTINENT_REBIRTH_EAST,
			url: '58777',
			capital: 'Кристианборг',
			leader: 'Моуд I Лангсваард',
			government: GOV_PARL_MONARCHY,
			status: STATUS_MINOR,
			playerName: 'Ник Токарев',
			playerUrl: '28378',
			flag: {
				image: 'Flag_of_Esterwald.webp'
			}
        }
    },
	{
    	type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1193, 959]
        },
        properties: {
			id: 98,
            name: 'Великое Эшенвальское Герцогство',
			shortname: 'Эшенвальд',
			tag: 'Ev',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '35406',
			capital: 'Штайнбург',
			leader: 'Арагон IX Завоеватель',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			playerName: NO_PLAYER,
			playerUrl: NO_PLAYER,
			flag: {
				image: NO_FLAG
			}
        }
    }
	]
};

function getCountryTagById(pid) {
	for(feature of data.features) {
		if (pid == feature.properties.id) {
			return feature.properties.tag;
		}
	}
	return 'NaN';
}

function cleanName(name) {
    return name
        .replace(/Племенной союз орков/, '')
        .replace(/Племенной союз/, '')
        .replace(/[кК]оролевство/, '')
        .replace(/[кК]онфедерация/, '')
        .replace(/[кК]аганат/, '')
        .replace(/[иИ]мперия/, '')
        .replace(/[иИ]мамат/, '')
        .replace(/[хХ]алифат/, '')
        .replace(/[рР]еспублика/, '')
        .replace(/[рР]еволюционная/, '')
        .replace(/[сС]оветская/, '')
        .replace(/[сС]ултанат/, '')
        .replace(/[фФ]едеративная/, '')
        .replace(/[нН]ародная/, '')
        .replace(/Орден святых/, '')
        .replace(/[оО]рден /, '')
        .replace(/ [оО]рден/, '')
        .replace(/[вВ]ольн.. город/, '')
        .replace(/[гГ]ерцогство/, '')
        .replace(/[гГ]рафство/, '')
        .replace(/[вВ]севеликое/, '')
        .replace(/[вВ]елик../, '')
        .replace(/[кК]няжество/, '')
        .replace(/[кК]няжеский/, '')
        .replace(/[сС]султанат/, '')
        .replace(/[сС]оюз/, '')
        .replace(/[цЦ]арствие/, '')
        .replace(/Эльфийское/, '')
        .replace(/^ */, '')
        .replace(/ /, '')
        .replace(/'/, '')
        .replace(/\-/, '');
}
