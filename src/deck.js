'use strict'
const { royals, suits, cardEnums } = require('./enums');

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
    royals.forEach((royal) => {
        const currentRoyals = []
        suits.forEach((suit) => {
            currentRoyals.push({ value: royal, suit })
        })
        shuffle(currentRoyals)
        castle = castle.concat(currentRoyals)
    });

    return castle;
}

// function createTavern() {
//     const tavernValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', cardEnums.value.JESTER]
//     let tavern = [];

//     tavernValues.forEach((tavernValue) => {
//         suits.forEach((suit) => {
//             tavern.push({ value: tavernValue, suit })
//         })
//     });
//     for(index = 0; index < numPlayers)
// }

function createDecks(numPlayers) {
    const { numJesters } = configsByNumPlayers(numPlayers)
    const castle = createCastle();
}

