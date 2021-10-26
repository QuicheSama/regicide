'use strict'
const { deckValues, suits, cardEnums } = require('./enums');

const configsByNumPlayers = {
    2: {
        numJesters: 0,
        maxHandSize: 7
    },
    3: {
        numJesters: 1,
        maxHandSize: 6
    },
    4: {
        numJesters: 2,
        maxHandSize: 5
    }
}

function shuffle(arr) {
    // TODO(@quichesama): Add shuffle logic
    return arr;
}

function createCastle() {
    let castle = []
    deckValues.castle.forEach((value) => {
        const currentRoyals = []
        suits.forEach((suit) => {
            currentRoyals.push({ value, suit })
        })
        castle = castle.concat(shuffle(currentRoyals))
    });

    return castle;
}

function createTavern(numPlayers) {
    const { numJesters } = configsByNumPlayers[numPlayers]
    let tavern = [];
    deckValues.tavern.forEach((value) => {
        suits.forEach((suit) => {
            tavern.push({ value, suit })
        })
    });
    for(let index = 0; index < numJesters; index++) {
        tavern.push({ value: cardEnums.value.JESTER })
    }

    return shuffle(tavern);
}

function createDecks(numPlayers = 2) {
    const castle = createCastle();
    const tavern = createTavern(numPlayers)
    console.log(castle)
    console.log('----------')
    console.log(tavern)
}

createDecks(4)
