class Drops{
    constructor(){
this.x=random(width);
this.y=0;

    }
    fall(){
        this.y=this.y+random(5,10);
        if(this.y>height){
            this.y=random(-200,-100);

        }
    }
    display(){
        strokeWeight(3);
        stroke("blue")
        line(this.x,this.y,this.x,this.y+random(10,15));
    }
}