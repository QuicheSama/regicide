const gameSetupsByNumPlayers = {
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

module.exports = {
    gameSetupsByNumPlayers
};
