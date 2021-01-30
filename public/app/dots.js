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
  }
  drawUI() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.ctx.fill();
    if (this.draw) {
      let { x, y } = this.PositionOnDetect();
      this.ctx.fillStyle = "#eb4034";
      this.ctx.fillRect(this.x, this.y - 5 / 2, x - this.x, 5);
      this.ctx.fillRect(x - 5, this.y, 5, y - this.y);

      console.log("drawing");
    }
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
    /* console.log(
      `MposX: ${MposX}, x: ${this.x}, r: ${this.r}\nMposY: ${MposY}, y: ${this.y}, r: ${this.r}`
    ); */
    if (
      MposX > this.x - this.r &&
      MposX < this.x + this.r &&
      MposY > this.y - this.r &&
      MposY < this.y + this.r
    ) {
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
