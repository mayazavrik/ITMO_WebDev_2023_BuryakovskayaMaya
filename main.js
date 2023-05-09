import { Earth, Planet } from './src/solar-system';
import { Position } from './src/position.js';
import { PlanetRender } from './src/renders';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerPosition = new Position(canvas.width / 2, canvas.height / 2);


const sun = new Planet(
  centerPosition,
   0, 
   10,
  'red',
   50,
    new PlanetRender(10, 'red')
    );
const earth = new Earth(sun.position);

const planets = [
  sun,
  earth,
  new Planet(sun.position, 0.3, 150, new PlanetRender(50, 'green')),
  
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