class Gate {
  constructor(ctx, x, y, rect, isDraging) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 50;
    this.ofx = 0;
    this.ofy = 0;
    this.ctx = /** @type {CanvasRenderingContext2D} */ (ctx);
    this.isDraging = isDraging || false;
    this.rect = rect || null;
    this.e;
  }
  drawUI() {
    let { x, y } = this.PositionOnDetect();
    this.ctx.fillStyle = "#4e5251";
    this.ctx.fillRect(x, y, this.w, this.h);
    this.ctx.fillStyle = "#a0a6a8";
    this.ctx.beginPath();
    this.ctx.arc(x, y + 12, 7, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.fillStyle = "#a0a6a8";
    this.ctx.arc(x, y + 37, 7, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }
  drawText() {
    let { x, y } = this.PositionOnDetect();
    this.ctx.fillStyle = "#c2c2c2";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(":)", x + 20, y + 35, 100);
  }
  PositionOnDetect() {
    let x,
      y = 0;
    if (this.isDraging) {
      let Mx = this.e.clientX - this.rect.x - 5.5;
      let My = this.e.clientY - this.rect.y - 6;
      x = this.x = Mx - this.ofx;
      y = this.y = My - this.ofy;
      return { x, y };
    } else {
      x = this.x;
      y = this.y;
      return { x, y };
    }
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

export default Gate;
