import React from 'react';
import './GameBoard.css';

export default function GameBoard({ state, setState }) {
  const playMove = function(idx) {
    return () => {
      if('game' !== state.currentState) {
        return;
      }
      if(!state.turnPlayer.isHuman) {
        return;
      }
      if(null !== state.board[idx]) {
        return;
      }
      setState(state => state.withMovePlayed(idx));
    };
  };
  const winner = state.getWinner();
  const gameBoardBoxes = Array(9).fill(0).map((_, idx) => {
    let classes = ['GameBoard__Box'];
    if(0 === state.board[idx]) {
      classes.push('GameBoard__Box--Player1');
    }
    if(1 === state.board[idx]) {
      classes.push('GameBoard__Box--Player2');
    }
    if(null !== winner && winner.squares.indexOf(idx) >= 0) {
      classes.push('GameBoard__Box--WinnerSquare');
    }
    return <div key={idx} className={classes.join(' ')} onClick={playMove(idx)}></div>;
  });
  return (
    <div className="GameBoard">
      {gameBoardBoxes}
    </div>
  )
}
