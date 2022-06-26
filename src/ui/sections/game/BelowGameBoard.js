import React from 'react'
import './BelowGameBoard.css';

export default function BelowGameBoard({ state, setState }) {
  const restart = function() {
    setState(state.restart());
  }
  let message = getMessage(state);
  return (
    <div className="BelowGameBoard">
      {message}
      {'over' === state.currentState &&
        <button onClick={restart}>Restart</button>
      }
    </div>
  )
}

function getMessage(state) {
  if('game' === state.currentState) {
    return 'Player '+state.turnPlayer+'\'s turn';
  }
  if('over' === state.currentState) {
    if(null === state.getWinner()) {
      return 'Draw!';
    }
    return 'Player '+state.getWinner().player+' won!';
  }
  return '???';
}