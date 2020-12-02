class Drop{
    constructor(x,y){
        var options = {
            isStatic:false,
            friction:0.1
        }
    
    this.body = Bodies.circle(x,y,5,options);
    this.radius=5;
    World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius);
    }
}