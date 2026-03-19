function light(sw) {
  var pic;
  if (sw == 0) {
	pic = "immagini/pic_bulboff.gif"
  } else {
	pic = "immagini/pic_bulbon.gif"
  }
  document.getElementById('lampadina').src = pic;
}
