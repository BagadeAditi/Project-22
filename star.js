
class Star{
    constructor(){

  
    var options={
      isStatic:true
    }
  this.starBody=Bodies.rectangle(400,390,800,20,options);
  World.add(world,this.starBody)
  }
  
display() {
  
  rectMode(CENTER)
  fill ("gold")
  star(this.starBody.position.x,this.starBody.position.y,20,20,20,20,20);
}
  }