class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: offsetX, y: offsetY},
            length: 300, 
            stiffness: 0.04
        }
        this.bodyB = bodyB;
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    
    

    display(){
        var pointA = this.sling.bodyA.position;
        
        var offsetX = this.offsetX;
        var offsetY = this.offsetY;
        push ();
       
        stroke ("white");
        strokeWeight(7);
        line (pointA.x, pointA.y, 300 + offsetX, 20 + offsetY);
        line (pointA.x, pointA.y, 300 + offsetX, 20 + offsetY);
                
            
        pop ();
    }
    
} 