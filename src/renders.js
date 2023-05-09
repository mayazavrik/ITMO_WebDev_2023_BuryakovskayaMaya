class PlanetRender {
    size;
    atmosphere;
    constructor(size = 10, atmosphere = 'gray') {
        this.size = size;
        this.atmosphere = atmosphere;
        
    }
    render(ctx, position) {
      ctx.beginPath();
        ctx.fillStyle = this.atmosphere;
        ctx.arc(position.x, position.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    
    }
    }

    export { PlanetRender };