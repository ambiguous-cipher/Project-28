class Mango{
    constructor(x, y){

        this.body = Bodies.rectangle(x, y, 50, 50, {isStatic: true, restituition: 0, friction: 1});
        World.add(world, this.body);
        this.image = loadImage("mango.png");
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        
        
        
        image(this.image, pos.x, pos.y, 50, 50)
        
    }
}