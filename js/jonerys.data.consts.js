const NO_TOPIC = '54209'; //ссылка на тему географии, если нет темы
const NO_FLAG = 'Flag_of_Unknown.webp';
const UNKNOWN = 'Неизвестно';
const NONE = 'Отсутствует';

const FLAG_IMAGES_PATH = 'images/country_flags/';
const MARKER_ICONS_PATH = 'images/icons/';

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

const CONTINENT_REBIRTH = 'Материк Возрождения'
const CONTINENT_REBIRTH_NORTH = 'Материк Возрождения (север)';
const CONTINENT_REBIRTH_WEST = 'Материк Возрождения (запад)';
const CONTINENT_REBIRTH_EAST = 'Материк Возрождения (восток)';
const CONTINENT_REBIRTH_SOUTH = 'Материк Возрождения (юг)';
const CONTINENT_LILLY = 'Материк Лилии'; 
const CONTINENT_SUNRISE = 'Материк Рассвета'; 
const CONTINENT_ANCHOR = 'Материк Якоря'; 

const CONTINENT_OPACITY_BASE = 0.3;
const CONTINENT_OPACITY_ACTIVE = 0.7;
const CONTINENT_COLOR_ANCHOR = "#B18AFF";
const CONTINENT_COLOR_SUNRISE = "#1CDEAD";
const CONTINENT_COLOR_LILLY = "#FF94ED";
const CONTINENT_COLOR_REBIRTH = "#FFE5B4";

const DIPLO_STATUS_WAR = {
    text: 'ВОЙНА!',
    emoji: '⚔️'
};
const DIPLO_STATUS_NEUTRAL = {
    text: 'Нейтралитет',
    emoji: '😐'
};
const DIPLO_STATUS_ALLY = {
    text: 'Союз',
    emoji: '🤗'
};
const DIPLO_STATUS_COLONY = {
    text: 'Колониальная зависимость',
    emoji: '🔗'
};
const DIPLO_STATUS_METROPOLY = {
    text: 'Зависимая территория',
    emoji: '🎩'
};
const DIPLO_STATUS_FRIENDSHIP = {
    text: 'Дружественный нейтралитет',
    emoji: '😉'
};
const DIPLO_STATUS_HOSTILE = {
    text: 'Враждебный нейтралитет',
    emoji: '😠'
};

const NO_PLAYER = 0;
const PLAYER_ZOG = 1;
const GRESHNIK = 2;
const MAYAK57 = 3;
const IMPCOM = 4;
const ENKELTEA = 5;
const NIKTOK = 6;
const ORK = 7;
const KAISER = 8;
const CORPORAL = 9;
const TINUSEC = 10;
const RAVAN = 11;
const LECAPAV = 12;
const BLACKKING = 13;
const ARMOFROME = 14;
const PAUKSKA = 15;
const YUGO = 16;

const USERS = [
    {
        username: 'Банк ВР',
        url: null
    },
    {
        username: 'Совет ВР',
        url: null
    },
	{
		username: 'Грешник',
		url: '22262'
	},
	{
		username: 'MAYAK57',
		url: '21169'
	},
	{
		username: 'Имперский командор',
		url: '10808'
	},
	{
		username: 'Enkeltea',
		url: '33778'
	},
	{
		username: 'Ник Токарев',
		url: '28378'
	},
	{
		username: 'Ork',
		url: '11517'
	},
	{
		username: 'KaiseR',
		url: '4131'
	},
	{
		username: 'Corporal',
		url: '29631'
	},
	{
		username: 'Тинувель Секунда',
		url: '30987'
	},
	{
		username: 'Раван',
		url: '9999'
	},
	{
		username: 'Le capitaine Avare',
		url: '23533'
	},
	{
		username: 'Black King',
		url: '11231'
	},
	{
		username: 'Armageddon Of Rome',
		url: '33636'
	},
	{
		username: 'Паук-Скакун',
		url: '33915'
	},
	{
		username: 'Yugo',
		url: '29549'
	}
];