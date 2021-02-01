class NOT {
  constructor(ctx, x, y, isDraging, e, rect, ofx, ofy) {
    this.type = "Gate";
    this.name = "NOT";
    this.input = { a: false };
    this.output = { o: false };
    this.color = { on: "#80c973", of: "#a0a6a8" };
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 50;
    this.ofx = ofx || 0;
    this.ofy = ofy || 0;
    this.ctx = /** @type {CanvasRenderingContext2D} */ (ctx);
    this.isDraging = isDraging || false;
    this.rect = rect || null;
    this.e = e || null;
  }
  AndFunction() {
    if (this.input.a) {
      this.output.o = false;
    } else {
      this.output.o = true;
    }
  }
  drawUI() {
    this.AndFunction();
    let { x, y } = this.PositionOnDetect();
    this.ctx.fillStyle = "#4e5251";
    this.ctx.fillRect(x, y, this.w, this.h);

    this.ctx.beginPath();
    if (this.input.a) {
      this.ctx.fillStyle = this.color.on;
    } else {
      this.ctx.fillStyle = this.color.of;
    }
    this.ctx.arc(x - 5, y + 25, 7, 0, 2 * Math.PI, false);
    this.ctx.fill();
    this.ctx.beginPath();
    if (this.output.o) {
      this.ctx.fillStyle = this.color.on;
    } else {
      this.ctx.fillStyle = this.color.of;
    }
    this.ctx.arc(x + 105, y + 25, 7, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }
  drawText() {
    let { x, y } = this.PositionOnDetect();
    this.ctx.fillStyle = "#c2c2c2";
    this.ctx.font = "30px Arial";
    this.ctx.fillText(this.name, x + 20, y + 35, 100);
  }
  Initialize(e, rect, ofx, ofy) {
    this.isDraging = true;
    this.e = e;
    this.rect = rect;
    this.ofx = ofx;
    this.ofy = ofy;
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

export default NOT;
