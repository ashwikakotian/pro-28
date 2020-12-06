class Stone{
    constructor(x,y,r){

        var options ={
            restitution:0,
            friction:1,
            density:1.2,
            isStatic:false
           
        }

        this.r=r
        this.body=Bodies.circle(x,y,r,options)
        this.image= loadImage("stone.png")
        World.add(world,this.body);
        
    }


    display(){
        var pos =this.body.position;
        push()
        imageMode(CENTER);
        translate(pos.x,pos.y)

        image(this.image,0,0,this.r,this.r);
        pop ()
            
    }
}
