import Gate from "/app/Chr.js";
var c = /** @type {HTMLCanvasElement} */ (document.getElementById("Main"));
var ctx = c.getContext("2d");
const rect = c.getBoundingClientRect();

let HEIGHT = 550;
let WIDTH = 1100;

let f1 = new Gate(ctx, 50, 150, rect);
let f2 = new Gate(ctx, 50, 300, rect);
let f3 = new Gate(ctx, 200, 300, rect);

let Hierarchy = [f1, f2, f3];
function renderUI() {
  Hierarchy.forEach((items) => {
    items.drawUI();
  });
}
function renderTexts() {
  Hierarchy.forEach((items) => {
    items.drawText();
  });
}
c.onmousemove = (e) => {
  e.preventDefault();
  Hierarchy[0].e = e;
};
c.onmousedown = (e) => {
  Hierarchy[0].e = e;
  Hierarchy[0].isDraging = true;
};
c.onmouseup = (e) => {
  Hierarchy[0].e = null;
  Hierarchy[0].isDraging = false;
};

c.height = HEIGHT;
c.width = WIDTH;

function Render_Pipeline() {
  ctx.clearRect(0, 0, c.width, c.height);
  renderUI();
  renderTexts();
  requestAnimationFrame(Render_Pipeline);
}
Render_Pipeline();
