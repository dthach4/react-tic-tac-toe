import React from 'react';
import './GameBoard.css';

export default function GameBoard({ state, setState }) {
  const playMove = function(idx) {
    return () => {
      if('game' !== state.currentState) {
        return;
      }
      let board = [...state.board];
      board[idx] = state.turnPlayer;
      setState(state => state.withMovePlayed(idx));
    };
  };
  const gameBoardBoxes = Array(9).fill(0).map((_, idx) => {
    if(0 === state.board[idx]) {
      return <div key={idx} className="GameBoard__Box GameBoard__Box--Player1"></div>;
    }
    if(1 === state.board[idx]) {
      return <div key={idx} className="GameBoard__Box GameBoard__Box--Player2"></div>;
    }
    return <div key={idx} className="GameBoard__Box" onClick={playMove(idx)}></div>;
  });
  return (
    <div className="GameBoard">
      {gameBoardBoxes}
    </div>
  )
}
