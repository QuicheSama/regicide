'use strict'

const cardEnums = {
    value: {
        KING: 'K',
        QUEEN: 'Q',
        JUGGERNAUT: 'J',
        ANIMAL: 'A',
        JESTER: 'C',
        TWO: '2',
        THREE: '3',
        FOUR: '4',
        FIVE: '5',
        SIX: '6',
        SEVEN: '7',
        EIGHT: '8',
        NINE: '9',
        TEN: '10'
    },
    suit: {
        SPADE: '♠',
        HEART: '♥',
        CLUB: '♣',
        DIAMOND: '♦'
    }
}

const deckValues = {
    castle: [
        cardEnums.value.KING,
        cardEnums.value.QUEEN,
        cardEnums.value.JUGGERNAUT
    ],
    tavern: [
        cardEnums.value.TWO,
        cardEnums.value.THREE,
        cardEnums.value.FOUR,
        cardEnums.value.FIVE,
        cardEnums.value.SIX,
        cardEnums.value.SEVEN,
        cardEnums.value.EIGHT,
        cardEnums.value.NINE,
        cardEnums.value.TEN,
        cardEnums.value.ANIMAL
    ]
}

const suits = [
    cardEnums.suit.SPADE,
    cardEnums.suit.HEART,
    cardEnums.suit.CLUB,
    cardEnums.suit.DIAMOND
];

module.exports = {
    cardEnums,
    deckValues,
    suits
};
