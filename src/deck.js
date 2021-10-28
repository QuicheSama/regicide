'use strict'
const { deckValues, suits, cardEnums } = require('./enums');
const { shuffle } = require('./utils/deck');

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

function createCastleWithShuffle(shuffleFn) {
    let castle = []
    deckValues.castle.forEach((value) => {
        const currentRoyals = []
        suits.forEach((suit) => {
            currentRoyals.push({ value, suit })
        })
        castle = castle.concat(
            shuffleFn ? shuffleFn(currentRoyals) : currentRoyals
        )
    });

    return castle;
}

function createTavernWithShuffle(shuffleFn, numPlayers) {
    const { numJesters } = configsByNumPlayers[numPlayers]
    let tavern = [];
    deckValues.tavern.forEach((value) => {
        suits.forEach((suit) => {
            tavern.push({ value, suit })
        })
    });
    for(let index = 0; index < numJesters; index++) {
        tavern.push({ 
            value: cardEnums.value.JESTER,
        })
    }

    return shuffleFn ? shuffleFn(tavern) : tavern;
}

const createCastle = createCastleWithShuffle.bind(this, shuffle)
const createTavern = createTavernWithShuffle.bind(this, shuffle)

function createDecks(numPlayers = 2) {
    const castle = createCastle();
    const tavern = createTavern(numPlayers)
    console.log(castle)
    console.log('----------')
    console.log(tavern)
    console.log(`There are a total of ${castle.length} castle cards, and ${tavern.length} tavern cards.`)
    console.log(`That's a total of ${castle.length + tavern.length} cards`);
}

createDecks(4)

module.exports = {
    createCastleWithShuffle,
    createTavernWithShuffle,
    createCastle,
    createTavern
};
