import React, { useState, useEffect } from 'react';
import Game from './ui/sections/Game';
import GameState from './models/GameState';
import './App.css';

function App() {

  const [state, setState] = useState(new GameState({}));
  
  useEffect(() => {
    setState(state => state
      .withCurrentState('game')
      .withPlayers([
        { name: 'Player O' },
        { name: 'Player X' },
      ])
      .withTurnPlayer(Math.floor(Math.random()*2))
      .withBoard([null, null, null, null, null, null, null, null, null])
    );
  }, []);

  useEffect(() => {
    if('over' === state.currentState) {
      console.log('Game over!');
    }
  }, [state]);
  
  return (
    <div className="App">
      <Game state={state} setState={setState} />
    </div>
  );
}

export default App;
