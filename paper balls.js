class paperball   {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    fly(){
      this.paperObject.body = {x:85,y:-85};
  }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      noStroke();
      fill("pink");
      ellipse(0,0,10,10);
      pop();
     
    }
  };
  