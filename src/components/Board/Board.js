import React from 'react';
import './Board.css';



const Board = () => {
  const row = new Array(10);
  const col = new Array(10);
  row.fill(1);
  col.fill(1);
  const getBoard = () => {
    return row.map((r, i) => {
      const rd = col.map((c, j) => {
        let val = (i * 10 - j + 10);
        if (i % 2 !== 0) {
          val = ((9 - i) * 10 + j + 1)
        } else {
          val = ((9 - i) * 10 - j + 10)
        }
        return <div className="Board-tile" key={val} data-value={val}>{val}</div>
      });
      return <div className="Board-row" key={i}>{rd}</div>
    });
  }
  return (
    <div className='Board-wrap'>
      <div className="Board-image">
      </div>
      <div className="Board-board">{getBoard()}</div>
    </div>
  );
};

export default Board;