'use strict'

const config = require('../config')
const game = require('./game-state')
const store = require('../store')

// CREATE (POST) NEW GAME

const createGame = () => {

    return $.ajax({
        method: "POST",

        headers: {
            Authorization: "Bearer " + store.user.token
        },
        url: config.apiUrl + "/games",
        data: {},
    })
}

// UPDATE (PATCH) ACTIVE GAME

const updateGame = (index, value) => {
    
    return $.ajax({
        method: "PATCH",

        headers: {
            Authorization: "Bearer " + store.user.token
        },
        url: config.apiUrl + "/games/" + game.gameState.id,
        data: {
            "game": {
                "cell": {
                    "index": index,
                    "value": value
                },
                "over": game.gameState.over
            }
        },
    })
}

// GET ALL GAMES


// GET ONE GAME


module.exports = {
    createGame, 
    updateGame,
}
