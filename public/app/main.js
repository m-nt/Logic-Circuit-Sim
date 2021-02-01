import Dots from "/app/dots.js";
import UI from "/app/UiObj.js";
var c = /** @type {HTMLCanvasElement} */ (document.getElementById("Main"));
var ctx = c.getContext("2d");

let HEIGHT = 550;
let WIDTH = 1100;

let u1 = new UI("AND", ctx, 50, 500, 100, 50);
let u2 = new UI("NOT", ctx, 200, 500, 100, 50);

let d1 = new Dots(ctx, 50, 150, 10);
let d2 = new Dots(ctx, 150, 250, 10);

let Hierarchy = [u1, u2, d1, d2];

c.onmousemove = (e) => {
  Hierarchy.forEach((item) => {
    if (item.type === "Gate") {
      if (item.isDraging) {
        item.e = e;
        item.rect = c.getBoundingClientRect();
      }
    } else if (item.type === "dot") {
      if (item.draw) {
        item.e = e;
        item.rect = c.getBoundingClientRect();
      }
    }
  });
};
c.onmousedown = (e) => {
  let rect = c.getBoundingClientRect();
  let MposX = e.clientX - rect.x - 5.5;
  let MposY = e.clientY - rect.y - 6;

  Hierarchy.forEach((item) => {
    if (item.MouseCollision(MposX, MposY)) {
      if (item.type === "UI") {
        Hierarchy.push(
          item.Initialize(e, rect, MposX - item.x, MposY - item.y)
        );
      } else if (item.type === "Gate") {
        item.Initialize(e, rect, MposX - item.x, MposY - item.y);
      } else {
        item.Initialize(e, rect);
        console.log("initialized");
      }
    }
  });
};
c.onmouseup = (e) => {
  let rect = c.getBoundingClientRect();
  let MposX = e.clientX - rect.x - 5.5;
  let MposY = e.clientY - rect.y - 6;

  Hierarchy.forEach((item) => {
    item.isDraging = false;
    if (item.type === "dot") {
      if (item.MouseCollision(MposX, MposY)) {
        // do stuff when we cach the input
        console.log("collisin detected in mouseup for dots");
        item.draw = false;
      } else {
        item.zeroDraw();
        console.log("zeroDraw");
      }
    }
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
