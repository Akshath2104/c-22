class Cannon{
    constructor(x,y,height,width,angle){
this.x=x;
this.y=y;
this.height=height;
this.width=width;
this.angle=angle;

this.Cannon_image=loadImage("assets/canon.png")
this.Cannon_image=loadImage("assets/cannonBase.png")



    }
display(){
    push()
        imageMode(CENTER)
        image ( this.Cannon_image,this.x,this.y ,this.height, this.width,this.angle )
pop ()
image(this.cannon_base,70,20,200,200)
noFill()
    
}
}