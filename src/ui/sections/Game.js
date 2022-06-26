import React from 'react'
import GameBoard from './game/GameBoard';
import BelowGameBoard from './game/BelowGameBoard';
import './Game.css';

export default function Game({ state, setState }) {

  return (
    <div className="Game">
      <GameBoard state={state} setState={setState} />
      <BelowGameBoard state={state} setState={setState} />
    </div>
  );

}
