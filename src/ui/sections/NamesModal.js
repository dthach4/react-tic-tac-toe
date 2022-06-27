import React from 'react'
import PlayerInput from './namesModal/PlayerInput';
import PlayerFactory from '../../models/player/PlayerFactory';
import './Modal.css';

export default function NamesModal({ state, setState }) {

  if("names" !== state.currentState) {
    return <></>;
  }

  const submitForm = function(e) {
    e.preventDefault();
    const player1 = PlayerFactory.createPlayer({
      name: e.target.elements.name1.value.length < 1 ? 'O' : e.target.elements.name1.value,
      type: e.target.elements.type1.value,
    });
    const player2 = PlayerFactory.createPlayer({
      name: e.target.elements.name2.value.length < 1 ? 'X' : e.target.elements.name2.value,
      type: e.target.elements.type2.value,
    });
    setState(
      state => state
        .withPlayers([player1, player2])
        .restart()
    );
  }

  return (
    <form onSubmit={submitForm}>
      <div className="ModalWrapper">
        <div className="Modal">
          <div className="Modal__Header">
            <h5 className="Modal__Title">Set players</h5>
          </div>
          <div className="Modal__Body">
            <PlayerInput playerNumber="1" label="Player 1" defaultPlayer={state.players[0]} />
            <PlayerInput playerNumber="2" label="Player 2" defaultPlayer={state.players[1]} />
          </div>
          <div className="Modal__Footer">
            <button type="submit">Play</button>
          </div>
        </div>
      </div>
    </form>
  );
}
