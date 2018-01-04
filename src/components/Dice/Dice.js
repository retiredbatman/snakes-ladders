import React from 'react';
import './Dice.css';

const Dice = ({ face }) => {

  return (
    <div className="Dice-dice">{face}</div>
  );
};

export default Dice;