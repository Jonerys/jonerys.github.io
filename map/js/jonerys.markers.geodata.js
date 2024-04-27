const NO_TOPIC = '54209'; //ссылка на тему географии, если нет темы

const NO_PLAYER = 'Банк ВР';
const PLAYER_ZOG = 'Совет ВР';

const GOV_ABS_MONARCHY = 'Абс. монархия';
const GOV_DUAL_MONARCHY = 'Дуал. монархия';
const GOV_PARL_MONARCHY = 'Парл. монархия';
const GOV_REPUBLIC = 'Республика';
const GOV_SOCIALIST = 'Соц. республика';

const STATUS_COLONY = 'Колония';
const STATUS_PROTECTORATE = 'Протекторат';
const STATUS_VASSAL = 'Вассал';
const STATUS_MINOR = 'Независимое государство';
const STATUS_GREAT = 'Великая держава';

var map_icons = {
	'type': 'FeatureCollection',
    'features': [
	// MAYAK57
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2362, 2303]
        },
        'properties': {
            'name': 'Руманская Советская Федеративная Народная Республика',
			'url': '59132',
			'capital': 'Белушоара',
			'head': 'Ангел Лучков',
			'government': GOV_SOCIALIST,
			'status': STATUS_MINOR,
			'playerName': 'MAYAK57',
			'playerUrl': '21169',
			'flag': {
				'image': 'Flag_of_RSFPR.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1788, 2436]
        },
        'properties': {
            'name': 'Королевство Штальфельд',
			'url': '57698',
			'capital': 'Заальберг',
			'head': 'Фердинанд I Эйзенбах',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'MAYAK57',
			'playerUrl': '21169',
			'flag': {
				'image': 'Flag_of_Shtalfeld.webp'
			}
        }
    },
	// Имперский командор
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2070, 1723]
        },
        'properties': {
            'name': 'Тиердальская империя',
			'url': '19850',
			'capital': 'Тиерданд',
			'head': 'Карл I Тиерд',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_GREAT,
			'playerName': 'Имперский командор',
			'playerUrl': '10808',
			'flag': {
				'image': 'Flag_of_Thierdal.webp'
			}
        }
    },
	// Yugo
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [920, 2139]
        },
        'properties': {
            'name': 'Социалистическая Республика Модравия',
			'url': '57951',
			'capital': 'Миломиеста',
			'head': 'Йозеф Железнов',
			'government': GOV_SOCIALIST,
			'status': STATUS_MINOR,
			'playerName': 'Yugo',
			'playerUrl': '29549',
			'flag': {
				'image': 'Flag_of_Modravia.webp'
			}
        }
    },
	// Раван
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2062, 2927]
        },
        'properties': {
            'name': 'Цивилийская империя',
			'url': '36450',
			'capital': 'Цельмий',
			'head': 'Рио ван Реццо',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': 'Flag_of_Civilia.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1929, 1911]
        },
        'properties': {
            'name': 'Деселийское королевство',
			'url': '59009',
			'capital': 'Сан-Гелиано',
			'head': 'Хосе VI де Нарриа',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': 'Flag_of_Deselia.webp'
			}
        }
    },
	// Le capitaine Avare
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2201, 2286]
        },
        'properties': {
            'name': 'Кюлинбургская конфедерация',
			'url': '38291',
			'capital': 'Кюлинбург',
			'head': 'Иоганн I ван Тейнес-Роттебург',
			'government': GOV_REPUBLIC,
			'status': STATUS_MINOR,
			'playerName': 'Le capitaine Avare',
			'playerUrl': '23533',
			'flag': {
				'image': 'Flag_of_Kulinburg.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2142, 2334]
        },
        'properties': {
            'name': 'Латонский Союз',
			'url': '61236',
			'capital': 'Терт',
			'head': 'Андрус Веберс',
			'government': 'Олигархия',
			'status': STATUS_MINOR,
			'playerName': 'Le capitaine Avare',
			'playerUrl': '23533',
			'flag': {
				'image': 'Flag_of_Laton_Union.webp'
			}
        }
    },
	// Enkeltea
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2202, 2405]
        },
        'properties': {
            'name': 'Королевство Атеншьёг',
			'url': '61459',
			'capital': 'Драц',
			'head': 'Ференц VI Итертин',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Enkeltea',
			'playerUrl': '33778',
			'flag': {
				'image': 'Flag_of_Atensjoeg.webp'
			}
        }
    },
	// Ник Токарев
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1187, 2258]
        },
        'properties': {
            'name': 'Королевство Эстервальд',
			'url': '58777',
			'capital': 'Кристианборг',
			'head': 'Моуд I Лангсваард',
			'government': GOV_PARL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Ник Токарев',
			'playerUrl': '28378',
			'flag': {
				'image': 'Flag_of_Esterwald.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1203, 2206]
        },
        'properties': {
            'name': 'Революционная Республика Круновия',
			'url': '58777',
			'capital': 'Червони Крунов',
			'head': 'Тадеуш Серпинский',
			'government': GOV_SOCIALIST,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': '28378',
			/*'playerName': 'Ник Токарев',
			'playerUrl': '28378',*/
			'flag': {
				'image': 'Flag_of_Krunoviya.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1262, 2420]
        },
        'properties': {
            'name': 'Республика Вельденвальд',
			'url': '58777',
			'capital': 'Вальденборг',
			'head': 'Мартин-Эрик Эстен-Винтерфельд',
			'government': GOV_REPUBLIC,
			'status': STATUS_MINOR,
			'playerName': 'Ник Токарев',
			'playerUrl': '28378',
			'flag': {
				'image': 'Flag_of_Weldenwald.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1288, 2469]
        },
        'properties': {
            'name': 'Имамат Бахчистан',
			'url': '59173',
			'capital': 'Бахчин-Абад',
			'head': 'Фарис Изетбег-Заде',
			'government': 'Теократия',
			'status': STATUS_MINOR,
			'playerName': 'Ник Токарев',
			'playerUrl': '28378',
			'flag': {
				'image': 'Flag_of_Bahchistan.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1290, 2376]
        },
        'properties': {
            'name': 'Республика Кьезанотто',
			'url': NO_TOPIC,
			'capital': 'Сторрьён',
			'head': 'Альфред Фиорелли',
			'government': GOV_REPUBLIC,
			'status': STATUS_MINOR,
			'playerName': 'Ник Токарев',
			'playerUrl': '28378',
			'flag': {
				'image': 'Flag_of_Chiesanotto.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1126, 2112]
        },
        'properties': {
            'name': 'Королевство Хомрул',
			'url': NO_TOPIC,
			'capital': 'Стридо-Ново',
			'head': '???',
			'government': GOV_REPUBLIC,
			'status': STATUS_MINOR,
			'playerName': 'Ник Токарев',
			'playerUrl': '28378',
			'flag': {
				'image': 'Flag_of_Homrul.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2434, 2129]
        },
        'properties': {
            'name': 'Газоцко-Меран',
			'url': NO_TOPIC,
			'capital': 'Велика Мостава',
			'head': 'Штефан Дрекслер-Завала',
			'government': GOV_REPUBLIC,
			'status': STATUS_MINOR,
			'playerName': 'Ник Токарев',
			'playerUrl': '28378',
			'flag': {
				'image': 'Flag_of_Gazotsko-Meran.webp'
			}
        }
    },
	// KaiseR
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1388, 1676]
        },
        'properties': {
            'name': 'Аспийская империя',
			'url': '17818',
			'capital': 'Кёнигштадт',
			'head': 'Фридрих Вильгельм I Адлербург',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_GREAT,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Aspia.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1117, 1795]
        },
        'properties': {
            'name': 'Кофердская империя',
			'url': '61226',
			'capital': 'Лангерра',
			'head': 'Карл I Авершер-Адлербург',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_GREAT,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Koferd.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1268, 1921]
        },
        'properties': {
            'name': 'Королевство Монтания',
			'url': '57958',
			'capital': 'Краффштуфф',
			'head': 'Алоиз II Губертонет',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Montania.webp'
			}
        }
    },
    {
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1259, 1644]
        },
        'properties': {
            'name': 'Королевство Моэния',
			'url': '61287',
			'capital': 'Кёнигсбург',
			'head': 'Вильгельм I Адлербург-Нойердорф',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Moenia.webp'
			}
        }
    },
    {
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1375, 1791]
        },
        'properties': {
            'name': 'Королевство Шварцланд',
			'url': '24710',
			'capital': 'Фридгард',
			'head': 'Христофор I Лихтенцоллерн',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Schwarzland.webp'
			}
        }
    }
	]
};