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
    const x = game.xTiles
    const y = game.oTiles

    if (game.turn === 9) {
        $('#win-alert').text("Game tied!")
        game.active = false
        $('.win').show()
    }
    
    for (let tiles = 0; tiles < win.length; tiles++) {
        if ( option(x, win[tiles]) ) {
            $('#win-alert').text("X wins!")
            game.active = false
            $('.win').show()
        }
        if ( option(y, win[tiles]) ) {
            $('#win-alert').text("O wins!")
            game.active = false
            $('.win').show()
        }
    }
    

}

const selectBox = (event) => {
    if (game.active) {

        const tile = $(event.target).data("tile")

        // check if tile has been played by X
        if ( game.xTiles.has(tile) ) {
            console.log("already played by X")
        } 
        // check if tile has been played by O
        else if ( game.xTiles.has(tile)) {
            console.log("already played by O")
        }

        else if (game.turn % 2 === 0) {
            $(event.target).text("X")
            game.xTiles.add(tile)
            game.cells[tile] = "X"
            game.turn++
        } else {
            $(event.target).text("O")
            game.oTiles.add(tile)
            game.cells[tile] = "O"
            game.turn++
        }

        checkWin()
    }
}

const newGame = () => {

    api.createGame()
    game.turn = 0
    game.xTiles.clear()
    game.oTiles.clear()
    game.active = true
    $('.box').text("")
    $('.win').hide()
}

module.exports = {
    selectBox,
    newGame,
}
