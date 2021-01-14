class Umbrella {
      
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 110;
         this.image = loadImage("man.png");
         this.body = Matter.Bodies.circle(100,350, radius, options);
         this.r = radius;

         World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         image(this.image, pos.x-150, pos.y-160,350,350);

    }
}