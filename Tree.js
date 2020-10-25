class Tree  {
    constructor(x,y,w,h){
      

      var options={    
        isStatic:true
                                  }
 this.body=Bodies.rectangle(x,y,w,h,options)
 World.add(world,this.body)
 this.w=w
 this.x=x
 this.y=y
 this.h=h
 
    }
  
    display() {
     // this.body.position.x = mouseX;
     // this.body.position.y = mouseY;
     var pos=this.body.position
     push()
     translate(pos.x,pos.y)
     imageMode(CENTER)
     image(this.treeIMG,0,0,this.w,this.h)
     pop()
     
    }
  }