let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;


canvas.style.background = "#ff8";

ctx.beginPath();
ctx.moveTo(50,50);/*Deplacement du premier point de la forme */
ctx.lineTo(140, 50);/**/
ctx.lineTo(170, 90);/**/
ctx.lineTo(170, 150);/**/
ctx.lineTo(50, 150);/**/
ctx.lineTo(50, 47);/**/
ctx.lineWidth = 5;
ctx.stroke();