import React from 'react';
import './Players.css';



const Players = ({ players, currentPlayer }) => {

  const p = () => {
    return players.map((v, i) => {
      return <li key={i} className={i === currentPlayer ? "Players-active" : ""}><div>Name:{v.name}</div>
        <div>Throws : {v.throws}</div>
        <div>Sixes : {v.sixes}</div>
        <div>Snakes : {v.snakes}</div>
        <div>ladders : {v.ladders}</div>
      </li>
    })
  }
  return (

    <ul className="Players-disp">{p()}</ul>
  );
};

export default Players;