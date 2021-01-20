class Box{
    constructor(x,y,width,height){
       var option={
           isStatic:true
       }
       this.width = width
       this.height=height
       this.box = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.box);
        
         
    }
   display(){
    var pos =this.box.position
    push();
    translate(pos.x,pos.y)
    rectMode (CENTER);
    rect(0,0,this.width,this.height)
    pop ();
   } 
}