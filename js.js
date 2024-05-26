// From: https://www.c64-wiki.com/wiki/Color
const background = [ "000000", "ffffff", "880000", "aaffee",
		     "cc44cc", "00cc55", "0000aa", "eeee77",
		     "dd8855", "664400", "ff7777", "333333",
		     "777777", "aaff66", "0088ff", "bbbbbb" ];

const text = [ "ffffff", "000000", "ffffff", "000000",
	       "ffffff", "000000", "ffffff", "000000",
	       "000000", "ffffff", "000000", "ffffff",
	       "ffffff", "000000", "ffffff", "000000" ];

// Background
const index = Math.floor(Math.random() * 16);
document.body.style.background = '#' + background[index];

// ldx+stx
const pElem = document.getElementById('mnemonic');
if (pElem !== null) {
	var hex = index.toString(16);
	hex = hex.length == 1 ? "0" + hex : hex;
	pElem.innerHTML = 'ldx #$' + hex + '; stx $d020; stx $d021;';
}

// Foreground
const hexColor = '#' + text[index];
let elements = document.getElementsByClassName('js');
for (var i = 0; i < elements.length; i++) {
	elements[i].style.color = hexColor;
}

// Links
const clsName = index < 2 ? "grey" : (text[index] === '000000' ? 'white' : 'black');
let anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
	anchors[i].classList.add(clsName);
}
