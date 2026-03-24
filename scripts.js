function light(sw) {
  var pic;
  if (sw == 0) {
	pic = "immagini/pic_bulboff.gif"
  } else {
	pic = "immagini/pic_bulbon.gif"
  }
  document.getElementById('lampadina').src = pic;
}

function showName(nome) {
	document.getElementById('prova').innerHTML = nome;
	document.getElementById('prova').style.color = "red";
}

let sw = 0;
function changeTheme(){
	if (sw == 0){
		document.body.style.backgroundColor = "black";
		sw = 1;
	}
	else{
		document.getElementById('prova').innerHTML = "";
		document.body.style.backgroundColor = "white";
		sw = 0;
	}
	
}
