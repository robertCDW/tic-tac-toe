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

// GET ALL GAMES

const getGames = () => {

    return $.ajax({
        method: "POST",

        headers: {
            Authorization: "Bearer " + store.user.token
        },
        url: config.apiUrl + "/games",
        data: {},
    })
}


// GET ONE GAME


// UPDATE (PATCH) ACTIVE GAME

module.exports = {
    createGame
}
