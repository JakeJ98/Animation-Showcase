/* Animation2
* Author: Jake Johnson
* Description : creates the animated orbs that move back and forth across the screen.
*/


function Animation2() {


  orbs = [];

  

  // assigns an array to hold the animations
  for (var i = myStart2; i < myEnd2; i++) {
    orbs[i] = new Blueballs(i * 100);
  }

  // custom function creates the 'blue' balls
  function Blueballs(initY) {
    // PROPERTIES
    this.orbX = random(75, 575);
    this.xRate = 2;
    this.y = initY;
    this.color = 180;
    this.hueRate = 1;
  
    // METHODS
    // renders the shapes
    this.render = function () {
      fill(this.color, 100, 100, 100);
      ellipse(this.orbX, this.y, 50, 50);
  
      this.orbX += this.xRate;
      // sets the boundaries for shape
      if (this.orbX > 775 ||
        this.orbX < 25) {
        this.xRate *= -1;
      }
  
      // checks to see if p was pressed
      if (paused == true) {
        this.color = this.color;
      } else {
        this.color = (this.color + this.hueRate) % 360;
      }
  
      if (paused == true) {
        this.color = this.color;
      }
    }
  }
  // renders the array f shapes
  this. render = function(){
    for (var i = 0; i < orbs.length; i++) {
      var orb = orbs[i];
      orb.render();
    }
  }

 
  

}

