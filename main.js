const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Planet{
  x;
  y;
  size;
  pX;
  pY;
  atmosphere;
  radius;
  alpha;
  constructor(x, y, size = 10, atmosphere = 'red', radius = 50) {
    this.size= size;
    this.pX = x;
    this.pY = y;
    this.atmosphere = atmosphere;
    this.radius = radius;
    this.alpha = 0;
  }
  

  move() {
    this.x = this.radius * Math.sin(this.alpha) + this.pX;
    this.y = this.radius * Math.cos(this.alpha) + this.pY;
    this.alpha += (0.1 * Math.PI) / 180;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.atmosphere;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}


const planets = [
  new Planet(200, 200, 30, 'red', 50),
  new Planet(200, 200, 10, 'blue', 100),
  new Planet(200, 200, 20, 'green', 150),
  new Planet(200, 200, 50, 'gold', 200),
];

let planet;

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (const planetIndex in planets) {
    planet = planets[planetIndex];
    planet.move();
    planet.render(ctx);
  }  
  
  window.requestAnimationFrame(render);
};

window.requestAnimationFrame(render);


