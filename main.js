let canvas = document.querySelector("canvas");
canvas.width = 300;
canvas.height = 300;
let cx = canvas.getContext("2d");

// clock properties
let margin = 35;
let clockRadius = canvas.width / 2 - margin;
let color = "#0DF5E3";

// functions
function drawCircle() {
  cx.beginPath();
  cx.arc(canvas.width / 2, canvas.height / 2, clockRadius, 0, Math.PI * 2, true);
  cx.strokeStyle = color;
  cx.stroke();
}

function drawCenter() {
  cx.beginPath();
  cx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
  cx.fillStyle = color;
  cx.fill();
}

cx.beginPath();
cx.arc(canvas.width / 2, canvas.height / 2, clockRadius, -Math.PI * 0.5, 0);
cx.stroke();

// for (let i = 1; i <= 12; i++) {
//   let angle = (Math.PI / 6) * (i - 3);
//   let width = cx.measureText(i).width;
//   cx.fillText(
//     i,
//     canvas.width / 2 + Math.cos(angle) * clockRadius - width / 2,
//     canvas.height / 2 + Math.sin(angle) * clockRadius + 5
//   );
// }
