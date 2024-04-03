// RGB Colors
document.getElementById("black").addEventListener("click", black);

function black() {
  document.getElementById("display").style.background = "black";
  document.getElementById("rgbText").innerHTML = "rgb(0,0,0)";
}

document.getElementById("white").addEventListener("click", white);

function white() {
  document.getElementById("display").style.background = "white";
  document.getElementById("rgbText").innerHTML = "rgb(255,255,255)";
}

document.getElementById("previewBtn").addEventListener("click", eee);

function eee() {
  let r = +document.getElementById("red").value;
  let g = +document.getElementById("green").value;
  let b = +document.getElementById("blue").value;

  let color = "rgb(" + r + "," + g + "," + b + ")";

  document.getElementById("display").style.background = color;
  console.log(color);
  document.getElementById("rgbText").innerHTML = `rgb(${r},${g},${b})`;
}
