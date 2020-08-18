class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density: 1.2
      }
      this.paper = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.paper);
    }
    display(){
      var pos =this.paper.position;
      var angle  = this.paper.angle;
      strokeWeight(4);
    }
  };
  