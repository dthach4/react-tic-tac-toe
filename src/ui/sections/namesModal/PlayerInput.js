import React from 'react'
import './PlayerInput.css';

export default function PlayerInput({ playerNumber, label, defaultPlayer }) {
  return (
    <div className="PlayerInput">
      <input type="text" className="PlayerInput__Textbox" name={ "name"+playerNumber } placeholder={label} />
      <div className={ "PlayerInput__Leading PlayerInput__Leading--Player"+playerNumber } />
      <select className="PlayerInput__Select" name={"type"+playerNumber}>
        <option value="human">Human</option>
        <option value="hard-ai">Hard AI</option>
      </select>
    </div>
  )
}
