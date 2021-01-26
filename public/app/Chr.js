class Gate {
  constructor(ctx, x, y) {
    this.x = x;
    this.y = y;
    this.ctx = /** @type {CanvasRenderingContext2D} */ (ctx);
  }
  drawUI() {
    this.ctx.fillStyle = "#4e5251";
    this.ctx.fillRect(this.x, this.y, 100, 50);
    this.ctx.fillStyle = "#67cf44";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y + 12, 7, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.fillStyle = "#c94242";
    this.ctx.arc(this.x, this.y + 37, 7, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }
  drawText() {
    this.ctx.fillStyle = "#c2c2c2";
    this.ctx.font = "30px Arial";
    this.ctx.fillText("AND", this.x + 20, this.y + 35, 100);
  }
  updating(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Gate;
