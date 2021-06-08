class Dustbin{
    constructor(x,y,width,height){
var options={
isStatic:true,
restitution:0.3,
friction:0.5,
density:1.2,
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
this.image=loadImage("dustbingreen.png")
this.dustbin2Body=Bodies.rectangle(x,y,this.width,this.height)
this.dustbin1Body=Bodies.rectangle(x,y,this.width,this.height)
this.dustbin3Body=Bodies.rectangle(x,y,this.width,this.height)


this.image.scale=0.3
World.add(world,this.body)
World.add(world,this.dustbin1Body)
World.add(world,this.dustbin2Body)
World.add(world,this.dustbin3Body)
    }
display(){
    image(this.image,541,522)
rectMode(CENTER)

fill("yellow")
rect (this.body.position.x,this.body.position.y,this.width,this.height)
var posBottom=this.dustbin1Body.position
var posRight=this.dustbin2Body.position
var posLeft=this.dustbin3Body.position
}
} 
