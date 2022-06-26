export default function GameState(args) {
  const currentState = args.currentState ?? 'names';
  const players      = args.players      ?? [null, null];
  const turnPlayer   = args.turnPlayer   ?? null;
  const board        = args.board        ?? [null, null, null, null, null, null, null, null, null];
  const withCurrentState = function (currentState) {
    return GameState({
      currentState,
      players,
      turnPlayer,
      board,
    });
  };
  const withPlayers = function (players) {
    return GameState({
      currentState,
      players,
      turnPlayer,
      board,
    });
  };
  const withTurnPlayer = function (turnPlayer) {
    return GameState({
      currentState,
      players,
      turnPlayer,
      board,
    });
  };
  const withBoard = function (board) {
    return GameState({
      currentState,
      players,
      turnPlayer,
      board,
    });
  };
  const withMovePlayed = function (idx) {
    if(this.currentState !== 'game') {
      return this;
    }
    let board = [...this.board];
    board[idx] = this.turnPlayer;
    let newState = this
      .withTurnPlayer((this.turnPlayer + 1) % 2)
      .withBoard(board);
    if(null !== newState.getWinner() || newState.isFull()) {
      newState = newState.withCurrentState('over');
    }
    return newState;
  };
  const getWinner = function () {
    if(null !== this.board[0] && this.board[0] === this.board[1] && this.board[0] === this.board[2]) { return {player: board[0], squares: [0, 1, 2]}; } // top row
    if(null !== this.board[3] && this.board[3] === this.board[4] && this.board[3] === this.board[5]) { return {player: board[3], squares: [3, 4, 5]}; } // middle row
    if(null !== this.board[6] && this.board[6] === this.board[7] && this.board[6] === this.board[8]) { return {player: board[6], squares: [6, 7, 8]}; } // bottom row
    if(null !== this.board[0] && this.board[0] === this.board[3] && this.board[0] === this.board[6]) { return {player: board[0], squares: [0, 3, 6]}; } // left column
    if(null !== this.board[1] && this.board[1] === this.board[4] && this.board[1] === this.board[7]) { return {player: board[1], squares: [1, 4, 7]}; } // middle column
    if(null !== this.board[2] && this.board[2] === this.board[5] && this.board[2] === this.board[8]) { return {player: board[2], squares: [2, 5, 8]}; } // right column
    if(null !== this.board[0] && this.board[0] === this.board[4] && this.board[0] === this.board[8]) { return {player: board[0], squares: [0, 4, 8]}; } // top-left bottom-right diagonal
    if(null !== this.board[2] && this.board[2] === this.board[4] && this.board[2] === this.board[6]) { return {player: board[2], squares: [2, 4, 6]}; } // top-right bottom-left diagonal
    return null;
  };
  const isFull = function () {
    return null !== this.board[0] &&
      null !== this.board[1] &&
      null !== this.board[2] &&
      null !== this.board[3] &&
      null !== this.board[4] &&
      null !== this.board[5] &&
      null !== this.board[6] &&
      null !== this.board[7] &&
      null !== this.board[8];
  }
  const restart = function () {
    return this
      .withCurrentState('game')
      .withBoard(Array(9).fill(null))
      .withTurnPlayer(Math.floor(Math.random()*2));
  }
  return {
    currentState,
    players,
    turnPlayer,
    board,
    withCurrentState,
    withPlayers,
    withTurnPlayer,
    withBoard,
    withMovePlayed,
    getWinner,
    isFull,
    restart,
  };
}