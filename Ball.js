class  Ball  {
    constructor(x,y,radius){
var options={
isStatic:false,
restitution:0.1,
friction:0.3,
density:1.0,
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius

World.add(world,this.body)
    }
display(){
    image(this.image,541,522)
ellipseMode(CENTER)

fill("white ")
circle(this.body.position.x,this.body.position.y,this.radius)

}
}