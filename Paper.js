class Paper{

constructor(x,y,r){


var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(x,y,r,options);
this.image = loadImage("paper.png");

World.add(world,this.body);
}

display(){
var pos=this.body.position;
push()
rectMode(CENTER);
translate(pos.x,pos.y)
strokeWeight(2);
stroke("pink");
fill(210,81,162);
ellipse(0,0,this.r);
pop()

}

}

