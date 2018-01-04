import React from 'react';

import './AddPlayer.css';

const AddPlayer = ({ handleAdd }) => {
  return (
    <button className="AddPlayer-button" onClick={() => handleAdd()}>Add Player</button>
  );
};

export default AddPlayer;