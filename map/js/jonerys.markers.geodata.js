const NO_TOPIC = '54209'; //ссылка на тему географии, если нет темы
const NO_FLAG = 'Flag_of_Unknown.webp';
const UNKNOWN = 'Неизвестно';
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
			'tag': 'Rm',
			'url': '59132',
			'capital': 'Белушоара',
			'leader': 'Ангел Лучков',
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
			'tag': 'Sf',
			'url': '57698',
			'capital': 'Заальберг',
			'leader': 'Фердинанд I Эйзенбах',
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
            'coordinates': [1900, 4254]
        },
        'properties': {
            'name': 'Гачиванг',
			'tag': 'Hv',
			'url': NO_TOPIC,
			'capital': 'Гачиванг',
			'leader': 'Уильям Керрингтон',
			'status': STATUS_COLONY + ' (Тиердаль)',
			'playerName': 'MAYAK57',
			'playerUrl': '21169',
			'flag': {
				'image': 'Flag_of_Hachivang.webp'
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
			'tag': 'Tr',
			'url': '19850',
			'capital': 'Тиерданд',
			'leader': 'Карл I Тиерд',
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
            'coordinates': [1221, 3308]
        },
        'properties': {
            'name': 'Литавия',
			'tag': 'Li',
			'url': NO_TOPIC,
			'capital': 'Старобряжен',
			'leader': 'Витовт I Барда',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Имперский командор',
			'playerUrl': '10808',
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2094, 1518]
        },
        'properties': {
            'name': 'Нигольфайд',
			'tag': 'Nf',
			'url': NO_TOPIC,
			'capital': 'Терра',
			'leader': 'Фанкториас III Дрененмак',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Имперский командор',
			'playerUrl': '10808',
			'flag': {
				'image': 'Flag_of_Nigolfajd.webp'
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
            'name': 'Модравcкая Республика',
			'tag': 'Md',
			'url': '57951',
			'capital': 'Миломиеста',
			'leader': 'Йозеф Железнов',
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
			'tag': 'Cv',
			'url': '36450',
			'capital': 'Цельмий',
			'leader': 'Рио ван Реццо, Странник XIII',
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
			'tag': 'Ds',
			'url': '59009',
			'capital': 'Сан-Гелиано',
			'leader': 'Хосе VI де Нарриа',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': 'Flag_of_Deselia.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2037, 2698]
        },
        'properties': {
            'name': 'Конгорская империя',
			'tag': 'Kg',
			'url': '58680',
			'capital': 'Катралия',
			'leader': 'Оливер I Аслетим',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': 'Flag_of_Kongor.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2271, 2609]
        },
        'properties': {
            'name': 'Нирийское королевство',
			'tag': 'Nr',
			'url': '40975',
			'capital': 'Ронас',
			'leader': 'Эллем I Ньоринтелл',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_PROTECTORATE + ' (Цивилия)',
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': 'Flag_of_Niria.webp'
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
			'tag': 'Ku',
			'url': '38291',
			'capital': 'Кюлинбург',
			'leader': 'Иоганн I ван Тейнес-Роттебург',
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
			'tag': 'La',
			'url': '61236',
			'capital': 'Терт',
			'leader': 'Андрус Веберс',
			'government': GOV_REPUBLIC,
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
			'tag': 'At',
			'url': '61459',
			'capital': 'Драц',
			'leader': 'Ференц VI Итертин',
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
            'coordinates': [2429, 1952]
        },
        'properties': {
            'name': 'Геленийская конфедерация',
			'tag': 'Ge',
			'url': '61499',
			'capital': 'Дилдойл',
			'leader': 'Джеймс Ливингем',
			'status': STATUS_COLONY + ' (Тиердаль)',
			'playerName': 'Enkeltea',
			'playerUrl': '33778',
			'flag': {
				'image': 'Flag_of_Gelenia.webp'
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
			'tag': 'Es',
			'url': '58777',
			'capital': 'Кристианборг',
			'leader': 'Моуд I Лангсваард',
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
			'tag': 'Ku',
			'url': '58777',
			'capital': 'Червони Крунов',
			'leader': 'Тадеуш Серпинский',
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
            'name': 'Республика Вельденвальд',
			'tag': 'We',
			'url': '58777',
			'capital': 'Вальденборг',
			'leader': 'Мартин-Эрик Эстен-Винтерфельд',
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
			'tag': 'Bx',
			'url': '59173',
			'capital': 'Бахчин-Абад',
			'leader': 'Фарис Изетбег-Заде',
			'government': GOV_THEOCRACY,
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
			'tag': 'Cs',
			'url': NO_TOPIC,
			'capital': 'Сторрьён',
			'leader': 'Альфред Фиорелли',
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
			'tag': 'Hm',
			'url': NO_TOPIC,
			'capital': 'Стридо-Ново',
			'leader': UNKNOWN,
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
			'tag': 'Gz',
			'url': NO_TOPIC,
			'capital': 'Велика Мостава',
			'leader': 'Штефан Дрекслер-Завала',
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
			'tag': 'As',
			'url': '17818',
			'capital': 'Кёнигштадт',
			'leader': 'Фридрих Вильгельм I Адлербург',
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
			'tag': 'Kf',
			'url': '61226',
			'capital': 'Лангерра',
			'leader': 'Карл I и Мария I Авершер-Адлербург',
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
			'tag': 'Kt',
			'url': '57958',
			'capital': 'Краффштуфф',
			'leader': 'Алоиз II Губертонет',
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
			'tag': 'Mn',
			'url': '61287',
			'capital': 'Кёнигсбург',
			'leader': 'Вильгельм I Адлербург-Нойердорф',
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
            'coordinates': [1495, 1832]
        },
        'properties': {
            'name': 'Королевство Вестландия',
			'tag': 'Ws',
			'url': '23904',
			'capital': 'Концгельм',
			'leader': 'Вильгельм I Диссель-Контабергин',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Westland.webp'
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
			'tag': 'Sw',
			'url': '24710',
			'capital': 'Фридгард',
			'leader': 'Христофор I Лихтенцоллерн',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Schwarzland.webp'
			}
        }
    },
    {
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1346, 1880]
        },
        'properties': {
            'name': 'Великое княжество Эркелия',
			'tag': 'Ar',
			'url': '31108',
			'capital': 'Шванбург',
			'leader': 'Георг I Лан',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Erkelia.webp'
			}
        }
    },
	// Armageddon Of Rome
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1312, 1485]
        },
        'properties': {
            'name': 'Королевство Мализон',
			'tag': 'Mz',
			'url': '61291',
			'capital': 'Мальзтирр',
			'leader': 'Эжен Д\'Арно',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Armageddon Of Rome',
			'playerUrl': '33636',
			'flag': {
				'image': 'Flag_of_Malizon.webp'
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1620, 3754]
        },
        'properties': {
            'name': 'Ромейская Империя',
			'tag': 'Ro',
			'url': '61213',
			'capital': 'Ромей',
			'leader': 'Квинт Юлий Август',
			'government': GOV_DUAL_MONARCHY,
			'status': 'Самый мощный империя',
			'playerName': 'Armageddon Of Rome',
			'playerUrl': '33636',
			'flag': {
				'image': 'Flag_of_Rome.webp'
			}
        }
    },
	// Грешник
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [559, 2774]
        },
        'properties': {
            'name': 'Фермунг',
			'tag': 'Fm',
			'url': '46883',
			'capital': 'Фермунгард',
			'leader': 'Марк Северий',
			'government': GOV_REPUBLIC,
			'status': STATUS_MINOR,
			'playerName': 'Грешник',
			'playerUrl': '22262',
			'flag': {
				'image': 'Flag_of_Fermung.webp'
			}
        }
    },
	// Black King
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1682, 1453]
        },
        'properties': {
            'name': 'Локтарская Империя',
			'tag': 'Lk',
			'url': '23879',
			'capital': 'Вельдерон',
			'leader': 'Рауль IV Дюбуа',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_GREAT,
			'playerName': 'Black King',
			'playerUrl': '11231',
			'flag': {
				'image': 'Flag_of_Loktaria.webp'
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [492, 1539]
        },
        'properties': {
            'name': 'Королевство Т\'харра',
			'tag': 'Th',
			'url': '39011',
			'capital': 'Солдвейн',
			'leader': 'Ричард I Браун',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Black King',
			'playerUrl': '11231',
			'flag': {
				'image': 'Flag_of_Tharra.webp'
			}
        }
    },
	// Тинувель Секунда
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [3069, 1355]
        },
        'properties': {
            'name': 'Орден Слепой Секиры',
			'tag': 'So',
			'url': '60354',
			'capital': 'Гексакрон',
			'leader': 'Ксенобира Кобольдская',
			'government': GOV_THEOCRACY,
			'status': STATUS_MINOR,
			'playerName': 'Тинувель Секунда',
			'playerUrl': '30987',
			'flag': {
				'image': 'Flag_of_Sekira.webp'
			}
        }
    },
	// Банк ВР
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1354, 1545]
        },
        'properties': {
            'name': 'Королевство Каэрн',
			'tag': 'Ka',
			'url': '16181',
			'capital': 'Кан',
			'leader': UNKNOWN,
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [539, 997]
        },
        'properties': {
            'name': 'Королевство Драгон Айленд',
			'tag': 'Di',
			'url': NO_TOPIC,
			'capital': 'Гримнир',
			'leader': UNKNOWN,
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1149, 564]
        },
        'properties': {
            'name': 'Королевство Аракад',
			'tag': 'Aa',
			'url': '21175',
			'capital': 'Фариа',
			'leader': 'Робар I',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1193, 959]
        },
        'properties': {
            'name': 'Великое Эшенвальское Герцогство',
			'tag': 'Ev',
			'url': '35406',
			'capital': 'Штайнбург',
			'leader': 'Арагон IX Завоеватель',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1594, 1165]
        },
        'properties': {
            'name': 'Королевство Верисс',
			'tag': 'Vg',
			'url': '23836',
			'capital': 'Правен',
			'leader': 'Фридрих I',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [954, 2373]
        },
        'properties': {
            'name': 'Великое Мариенское Королевство',
			'tag': 'Mr',
			'url': '57210',
			'capital': 'Мариенбург',
			'leader': 'Вебранд II',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Marien.webp'
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1448, 2373]
        },
        'properties': {
            'name': 'Султанат Мамлакат',
			'tag': 'Mm',
			'url': '19649',
			'capital': 'Акбар',
			'leader': 'Азамат Асад',
			'government': 'Султанат',
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1310, 2674]
        },
        'properties': {
            'name': 'Султанат Мариам',
			'tag': 'Ma',
			'url': '26949',
			'capital': 'Бадрийя',
			'leader': 'Асир Барира I',
			'government': 'Султанат',
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1173, 2631]
        },
        'properties': {
            'name': 'Королевство Болнисия',
			'tag': 'Bn',
			'url': '19266',
			'capital': 'Руджелл',
			'leader': 'Валерий Максимин',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1039, 3085]
        },
        'properties': {
            'name': 'Тандрийская империя',
			'tag': 'Td',
			'url': '30688',
			'capital': 'Контр-штадт',
			'leader': 'Эцио I',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [906, 3165]
        },
        'properties': {
            'name': 'Королевство Гросское',
			'tag': 'Gs',
			'url': '32894',
			'capital': 'Гросстаун',
			'leader': 'Родриго IV Дейл «Разрушитель»',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [866, 3316]
        },
        'properties': {
            'name': 'Вивольдовское королевство',
			'tag': 'Vv',
			'url': '57199',
			'capital': 'Генхцберг',
			'leader': 'Вивольд I',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Vivold.webp'
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [935, 3393]
        },
        'properties': {
            'name': 'Хортенское королевство',
			'tag': 'Ht',
			'url': '57201',
			'capital': 'Виндшторм',
			'leader': 'Хортен I',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [817, 3468]
        },
        'properties': {
            'name': 'Штреймарское королевство',
			'tag': 'Sm',
			'url': '56958',
			'capital': 'Лиденбург',
			'leader': 'Фридрих II фон Виттельсбург',
			'government': 'Феодальная монархия',
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1160, 3531]
        },
        'properties': {
            'name': 'Герцогство Акрония',
			'tag': 'Ak',
			'url': '49527',
			'capital': 'Лиденбург',
			'leader': 'Фредерик Акронский (Хогландский)',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [556, 3826]
        },
        'properties': {
            'name': 'Кратер',
			'tag': 'Cr',
			'url': '55983',
			'capital': 'Отсутствует',
			'leader': UNKNOWN,
			'government': UNKNOWN,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1160, 3531]
        },
        'properties': {
            'name': 'Герцогство Акрония',
			'tag': 'Ak',
			'url': '49527',
			'capital': 'Лиденбург',
			'leader': 'Фредерик Акронский (Хогландский)',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1170, 3673]
        },
        'properties': {
            'name': 'Графство Хаугланд',
			'tag': 'Ho',
			'url': '40494',
			'capital': 'Мукачеф',
			'leader': 'Вольтмар фон Раук цу Хаугланд',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1286, 3834]
        },
        'properties': {
            'name': 'Всевеликое Царствие Вятическое',
			'tag': 'Vt',
			'url': '53229',
			'capital': 'Которин',
			'leader': 'Ярополк Кроншков',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1368, 3865]
        },
        'properties': {
            'name': 'Племенной союз Мрацкгора',
			'tag': 'Mg',
			'url': '56108',
			'capital': 'Нет',
			'leader': UNKNOWN,
			'government': 'Геронто-демархия',
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [573, 3267]
        },
        'properties': {
            'name': 'Королевство Лайтхайзен',
			'tag': 'Lz',
			'url': '56409',
			'capital': 'Тиалдари-дур',
			'leader': 'Траллоск I',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [3044, 1149]
        },
        'properties': {
            'name': 'Троллгар',
			'tag': 'Tg',
			'url': '61208',
			'capital': 'Гул-Гар',
			'leader': 'Рагалак',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Trollgar.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2493, 617]
        },
        'properties': {
            'name': 'Племенной союз Поухатан',
			'tag': 'Po',
			'url': '50728',
			'capital': 'Тлачемилько',
			'leader': 'Ашайякатль',
			'government': GOV_THEOCRACY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	]
};