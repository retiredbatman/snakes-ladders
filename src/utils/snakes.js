const snakes = { "18": 5, "43": 23, "49": 33, "56": 26, "65": 57, "88": 53, "99": 35, "92": 71 };
const isSnakeTile = (tile_no) => {
  if (snakes[+tile_no]) {
    return snakes[+tile_no];
  }
  return 0;
}

export default isSnakeTile;