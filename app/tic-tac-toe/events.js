'use strict'

const game = require('../tic-tac-toe/game-state')

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
        [1, 2, 3],

        // mid
        [4, 5, 6],

        // bot
        [7, 8, 9],

        // left
        [1, 4, 7],

        // center
        [2, 5, 8],

        // right
        [3, 6, 9],

        // Top to Bottom
        [1, 5, 9],

        // Bottom to Top
        [7, 5, 3],
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

const reset = () => {
    game.turn = 0
    game.xTiles.clear()
    game.oTiles.clear()
    game.active = true
    $('.box').text("")
    $('.win').hide()
}

module.exports = {
    selectBox,
    reset,
}
