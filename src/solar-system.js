import { Position } from './position.js';
import { PlanetRender } from './renders.js';


class Planet {
  x;
  y;
  size;
  center;
  atmosphere;
  radius;
  alpha;
  speed;
  isMoving;
  planetRender;

  constructor(
    center,
    speed = 0.1,
    size = 10,
    atmosphere = 'red',
    radius = 150,
    planetRender
  ) {
    this.center = center;
    this.speed = speed;
    this.size = size;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.alpha = 0;
    this.isMoving = speed !== 0;
    this.position = new Position(center.x, center.y);
    this.planetRender = planetRender;
  }

  move() {
    if (this.isMoving) {
      this.position.x = this.radius * Math.sin(this.alpha) + this.center.x;
      this.position.y = this.radius * Math.cos(this.alpha) + this.center.y;
      this.alpha += (this.speed * Math.PI) / 180;
    }
  }

  render(ctx) {
        this.planetRender.render(ctx, this.position);
   
  }
}

class Earth extends Planet {
    moon;
  constructor(center) {
    super(center, 2.2, 100, new PlanetRender(30, 'blue'));
    this.moon = new Planet(this.position, 1.3, 50, new PlanetRender(10, 'gray'));
  } 

  move() {
    super.move();
    this.moon.move();
  }

  render(ctx) {
    super.render(ctx);
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(this.position.x + 10, this.position.y, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    this.moon.render(ctx);
  }
}

export { Planet, Earth };