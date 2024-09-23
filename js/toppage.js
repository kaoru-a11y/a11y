imgs = new imgObjs();
function imgObjs() {
  const i = 0;
  this[i] = new Image();
  this[i].src = "../images/jindex.gif";
  i++; // fore
  this[i] = new Image();
  this[i].src = "../images/jindexleft.gif";
  i++; // left
  this[i] = new Image();
  this[i].src = "../images/jindexright.gif";
  i++; // right
  this.length = i;
  return this;
}
function setImage(idx) {
  document.msg.src = imgs[idx].src;
}
function resetImage() {
  document.msg.src = imgs[0].src;
}
