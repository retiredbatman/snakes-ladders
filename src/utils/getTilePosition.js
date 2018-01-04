const offset = (el) => {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
const getTilePosition = (tile_no) => {
  // eslint-disable-next-line
  const el = document.querySelector(".Board-tile[data-value=" + "'" + tile_no + "']");
  return offset(el);
}

export default getTilePosition;