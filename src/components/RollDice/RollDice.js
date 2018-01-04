import React from 'react';
import './RollDice.css';

const RollDice = ({ handleClick, isMoving }) => {
  return (
    <button onClick={() => { if (!isMoving) { handleClick() } }} className="RollDice-button">Roll Dice</button>
  );
};

export default RollDice;