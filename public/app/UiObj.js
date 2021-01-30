import Gate from "/app/Chr.js";
class UI {
  constructor(name, ctx, x, y, w, h) {
    this.type = "UI";
    this.name = name || "none";
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = /** @type {CanvasRenderingContext2D} */ (ctx);
  }
  Initialize(e, rect, ofx, ofy) {
    return new Gate(
      this.ctx,
      this.x,
      this.y,
      true,
      this.name,
      e,
      rect,
      ofx,
      ofy
    );
  }
  drawUI() {
    let x = this.x;
    let y = this.y;
    this.ctx.fillStyle = "#4e5251";
    this.ctx.fillRect(x, y, this.w, this.h);
  }
  drawText() {
    let x = this.x;
    let y = this.y;
    this.ctx.fillStyle = "#c2c2c2";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.name, x + 20, y + 35, 100);
  }
  MouseCollision(MposX, MposY) {
    /* console.log(
          `MposX: ${MposX}, x: ${this.x}, w: ${this.w}\nMposY: ${MposY}, y: ${this.y}, h: ${this.h}`
        ); */
    if (
      MposX > this.x &&
      MposX < this.x + this.w &&
      MposY > this.y &&
      MposY < this.y + this.h
    ) {
      return true;
    } else {
      return false;
    }
  }
}
export default UI;
