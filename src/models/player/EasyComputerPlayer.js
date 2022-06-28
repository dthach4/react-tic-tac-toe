export default function EasyComputerPlayer(args) {
  const name = args.name.length < 1 ? 'Easy AI' : args.name;
  const isHuman = false;
  const nextMove = function (gameState) {
    if(this !== gameState.turnPlayer) {
      return null;
    }
    const validMoves = gameState.getValidMoves();
    if(validMoves.length < 1) {
      return null;
    }
    const movesWithValue = validMoves.map(
      move => ({
        move: move,
        value: evaluateBoard(gameState.withMovePlayed(move)),
      })
    );
    const maximumMoveValue = Math.max(...(movesWithValue.map(move => move.value)))
    const bestMoves = movesWithValue.filter(move => move.value === maximumMoveValue);
    return bestMoves[Math.floor(Math.random()*bestMoves.length)].move;
  };
  const evaluateBoard = function (gameState) {
    if(null !== gameState.getWinner()) {
      return 100;
    }
    if(canOpponentWinImmediately(gameState)) {
      return -100;
    }
    return 0;
  };
  const canOpponentWinImmediately = function (gameState) {
    const validMovesWithWinningOpponent = gameState.getValidMoves().filter(move => null !== gameState.withMovePlayed(move).getWinner());
    return validMovesWithWinningOpponent.length > 0;
  }
  const o = {
    name,
    isHuman,
    nextMove,
  };
  return o;
}