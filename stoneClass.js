class Stone{
    constructor(x, y){

        this.body = Bodies.rectangle(x, y, 25, 25, {isStatic: false, restituition: 0.3, friction: 0.5, density: 1.2});
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        
        
        
        image(this.image, pos.x, pos.y, 30, 30)
        
    }
}