'use strict'

const cardEnums = {
    value: {
        KING: 'K',
        QUEEN: 'Q',
        JUGGERNAUT: 'J',
        ANIMAL: 'A',
        JESTER: 'C',
    },
    suit: {
        SPADE: '♠',
        HEART: '♥',
        CLUB: '♣',
        DIAMOND: '♦'
    }
}

const royals = [
    cardEnums.value.KING,
    cardEnums.value.QUEEN,
    cardEnums.value.JUGGERNAUT
]

const suits = [
    cardEnums.suit.SPADE,
    cardEnums.suit.HEART,
    cardEnums.suit.CLUB,
    cardEnums.suit.DIAMOND
];

export default {
    cardEnums,
    royals,
    suits
}




