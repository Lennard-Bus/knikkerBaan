class Bal {
    hasBounced = false;
   
    constructor(myX, myY, mySpeedX, mySpeedY, mySuper) {
      this.x = myX;
      this.y = myY;
      this.speedX = mySpeedX;
      this.speedY = mySpeedY;
      this.diameter = 80;
      this.isSuper = mySuper;
   }

   show() {
      if (this.isSuper === true) {
         fill(255, 0, 0);
      }
      else {
         fill(255, 100, 255);
      }
      
      ellipse(this.x, this.y, this.diameter, this.diameter);
   }

   update() {
       this.hasBounced = false;
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;

      if (this.x <= 0 || this.x >= 1280 ) {
         this.speedX = this.speedX * -1;
         hasBounced = true;
      }

      if (this.y <= 0 || this.y >= 720) {
         this.speedY = this.speedY * -1;
         hasBounced = true;
      }
   }
}


 


function draw() {

  background('blue');
  score.show();
 
  for (var i = 0; i < ballen.length; i++) {
    var bal = ballen[i];
    bal.show()
    bal.update();
    
  }
}