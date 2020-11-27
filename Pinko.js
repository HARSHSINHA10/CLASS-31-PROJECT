class Pinko {

constructor(x,y,r){
var options = {
    isStatic : true


}
this.body = Radius.circle(x,y,10,options);
this.width = width;
this.r = r;
World.add(world, this.body);

}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    rotate(angle);
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x, pos.y, r, r);
  }








}
 