'use strict'

const game = require('../tic-tac-toe/game-state')
const api = require('./api')

// accepts three tiles, checks if the player has all 3 
const option = (player, tiles) => {
    if ( player.has(tiles[0]) && player.has(tiles[1]) && player.has(tiles[2]) ) {
        return true
    } else {
        return false
    }
}

const checkWin = () => {

    const win = [
        // top
        [0, 1, 2],

        // mid
        [3, 4, 5],

        // bot
        [6, 7, 8],

        // left
        [0, 3, 6],

        // center
        [1, 4, 7],

        // right
        [2, 5, 8],

        // Top to Bottom
        [0, 4, 8],

        // Bottom to Top
        [6, 4, 2],
    ]

    // player 1 win conditions
    const x = game.gameState.xTiles
    const y = game.gameState.oTiles

    if (game.gameState.turn === 9) {
        $('#win-alert').text("Game tied!")
        game.gameState.active = false
        $('.win').show()
    }
    
    for (let tiles = 0; tiles < win.length; tiles++) {
        if ( option(x, win[tiles]) ) {
            $('#win-alert').text("X wins!")
            game.gameState.active = false
            $('.win').show()
            $('#new-game').show()
        }
        if ( option(y, win[tiles]) ) {
            $('#win-alert').text("O wins!")
            game.gameState.active = false
            $('.win').show()
            $('#new-game').show()
        }
    }
    

}

const selectBox = (event) => {
    if (game.gameState.active) {

        const tile = $(event.target).data("tile")
        let selectXO = ""

        // check if tile has been played by X
        if ( game.gameState.xTiles.has(tile) ) {
            console.log("already played by X")
        } 
        // check if tile has been played by O
        else if ( game.gameState.xTiles.has(tile)) {
            console.log("already played by O")
        }

        else if (game.gameState.turn % 2 === 0) {
            selectXO = "X"
            $(event.target).text(selectXO)
            game.gameState.xTiles.add(tile)
            game.gameState.cells[tile] = selectXO
            game.gameState.turn++
        } else {
            selectXO = "O"
            $(event.target).text(selectXO)
            game.gameState.oTiles.add(tile)
            game.gameState.cells[tile] = selectXO
            game.gameState.turn++
        }

        checkWin()

        // currently doesn't update at the end of the game to let the server know the game is over
        api.updateGame(tile, selectXO)
        .then(updateSuccess)
        .catch(updateFailure)
    }
}

const updateSuccess = () => {
    
}

const updateFailure = (err) => {
    console.error("error: " + err)
}

// NEW GAME FUNCTIONS

const newGame = () => {

    api.createGame()
    .then(newGameSuccess)
    .catch(newGameFailure)

}

const newGameSuccess = (gameData) => {

    console.log(gameData)
    game.gameState.id = gameData.game._id
    game.gameState.cells = gameData.game.cells
    game.gameState.owner = gameData.game.owner

    game.gameState.turn = 0
    game.gameState.xTiles.clear()
    game.gameState.oTiles.clear()
    game.gameState.active = true
    $('.box').text("")
    $('.win').hide()
    $('#game-board').show()
    $('#new-game').hide()

}

const newGameFailure = (err) => {
    console.error(err)
}

module.exports = {
    selectBox,
    newGame,
}
