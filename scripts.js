function light(sw) {
  var pic;
  if (sw == 0) {
	pic = "images/pic_bulboff.gif"
  } else {
	pic = "images/pic_bulbon.gif"
  }
  document.getElementById('lampadina').src = pic;
}