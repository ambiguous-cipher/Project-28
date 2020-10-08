class Ground{
    constructor(x, y){

        this.body = Bodies.rectangle(x, y, 25, 25, {isStatic: true, restituition: 0.3, friction: 0.5, density: 1.2});
        World.add(world, this.body);
        
    }

    display(r, g, b){
        var pos = this.body.position;

        rectMode(CENTER);
        
        
        fill(r, g, b);
        rect(pos.x, pos.y, 1000, 50)
        
    }
}