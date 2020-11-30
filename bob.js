class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:1,
          friction:0,
          density:1
           
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
     
      ellipseMode(RADIUS)
      ellipse(pos.x, pos.y, this.radius,this.radius);
      circle(pos.x,pos.y,this.radius)
    }
  };
  