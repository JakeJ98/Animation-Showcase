/* Animation3
* Author: Jake Johnson
* Description : creates the animated text that moves in and out across the screen. users can animate the text and pause it at will
*/


function Animation3() {
  // assigns variable to hold the text
  myText = new Backup(400,300);
  
  function Backup(initX, initY){
    // PROPERTIES
    this.x  = initX;
    this.y = initY;
    this.size = 100;
    this.color = 0;
    this.sizerate = 1;
    this.colorRate = 1;
    this.brightness = 0;
  
   
    // METHODS
    // renders the text
    this.render = function(){
      colorMode(HSB);
      textSize(this.size);
      textAlign(CENTER, CENTER);
      noStroke();
      fill(this.color, 100, this.brightness, 100);
      text("Backup", this.x, this.y);
      // checks to see if spacebar is pressed
      if(moveIt == true){
        this.brightness = 100;
        this.size += this.sizerate;
        if(this.size >= 240 || this.size <= 50){
          this.sizerate *= -1;
        }
        this.color = (this.color + this.colorRate) % 360;
      }else{
        this.size = this.size;
        this.color = this.color;
        this.brightness = 0;
      }
    
    }
  }
 

  

 
  //renders the varable holding the text
  this.render = function () {
    myText.render();
  }



}

