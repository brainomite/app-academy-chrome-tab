const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default class Snowflake {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.snow = options.snow;
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      true
    );
    ctx.fill();
  }

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (this.snow.isOffscreen(this.pos)) {
      this.remove();
    }
  }

  remove() {
    this.snow.remove(this);
  }
}