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
			'leaderLabel': 'Губернатор',
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
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2016, 1299]
        },
        'properties': {
            'name': 'Каганат Ай-Суру',
			'tag': 'Sr',
			'url': '37224',
			'capital': 'Айтернак',
			'leader': 'Оспаривается',
			'government': 'Каганат',
			'status': STATUS_MINOR,
			'playerName': 'Имперский командор',
			'playerUrl': '10808',
			'flag': {
				'image': 'Flag_of_AiSuru.webp'
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
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2276, 2752]
        },
        'properties': {
            'name': 'Вольный город Хаарватерн',
			'tag': 'Ha',
			'url': '50317',
			'capital': 'Хаарватерн',
			'leader': UNKNOWN,
			'government': UNKNOWN,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2195, 2688]
        },
        'properties': {
            'name': 'Племенной город',
			'tag': 'Tc',
			'url': '50317',
			'capital': 'Племенной город',
			'leader': UNKNOWN,
			'government': UNKNOWN,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2225, 2564]
        },
        'properties': {
            'name': 'Вольный город Мершент',
			'tag': 'Me',
			'url': '50317',
			'capital': 'Мершент',
			'leader': UNKNOWN,
			'government': UNKNOWN,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': NO_FLAG
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2513, 2552]
        },
        'properties': {
            'name': 'Гатулат Унур',
			'tag': 'Un',
			'url': '50317',
			'capital': UNKNOWN,
			'leader': UNKNOWN,
			'government': UNKNOWN,
			'status': STATUS_MINOR,
			'playerName': 'Раван',
			'playerUrl': '9999',
			'flag': {
				'image': NO_FLAG
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
			'leaderLabel': 'Губернатор',
			'leader': 'Джеймс Ливингем',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_PROTECTORATE + ' (Тиердаль)',
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
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1895, 2434]
        },
        'properties': {
            'name': 'Варгренское Королевство',
			'tag': 'Wr',
			'url': '49371',
			'capital': 'Кернсгольм',
			'leader': 'Фредерик I Дюбуа-Кремвельский',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'KaiseR',
			'playerUrl': '4131',
			'flag': {
				'image': 'Flag_of_Wargren.webp'
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
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1662, 1598]
        },
        'properties': {
            'name': 'Королевство Монсеран',
			'tag': 'Ms',
			'url': '38784',
			'capital': 'Телль',
			'leader': 'Доминик I Лефевр',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Monseran.webp'
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
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2239, 1646]
        },
        'properties': {
            'name': 'Герцогство Аэт\'Дайне',
			'tag': 'An',
			'url': '61137',
			'capital': 'Аэталь',
			'leader': 'Джейко IV Тера-Палед',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Тинувель Секунда',
			'playerUrl': '30987',
			'flag': {
				'image': 'Flag_of_AetDayne.webp'
			}
        }
    },
	// Corporal
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2028, 2413]
        },
        'properties': {
            'name': 'Великое Герцогство Аугебург-Хоэнхоф',
			'tag': 'Au',
			'url': '58430',
			'capital': 'Альтштедт',
			'leader': 'Карл III Маттиас Лейденфельдт-Хоэнхоф',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Corporal',
			'playerUrl': '29631',
			'flag': {
				'image': 'Flag_of_Augeburg.webp'
			}
        }
    },
	// Ork
	{
    	'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2025, 1873]
        },
        'properties': {
            'name': 'Эльфийское королество Атель Лорен',
			'tag': 'Ao',
			'url': '58430',
			'capital': 'Альтштедт',
			'leader': 'Аэнарион',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': 'Ork',
			'playerUrl': '11517',
			'flag': {
				'image': NO_FLAG
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
			'capital': NONE,
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
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2711, 2963]
        },
        'properties': {
            'name': 'Атлантия',
			'tag': 'Ca',
			'url': '50728',
			'capital': 'Атлантия',
			'leader': 'Окторус I Великий',
			'government': 'Представительская монархия',
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
            'coordinates': [2622, 3040]
        },
        'properties': {
            'name': 'Королевство Драмор',
			'tag': 'Dm',
			'url': '40564',
			'capital': 'Тайтонус',
			'leader': 'Дамнар Безликий',
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
            'coordinates': [2597, 2873]
        },
        'properties': {
            'name': 'Сагрития',
			'tag': 'Sg',
			'url': '40350',
			'capital': 'Авер',
			'leader': 'Маргион Великий и Великолепный',
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
            'coordinates': [2317, 2480]
        },
        'properties': {
            'name': 'Королевство Фаминория',
			'tag': 'Fn',
			'url': '38952',
			'capital': UNKNOWN,
			'leader': 'Фридрих Полководец',
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
            'coordinates': [2384, 2483]
        },
        'properties': {
            'name': 'Племенной союз орков Тирольф',
			'tag': 'Tf',
			'url': '22341',
			'capital': NONE,
			'leader': 'Кэир, вождь Черных; Дэир, вождь Фиолетовых',
			'government': 'Племенной союз',
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
            'coordinates': [2421, 2541]
        },
        'properties': {
            'name': 'Кэтроэлн',
			'tag': 'Ke',
			'url': '58781',
			'capital': 'Кэтнон',
			'leader': 'Гарольд I',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Ketroeln.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [2503, 2398]
        },
        'properties': {
            'name': 'Королевство Пилиталь',
			'tag': 'Pt',
			'url': '25730',
			'capital': 'Соннек',
			'leader': 'Ричард II',
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
            'coordinates': [2613, 2366]
        },
        'properties': {
            'name': 'Королевство Михельт',
			'tag': 'Mh',
			'url': '22886',
			'capital': 'Рэйхальд',
			'leader': 'Ричард I',
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
            'coordinates': [2582, 2270]
        },
        'properties': {
            'name': 'Графство Даркния',
			'tag': 'Dk',
			'url': '49330',
			'capital': 'Штэрнхолм',
			'leader': 'Сандро Ассилум',
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
            'coordinates': [2475, 2259]
        },
        'properties': {
            'name': 'Графство Гринвуд',
			'tag': 'Gw',
			'url': '31440',
			'capital': 'Гринвэй',
			'leader': 'Рональд I',
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
            'coordinates': [2068, 2386]
        },
        'properties': {
            'name': 'Графство Деслания',
			'tag': 'Dl',
			'url': '24154',
			'capital': UNKNOWN,
			'leader': 'Генрих IV Блэкоурен',
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
            'coordinates': [2047, 2355]
        },
        'properties': {
            'name': 'Королевство Айзэн',
			'tag': 'Az',
			'url': '31402',
			'capital': 'Хельтис',
			'leader': 'де В\'альтер Мудрый Кёнинг I',
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
            'coordinates': [2148, 1928]
        },
        'properties': {
            'name': 'Королевство Фиёрра',
			'tag': 'Fi',
			'url': '26779',
			'capital': 'Митра',
			'leader': 'Круэл Вальмонт',
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
            'coordinates': [2148, 1928]
        },
        'properties': {
            'name': 'Королевство Фиёрра',
			'tag': 'Fi',
			'url': '26779',
			'capital': 'Митра',
			'leader': 'Круэл Вальмонт',
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
            'coordinates': [1894, 2096]
        },
        'properties': {
            'name': 'Дария',
			'tag': 'Da',
			'url': '37908',
			'capital': UNKNOWN,
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
            'coordinates': [1930, 2197]
        },
        'properties': {
            'name': 'Дария',
			'tag': 'Da',
			'url': '37908',
			'capital': UNKNOWN,
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
            'coordinates': [1913, 1990]
        },
        'properties': {
            'name': 'Халифат Ай\'Шераф',
			'tag': 'Is',
			'url': '47282',
			'capital': 'Кердишахаль',
			'leader': 'Абдула-аль-Алмас',
			'government': 'Халифат',
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
            'coordinates': [1987, 1805]
        },
        'properties': {
            'name': 'Королевство Берглэнд',
			'tag': 'Bg',
			'url': '39754',
			'capital': 'Беринбург',
			'leader': 'Малькольм I',
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
            'coordinates': [1940, 1714]
        },
        'properties': {
            'name': 'Королевство Лытань',
			'tag': 'Lh',
			'url': '34163',
			'capital': 'Ньюбург',
			'leader': 'Джерольд III',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Lytan.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1850, 1691]
        },
        'properties': {
            'name': 'Дрэгленд',
			'tag': 'Dr',
			'url': '22289',
			'capital': UNKNOWN,
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
            'coordinates': [1853, 1524]
        },
        'properties': {
            'name': 'Королевство Фрониард',
			'tag': 'Fr',
			'url': '40190',
			'capital': 'Нервингтон',
			'leader': 'Коул Ливингстон',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Froniard.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1754, 1904]
        },
        'properties': {
            'name': 'Великое Герцогство Миленское',
			'tag': 'Ml',
			'url': '38880',
			'capital': 'Милен',
			'leader': 'Григорий Пришковский-Элебленский',
			'status': STATUS_PROTECTORATE + ' (Кордения)',
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
            'coordinates': [1730, 1608]
        },
        'properties': {
            'name': 'Бриар',
			'tag': 'Br',
			'url': '41142',
			'capital': 'Бриар',
			'leader': 'Макабр дё Бриар',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_PROTECTORATE + ' (Кордения)',
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
            'coordinates': [1673, 1692]
        },
        'properties': {
            'name': 'Корденийская Империя',
			'tag': 'Kr',
			'url': '37235',
			'capital': 'Марос',
			'leader': 'Александра Боне',
			'government': GOV_ABS_MONARCHY,
			'status': STATUS_GREAT,
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
            'coordinates': [1620, 1969]
        },
        'properties': {
            'name': 'Княжеский союз Морния',
			'tag': 'Mo',
			'url': NO_TOPIC,
			'capital': UNKNOWN,
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
            'coordinates': [1703, 2114]
        },
        'properties': {
            'name': 'Литланд',
			'tag': 'Lt',
			'url': '21275',
			'capital': 'Азар',
			'leader': 'Ода Тори',
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
            'coordinates': [1695, 2420]
        },
        'properties': {
            'name': 'Королевство Аглардор',
			'tag': 'Ag',
			'url': '27385',
			'capital': 'Аглар',
			'leader': 'Маргол',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Aglardor.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1569, 2439]
        },
        'properties': {
            'name': 'Халифат Алеман',
			'tag': 'Al',
			'url': '30263',
			'capital': 'Аррани',
			'leader': 'Абдулла ибн Рашит',
			'government': 'Халифат',
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': 'Flag_of_Aleman.webp'
			}
        }
    },
	{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [1568, 1727]
        },
        'properties': {
            'name': 'Королевство Авемор',
			'tag': 'Av',
			'url': '21530',
			'capital': UNKNOWN,
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
            'coordinates': [1513, 1957]
        },
        'properties': {
            'name': 'Ультаренский Орден',
			'tag': 'Ae',
			'url': '14767',
			'capital': 'Ришаль',
			'leader': 'Гаррус фон Ришельдер',
			'government': 'Капитул',
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
            'coordinates': [1497, 2069]
        },
        'properties': {
            'name': 'Орден святых паладинов',
			'tag': 'Po',
			'url': '18281',
			'capital': 'Грифонхил',
			'leader': 'Артес',
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
            'coordinates': [1568, 2054]
        },
        'properties': {
            'name': 'Фламасский орден',
			'tag': 'Fo',
			'url': '16883',
			'capital': 'Мальборк',
			'leader': 'Конрад фон Визенранд',
			'government': GOV_DUAL_MONARCHY,
			'status': STATUS_MINOR,
			'playerName': NO_PLAYER,
			'playerUrl': NO_PLAYER,
			'flag': {
				'image': NO_FLAG
			}
        }
    }
	]
};