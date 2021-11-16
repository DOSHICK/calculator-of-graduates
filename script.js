var maxPoint = document.getElementById("maxPoint");
var maxGrad = document.getElementById("maxGrad");
var points = document.getElementById("points")

var counterOut = document.getElementById("how-match");

maxGrad.value = 10;

points.onkeyup = function () {
  var pointsFind = (points.value * maxGrad.value) / maxPoint.value;
  counterOut.innerHTML = pointsFind;
}


