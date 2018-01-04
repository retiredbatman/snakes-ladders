const ladders = { "6": 16, "9": 31, "19": 38, "28": 84, "21": 79, "51": 67, "72": 93, "80": 100 };
const isLadderTile = (tile_no) => {
  if (ladders[+tile_no]) {
    return ladders[+tile_no];
  }
  return 0;
}

export default isLadderTile;