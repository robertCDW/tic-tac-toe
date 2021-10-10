const gameState = {
    turn: 0,
    active: true,
    xTiles : new Set(),
    oTiles : new Set(),
    cells : [],
}

module.exports = {
    turn: gameState.turn,
    active: gameState.active,
    xTiles: gameState.xTiles,
    oTiles: gameState.oTiles,
    cells: gameState.cells,
}