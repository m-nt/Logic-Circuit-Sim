import Gate from "/app/Chr.js";
var c = /** @type {HTMLCanvasElement} */ (document.getElementById("Main"));
var ctx = c.getContext("2d");

let HEIGHT = 550;
let WIDTH = 1100;

const f1 = new Gate(ctx, 50, 150);
const f2 = new Gate(ctx, 50, 300);
const f3 = new Gate(ctx, 200, 300);

let Hierarchy = /** @type {Gate} */ ([f1, f2, f3]);

function renderUI(e) {
  Hierarchy.map((items) => {
    items.drawUI();
  });
}
function renderTexts(e) {
  Hierarchy.map((items) => {
    items.drawText();
  });
}
window.addEventListener("click", (e) => {
  console.log("click");
  Hierarchy[0].updating(50, 40);
  console.log(Hierarchy);
});

c.height = HEIGHT;
c.width = WIDTH;

function Render_Pipeline(e) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  renderUI();
  renderTexts();
  requestAnimationFrame(Render_Pipeline);
}
Render_Pipeline();
