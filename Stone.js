class Stone  {
    constructor(x,y,r){
      

      var options={    
        isStatic:false,
                       restitution:0,
                        friction:1,
                                  }
 this.body=Bodies.circle(x,y,r)
 World.add(world,this.body)
 this.r=r
 this.x=x
 this.y=y
 this.stoneIMG=loadImage("Plucking mangoes/stone.png")
    }
  
    display() {
     // this.body.position.x = mouseX;
     // this.body.position.y = mouseY;
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     imageMode(CENTER)
     image(this.stoneIMG,0,0,this.r,this.r)
     pop()
     
    }
  }