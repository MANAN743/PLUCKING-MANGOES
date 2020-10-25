class Mango  {
    constructor(x, y,r){
    var options={  isStatic:true,
                  
                  }
                  this.body=Bodies.circle(x,y,r,options)
                  World.add(world,this.body)
                  this.r=r
                  this.x=x
                  this.y=y
                  this.mangoIMG=loadImage("Plucking mangoes/mango.png")
                     }
                   
                     display() {
                      // this.body.position.x = mouseX;
                      // this.body.position.y = mouseY;
                      var pos=this.body.position
                      push()
                      translate(pos.x,pos.y)
                      imageMode(CENTER)
                      image(this.mangoIMG,0,0,this.r,this.r)
                      pop()
                      
                     }
                   }