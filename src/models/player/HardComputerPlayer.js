export default function HardComputerPlayer(args) {
  const name = args.name.length < 1 ? 'Hard AI' : args.name;
  const isHuman = false;
  const nextMove = function (gameState) {
    if(this !== gameState.turnPlayer) {
      return null;
    }
    let validMoves = gameState.getValidMoves();
    if(validMoves.length < 1) {
      return null;
    }
    let movesWithValue = validMoves.map(
      move => ({
        move: move,
        value: minimax(gameState.withMovePlayed(move)),
      })
    );
    let maximumMoveValue = Math.max(...(movesWithValue.map(move => move.value)))
    let bestMoves = movesWithValue.filter(move => move.value === maximumMoveValue);
    return bestMoves[Math.floor(Math.random()*bestMoves.length)].move;
  };
  const minimax = function (gameState) {
    let validMoves = gameState.getValidMoves();
    if(validMoves.length < 1) {
      if(null === gameState.getWinner()) {
        return 0;
      }
      if(o === gameState.getWinner().player) {
        return 100;
      }
      return -100;
    }
    const moveValues = gameState.getValidMoves().map(
      currentMove => minimax(gameState.withMovePlayed(currentMove))
    );
    if(o !== gameState.turnPlayer) {
      return Math.min(...moveValues);
    }
    return Math.max(...moveValues);
  };
  const o = {
    name,
    isHuman,
    nextMove,
  };
  return o;
}