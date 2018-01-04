import React from 'react';
import './Player.css';
import getTilePosition from '../../utils/getTilePosition';

const Player = ({ player, index }) => {
  let tp = { top: 0, left: 0 };
  if (player.playerPosition) {
    tp = getTilePosition(player.playerPosition);
  }
  return (
    <div className="Player-player" style={{ top: tp.top, left: tp.left, background: player.color }}>P{index}</div>
  );
};

export default Player;