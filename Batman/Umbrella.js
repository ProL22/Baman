class Umbrella{
    constructor(x,y){
        var options = {
            isStatic:true
        }
    this.image=loadImage("sprite/umbrella.png")
    this.body = Bodies.circle(x,y,350,options);
    this.radius=350;
    World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
      imageMode(RADIUS);
       image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}