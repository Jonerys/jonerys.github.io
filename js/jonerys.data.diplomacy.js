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

var diplomacyData = {
    records: [
        {
            id1: 73,
            id2: 74,
            duplex: true,
            status: DIPLO_STATUS_WAR,
            notes: ['Внезапно объявлена война!', 'Какой же кринж!']
        },
        {
            id1: 47,
            id2: 74,
            duplex: true,
            status: DIPLO_STATUS_NEUTRAL,
            notes: []
        },
        {
            id1: 44,
            id2: 74,
            duplex: true,
            status: DIPLO_STATUS_FRIENDSHIP,
            notes: []
        },
        {
            id1: 61,
            id2: 74,
            duplex: true,
            status: DIPLO_STATUS_FRIENDSHIP,
            notes: []
        },
        {
            id1: 61,
            id2: 44,
            duplex: true,
            status: DIPLO_STATUS_FRIENDSHIP,
            notes: []
        },
        {
            id1: 78,
            id2: 27,
            duplex: false,
            status: DIPLO_STATUS_METROPOLY,
            notes: []
        },
        {
            id1: 27,
            id2: 78,
            duplex: false,
            status: DIPLO_STATUS_COLONY,
            notes: []
        },
    ]
}