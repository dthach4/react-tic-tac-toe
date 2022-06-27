import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './ui/sections/Game';
import GameState from './models/GameState';
import HardComputerPlayer from './models/player/HardComputerPlayer';
import HumanPlayer from './models/player/HumanPlayer';

function App() {

  const [state, setState] = useState(new GameState({}));
  
  useEffect(() => {
    setState(state => state
      .withCurrentState('game')
      .withPlayers([
        new HumanPlayer({name: 'Player O'}),
        new HardComputerPlayer({name: 'Player X'}),
      ])
      .withTurnPlayerIndex(Math.floor(Math.random()*2))
      .withBoard([null, null, null, null, null, null, null, null, null])
    );
  }, []);

  useEffect(() => {
    if('game' === state.currentState && !state.isOver() && !state.turnPlayer.isHuman) {
      setTimeout(() => {
        let computerMove = state.turnPlayer.nextMove(state);
        setState(state => state.withMovePlayed(computerMove));
      }, 0);
    }
  }, [state]);
  
  return (
    <div className="App">
      <Game state={state} setState={setState} />
    </div>
  );
}

export default App;
