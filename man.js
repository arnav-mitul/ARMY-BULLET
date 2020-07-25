class Man{
    constructor(x,y,width,height){
        var op={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body=Bodies.rectangle(x,y,width,height);
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        rect(pos.x,pos.y,width,height);
    }
}
