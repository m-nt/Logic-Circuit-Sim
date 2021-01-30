import Gate from "/app/Chr.js";
var c = /** @type {HTMLCanvasElement} */ (document.getElementById("Main"));
var ctx = c.getContext("2d");

let HEIGHT = 550;
let WIDTH = 1100;

let f1 = new Gate(ctx, 50, 150);

let Hierarchy = [f1];

c.onmousemove = (e) => {
  Hierarchy.forEach((item) => {
    if (item.isDraging) {
      item.e = e;
      item.rect = c.getBoundingClientRect();
    }
  });
};
c.onmousedown = (e) => {
  let rect = c.getBoundingClientRect();
  let MposX = e.clientX - rect.x - 5.5;
  let MposY = e.clientY - rect.y - 6;

  Hierarchy.forEach((item) => {
    if (item.MouseCollision(MposX, MposY)) {
      item.isDraging = true;
      item.ofx = MposX - item.x;
      item.ofy = MposY - item.y;
      item.e = e;
      item.rect = c.getBoundingClientRect();
    }
  });
};
c.onmouseup = (e) => {
  Hierarchy.forEach((item) => {
    item.isDraging = false;
  });
};

c.height = HEIGHT;
c.width = WIDTH;

function Render_Pipeline() {
  ctx.clearRect(0, 0, c.width, c.height);
  Hierarchy.forEach((items) => {
    items.drawUI();
  });
  Hierarchy.forEach((items) => {
    items.drawText();
  });
  requestAnimationFrame(Render_Pipeline);
}
Render_Pipeline();
