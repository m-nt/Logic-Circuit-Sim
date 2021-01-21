import f from "/app/Chr.js";
var c = /** @type {HTMLCanvasElement} */ (document.getElementById("Main"));
var ctx = c.getContext("2d");
c.height = 550;
c.width = 1100;

f(ctx, 500, 100);
