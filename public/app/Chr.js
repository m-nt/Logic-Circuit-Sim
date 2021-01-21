export default (ctx, x, y) => {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 100, y);
  ctx.lineTo(x + 50, y + 100);
  ctx.closePath();
  ctx.fill();
};
