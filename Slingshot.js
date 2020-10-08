class Slingshot{
    constructor(objectA, pointB){
        
        this.chain = Matter.Constraint.create({bodyA: objectA, pointB: pointB, stiffness: 0.04, length: 10});
        World.add(world, this.chain);
    }
    
    fly(){
        this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA)
        {var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }

    attach(objectA){
        this.chain.bodyA = objectA;
    }
    
}