class paperball extends BluePrint{
    constructor(x, y,radius) {
      super(x,y,radius)
      this.image = loadImage("sprite/paper.png")
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      super.display()
    };
  };