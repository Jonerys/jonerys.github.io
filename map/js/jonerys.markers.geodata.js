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
const STATUS_MINOR = 'Суверенное государство';
const STATUS_GREAT = 'Великая держава';

var map_icons = {
	'type': 'FeatureCollection',
    'features': [{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2362, 2303]
        },
        'properties': {
            'name': 'Румания',
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
            'coordinates': [2070, 1723]
        },
        'properties': {
            'name': 'Тиердаль',
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
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [920, 2139]
        },
        'properties': {
            'name': 'Модравия',
			'url': '57951',
			'capital': 'Миломиеста',
			'head': 'Иосиф Железнов',
			'government': GOV_SOCIALIST,
			'status': STATUS_MINOR,
			'playerName': 'Yugo',
			'playerUrl': '29549',
			'flag': {
				'image': 'Flag_of_Modravia.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2062, 2927]
        },
        'properties': {
            'name': 'Цивилия',
			'url': '36450',
			'capital': 'Цельмий',
			'head': 'Рио ван Реццо',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '29549',
			'flag': {
				'image': 'Flag_of_Civilia.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2201, 2286]
        },
        'properties': {
            'name': 'Кюлинбург',
			'url': '38291',
			'capital': 'Кюлинбург',
			'head': 'Иоганн I ван Тейнес-Роттебург',
			'government': GOV_REPUBLIC,
			'status': STATUS_GREAT,
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
            'coordinates': [2202, 2405]
        },
        'properties': {
            'name': 'Атеншьёг',
			'url': '61459',
			'capital': 'Драц',
			'head': 'Ференц VI',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Enkeltea',
			'playerUrl': '33778',
			'flag': {
				'image': 'Flag_of_Atensjoeg.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1187, 2258]
        },
        'properties': {
            'name': 'Эстервальд',
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
            'name': 'Круновия',
			'url': '58777',
			'capital': 'Червони Крунов',
			'head': 'Тадеуш Серпинский',
			'government': GOV_SOCIALIST,
			'status': STATUS_MINOR,
			'playerName': 'Ник Токарев',
			'playerUrl': '28378',
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
            'name': 'Вельденвальд',
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
            'name': 'Бахчистан',
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
            'name': 'Кьезанотто',
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
            'coordinates': [1788, 2436]
        },
        'properties': {
            'name': 'Штальфельд',
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
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1126, 2112]
        },
        'properties': {
            'name': 'Хомрул',
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
    }
	]
};