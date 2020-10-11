class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.traj = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 5 && this.body.position.x > 200){
    var pos = [this.body.position.x,this.body.position.y];
    this.traj.push(pos);
    }
    for(var i  = 0;i < this.traj.length;i++){
      image(this.image1,this.traj[i][0],this.traj[i][1]);
    }
  }
}
