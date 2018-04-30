/* Animation1
* Author: Jake Johnson
* Description : creates the animated bars that move back and forth across the screen.
*/

var stripes;

function Animation1() {

  stripes = [];

 



  // assigns an array to hold the animations
  for (var i = myStart1; i < myEnd1; i++) {
    stripes[i] = new Redtangles(i * 100);
  }




  // Creates the 'red' rectangles.
  function Redtangles(initX) {
    // PROPERTIES
    this.lineY = random(0, height - 50);
    this.yRate = 2;
    this.x = initX;
    this.color = 0;
    this.hueRate = 1;
  
    // METHODS
    this.render = function () {
      colorMode(HSB);
      fill(this.color, 100, 100, 100);
      rect(this.x, this.lineY, 50, height);
      // checks to see if p was pressed
      if (paused == true) {
        this.color = this.color;
      } else {
        this.color = (this.color + this.hueRate) % 360;
      }
      this.lineY += this.yRate;
  
      // provides boundaries
      if (this.lineY > 550 ||
        this.lineY < -450) {
        this.yRate *= -1;
      }
  
      if (paused == false) {
        this.color = this.color;
      }
    }
  
  }
  // renders the animation
  this.render = function(){
    for (var i = 0; i < stripes.length; i++) {
      var stripe = stripes[i];
      stripe.render();
    }
  }
}
