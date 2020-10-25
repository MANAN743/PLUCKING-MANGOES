class ROPE{
    constructor(bodyA,pointB){
        var options={
         bodyA:bodyA,
         pointB:pointB,
         length:10,
         stiffness:0.04

        }
        this.sling=Matter.Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(){
        this.sling.bodyA=stoneObject.body
    }
     
    display(){
        if(this.sling.bodyA){
        var posA=this.sling.bodyA.position
        var posB=this.sling.pointB
        strokeWeight(4)
        line(posA.x ,posA.y,posB.x,posB.y)
        }
    }
}
