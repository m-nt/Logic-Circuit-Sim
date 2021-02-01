class Dots {
  constructor(ctx, x, y, r, color) {
    this.type = "dot";
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color || "#a0a6a8";
    this.ctx = /** @type {CanvasRenderingContext2D} */ (ctx);
    this.e = null;
    this.rect = null;
    this.draw = false;
    this.xywh = {
      x1: 0,
      x2: 0,
      x3: 0,
      y1: 0,
      y2: 0,
      y3: 0,
      w1: 0,
      w3: 0,
      h2: 0,
    };
  }
  zeroDraw() {
    for (let key in this.xywh) {
      this.xywh[key] = 0;
    }
    this.draw = false;
  }
  drawUI() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.ctx.fill();
    if (this.draw) {
      let { x, y } = this.PositionOnDetect();
      this.xywh.x1 = this.x;
      this.xywh.x2 = this.xywh.x3 = this.x + (x - this.x - 7) * 0.7;
      this.xywh.y1 = this.y - 5 / 2;
      this.xywh.y2 = this.y;
      this.xywh.y3 = y;
      this.xywh.w1 = (x - this.x) * 0.7;
      this.xywh.w3 = x - this.x - (x - this.x - 7) * 0.7;
      this.xywh.h2 = y - this.y;
    }
    this.ctx.fillStyle = "#eb4034";
    this.ctx.fillRect(this.xywh.x1, this.xywh.y1, this.xywh.w1, 5);
    this.ctx.fillRect(this.xywh.x2, this.xywh.y2, 5, this.xywh.h2);
    this.ctx.fillRect(this.xywh.x3, this.xywh.y3, this.xywh.w3, 5);
    //Collision Highlight
    //this.ctx.fillStyle = "#eb4034";
    //this.ctx.fillRect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
  }
  drawText() {}
  Initialize(e, rect) {
    this.e = e;
    this.rect = rect;
    this.draw = true;
  }
  MouseCollision(MposX, MposY) {
    if (
      MposX > this.x - this.r &&
      MposX < this.x + this.r &&
      MposY > this.y - this.r &&
      MposY < this.y + this.r
    ) {
      console.log(
        `MposX: ${MposX}, x: ${this.x}, r: ${this.r}\nMposY: ${MposY}, y: ${this.y}, r: ${this.r}`
      );
      return true;
    } else {
      return false;
    }
  }
  PositionOnDetect() {
    let x = this.e.clientX - this.rect.x - 5.5;
    let y = this.e.clientY - this.rect.y - 6;

    return { x, y };
  }
}
export default Dots;
