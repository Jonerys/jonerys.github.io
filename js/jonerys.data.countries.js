
var countries = {
	type: 'FeatureCollection',
    features: [
	{
		type: 'Feature',
		icontype: ICON_CAPITAL,
		geometry: {
			type: 'Point',
            coordinates: [1568, 1927]
		},
		properties: {
			//id: 0,
			name: 'Королевство Авемор',
			shortname: 'Авемор',
			ISO_3166_1_a2: 'Av',
			continent: CONTINENT_REBIRTH_WEST,
			url: '21530',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1695, 2620]
		},
		properties: {
			//id: 1,
			name: 'Королевство Аглардор',
			shortname: 'Аглардор',
			ISO_3166_1_a2: 'Ag',
			continent: CONTINENT_REBIRTH_EAST,
			url: '27385',
			capital: 'Аглар',
			leader: 'Маргол',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2047, 2555]
        },
        properties: {
			//id: 2,
            name: 'Королевство Айзэн',
            shortname: 'Айзэн',
			ISO_3166_1_a2: 'Az',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '31402',
			capital: 'Хельтис',
			leader: 'де В\'альтер Мудрый Кёнинг I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2017, 1552]
        },
        properties: {
			//id: 3,
            name: 'Каганат Ай-Суру',
            shortname: 'Ай-Суру',
			ISO_3166_1_a2: 'Sr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '37224',
			capital: 'Айтернак',
			leader: 'Оспаривается',
			government: 'Каганат',
			status: STATUS_MINOR,
			player: USERS[IMPCOM],
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
            coordinates: [1913, 2190]
        },
        properties: {
			//id: 4,
            name: 'Халифат Ай\'Шераф',
            shortname: 'Ай\'Шераф',
			ISO_3166_1_a2: 'Is',
			continent: CONTINENT_REBIRTH_EAST,
			url: '47282',
			capital: 'Кердишахаль',
			leader: 'Абдула-аль-Алмас',
			government: 'Халифат',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1367, 3614]
        },
        properties: {
			//id: 5,
            name: 'Герцогство Акрония',
            shortname: 'Акрония',
			ISO_3166_1_a2: 'Ak',
			continent: CONTINENT_LILLY,
			url: '49527',
			capital: 'Олрен',
			leader: 'Фредерик Акронский (Хогландский)',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1569, 2639]
        },
        properties: {
			//id: 6,
            name: 'Халифат Алеман',
            shortname: 'Алеман',
			ISO_3166_1_a2: 'Al',
			continent: CONTINENT_REBIRTH_EAST,
			url: '30263',
			capital: 'Аррани',
			leader: 'Абдулла ибн Рашит',
			government: 'Халифат',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1149, 764]
		},
		properties: {
			//id: 7,
			name: 'Королевство Аракад',
			shortname: 'Аракад',
			ISO_3166_1_a2: 'Aa',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '21175',
			capital: 'Фариа',
			leader: 'Робар I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1388, 1876]
		},
		properties: {
			//id: 8,
			name: 'Аспийская империя',
			shortname: 'Аспия',
			ISO_3166_1_a2: 'As',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '17818',
			capital: 'Кёнигштадт',
			leader: 'Фридрих Вильгельм I Адлербург',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_GREAT,
			player: USERS[KAISER],
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
            coordinates: [2025, 2073]
        },
        properties: {
			//id: 9,
            name: 'Эльфийское королевство Линдорея',
            shortname: 'Линдорея',
			ISO_3166_1_a2: 'Ao',
			continent: CONTINENT_REBIRTH_WEST,
			url: '23528',
			capital: NONE,
			leader: 'Аэнарион',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[ORK],
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
            coordinates: [2195, 2601]
        },
        properties: {
			//id: 10,
            name: 'Королевство Атеншьёг',
            shortname: 'Атеншьёг',
			ISO_3166_1_a2: 'At',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '61459',
			capital: 'Драц',
			leader: 'Ференц VI Итертин',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[ENKELTEA],
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
            coordinates: [2711, 3163]
        },
        properties: {
			//id: 11,
            name: 'Атлантия',
            shortname: 'Атлантия',
			ISO_3166_1_a2: 'Ca',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '56318',
			capital: 'Атлантия',
			leader: 'Окторус I Великий',
			government: 'Представительская монархия',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2028, 2613]
        },
        properties: {
			//id: 12,
            name: 'Великое Герцогство Аугебург-Хоэнхоф',
            shortname: 'Аугебург-Хоэнхоф',
			ISO_3166_1_a2: 'Au',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '58430',
			capital: 'Альтштедт',
			leader: 'Карл III Маттиас Лейденфельдт-Хоэнхоф',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[CORPORAL],
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
            coordinates: [2235, 1826]
        },
        properties: {
			//id: 13,
            name: 'Герцогство Аэт\'Дайне',
            shortname: 'Аэт\'Дайне',
			ISO_3166_1_a2: 'An',
			continent: CONTINENT_REBIRTH_WEST,
			url: '61137',
			capital: 'Аэталь',
			leader: 'Джейко IV Тера-Палед',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[TINUSEC],
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
            coordinates: [1288, 2669]
        },
        properties: {
			//id: 14,
            name: 'Имамат Бахчистан',
            shortname: 'Бахчистан',
			ISO_3166_1_a2: 'Bx',
			continent: CONTINENT_REBIRTH_EAST,
			url: '59173',
			capital: 'Бахчин-Абад',
			leader: 'Фарис Изетбег-Заде',
			government: GOV_THEOCRACY,
			status: STATUS_MINOR,
			player: USERS[NIKTOK],
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
            coordinates: [1148, 3734]
        },
        properties: {
			//id: 15,
            name: 'Белозерия',
            shortname: 'Белозерия',
			ISO_3166_1_a2: 'Bz',
			continent: CONTINENT_LILLY,
			url: NONE,
			capital: 'Вечеград',
			leader: 'Совет Господ',
			government: 'Олигархическая республика',
			status: STATUS_MINOR,
			player: USERS[IMPCOM],
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
            coordinates: [1987, 2005]
        },
        properties: {
			//id: 16,
            name: 'Королевство Берглэнд',
            shortname: 'Берглэнд',
			ISO_3166_1_a2: 'Bg',
			continent: CONTINENT_REBIRTH_WEST,
			url: '39754',
			capital: 'Беринбург',
			leader: 'Малькольм I',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1173, 2831]
        },
        properties: {
			//id: 17,
            name: 'Королевство Болнисия',
            shortname: 'Болнисия',
			ISO_3166_1_a2: 'Bn',
			continent: CONTINENT_REBIRTH_EAST,
			url: '19266',
			capital: 'Руджелл',
			leader: 'Валерий Максимин',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1730, 1808]
        },
        properties: {
			//id: 18,
            name: 'Герцогство Бриар',
            shortname: 'Бриар',
			ISO_3166_1_a2: 'Br',
			continent: CONTINENT_REBIRTH_WEST,
			url: '41142',
			capital: 'Бриар',
			leader: 'Макабр дё Бриар',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
			flag: {
				image: 'Flag_of_Briar.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1895, 2634]
        },
        properties: {
			//id: 19,
            name: 'Варгренское Королевство',
            shortname: 'Варгрен',
			ISO_3166_1_a2: 'Wr',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '49371',
			capital: 'Кернсгольм',
			leader: 'Фредерик I Дюбуа-Кремвельский',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[KAISER],
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
            coordinates: [1262, 2620]
        },
        properties: {
			//id: 20,
            name: 'Республика Вельденвальд',
            shortname: 'Вельденвальд',
			ISO_3166_1_a2: 'We',
			continent: CONTINENT_REBIRTH_EAST,
			url: '58777',
			capital: 'Вальденборг',
			leader: 'Мартин-Эрик Эстен-Винтерфельд',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			player: USERS[NIKTOK],
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
            coordinates: [1594, 1365]
        },
        properties: {
			//id: 21,
            name: 'Королевство Верисс',
            shortname: 'Верисс',
			ISO_3166_1_a2: 'Vs',
			continent: CONTINENT_REBIRTH_WEST,
			url: '23836',
			capital: 'Правен',
			leader: 'Фридрих I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1495, 2032]
        },
        properties: {
			//id: 22,
            name: 'Королевство Вестландия',
            shortname: 'Вестландия',
			ISO_3166_1_a2: 'Ws',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '23904',
			capital: 'Концгельм',
			leader: 'Вильгельм I Диссель-Контабергин',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[KAISER],
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
            coordinates: [866, 3516]
        },
        properties: {
			//id: 23,
            name: 'Вивольдовское королевство',
            shortname: 'Вивольд',
			ISO_3166_1_a2: 'Vv',
			continent: CONTINENT_LILLY,
			url: '57199',
			capital: 'Генхцберг',
			leader: 'Вивольд I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1286, 4034]
        },
        properties: {
			//id: 24,
            name: 'Всевеликое Царствие Вятическое',
            shortname: 'Ц. Вятическое',
			ISO_3166_1_a2: 'Vt',
			continent: CONTINENT_LILLY,
			url: '53229',
			capital: 'Которин',
			leader: 'Ярополк Кроншков',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2434, 2329]
        },
        properties: {
			//id: 25,
            name: 'Газоцко-Меран',
            shortname: 'Газоцко-Меран',
			ISO_3166_1_a2: 'Gz',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: NO_TOPIC,
			capital: 'Велика Мостава',
			leader: 'Штефан Дрекслер-Завала',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			player: USERS[NIKTOK],
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
            coordinates: [1759, 1687]
        },
        properties: {
			//id: 26,
            name: 'Гатулат Унур',
            shortname: 'Гатулат Унур',
			ISO_3166_1_a2: 'Un',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: 'Брауд',
			leader: 'Гуннар Высокий',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			player: USERS[RAVAN],
			flag: {
				image: 'Flag_of_Unur.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1913, 4451]
        },
        properties: {
			//id: 27,
            name: 'Гачиванг',
            shortname: 'Гачиванг',
			ISO_3166_1_a2: 'Hv',
			continent: CONTINENT_SUNRISE,
			url: NO_TOPIC,
			capital: 'Гачиванг',
			leaderLabel: 'Губернатор',
			leader: 'Уильям Керрингтон',
			status: STATUS_COLONY + ' (Тиердаль)',
			player: USERS[MAYAK57],
			playerUrl: USERS[MAYAK57].url,
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
            coordinates: [2429, 2152]
        },
        properties: {
			//id: 28,
            name: 'Геленийская конфедерация',
            shortname: 'Геления',
			ISO_3166_1_a2: 'Ge',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '61499',
			capital: 'Дилдойл',
			leaderLabel: 'Губернатор',
			leader: 'Джеймс Ливингем',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_PROTECTORATE + ' (Тиердаль)',
			player: USERS[ENKELTEA],
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
            coordinates: [2475, 2459]
        },
        properties: {
			//id: 29,
            name: 'Графство Гринвуд',
            shortname: 'Гринвуд',
			ISO_3166_1_a2: 'Gw',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '31440',
			capital: 'Гринвэй',
			leader: 'Рональд I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [906, 3365]
        },
        properties: {
			//id: 30,
            name: 'Королевство Гросское',
            shortname: 'Гроссия',
			ISO_3166_1_a2: 'Gs',
			continent: CONTINENT_LILLY,
			url: '32894',
			capital: UNKNOWN,
			leader: 'Родриго IV Дейл',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1894, 2296]
        },
        properties: {
			//id: 31,
            name: 'Дария (север)',
            shortname: 'Дария (север)',
			ISO_3166_1_a2: 'Da',
			continent: CONTINENT_REBIRTH_EAST,
			url: '37908',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1930, 2397]
        },
        properties: {
			//id: 32,
            name: 'Дария (юг)',
            shortname: 'Дария (юг)',
			ISO_3166_1_a2: 'Da',
			continent: CONTINENT_REBIRTH_EAST,
			url: '37908',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2582, 2470]
        },
        properties: {
			//id: 33,
            name: 'Графство Даркния',
            shortname: 'Даркния',
			ISO_3166_1_a2: 'Dk',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '49330',
			capital: 'Штэрнхолм',
			leader: 'Сандро Ассилум',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1929, 2111]
        },
        properties: {
			//id: 34,
            name: 'Деселийское королевство',
            shortname: 'Деселия',
			ISO_3166_1_a2: 'Ds',
			continent: CONTINENT_REBIRTH_EAST,
			url: '59009',
			capital: 'Сан-Гелиано',
			leader: 'Хосе VI де Нарриа',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[RAVAN],
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
            coordinates: [2068, 2586]
        },
        properties: {
			//id: 35,
            name: 'Графство Деслания',
            shortname: 'Деслания',
			ISO_3166_1_a2: 'Dl',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '24154',
			capital: UNKNOWN,
			leader: 'Генрих IV Блэкоурен',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [539, 1197]
        },
        properties: {
			//id: 36,
            name: 'Королевство Драгон Айленд',
            shortname: 'Драгон Айленд',
			ISO_3166_1_a2: 'Di',
			continent: CONTINENT_REBIRTH_NORTH,
			url: NO_TOPIC,
			capital: 'Гримнир',
			leader: UNKNOWN,
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
			flag: {
				image: 'Flag_of_Dragon_Island.webp'
			}
        }
    },
	{
        type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [2622, 3240]
        },
        properties: {
			//id: 37,
            name: 'Королевство Драмор',
            shortname: 'Драмор',
			ISO_3166_1_a2: 'Dm',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '40564',
			capital: 'Тайтонус',
			leader: 'Дамнар Безликий',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1850, 1891]
        },
        properties: {
			//id: 38,
            name: 'Дрэгленд',
            shortname: 'Дрэгленд',
			ISO_3166_1_a2: 'Dr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '22289',
			capital: UNKNOWN,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
			flag: {
				image: 'Flag_of_Dragland.webp'
			}
        }
    },
	{
		type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1354, 1745]
        },
        properties: {
			//id: 39,
            name: 'Королевство Каэрн',
            shortname: 'Каэрн',
			ISO_3166_1_a2: 'Ka',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '16181',
			capital: 'Кан',
			leader: UNKNOWN,
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1673, 1892]
        },
        properties: {
			//id: 40,
            name: 'Корденийская Империя',
            shortname: 'Кордения',
			ISO_3166_1_a2: 'Kr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '37235',
			capital: 'Марос',
			leader: 'Александра Боне',
			government: GOV_ABS_MONARCHY,
			status: STATUS_GREAT,
			player: USERS[NO_PLAYER],
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
            coordinates: [2037, 2898]
        },
        properties: {
			//id: 41,
            name: 'Конгорская империя',
            shortname: 'Конгор',
			ISO_3166_1_a2: 'Kg',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '58680',
			capital: 'Катралия',
			leader: 'Оливер I Аслетим',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[RAVAN],
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
            coordinates: [1117, 1995]
        },
        properties: {
			//id: 42,
            name: 'Кофердская империя',
            shortname: 'Коферд',
			ISO_3166_1_a2: 'Kf',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '61226',
			capital: 'Лангерра',
			leader: 'Карл I и Мария I Авершер-Адлербург',
			government: GOV_ABS_MONARCHY,
			status: STATUS_GREAT,
			player: USERS[KAISER],
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
            coordinates: [556, 4026]
        },
        properties: {
			//id: 43,
            name: 'Кратер',
            shortname: 'Кратер',
			ISO_3166_1_a2: 'Cr',
			continent: CONTINENT_LILLY,
			url: '55983',
			capital: NONE,
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1203, 2406]
        },
        properties: {
			//id: 44,
            name: 'Революционная Республика Круновия',
			shortname: 'Круновия',
			ISO_3166_1_a2: 'Ku',
			continent: CONTINENT_REBIRTH_EAST,
			url: '58777',
			capital: 'Червони Крунов',
			leader: 'Тадеуш Серпинский',
			government: GOV_SOCIALIST,
			status: STATUS_MINOR,
			player: USERS[NIKTOK],
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
            coordinates: [1290, 2576]
        },
        properties: {
			//id: 45,
            name: 'Республика Кьезанотто',
            shortname: 'Кьезанотто',
			ISO_3166_1_a2: 'Cs',
			continent: CONTINENT_REBIRTH_EAST,
			url: NO_TOPIC,
			capital: 'Сторрьён',
			leader: 'Альфред Фиорелли',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			player: USERS[NIKTOK],
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
            coordinates: [2421, 2741]
        },
        properties: {
			//id: 46,
            name: 'Кэтроэлн',
            shortname: 'Кэтроэлн',
			ISO_3166_1_a2: 'Ke',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '58781',
			capital: 'Кэтнон',
			leader: 'Гарольд I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2201, 2486]
        },
        properties: {
			//id: 47,
            name: 'Кюлинбургская конфедерация',
			shortname: 'Кюлинбург',
			ISO_3166_1_a2: 'Kl',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '38291',
			capital: 'Кюлинбург',
			leader: 'Иоганн I ван Тейнес-Роттебург',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			player: USERS[LECAPAV],
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
            coordinates: [573, 3467]
        },
        properties: {
			//id: 48,
            name: 'Королевство Лайтхайзен',
            shortname: 'Лайтхайзен',
			ISO_3166_1_a2: 'Lz',
			continent: CONTINENT_LILLY,
			url: '56409',
			capital: 'Тиалдари-дур',
			leader: 'Траллоск I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2142, 2534]
        },
        properties: {
			//id: 49,
            name: 'Латонский Союз',
			shortname: 'Латония',
			ISO_3166_1_a2: 'La',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '61236',
			capital: 'Терт',
			leader: 'Андрус Веберс',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			player: USERS[LECAPAV],
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
            coordinates: [2395, 4483]
        },
        properties: {
			//id: 50,
            name: 'Литланд',
            shortname: 'Литланд',
			ISO_3166_1_a2: 'Lt',
			continent: CONTINENT_REBIRTH_EAST,
			url: '21275',
			capital: 'Азар',
			leader: 'Ода Тори',
			government: GOV_ABS_MONARCHY,
			status: STATUS_PROTECTORATE + ' (Аспия)',
			player: USERS[NO_PLAYER],
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
            coordinates: [1221, 3508]
        },
        properties: {
			//id: 51,
            name: 'Литавия',
            shortname: 'Литавия',
			ISO_3166_1_a2: 'Li',
			continent: CONTINENT_LILLY,
			url: NO_TOPIC,
			capital: 'Старобряжен',
			leader: 'Витовт I Барда',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[IMPCOM],
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
            coordinates: [1682, 1653]
        },
        properties: {
			//id: 52,
            name: 'Локтарская Империя',
			shortname: 'Локтария',
			ISO_3166_1_a2: 'Lk',
			continent: CONTINENT_REBIRTH_WEST,
			url: '23879',
			capital: 'Вельдерон',
			leader: 'Рауль IV Дюбуа',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_GREAT,
			player: USERS[BLACKKING],
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
            coordinates: [1940, 1914]
        },
        properties: {
			//id: 53,
            name: 'Королевство Лытань',
			shortname: 'Лытань',
			ISO_3166_1_a2: 'Ly',
			continent: CONTINENT_REBIRTH_WEST,
			url: '34163',
			capital: 'Ньюбург',
			leader: 'Джерольд III',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1312, 1685]
        },
        properties: {
			//id: 54,
            name: 'Королевство Мализон',
			shortname: 'Мализон',
			ISO_3166_1_a2: 'Mz',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '61291',
			capital: 'Мальзтирр',
			leader: 'Жан де Куле "Бесстрашный"',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[ARMOFROME],
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
            coordinates: [1448, 2573]
        },
        properties: {
			//id: 55,
            name: 'Султанат Мамлакат',
			shortname: 'Мамлакат',
			ISO_3166_1_a2: 'Mm',
			continent: CONTINENT_REBIRTH_EAST,
			url: '19649',
			capital: 'Акбар',
			leader: 'Азамат Асад',
			government: 'Султанат',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1310, 2874]
        },
        properties: {
			//id: 56,
            name: 'Султанат Мариам',
			shortname: 'Мариам',
			ISO_3166_1_a2: 'Ma',
			continent: CONTINENT_REBIRTH_EAST,
			url: '26949',
			capital: 'Бадрийя',
			leader: 'Асир Барира I',
			government: 'Султанат',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [954, 2573]
        },
        properties: {
			//id: 57,
            name: 'Великое Мариенское Королевство',
			shortname: 'Мариен',
			continent: CONTINENT_REBIRTH_EAST,
			ISO_3166_1_a2: 'Mr',
			url: '57210',
			capital: 'Мариенбург',
			leader: 'Вебранд II',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2225, 2764]
        },
        properties: {
			//id: 58,
            name: 'Вольный город Мершент',
			shortname: 'Мершент',
			ISO_3166_1_a2: 'Me',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: 'Мершент',
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			player: USERS[RAVAN],
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
            coordinates: [1754, 2104]
        },
        properties: {
			//id: 59,
            name: 'Великое Герцогство Миленское',
			shortname: 'Милен',
			ISO_3166_1_a2: 'Ml',
			continent: CONTINENT_REBIRTH_WEST,
			url: '38880',
			capital: 'Милен',
			leader: 'Григорий Пришковский-Элебленский',
			status: STATUS_PROTECTORATE + ' (Кордения)',
			player: USERS[NO_PLAYER],
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
            coordinates: [2613, 2566]
        },
        properties: {
			//id: 60,
            name: 'Королевство Михельт',
			shortname: 'Михельт',
			ISO_3166_1_a2: 'Mh',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '22886',
			capital: 'Рэйхальд',
			leader: 'Ричард I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [920, 2339]
        },
        properties: {
			//id: 61,
            name: 'Модравcкая Республика',
			shortname: 'Модравия',
			ISO_3166_1_a2: 'Md',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '57951',
			capital: 'Миломиеста',
			leader: 'Йозеф Железнов',
			government: GOV_SOCIALIST,
			status: STATUS_MINOR,
			player: USERS[YUGO],
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
            coordinates: [1662, 1798]
        },
        properties: {
			//id: 62,
            name: 'Королевство Монсеран',
			shortname: 'Монсеран',
			ISO_3166_1_a2: 'Ms',
			continent: CONTINENT_REBIRTH_WEST,
			url: '38784',
			capital: 'Телль',
			leader: 'Доминик I Лефевр',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1268, 2121]
        },
        properties: {
			//id: 63,
            name: 'Королевство Монтания',
			shortname: 'Монтания',
			ISO_3166_1_a2: 'Mt',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '57958',
			capital: 'Краффштуфф',
			leader: 'Алоиз II Губертонет',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[KAISER],
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
            coordinates: [1620, 2169]
        },
        properties: {
			//id: 64,
            name: 'Княжеский союз Морния',
			shortname: 'Морния',
			ISO_3166_1_a2: 'Mo',
			continent: CONTINENT_REBIRTH_WEST,
			url: NO_TOPIC,
			capital: 'Ясновель',
			leader: 'Великий князь Михаил III Воронов',
			government: 'Выборная монархия',
			status: STATUS_MINOR,
			player: USERS[RAVAN],
			flag: {
				image: 'Flag_of_Mornia.webp'
			}
        }
    },
	{
		type: 'Feature',
		icontype: ICON_CAPITAL,
        geometry: {
            type: 'Point',
            coordinates: [1259, 1844]
        },
        properties: {
			//id: 65,
            name: 'Королевство Моэния',
			shortname: 'Моэния',
			ISO_3166_1_a2: 'Mn',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '61287',
			capital: 'Кёнигсбург',
			leader: 'Вильгельм I Адлербург-Нойердорф',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[KAISER],
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
            coordinates: [1368, 4065]
        },
        properties: {
			//id: 66,
            name: 'Племенной союз Мрацкгора',
			shortname: 'Мрацкгор',
			ISO_3166_1_a2: 'Mg',
			continent: CONTINENT_LILLY,
			url: '56108',
			capital: 'Нет',
			leader: UNKNOWN,
			government: 'Геронто-демархия',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2094, 1691]
        },
        properties: {
			//id: 67,
            name: 'Нигольфайд',
			shortname: 'Нигольфайд',
			ISO_3166_1_a2: 'Nf',
			continent: CONTINENT_REBIRTH_WEST,
			url: NO_TOPIC,
			capital: 'Терра',
			leader: 'Фанкториас III Дрененмак',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[IMPCOM],
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
            coordinates: [2271, 2809]
        },
        properties: {
			//id: 68,
            name: 'Нирийское королевство',
			shortname: 'Нирия',
			ISO_3166_1_a2: 'Nr',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '40975',
			capital: 'Ронас',
			leader: 'Эллем I Ньориэль',
			government: GOV_ABS_MONARCHY,
			status: STATUS_PROTECTORATE + ' (Цивилия)',
			player: USERS[RAVAN],
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
            coordinates: [1651, 2382]
        },
        properties: {
			//id: 69,
            name: 'Орден святых паладинов',
			shortname: 'Орден св. паладинов',
			ISO_3166_1_a2: 'Po',
			continent: CONTINENT_REBIRTH_EAST,
			url: '18281',
			capital: 'Грифонхил',
			leader: 'Артес',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2503, 2598]
        },
        properties: {
			//id: 70,
            name: 'Королевство Пилиталь',
			shortname: 'Пилиталь',
			ISO_3166_1_a2: 'Pt',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '25730',
			capital: 'Соннек',
			leader: 'Ричард II',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2195, 2888]
        },
        properties: {
			//id: 71,
            name: 'Племенной город',
			shortname: 'Племенной город',
			ISO_3166_1_a2: 'Tc',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: 'Племенной город',
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			player: USERS[RAVAN],
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
            coordinates: [2597, 637]
        },
        properties: {
			//id: 72,
            name: 'Племенной союз Поухатан',
			shortname: 'Поухатан',
			ISO_3166_1_a2: 'Ph',
			continent: CONTINENT_ANCHOR,
			url: '50728',
			capital: 'Тлачемилько',
			leader: 'Ашайякатль',
			government: GOV_THEOCRACY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1620, 3954]
        },
        properties: {
			//id: 73,
            name: 'Ромейская Империя',
			shortname: 'Ромей',
			ISO_3166_1_a2: 'Ro',
			continent: CONTINENT_LILLY,
			url: '61213',
			capital: 'Ромей',
			leader: 'Квинт Юлий Август',
			government: 'Принципат',
			status: STATUS_MINOR,
			player: USERS[ARMOFROME],
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
            coordinates: [2362, 2503]
        },
        properties: {
			//id: 74,
            name: 'Руманская Советская Федеративная Народная Республика',
			shortname: 'РСФНР',
			ISO_3166_1_a2: 'Rm',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '59132',
			capital: 'Белушоара',
			leader: 'Ангел Лучков',
			government: GOV_SOCIALIST,
			status: STATUS_MINOR,
			player: USERS[MAYAK57],
			playerUrl: USERS[MAYAK57].url,
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
            coordinates: [2597, 3073]
        },
        properties: {
			//id: 75,
            name: 'Сагрития',
			shortname: 'Сагрития',
			ISO_3166_1_a2: 'Sg',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '40350',
			capital: 'Авер',
			leader: 'Маргион Великий и Великолепный',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [3173, 1375]
        },
        properties: {
			//id: 76,
            name: 'Орден Слепой Секиры',
			shortname: 'Орден Слепой Секиры',
			ISO_3166_1_a2: 'So',
			continent: CONTINENT_ANCHOR,
			url: '60354',
			capital: 'Гексакрон',
			leader: 'Ксенобира Кобольдская',
			government: GOV_THEOCRACY,
			status: STATUS_MINOR,
			player: USERS[TINUSEC],
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
            coordinates: [1039, 3285]
        },
        properties: {
			//id: 77,
            name: 'Тандрийская империя',
			shortname: 'Тандрия',
			ISO_3166_1_a2: 'Td',
			continent: CONTINENT_LILLY,
			url: '30688',
			capital: 'Контр-штадт',
			leader: 'Эцио I',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2070, 1923]
        },
        properties: {
			//id: 78,
            name: 'Тиердальская империя',
			shortname: 'Тиердаль',
			ISO_3166_1_a2: 'Tr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '19850',
			capital: 'Тиерданд',
			leader: 'Карл I Тиерд',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_GREAT,
			player: USERS[IMPCOM],
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
            coordinates: [2384, 2683]
        },
        properties: {
			//id: 79,
            name: 'Племенной союз орков Тирольф',
			shortname: 'Тирольф',
			ISO_3166_1_a2: 'Tf',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '22341',
			capital: NONE,
			leader: 'Кэир, вождь Черных; Дэир, вождь Фиолетовых',
			government: 'Племенной союз',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [3148, 1169]
        },
        properties: {
			//id: 80,
            name: 'Троллгар',
			shortname: 'Троллгар',
			ISO_3166_1_a2: 'Tg',
			continent: CONTINENT_ANCHOR,
			url: '61208',
			capital: 'Гул-Гар',
			leader: 'Рагалак',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [492, 1739]
        },
        properties: {
			//id: 81,
            name: 'Королевство Т\'харра',
			shortname: 'Т\'харра',
			ISO_3166_1_a2: 'Th',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '39011',
			capital: 'Солдвейн',
			leader: 'Ричард I Браун',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[BLACKKING],
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
            coordinates: [1513, 2157]
        },
        properties: {
			//id: 82,
            name: 'Ультаренский Орден',
			shortname: 'Ультарен',
			ISO_3166_1_a2: 'Ae',
			continent: CONTINENT_REBIRTH_EAST,
			url: '14767',
			capital: 'Ришаль',
			leader: 'Гаррус фон Ришельдер',
			government: 'Капитул',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2317, 2680]
        },
        properties: {
			//id: 83,
            name: 'Королевство Фаминория',
			shortname: 'Фаминория',
			ISO_3166_1_a2: 'Fn',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '38952',
			capital: UNKNOWN,
			leader: 'Фридрих Полководец',
			government: 'Феодальная монархия',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [559, 2974]
        },
        properties: {
			//id: 84,
            name: 'Фермунг',
			shortname: 'Фермунг',
			ISO_3166_1_a2: 'Fm',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '46883',
			capital: 'Фермунгард',
			leader: 'Марк Северий',
			government: GOV_REPUBLIC,
			status: STATUS_MINOR,
			player: USERS[GRESHNIK],
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
            coordinates: [2148, 2128]
        },
        properties: {
			//id: 85,
            name: 'Королевство Фиеррен',
			shortname: 'Фиеррен',
			ISO_3166_1_a2: 'Fi',
			continent: CONTINENT_REBIRTH_WEST,
			url: '26779',
			capital: 'Бронтен',
			leader: 'Уильям II Кроментори',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[PAUKSKA],
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
            coordinates: [1568, 2254]
        },
        properties: {
			//id: 86,
            name: 'Фламасский орден',
            shortname: 'Фламасский орден',
			ISO_3166_1_a2: 'Fo',
			continent: CONTINENT_REBIRTH_EAST,
			url: '16883',
			capital: 'Мальборк',
			leader: 'Конрад фон Визенранд',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1853, 1724]
        },
        properties: {
			//id: 87,
            name: 'Королевство Фрониард',
			shortname: 'Фрониард',
			ISO_3166_1_a2: 'Fr',
			continent: CONTINENT_REBIRTH_WEST,
			url: '40190',
			capital: 'Нервингтон',
			leader: 'Коул Ливингстон',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2276, 2952]
        },
        properties: {
			//id: 88,
            name: 'Вольный город Хаарватерн',
			shortname: 'Хаарватерн',
			ISO_3166_1_a2: 'Ha',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '50317',
			capital: 'Хаарватерн',
			leader: UNKNOWN,
			government: UNKNOWN,
			status: STATUS_MINOR,
			player: USERS[RAVAN],
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
            coordinates: [1377, 3756]
        },
        properties: {
			//id: 89,
            name: 'Графство Хаугланд',
			shortname: 'Хаугланд',
			ISO_3166_1_a2: 'Ho',
			continent: CONTINENT_LILLY,
			url: '40494',
			capital: 'Мукачеф',
			leader: 'Вольтмар фон Раук цу Хаугланд',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1126, 2312]
        },
        properties: {
			//id: 90,
            name: 'Королевство Хомрул',
			shortname: 'Хомрул',
			ISO_3166_1_a2: 'Hm',
			continent: CONTINENT_REBIRTH_EAST,
			url: '61535',
			capital: 'Стридо-Ново',
			leader: 'Арнольфо II Маттеи',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NIKTOK],
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
            coordinates: [935, 3593]
        },
        properties: {
			//id: 91,
            name: 'Хортенское королевство',
			shortname: 'Хортен',
			ISO_3166_1_a2: 'Ht',
			continent: CONTINENT_LILLY,
			url: '57201',
			capital: 'Виндшторм',
			leader: 'Хортен I',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [2062, 3127]
        },
        properties: {
			//id: 92,
            name: 'Цивилийская империя',
			shortname: 'Цивилия',
			ISO_3166_1_a2: 'Cv',
			continent: CONTINENT_REBIRTH_SOUTH,
			url: '36450',
			capital: 'Цельмий',
			leader: 'Рио ван Реццо, Странник XIII',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[RAVAN],
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
            coordinates: [1375, 1991]
        },
        properties: {
			//id: 93,
            name: 'Королевство Шварцланд',
			shortname: 'Шварцланд',
			ISO_3166_1_a2: 'Sw',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '24710',
			capital: 'Фридгард',
			leader: 'Христофор I Лихтенцоллерн',
			government: GOV_DUAL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[KAISER],
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
            coordinates: [1787, 2636]
        },
        properties: {
			//id: 94,
            name: 'Королевство Штальфельд',
			shortname: 'Штальфельд',
			ISO_3166_1_a2: 'Sf',
			continent: CONTINENT_REBIRTH_EAST,
			url: '57698',
			capital: 'Заальберг',
			leader: 'Фердинанд I Эйзенбах',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[MAYAK57],
			playerUrl: USERS[MAYAK57].url,
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
            coordinates: [1446, 3958]
        },
        properties: {
			//id: 95,
            name: 'Штреймарское королевство',
			shortname: 'Штреймар',
			ISO_3166_1_a2: 'Sm',
			continent: CONTINENT_LILLY,
			url: '56958',
			capital: 'Лиденбург',
			leader: 'Фридрих II фон Виттельсбург',
			government: 'Феодальная монархия',
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
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
            coordinates: [1346, 2080]
        },
        properties: {
			//id: 96,
            name: 'Великое княжество Эркелия',
			shortname: 'Эркелия',
			ISO_3166_1_a2: 'Ar',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '31108',
			capital: 'Шванбург',
			leader: 'Георг I Лан',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[KAISER],
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
            coordinates: [1187, 2458]
        },
        properties: {
			//id: 97,
            name: 'Королевство Эстервальд',
			shortname: 'Эстервальд',
			ISO_3166_1_a2: 'Es',
			continent: CONTINENT_REBIRTH_EAST,
			url: '58777',
			capital: 'Кристианборг',
			leader: 'Моуд I Лангсваард',
			government: GOV_PARL_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NIKTOK],
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
            coordinates: [1193, 1159]
        },
        properties: {
			//id: 98,
            name: 'Великое Эшенвальское Герцогство',
			shortname: 'Эшенвальд',
			ISO_3166_1_a2: 'Ev',
			continent: CONTINENT_REBIRTH_NORTH,
			url: '35406',
			capital: 'Штайнбург',
			leader: 'Арагон IX Завоеватель',
			government: GOV_ABS_MONARCHY,
			status: STATUS_MINOR,
			player: USERS[NO_PLAYER],
			flag: {
				image: NO_FLAG
			}
        }
    }
	],
	get: function(param) {
		getCountryById = function(pid, data) {
			for(feature of data.features) {
				if (pid == feature.properties.id) {
					return feature;
				}
			}
			return null;
		}
		getCountryByCode = function(code, data) {
			for(feature of data.features) {
				if (code == feature.properties.ISO_3166_1_a2) {
					return feature;
				}
			}
			return null;
		}
		switch (typeof param) {
			case 'string': return getCountryByCode(param, this);
			case 'number': return getCountryById(param, this);
			default: return null;
		}
	},
	cleanName: function (name) {
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
	},
	setID: function() {
		let id = 0;
		countries.features.forEach((country) => {
			country.properties.id = id++;
		})
	}
};

countries.setID();
