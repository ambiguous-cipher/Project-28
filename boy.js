class Boy{
    constructor(x, y){

        this.body = Bodies.rectangle(x, y, 250, 250, {isStatic: true, restituition: 0.3, friction: 0.5, density: 1.2});
        World.add(world, this.body);
        this.image = loadImage("boy.png");
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        
        
        
        image(this.image, pos.x, pos.y, 140, 140)
        
    }
}