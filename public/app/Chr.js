class Gate {
  constructor(ctx, x, y, rect, isDraging) {
    this.x = x;
    this.y = y;
    this.ctx = /** @type {CanvasRenderingContext2D} */ (ctx);
    this.isDraging = isDraging || false;
    this.rect = rect || null;
    this.e;
  }
  drawUI() {
    let x,
      y = 0;
    if (this.isDraging) {
      x = this.x = this.e.clientX - this.rect.x - 50;
      y = this.y = this.e.clientY - this.rect.y - 25;
    } else {
      x = this.x;
      y = this.y;
    }
    this.ctx.fillStyle = "#4e5251";
    this.ctx.fillRect(x, y, 100, 50);
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
    this.ctx.fillStyle = "#c2c2c2";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(":)", this.x + 20, this.y + 35, 100);
  }
}

export default Gate;
