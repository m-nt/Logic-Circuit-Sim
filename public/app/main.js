import Gate from "/app/Chr.js";
var c = /** @type {HTMLCanvasElement} */ (document.getElementById("Main"));
var ctx = c.getContext("2d");

let HEIGHT = 550;
let WIDTH = 1100;

let f1 = new Gate(ctx, 50, 150);
let f2 = new Gate(ctx, 50, 300);
let f3 = new Gate(ctx, 200, 300);

let Hierarchy = [f1, f2, f3];
function renderUI(e) {
  Hierarchy.forEach((items) => {
    items.drawUI();
  });
}
function renderTexts(e) {
  Hierarchy.forEach((items) => {
    items.drawText();
  });
}
let s = 30;
window.addEventListener("click", (e) => {
  s += 10;
  Hierarchy[0].updating(e.clientX, e.clientY);
  console.log(Hierarchy[0]);
});

c.height = HEIGHT;
c.width = WIDTH;

function Render_Pipeline(e) {
  ctx.clearRect(0, 0, c.width, c.height);
  renderUI();
  renderTexts();
  requestAnimationFrame(Render_Pipeline);
}
Render_Pipeline();
