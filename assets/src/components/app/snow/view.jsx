import React from 'react';

import Snowflake from './snowflake';

export default class Snow extends React.Component {
  constructor(props) {
    super(props);
    this.viewportWidth = document.body.clientWidth;
    this.viewportHeight = document.body.clientHeight + 200;
    this.animate = this.animate.bind(this);
    this.snowflakes = [];
  }

  addSnowflake() {
    const pos = this.randomPosition();
    const vel = this.randomVec(this.randomSpeed());
    const radius = this.randomRadius();
    const snow = this;
    const newSnowflake = new Snowflake({ pos, vel, radius, snow });
    this.snowflakes.push(newSnowflake);
  }
  
  animate(time) {
    const timeDelta = time - this.lastTime;
    this.step(timeDelta);
    this.draw();
    this.lastTime = time;
    requestAnimationFrame(this.animate);
  }

  componentDidMount() {
    const canvas = document.getElementById("snow");
    this.ctx = canvas.getContext("2d");

    this.lastTime = 0;
    requestAnimationFrame(this.animate);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.viewportWidth, this.viewportHeight);
    this.drawSnowflakes();
  }

  drawSnowflakes() {
    this.snowflakes.forEach( snowflake => snowflake.draw(this.ctx) );
  }

  isOffscreen(pos) {
    return ((pos[0] < 0 || pos[1] < 0) || (pos[0] > this.viewportWidth || pos[1] > this.viewportHeight)); 
  }

  moveSnowflakes(timeDelta) {
    this.snowflakes.forEach( snowflake => snowflake.move(timeDelta) );
  }

  randomPosition() {
    return [Math.random() * this.viewportWidth, 0];
  }

  randomRadius() {
    return Math.floor(Math.random() * 7);
  }

  randomSpeed() {
    return (Math.random() * 2) + 1;
  }

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return this.scale([Math.sin(deg), Math.cos(deg)], length);
  }
  
  remove(snowflake) {
    const snowflakeIndex = this.snowflakes.indexOf(snowflake);
    this.snowflakes.splice(snowflakeIndex, 1);
  }
  
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }

  step(timeDelta) {
    this.addSnowflake();
    this.moveSnowflakes(timeDelta);
  }

  render() {
    return(
      <canvas
        className="snow"
        id="snow"
        width={this.viewportWidth}
        height={this.viewportHeight}
      />
    );
  }
}