const NO_TOPIC = '54209'; //ссылка на тему географии, если нет темы
const NO_FLAG = 'Flag_of_Unknown.webp';
const UNKNOWN = 'Неизвестно';
const NONE = 'Отсутствует';
const NO_PLAYER = 'Банк ВР';
const PLAYER_ZOG = 'Совет ВР';

const GOV_ABS_MONARCHY = 'Абс. монархия';
const GOV_DUAL_MONARCHY = 'Дуал. монархия';
const GOV_PARL_MONARCHY = 'Парл. монархия';
const GOV_REPUBLIC = 'Республика';
const GOV_SOCIALIST = 'Соц. республика';
const GOV_THEOCRACY = 'Теократия';

const STATUS_COLONY = 'Колония';
const STATUS_PROTECTORATE = 'Протекторат';
const STATUS_VASSAL = 'Вассал';
const STATUS_MINOR = 'Независимое государство';
const STATUS_GREAT = 'Великая держава';

const CONTINENT_REBIRTH_NORTH = 'Материк Возрождения (север)';
const CONTINENT_REBIRTH_WEST = 'Материк Возрождения (запад)';
const CONTINENT_REBIRTH_EAST = 'Материк Возрождения (восток)';
const CONTINENT_REBIRTH_SOUTH = 'Материк Возрождения (юг)';
const CONTINENT_LILLY = 'Материк Лилии'; 
const CONTINENT_SUNRISE = 'Материк Рассвета'; 
const CONTINENT_ANCHOR = 'Материк Якоря'; 

var data = {
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
            shortname: 'Лита',
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
            coordinates: [1788, 2436]
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

var buildingPlaces = {
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


var Lilly = {
    "type": "Feature",
    "properties": {
        "popupContent": "Тиердаль",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.6
        }
    },
    "geometry": {
		/*type: 'Point',
		coordinates: [2369, 3003]*/
        "type": "MultiPolygon",
        "coordinates": [
            /*[
                [
                    [3274, 1691],
					[3219, 1565],
					[3347, 1479],
					[3389, 1593]
                ],[
                    [3300, 1650],
                    [3320, 1510],
                    [3301, 1520],
                ]
            ],[
                [
                    [3425, 1506],
					[3516, 1430],
					[3537, 1527],
					[3467, 1582]
                ]
            ]*/
			/*[
				[
					[1691, 3274],
					[1565, 3219],
					[1479, 3347],
					[1593, 3389]
				],[
					[1650, 3300],
					[1510, 3320],
					[1520, 3301],
				]
			],[
				[
					[1506, 3425],
					[1430, 3516],
					[1527, 3537],
					[1582, 3467]
				]
			]*/
			[ 
				[
					[2186, 2395],
					[2196, 2395],
					[2208, 2388],
					[2209, 2381],
					[2219, 2372],
					[2212, 2356],
					[2207, 2345],
					[2205, 2338],
					[2202, 2330],
					[2198, 2325],
					[2198, 2315],
					[2191, 2316],
					[2189, 2320],
					[2188, 2325],
					[2185, 2333],
					[2183, 2337],
					[2180, 2339],
					[2176, 2345],
					[2174, 2350],
					[2171, 2353],
					[2168, 2359],
					[2165, 2365],
					[2164, 2370],
					[2175, 2376],
					[2180, 2381],
					[2184, 2388]
				]	
			]
        ]
    }
};

/* П А М Я Т К А */
/*
var testCoords = [
	// Первый уровень вложенности, все группы координат
	[
		//Второй уровень вложенности - сначала координаты залитой части, а потом координаты отверстия
		[
			//Третий уровень вложенности - собсна, координаты
			[2131, 1023],
			[1323, 500],
			[2213, 607],
			[3000, 2414],
		],
		[
			[2131, 1023],
			[1323, 500],
			[2213, 607],
			[3000, 2414],
		]
	]
];
*/

var ContinentAnchor = {
	type: "Feature",
    properties: {
        popupContent: "Атеншьёг",
        style: {
            weight: 2,
            color: "white",
			opacity: 1,
            fillColor: "#9933FF",
            fillOpacity: 0.4,
			className: "bounds"
        },
		continent: CONTINENT_ANCHOR
    },
    geometry: {
        type: "MultiPolygon",
        coordinates: [
            [
				[
					[3394, 1221],
					[3384, 1230],
					[3373, 1234],
					[3365, 1238],
					[3367, 1243],
					[3372, 1247],
					[3373, 1253],
					[3372, 1258],
					[3363, 1260],
					[3357, 1265],
					[3363, 1278],
					[3370, 1289],
					[3362, 1300],
					[3362, 1313],
					[3352, 1319],
					[3345, 1321],
					[3339, 1325],
					[3330, 1322],
					[3324, 1317],
					[3329, 1311],
					[3324, 1301],
					[3318, 1298],
					[3311, 1299],
					[3304, 1302],
					[3298, 1313],
					[3291, 1316],
					[3285, 1316],
					[3281, 1312],
					[3276, 1314],
					[3271, 1318],
					[3266, 1322],
					[3257, 1322],
					[3251, 1316],
					[3249, 1306],
					[3240, 1299],
					[3235, 1302],
					[3228, 1304],
					[3221, 1305],
					[3219, 1312],
					[3224, 1320],
					[3235, 1329],
					[3233, 1339],
					[3229, 1346],
					[3219, 1350],
					[3210, 1348],
					[3202, 1351],
					[3199, 1356],
					[3193, 1357],
					[3187, 1360],
					[3180, 1361],
					[3175, 1363],
					[3169, 1363],
					[3164, 1363],
					[3158, 1366],
					[3153, 1369],
					[3144, 1373],
					[3134, 1376],
					[3122, 1377],
					[3115, 1377],
					[3102, 1377],
					[3087, 1375],
					[3079, 1372],
					[3068, 1368],
					[3061, 1366],
					[3042, 1360],
					[3011, 1353],
					[2965, 1337],
					[2950, 1336],
					[2934, 1335],
					[2911, 1325],
					[2888, 1313],
					[2864, 1294],
					[2859, 1287],
					[2859, 1282],
					[2861, 1277],
					[2855, 1272],
					[2849, 1266],
					[2851, 1259],
					[2857, 1251],
					[2865, 1250],
					[2875, 1249],
					[2882, 1249],
					[2890, 1246],
					[2898, 1247],
					[2908, 1248],
					[2912, 1253],
					[2917, 1251],
					[2916, 1245],
					[2918, 1238],
					[2926, 1223],
					[2937, 1219],
					[2957, 1163],
					[2959, 1145],
					[2976, 1118],
					[2983, 1114],
					[2997, 1116],
					[3004, 1110],
					[3029, 1092],
					[3030, 1050],
					[3033, 1038],
					[3036, 1030],
					[3041, 1024],
					[3039, 1012],
					[3036, 1001],
					[3036, 986],
					[3031, 976],
					[3016, 959],
					[3008, 961],
					[3003, 958],
					[2996, 959],
					[2989, 954],
					[2987, 946],
					[2989, 940],
					[2996, 941],
					[2999, 939],
					[2998, 935],
					[2998, 930],
					[2997, 922],
					[2991, 921],
					[2983, 918],
					[2978, 915],
					[2970, 909],
					[2960, 903],
					[2942, 886],
					[2922, 883],
					[2911, 879],
					[2892, 843],
					[2871, 806],
					[2866, 798],
					[2842, 786],
					[2834, 778],
					[2818, 747],
					[2804, 708],
					[2788, 695],
					[2768, 653],
					[2767, 623],
					[2761, 597],
					[2761, 575],
					[2771, 556],
					[2777, 554],
					[2777, 549],
					[2777, 542],
					[2782, 535],
					[2787, 529],
					[2794, 528],
					[2799, 533],
					[2799, 541],
					[2796, 546],
					[2800, 549],
					[2802, 546],
					[2805, 543],
					[2806, 538],
					[2807, 533],
					[2811, 525],
					[2816, 518],
					[2822, 518],
					[2828, 519],
					[2829, 527],
					[2830, 534],
					[2830, 541],
					[2835, 545],
					[2840, 545],
					[2845, 548],
					[2849, 552],
					[2857, 556],
					[2865, 555],
					[2871, 556],
					[2875, 559],
					[2880, 561],
					[2883, 564],
					[2883, 582],
					[2882, 589],
					[2884, 593],
					[2888, 593],
					[2892, 589],
					[2894, 585],
					[2897, 577],
					[2898, 571],
					[2898, 566],
					[2895, 561],
					[2891, 555],
					[2889, 550],
					[2891, 543],
					[2894, 537],
					[2896, 526],
					[2899, 519],
					[2905, 512],
					[2905, 483],
					[2899, 470],
					[2898, 454],
					[2893, 443],
					[2886, 433],
					[2879, 417],
					[2866, 409],
					[2841, 403],
					[2835, 405],
					[2827, 405],
					[2817, 396],
					[2806, 396],
					[2783, 396],
					[2777, 404],
					[2771, 418],
					[2766, 422],
					[2761, 425],
					[2754, 441],
					[2753, 451],
					[2755, 461],
					[2759, 466],
					[2763, 474],
					[2763, 480],
					[2757, 482],
					[2750, 483],
					[2729, 464],
					[2722, 465],
					[2717, 462],
					[2713, 450],
					[2707, 444],
					[2693, 436],
					[2656, 433],
					[2648, 433],
					[2640, 431],
					[2631, 427],
					[2626, 425],
					[2609, 423],
					[2603, 427],
					[2590, 445],
					[2577, 448],
					[2563, 449],
					[2553, 446],
					[2540, 440],
					[2533, 448],
					[2526, 450],
					[2518, 449],
					[2512, 452],
					[2503, 453],
					[2494, 450],
					[2489, 445],
					[2489, 438],
					[2489, 431],
					[2488, 425],
					[2484, 422],
					[2480, 418],
					[2478, 415],
					[2475, 417],
					[2473, 421],
					[2469, 426],
					[2463, 426],
					[2459, 423],
					[2455, 421],
					[2450, 418],
					[2445, 415],
					[2442, 413],
					[2438, 408],
					[2435, 403],
					[2431, 398],
					[2428, 392],
					[2426, 383],
					[2427, 370],
					[2429, 361],
					[2429, 352],
					[2430, 338],
					[2430, 324],
					[2430, 311],
					[3394, 311]
				]
            ],
			[
				[
					[2600, 626],
					[2591, 620],
					[2585, 609],
					[2575, 613],
					[2567, 622],
					[2556, 622],
					[2548, 633],
					[2541, 642],
					[2526, 642],
					[2520, 635],
					[2516, 627],
					[2507, 626],
					[2502, 633],
					[2503, 645],
					[2502, 655],
					[2494, 661],
					[2483, 663],
					[2472, 667],
					[2461, 668],
					[2451, 669],
					[2443, 674],
					[2433, 671],
					[2425, 666],
					[2419, 660],
					[2418, 652],
					[2418, 640],
					[2413, 632],
					[2413, 623],
					[2414, 612],
					[2421, 602],
					[2418, 592],
					[2422, 578],
					[2424, 568],
					[2421, 554],
					[2416, 541],
					[2418, 524],
					[2429, 514],
					[2445, 514],
					[2454, 523],
					[2461, 533],
					[2468, 521],
					[2475, 515],
					[2489, 513],
					[2505, 518],
					[2523, 525],
					[2536, 529],
					[2543, 519],
					[2556, 515],
					[2569, 516],
					[2578, 525],
					[2593, 529],
					[2601, 547],
					[2601, 560],
					[2605, 574],
					[2608, 589],
					[2609, 605],
					[2610, 617],
					[2608, 626]
				]
			],
			[
				[
					[3014, 1057],
					[3014, 1050],
					[3012, 1043],
					[3007, 1034],
					[3003, 1026],
					[2994, 1026],
					[2983, 1027],
					[2973, 1034],
					[2970, 1043],
					[2968, 1051],
					[2967, 1058],
					[2969, 1063],
					[2972, 1068],
					[2974, 1073],
					[2978, 1077],
					[2983, 1078],
					[2989, 1079],
					[2995, 1081],
					[3001, 1081],
					[3005, 1078],
					[3008, 1073],
					[3011, 1068],
					[3014, 1062]
				]
			],
			[
				[
					[2878, 961],
					[2879, 967],
					[2883, 972],
					[2890, 975],
					[2896, 976],
					[2901, 978],
					[2907, 981],
					[2912, 981],
					[2916, 978],
					[2917, 974],
					[2917, 969],
					[2917, 964],
					[2915, 960],
					[2913, 956],
					[2912, 952],
					[2907, 948],
					[2903, 948],
					[2895, 948],
					[2889, 949],
					[2885, 952],
					[2881, 956]
				]
			],
			[
				[
					[2809, 1178],
					[2802, 1189],
					[2793, 1194],
					[2785, 1194],
					[2779, 1190],
					[2771, 1191],
					[2765, 1195],
					[2759, 1197],
					[2750, 1197],
					[2742, 1194],
					[2737, 1189],
					[2734, 1183],
					[2734, 1177],
					[2736, 1173],
					[2738, 1169],
					[2738, 1163],
					[2738, 1158],
					[2738, 1152],
					[2740, 1148],
					[2741, 1143],
					[2745, 1139],
					[2752, 1135],
					[2758, 1131],
					[2761, 1126],
					[2763, 1120],
					[2766, 1116],
					[2772, 1114],
					[2779, 1115],
					[2786, 1117],
					[2791, 1120],
					[2796, 1118],
					[2801, 1117],
					[2806, 1117],
					[2810, 1122],
					[2812, 1127],
					[2815, 1132],
					[2815, 1139],
					[2813, 1145],
					[2807, 1147],
					[2802, 1151],
					[2803, 1158],
					[2807, 1163],
					[2809, 1170],
					[2806, 1184]
				]
			],
			[
				[
					[2213.75, 861.5],
					[2219.4996444606736, 863],
					[2222.48755612357, 866.5],
					[2222.9874139078393, 872],
					[2224.2370583685124, 877.75],
					[2228.2359206426677, 881.25],
					[2231.734925132553, 885.5],
					[2233.234498485361, 890],
					[2231.4849962404182, 896],
					[2227.4861339662634, 899],
					[2221.9876983393006, 898.25],
					[2216.489262712337, 898],
					[2211.990542653913, 899.75],
					[2205.742320350546, 899.25],
					[2201.9933869685256, 895.75],
					[2200.993671399987, 890.25],
					[2202.9931025370643, 886],
					[2205.4923914584115, 883.5],
					[2208.2416092718927, 880.75],
					[2208.991395948297, 876],
					[2209.4912537325663, 870.75],
					[2209.9911115168356, 865]
				]
			],
			[
				[
					[2251.230800876365, 725.5],
					[2251.230800876365, 731.5],
					[2254.479876474116, 736.75],
					[2260.478169885348, 737.5],
					[2266.4764632965807, 736],
					[2272.2248278156785, 734.75],
					[2278.2231212269107, 732],
					[2281.722125716796, 728.75],
					[2284.2214146381434, 722],
					[2284.7212724224128, 715.25],
					[2282.721841285335, 709.5],
					[2279.4727656875843, 703.25],
					[2277.7232634426414, 697.5],
					[2276.473618981968, 692],
					[2274.4741878448904, 686.5],
					[2268, 683.25],
					[2261.4778854538868, 682.75],
					[2256.25, 685.5],
					[2252.249928892135, 691],
					[2248.000426647192, 694.75],
					[2247.23193860221, 699.5],
					[2248.481583062883, 704.75],
					[2251.230800876365, 708.5],
					[2253.480160905577, 711.5],
					[2254.479876474116, 716.5],
					[2251.730658660634, 720.5]
				]
			],
			[
				[
					[2448.2502844314613, 774.25],
					[2442.4790942875975, 778],
					[2438.730160905577, 783.25],
					[2437.4805164449035, 789.75],
					[2437.4805164449035, 797],
					[2439.479947581981, 802],
					[2439.479947581981, 808.25],
					[2439.479947581981, 814],
					[2438.480232013442, 821.5],
					[2439.9798053662503, 826],
					[2442.978952071867, 830.75],
					[2440.7502844314613, 836],
					[2440.4796631505196, 842.5],
					[2443.478809856136, 848],
					[2449.7270321595033, 851.25],
					[2456.225183355005, 851.75],
					[2461.723618981968, 851.5],
					[2465.2226234718537, 848],
					[2468.22177017747, 842],
					[2470.4997866764043, 836.5],
					[2471.7207746673553, 831.25],
					[2477.000071107865, 830.5],
					[2482.217788137012, 829],
					[2483.71736148982, 824.25],
					[2487.2502844314613, 822],
					[2487.96615265611, 816.5],
					[2488.9998577842694, 811],
					[2489.2157971167835, 806],
					[2487.4998577842694, 801.5],
					[2483.71736148982, 797],
					[2484.717077058359, 793],
					[2487.7503555393264, 790.5],
					[2490.7497155685387, 785.5],
					[2491.9650149302647, 779.75],
					[2490.4654415774567, 774.5],
					[2485.466863734763, 770.5],
					[2479.4685703235305, 769],
					[2474.469992480837, 768],
					[2471.470845775221, 765],
					[2470.471130206682, 759.25],
					[2467.4719835010656, 756],
					[2461.723618981968, 754.75],
					[2456.225183355005, 757],
					[2452.4762499729845, 762.25],
					[2450.476818835907, 769]
				]
			],
			[
				[
					[2919.975681110062, 1463.5547816017734],
					[2916.226747728042, 1469.5582414924115],
					[2916.7266055123114, 1478.563431328369],
					[2916.976534404446, 1487.0683328401067],
					[2919.4758233257926, 1494.5726577034045],
					[2926.223903413429, 1496.573811000284],
					[2931.4724101482575, 1496.573811000284],
					[2936.2210590988166, 1499.3253967834933],
					[2940.9697080493756, 1502.5772708909224],
					[2947.467859244877, 1503.577847539362],
					[2954.2159393325137, 1504.0781358635818],
					[2958.214801606669, 1500.576117594043],
					[2960.464161635881, 1493.8222252170747],
					[2962.713521665093, 1487.5686211643265],
					[2964.7129528021705, 1482.0654495979081],
					[2962.213663880824, 1475.56170138305],
					[2957.9997155685387, 1469.5002883242198],
					[2955.9997866764043, 1463.24985583789],
					[2954.7157971167835, 1457.0510333869152],
					[2951.716650411167, 1452.5484384689364],
					[2945.2184992156654, 1449.546708523617],
					[2939.4701346965676, 1448.5461318751775],
					[2933.72177017747, 1448.5461318751775],
					[2928.4732634426414, 1451.2977176583868],
					[2926.223903413429, 1455.8003125763655],
					[2923.2502133235957, 1460.2504324863298]
				]
			],
			[
				[
					[3268.413390620046, 1533.5],
					[3280.90983522678, 1536],
					[3287.0002844314613, 1552],
					[3325.6962424538215, 1580.75],
					[3335.1935403549396, 1590.75],
					[3342.1915493347105, 1602.5],
					[3340.442047089768, 1630.75],
					[3305.452002190912, 1644.5],
					[3279.959255193174, 1681.5],
					[3272.2514932651716, 1739.75],
					[3274.724756707813, 1757.75],
					[3277.723903413429, 1777.5],
					[3276.7241878448904, 1785.75],
					[3260.0002844314613, 1803.5],
					[3235.4859206426677, 1805.75],
					[3228.999928892135, 1813.75],
					[3216.4998577842694, 1814.75],
					[3209.2497155685387, 1807.75],
					[3199.238409417954, 1778.75],
					[3194.4897604673947, 1771.5],
					[3189.7411115168356, 1760.75],
					[3170.9998577842694, 1750.5],
					[3162.498862274155, 1749.75],
					[3156.5005688629226, 1744],
					[3151.7519199123635, 1736],
					[3148.5028443146125, 1727.5],
					[3149.502559883151, 1717.5],
					[3153.5014221573065, 1709.5],
					[3162.998720058424, 1704],
					[3169.496871253926, 1703],
					[3177.494595802236, 1690.75],
					[3178.24438247864, 1684.25],
					[3177.494595802236, 1652],
					[3176.2426758898723, 1643.75],
					[3175.992746997738, 1632.75],
					[3181.4911826247007, 1628.25],
					[3190.2386938494146, 1628.25],
					[3207.9836451909773, 1620],
					[3211.7325785729977, 1611],
					[3218.2307297684997, 1606.25],
					[3256.9997866764043, 1593],
					[3253.47070355949, 1588.75],
					[3251.721201314547, 1581.75],
					[3252.720916883086, 1575.75],
					[3257.2196369415105, 1572.75],
					[3259.4689969707224, 1569],
					[3256.2199213729714, 1562.5],
					[3256.2199213729714, 1555.75],
					[3260.2187836471267, 1552],
					[3261.968285892069, 1546.5],
					[3264.2176459212815, 1540.75]
				]
			],
			[
				[
					[2817.7492178134817, 1869.75],
					[2826.7499288921344, 1880],
					[2840.9998577842694, 1890.25],
					[2876.460179595423, 1883],
					[2885.001137725845, 1907],
					[2893.455344260582, 1919.5],
					[2903.0002844314613, 1933.5],
					[2916.948660121242, 1938.5],
					[2932.444251433593, 1936.5],
					[2953.438278372906, 1936],
					[2972, 1930.5],
					[2989.92789662457, 1927],
					[2999.4658682246486, 1921.75],
					[3008.4633083414974, 1917.25],
					[3018.4604640268844, 1911.25],
					[3022.4593263010397, 1903.5],
					[3030.9569086336187, 1897.25],
					[3035.7055575841778, 1888.75],
					[3036.455344260582, 1878.75],
					[3035.4556286920433, 1867],
					[3032.2065530942923, 1859.25],
					[3029.95719306508, 1850.75],
					[3027.9577619280026, 1838.75],
					[3027.707833035868, 1826.25],
					[3025.2502844314613, 1813.25],
					[3021.9594685167704, 1802.25],
					[3019.460179595423, 1791.5],
					[3016.461032889807, 1779.25],
					[3011.2125261549786, 1765.75],
					[3003, 1758.5],
					[2992.467859244877, 1754],
					[2981.720916883086, 1754.25],
					[2971.223903413429, 1758.25],
					[2960.7528443146125, 1760.75],
					[2956.9779565617523, 1755],
					[2950.9796631505196, 1750],
					[2941.7322941415364, 1751],
					[2935.970063588702, 1757.75],
					[2938.2194236179143, 1763.75],
					[2942.468214784204, 1767.5],
					[2940.4687836471267, 1775.25],
					[2938.9692102943186, 1784.25],
					[2924.9723390403924, 1798.5],
					[2913.975467786466, 1784.5],
					[2911.976036649389, 1776.25],
					[2908.9768899437727, 1763.75],
					[2907.477316590964, 1757.5],
					[2904.728098777483, 1751.5],
					[2895.980587552769, 1751.25],
					[2887.982863004459, 1755],
					[2877.9857073190715, 1762],
					[2869.4881249864925, 1781.25],
					[2871.9874139078393, 1793],
					[2876.985991750533, 1797],
					[2896.245946851677, 1815],
					[2897.9800186898465, 1824.5],
					[2892.731511955018, 1830.25],
					[2883.2342140539, 1832.25],
					[2853.4926758898723, 1827.75],
					[2849.7437425078524, 1815.75],
					[2846.9945246943707, 1805.5],
					[2837.997084577522, 1802.75],
					[2828.7497155685387, 1811.25],
					[2821.0019199123635, 1822],
					[2819.5023465595555, 1833.75],
					[2815.5034842854006, 1845],
					[2814.2498577842694, 1856.75]
				]
			],
			[
				[
					[2609.7502133235957, 1196.75],
					[2607.750497755057, 1186.25],
					[2604.001848804498, 1176.5],
					[2609.2493600292123, 1163.5],
					[2598.7502133235957, 1146.5],
					[2603.9998577842694, 1131],
					[2613.4971556853875, 1123],
					[2611.4977245483096, 1112],
					[2602.000426647192, 1103.5],
					[2591.503413177535, 1112.5],
					[2585.0052619820335, 1126],
					[2575.5079640809154, 1138],
					[2556.513368278679, 1142.5],
					[2537.7133794493625, 1147.25],
					[2526.7165081954363, 1138.5],
					[2518.4688547549918, 1134.75],
					[2508.4999288921344, 1135.5],
					[2496.7250411392743, 1140.75],
					[2483.9786676404055, 1149.75],
					[2473.731583062883, 1158.75],
					[2462.2348540246876, 1161.75],
					[2453.4873427999737, 1168.75],
					[2444.499502244943, 1175.5],
					[2402.9998577842694, 1171.25],
					[2390.0150037595818, 1175.5],
					[2387.0131549550833, 1191.25],
					[2394.510310640471, 1197.5],
					[2427.5003555393264, 1227.25],
					[2426.994880233697, 1247.75],
					[2426.994880233697, 1261],
					[2424.2500711078656, 1271.25],
					[2422.2499288921344, 1282],
					[2425.7501422157306, 1292],
					[2430.493884723583, 1296.75],
					[2436.4921781348153, 1299],
					[2437.2419648112195, 1303.75],
					[2435.992320350546, 1309.25],
					[2436.4921781348153, 1316.75],
					[2442.490471546048, 1323],
					[2449.2385516336844, 1324.5],
					[2454.4870583685124, 1323.75],
					[2456.9863472898596, 1317.75],
					[2460.485351779745, 1312.75],
					[2466.233716298843, 1312.5],
					[2472.7318674943444, 1313.25],
					[2480.25, 1311.5],
					[2512.720490235894, 1303.75],
					[2521.468001460608, 1301.5],
					[2527.2163659797056, 1300],
					[2531.7150860381303, 1303.75],
					[2537.7133794493625, 1306.75],
					[2544.711388429134, 1308.25],
					[2552.7091129774435, 1309],
					[2559.9570508493493, 1309.5],
					[2567.7502133235957, 1307.5],
					[2572.727245483099, 1302.5],
					[2578.225681110062, 1298.75],
					[2586.223405658372, 1297.75],
					[2593.7212724224128, 1295.75],
					[2598.219992480837, 1290.75],
					[2600.4693525100492, 1281.5],
					[2601.5002133235957, 1272],
					[2600.7192814021837, 1263.5],
					[2598.9697791572407, 1255.5],
					[2602.2188547549918, 1246.25],
					[2606.250071107865, 1240.75],
					[2611.000071107865, 1235.25],
					[2613.965512685322, 1229.75],
					[2613.215726008918, 1224.75],
					[2609.4667926268976, 1219.5],
					[2607.2174325976857, 1215.75],
					[2608.467077058359, 1210.25],
					[2609.216863734763, 1203]
				]
			]
        ]
    }
};

var ContinentSunrise = {
	type: "Feature",
    properties: {
        popupContent: "Атеншьёг",
		style: {
			weight: 2,
            color: "white",
			opacity: 1,
            fillColor: "#009966",
            fillOpacity: 0.4,
			className: "bounds"
		},
		continent: CONTINENT_SUNRISE 
    },
    geometry: {
        type: "MultiPolygon",
		coordinates: [
			[
				[
					[2095.7498577842694, 4564],
					[2095.7506399707877, 4546.5],
					[2090.935291842563, 4529],
					[2075.7216990696043, 4511.5],
					[2065.4746144920823, 4496.25],
					[2062.475467786466, 4483.5],
					[2061.222267932527, 4474],
					[2058.999928892135, 4461.5],
					[2057.7232634426414, 4450.5],
					[2056.473618981968, 4441.5],
					[2054.4741878448904, 4434],
					[2046.9763210808499, 4421.5],
					[2021.733502975247, 4414.5],
					[2014.7354939954757, 4410.5],
					[2004.7383383100882, 4387],
					[1998, 4386.75],
					[1988.4929603213338, 4387.5],
					[1981.7498577842694, 4386.25],
					[1976.2464446067343, 4382.75],
					[1966, 4382],
					[1955.232436357267, 4376.75],
					[1952.233289651651, 4370.75],
					[1946.7348540246878, 4364.25],
					[1943.7357073190717, 4359.25],
					[1939.2369872606473, 4354.25],
					[1936.7376983393003, 4349.25],
					[1938.4872005842433, 4343.75],
					[1940.7501422157306, 4338],
					[1944.235565103341, 4335.25],
					[1949.4996444606734, 4335.75],
					[1952, 4331.5],
					[1947.5020621280942, 4328.75],
					[1941.9862050741287, 4328.5],
					[1934.2384094179536, 4332],
					[1927.2404004381824, 4331.75],
					[1923.9665793033018, 4324.75],
					[1920.2176459212815, 4318.75],
					[1919.7177881370121, 4311.25],
					[1922.2505688629226, 4304],
					[1917.7183569999347, 4298],
					[1911.7200635887023, 4283.75],
					[1899.5, 4281.25],
					[1892.7254677864662, 4277.75],
					[1885.9766055123112, 4269.75],
					[1882.9996444606734, 4262.25],
					[1877.7289520718666, 4257.75],
					[1875.2296631505199, 4249.25],
					[1879.2285254246747, 4244.75],
					[1881.9777432381563, 4238.25],
					[1881.7278143460217, 4231],
					[1885.4767477280418, 4229],
					[1889.9754677864662, 4225.25],
					[1894.224258952756, 4222.75],
					[1901.0000711078653, 4223.25],
					[1905.4710590988166, 4224.5],
					[1909.969779157241, 4222.75],
					[1913.718712539261, 4220.75],
					[1916.2500711078653, 4217.75],
					[1910.75, 4216.5],
					[1903.9992889213468, 4215],
					[1897.7494311370774, 4213.5],
					[1895.498648950559, 4209.25],
					[1896.2469423617915, 4204.25],
					[1899.994809125832, 4200.5],
					[1906.4916092718927, 4195],
					[1913.750639970788, 4192.5],
					[1920.5001422157306, 4189.75],
					[1918.7498577842694, 4183.5],
					[1918.995022449428, 4178.25],
					[1919.995022449428, 4173.25],
					[1925.7440980471788, 4171.75],
					[1935.7421781348153, 4171.5],
					[1937.714801606669, 4166.25],
					[1941.2138060965544, 4160.25],
					[1948.711672860595, 4158.25],
					[1954.210108487558, 4158.25],
					[1958.208970761713, 4149.75],
					[1957.7091129774437, 4127.25],
					[1960.2084018987905, 4121.25],
					[1968.7059842313697, 4117.25],
					[1975.4540643190062, 4116],
					[1984.4716990696045, 4118.5],
					[1990.2200635887023, 4124],
					[1991.4697080493756, 4132],
					[1996.4682858920694, 4135.75],
					[2003.7162237639752, 4139],
					[2008.2149438223994, 4144.25],
					[2013.7133794493625, 4140.75],
					[2015.4628816943055, 4134.25],
					[2014.2132372336318, 4125.75],
					[2011.2501422157306, 4116.5],
					[2004.4999288921347, 4110.25],
					[1997.9924625662766, 4104.5],
					[1991.9999288921347, 4097.75],
					[1989.9947380179667, 4091.25],
					[1982.9967290381956, 4088],
					[1973.9992889213468, 4081.75],
					[1966.001564373037, 4073.5],
					[1964.5019910202288, 4065.75],
					[1965.7516354809022, 4057.5],
					[1967.2512088337103, 4051.5],
					[1973.2495022449427, 4050],
					[1980.997297901118, 4047.25],
					[1977.7482223033671, 4040],
					[1971.5, 4033.75],
					[1971.5, 4025.75],
					[1971.9998577842694, 4018],
					[1973.749360029212, 4012.25],
					[1978.2480800876365, 4007],
					[1985.2460890674076, 4008.75],
					[1989.9947380179667, 4013],
					[1993.4937425078522, 4018],
					[1994.2435291842562, 4024.75],
					[1995.7431025370645, 4030.25],
					[1995.9930314291992, 4040],
					[1999.7419648112193, 4043.25],
					[2004.2406848696437, 4047.75],
					[2009.25, 4048.75],
					[2014.237840555031, 4053.5],
					[2018.98648950559, 4054.5],
					[2023.2352806718798, 4052.75],
					[2026.7342851617652, 4050.75],
					[2025.7345695932265, 4047],
					[2022.235565103341, 4043],
					[2018.98648950559, 4039],
					[2012.9881960943576, 4035],
					[2006.9899026831251, 4033.75],
					[2002.7411115168356, 4028.25],
					[2001.2415381640274, 4023],
					[2001.491467056162, 4017],
					[2003.4908981932397, 4013],
					[2007.2398315752598, 4007],
					[2015.7374139078393, 4004],
					[2019.9862050741287, 3999],
					[2026.2344273774959, 3996.25],
					[2031.9827918965937, 4002.5],
					[2035.2318674943447, 4009],
					[2042.9796631505199, 4014.25],
					[2048.478098777483, 4009.5],
					[2050.9773876988297, 4003],
					[2046.2287387482706, 3998],
					[2040.4803742291729, 3993.25],
					[2039.2307297684995, 3986.5],
					[2040.4803742291729, 3980],
					[2044.7291653954626, 3975.75],
					[2051.2198502651063, 3974.25],
					[2058.9676459212815, 3973.5],
					[2064.21615265611, 3970],
					[2067.9650860381303, 3963.25],
					[2071.2498577842694, 3957.5],
					[2064.500071107865, 3953.5],
					[2057.9679303527428, 3951.75],
					[2052.9693525100492, 3955.25],
					[2047.9707746673553, 3958.5],
					[2039.9730501190454, 3958.75],
					[2030.9756100021968, 3956],
					[2023.9776010224257, 3951.5],
					[2022.4780276696176, 3945.25],
					[2026.7268188359071, 3939],
					[2031.9753255707355, 3936.75],
					[2038.2235478741027, 3934.5],
					[2045.4714857460085, 3934.25],
					[2049.9702058044327, 3931.25],
					[2049.220419128029, 3924.25],
					[2052.9693525100492, 3918.25],
					[2056.2184281078, 3914.5],
					[2061.217005950494, 3912.75],
					[2059.96736148982, 3906.25],
					[2057.9679303527428, 3898.75],
					[2056.718285892069, 3890.75],
					[2060.736631721321, 3886.5],
					[2062.7360628583983, 3880.5],
					[2066.4849962404182, 3875.5],
					[2074.4827207887283, 3875.25],
					[2083.480160905577, 3877.5],
					[2092.5, 3883.5],
					[2098.749928892135, 3884.25],
					[2106.2236900898333, 3885.5],
					[2113.2216990696043, 3889.75],
					[2118.4702058044327, 3893.5],
					[2127.4676459212815, 3891.75],
					[2133.2503555393264, 3887.75],
					[2134.9997866764043, 3882],
					[2140.7219123932005, 3880.25],
					[2145.970419128029, 3877],
					[2152.9684281078, 3876],
					[2158.2169348426282, 3874.5],
					[2165.2149438223996, 3873.5],
					[2172.483289651651, 3876],
					[2176.7502133235957, 3881.75],
					[2178.731511955018, 3888.75],
					[2180.9808719842304, 3895],
					[2186.4793076111932, 3896.75],
					[2192.5, 3897.75],
					[2199, 3901.5],
					[2205.9997155685387, 3907],
					[2212.0003555393264, 3911.5],
					[2218.970063588702, 3918.75],
					[2225.468214784204, 3923],
					[2232.2162948718405, 3930.75],
					[2237.750497755057, 3941.5],
					[2247, 3948.75],
					[2253.4620283999216, 3959.25],
					[2249.000497755057, 3971.25],
					[2249.213237233632, 3981.75],
					[2253.5, 3989.5],
					[2253.961886184191, 3999.5],
					[2253.7507110786532, 4008.75],
					[2256.2510666179796, 4016],
					[2262.2095396246355, 4017.5],
					[2270.9570508493493, 4017.5],
					[2278.25, 4020.75],
					[2283.7034243482185, 4019.25],
					[2288.951931083047, 4014.75],
					[2298.7500711078656, 4014.75],
					[2310.73542288761, 4022.75],
					[2323.0002133235957, 4031],
					[2328.2304453370384, 4040],
					[2332.0014221573065, 4053],
					[2339.9771032673684, 4060.5],
					[2344.975681110062, 4073.25],
					[2347.7502844314613, 4087.5],
					[2351.729947581981, 4100.25],
					[2355.228952071867, 4117],
					[2358.228098777483, 4128],
					[2362.976747728042, 4136.75],
					[2370.9744722763517, 4143],
					[2383.7017888673163, 4151.75],
					[2401.9465979931483, 4159.25],
					[2406.1953891594376, 4154.25],
					[2413.193398139209, 4153],
					[2435.936927323465, 4153.25],
					[2441.435362950428, 4147.25],
					[2448.933229714469, 4139.75],
					[2469.6773277616476, 4137.75],
					[2483.2497866764043, 4120],
					[2489.6716391324226, 4117.5],
					[2505.9170171211767, 4117.75],
					[2513.5019199123635, 4113.5],
					[2519.7497866764043, 4101],
					[2524.4770321595033, 4097],
					[2540.25, 4095.5],
					[2550.25, 4088],
					[2551.9692102943186, 4081.5],
					[2555.9680725684734, 4072.75],
					[2559.9669348426282, 4063.25],
					[2563.5, 4053],
					[2569.475183355005, 4038.5],
					[2574.973618981968, 4018.5],
					[2586.9702058044327, 3979.25],
					[2588.4697791572407, 3940],
					[2589.9693525100492, 3934],
					[2602.9746144920823, 3919.25],
					[2604.482863004459, 3869.25],
					[2607.4997155685387, 3853],
					[2616.9793076111932, 3828],
					[2626.9764632965807, 3814],
					[2637.0000711078656, 3804.75],
					[2649.2500711078656, 3782.25],
					[2651.9748989235436, 3740.25],
					[2643.4773165909646, 3698],
					[2643.4773165909646, 3687.75],
					[2647.726107757254, 3679],
					[2652.724685599948, 3672.5],
					[2656.7235478741027, 3665.25],
					[2666, 3662.25],
					[2682.4755388943313, 3658.5],
					[2696.25, 3651.5],
					[2707.229023179732, 3643.25],
					[2722.224756707813, 3639],
					[2730.5, 3635.25],
					[2737.7203480201633, 3635.5],
					[2746.2179303527428, 3639],
					[2752.0006399707877, 3641],
					[2756.5002844314613, 3639],
					[2760.7309430920955, 3634.75],
					[2765.979449826924, 3629],
					[2772.477601022426, 3624.25],
					[2780.5, 3622.75],
					[2787.7232634426414, 3622.25],
					[2795.970916883086, 3622],
					[2801.969210294318, 3620],
					[2808.9672192740895, 3617.75],
					[2817, 3615.75],
					[2824.46281058644, 3615.75],
					[2834.210037379693, 3619.5],
					[2841.4579752515983, 3624],
					[2848.7059131235046, 3631.5],
					[2857.2034954560836, 3638.5],
					[2864.201504435855, 3646.75],
					[2865.9510066807975, 3655.5],
					[2866.7007933572017, 3667.5],
					[2866.450864465067, 3678.25],
					[2866.450864465067, 3688.5],
					[2866.9507222493366, 3701],
					[2872.205415368447, 3711],
					[2883.2022866223733, 3730],
					[2891.449940062818, 3744],
					[2901.69702464034, 3757.75],
					[2913.75, 3766.25],
					[2946.6842252245833, 3784.75],
					[2953.977601022426, 3789.5],
					[2960.7502844314613, 3803.5],
					[2969.7231212269107, 3804],
					[2979.7202769122982, 3805.5],
					[2987.7357073190715, 3810.5],
					[2993.9839296224386, 3820],
					[2995.233574083112, 3830],
					[2994.9836451909773, 3839],
					[2995.233574083112, 3849],
					[2993.9839296224386, 3856.75],
					[2990.9847829168225, 3863.25],
					[2989.23528067188, 3871],
					[2989.23528067188, 3879.5],
					[2988.235565103341, 3888.25],
					[2983.7368450449167, 3900.75],
					[2982.7497866764043, 3915.5],
					[2969.7408270853743, 3935.25],
					[2967.491467056162, 3956],
					[2964.2500711078656, 3990.75],
					[2970.740542653913, 4003.25],
					[2970.2400448988556, 4016.25],
					[2973.4891204966066, 4032.25],
					[2975.4885516336844, 4039.75],
					[2975.2386227415495, 4047.25],
					[2978.737627231435, 4052.25],
					[2985.7356362112064, 4057.75],
					[2988.7347829168225, 4065.75],
					[2990.2343562696306, 4078],
					[2994.733076328055, 4084.75],
					[2999.981583062883, 4089.5],
					[3001.2502844314613, 4097.75],
					[2999.2316541707487, 4109],
					[2997.4821519258057, 4117.75],
					[2990.750497755057, 4124.5],
					[2979.737200584243, 4129],
					[2969.490116006721, 4133.25],
					[2960.742604782007, 4135.25],
					[2955.7440269393137, 4139.25],
					[2956.993671399987, 4145],
					[2961.742320350546, 4150.25],
					[2966.499502244943, 4155.75],
					[2965.7411826247007, 4173.5],
					[2961.2424625662766, 4180],
					[2952.744880233697, 4184.75],
					[2946.746586822465, 4186.75],
					[2943.9973690089832, 4193.5],
					[2944.997084577522, 4213.75],
					[2949.495804635946, 4223],
					[2963.491822595489, 4245],
					[2982.23648950559, 4265],
					[2992.9834318673816, 4271.5],
					[2999.981440847153, 4280],
					[3006.4795920426545, 4288],
					[3015.976889943772, 4295.75],
					[3022.2499288921344, 4300.5],
					[3028.7232634426414, 4305.75],
					[3033.4719123932005, 4313.5],
					[3040.2500711078656, 4315.5],
					[3045.2206324516246, 4314],
					[3051.4688547549918, 4311.25],
					[3057.967005950494, 4313],
					[3065.714801606669, 4317],
					[3069.2138060965544, 4325.5],
					[3064.9650149302647, 4331.25],
					[3058.7167926268976, 4335.75],
					[3053.7509955101145, 4342],
					[3052.218641431396, 4346.75],
					[3054.2180725684734, 4352.25],
					[3058.7167926268976, 4360.75],
					[3065.464872714534, 4372.5],
					[3069.2138060965544, 4379.75],
					[3075.7498577842694, 4400],
					[3086.4588996538478, 4414],
					[3094.7065530942923, 4418],
					[3102.954206534737, 4419.5],
					[3115.450651141471, 4419.5],
					[3126.6974512875317, 4418],
					[3137.944251433593, 4418],
					[3149.690909363923, 4423.25],
					[3160.687780617849, 4427],
					[3174, 4432.75],
					[3184.9308831549133, 4445],
					[3199.5001422157306, 4462.75],
					[3217.671568024557, 4487.75],
					[3223.5002133235957, 4507.25],
					[3243.41424391443, 4564]
				]
			],
			[
				[
					[1888.499786676404, 4301.75],
					[1888.499786676404, 4301.75],
					[1888.75, 4308],
					[1888.5003555393266, 4315.25],
					[1883.9989333820204, 4319.5],
					[1876.251137725845, 4318.75],
					[1868.253413177535, 4316],
					[1862.005190874168, 4311.25],
					[1857.2565419236091, 4306],
					[1857.2565419236091, 4289.75],
					[1860.7555464134946, 4284.25],
					[1866.2539820404577, 4282.75],
					[1872.2522754516901, 4283.5],
					[1876.7509955101145, 4287.5],
					[1877.0009244022492, 4292],
					[1880.25, 4294.5],
					[1884.998648950559, 4297.25],
					[1888.75, 4308],
					[1888.5003555393266, 4315.25],
					[1883.9989333820204, 4319.5],
					[1876.251137725845, 4318.75],
					[1868.253413177535, 4316],
					[1862.005190874168, 4311.25],
					[1857.2565419236091, 4306],
					[1857.2565419236091, 4289.75],
					[1860.7555464134946, 4284.25],
					[1866.2539820404577, 4282.75],
					[1872.2522754516901, 4283.5],
					[1876.7509955101145, 4287.5],
					[1877.0009244022492, 4292],
					[1880.25, 4294.5],
					[1884.998648950559, 4297.25]
				]
			],
			[
				[
					[2004.738053878627, 3879],
					[2009.486702829186, 3883.5],
					[2012.2359206426675, 3888.75],
					[2015.4849962404185, 3893.5],
					[2020.9834318673816, 3895.75],
					[2023.4827207887283, 3900],
					[2034.2296631505199, 3901.25],
					[2038.4784543168093, 3898.75],
					[2038.4784543168093, 3893],
					[2036.5002844314613, 3887.75],
					[2039.2282409932134, 3884.75],
					[2040.477885453887, 3880.75],
					[2042.9771743752337, 3876],
					[2042.2273876988297, 3872],
					[2036.479023179732, 3869.75],
					[2030.2308008763648, 3867],
					[2024.2325074651324, 3864.75],
					[2018.7340718381693, 3865],
					[2012.9857073190717, 3862.5],
					[2009.2367739370513, 3865],
					[2006.48755612357, 3870],
					[2003.988267202223, 3874.25]
				]
			],
			[
				[
					[2130.7288809640013, 3736.25],
					[2134.727743238156, 3739.5],
					[2139.72632108085, 3741],
					[2144.7248989235436, 3744.75],
					[2151.75, 3744.25],
					[2153.222481256123, 3738.25],
					[2151.9728367954494, 3732.25],
					[2154.722054608931, 3727.5],
					[2155.2219123932005, 3721.25],
					[2151.9728367954494, 3717.5],
					[2146.724330060621, 3714.25],
					[2139.72632108085, 3715.25],
					[2133.7280276696174, 3718.25],
					[2134.977672130291, 3724.75],
					[2130.478952071867, 3727],
					[2128.9793787190583, 3731]
				]
			],
			[
				[
					[2300.4845695932268, 3540],
					[2303.7336451909773, 3547],
					[2308.4822941415364, 3553],
					[2314.9804453370384, 3555],
					[2321.9784543168093, 3557],
					[2329.226392188715, 3560.5],
					[2350.9702058044327, 3554],
					[2364.966223763975, 3550.75],
					[2378.462383939248, 3538.75],
					[2379.9619572920565, 3530.5],
					[2377.7497866764043, 3524.5],
					[2377.712597262844, 3517.75],
					[2372.963948312285, 3510.75],
					[2351, 3499.5],
					[2340.9730501190456, 3490.25],
					[2333.9750411392743, 3487],
					[2323.4780276696174, 3488],
					[2309.9818674943444, 3495.5]
				]
			],
			[
				[
					[2289.4784543168093, 3877.5],
					[2289.4784543168093, 3885.75],
					[2286.729236503328, 3894.75],
					[2286.4793076111932, 3902.25],
					[2288.7286676404055, 3910],
					[2289.9783121010787, 3916.5],
					[2292.4776010224255, 3922.25],
					[2296.97632108085, 3926],
					[2302.9746144920823, 3928.5],
					[2306.9734767662376, 3932.75],
					[2307.223405658372, 3938.75],
					[2302.724685599948, 3942.25],
					[2295.7266766201765, 3943.75],
					[2289.7283832089443, 3947.25],
					[2284, 3950.75],
					[2282.4804453370384, 3956.25],
					[2283.7300897977116, 3961],
					[2285.979449826924, 3966.5],
					[2291.4778854538868, 3969],
					[2297.726107757254, 3969.25],
					[2304.9740456291597, 3968.25],
					[2307.7232634426414, 3964.25],
					[2312.4719123932005, 3953.25],
					[2319.219992480837, 3950.25],
					[2322.7189969707224, 3944.75],
					[2324.4684992156654, 3936.75],
					[2323.2188547549918, 3931.25],
					[2319.4699213729714, 3926.25],
					[2320.4696369415105, 3910.25],
					[2316.9706324516246, 3905],
					[2310.472481256123, 3904.5],
					[2305.9737611976984, 3901.25],
					[2304.7241167370253, 3890],
					[2303.5002844314613, 3884],
					[2301.9748989235436, 3879.5],
					[2299.475610002197, 3874.75],
					[2292.7275299145604, 3872.75]
				]
			],
			[
				[
					[2278.9814408471525, 3980.25],
					[2282.4804453370384, 3977.75],
					[2287.9788809640013, 3978],
					[2292.4776010224255, 3980.25],
					[2294.7269610516378, 3986.25],
					[2292.4776010224255, 3992.75],
					[2285.729520934789, 3995.5],
					[2279.2313697392874, 3995.75],
					[2273.732934112324, 3991.5],
					[2274.7326496808632, 3984.75]
				]
			],
			[
				[
					[3000.2248278156785, 3882],
					[3003.473903413429, 3889],
					[3007.722694579719, 3894.25],
					[3014.4707746673553, 3896],
					[3020.219139186453, 3893.5],
					[3023.7181436763385, 3887.5],
					[3025.2498577842694, 3881.5],
					[3027.2171481662244, 3875],
					[3029.216579303302, 3869],
					[3028.216863734763, 3861.5],
					[3028.216863734763, 3853.5],
					[3027.9669348426282, 3847],
					[3028.7167215190325, 3838.5],
					[3024.717859244877, 3834.5],
					[3016.970063588702, 3835.25],
					[3014.9706324516246, 3845],
					[3012.221414638143, 3861.25],
					[3004.7235478741027, 3866],
					[3000.9746144920823, 3873.5]
				]
			],
			[
				[
					[3048.967788137012, 4262.25],
					[3051.467077058359, 4267.75],
					[3054.2162948718405, 4273],
					[3060.2145882830728, 4275.5],
					[3066.712739478575, 4276.5],
					[3069.2120283999216, 4281.5],
					[3071.5002133235957, 4288.75],
					[3072.711032889807, 4294.25],
					[3073.7107484583457, 4299.25],
					[3078.2094685167704, 4303.5],
					[3084.2077619280026, 4305.25],
					[3093.2052020448514, 4304.25],
					[3097.204064319006, 4301.25],
					[3097.9538509954104, 4283.5],
					[3095.9544198583326, 4269.5],
					[3093.7050598291207, 4262.75],
					[3082.75, 4248.75],
					[3081.2502844314613, 4232],
					[3080.708757438117, 4211.5],
					[3076.7098951639623, 4201],
					[3068.9997866764043, 4197.5],
					[3060.4645171752077, 4199.5],
					[3052.4667926268976, 4208.5],
					[3045.718712539261, 4219.5],
					[3046.7184281078, 4231.25],
					[3049.4997866764043, 4238.5],
					[3047.468214784204, 4248],
					[3046.9683569999347, 4256]
				]
			],
			[
				[
					[3138.203353240353, 4258],
					[3139.702926593161, 4264],
					[3143.4518599751814, 4269.25],
					[3142.202215514508, 4276],
					[3139.4529977010266, 4283],
					[3134.7043487504675, 4290],
					[3135.4541354268717, 4298.5],
					[3137.2036376718142, 4305.75],
					[3137.9534243482185, 4312.5],
					[3134.9542776426024, 4317.25],
					[3135.4541354268717, 4327.75],
					[3127.706339770696, 4334],
					[3124.2073352808106, 4342],
					[3127.2064819864268, 4353],
					[3133.2047753976594, 4360],
					[3142.4521444066427, 4359.5],
					[3154.698660121242, 4360],
					[3162.4464557774177, 4358.75],
					[3169.4444647571886, 4356],
					[3175.9999288921344, 4355.25],
					[3180.4997866764043, 4346.25],
					[3181.4410515796535, 4338.25],
					[3180.6912649032492, 4331.25],
					[3178.1919759819025, 4325.5],
					[3173.7502844314613, 4320.5],
					[3172.6935403549396, 4313.75],
					[3172.4436114628047, 4309.25],
					[3168.694678080785, 4306.75],
					[3163.4461713459564, 4308.25],
					[3157.7500711078656, 4308],
					[3155.9483045819156, 4303.75],
					[3155.5000711078656, 4297.75],
					[3153.9998577842694, 4293],
					[3155.198517905512, 4288.25],
					[3155.198517905512, 4283],
					[3154.4487312291076, 4276.5],
					[3154.750497755057, 4268.75],
					[3158.9474512875317, 4265.5],
					[3164.19595802236, 4262.5],
					[3166.945175835842, 4258.5],
					[3170.5001422157306, 4253.5],
					[3174.5, 4250.5],
					[3177.692118197633, 4247.25],
					[3176.44247373696, 4242],
					[3171.9437536785354, 4235.75],
					[3162.696384669552, 4228.5],
					[3154.948589013377, 4228.5],
					[3148.9502956021447, 4231.75],
					[3142.952002190912, 4237.5],
					[3143.4518599751814, 4245],
					[3138.2500711078656, 4250.75]
				]
			]
		]
	}
}