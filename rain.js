class rain{
    constructor(x,y) {
        var options = {
            'restitution':0,
            'friction':0.001
        }
        this.x=x;
		this.y=y;
        this.body=Bodies.circle(this.x, this.y,5, options)
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue")
        ellipseMode(CENTER);
        ellipse( 0,0,7,10)
        pop();
      }
      update(){
        if(this.body.position.y>height){
           Matter.Body.setPosition(this.body,{x: random(0,500),y: random(-20,0)});
         }
      }
}