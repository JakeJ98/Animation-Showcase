/* Project 4 sketch
*name: Jake Johnson
*description: sketch that holds the calls to all custom functions.
*/

// GLOBAL VARIABLES
var myText;
var stripes;
var orbs;
var paused = false;
var moveIt = false;


var myStart1= 0;
var myEnd1 = 8;
var myStart2 = 0;
var myEnd2 = 8;

var anim1;
var anim2;
var anim3;
function setup() {
  createCanvas(800, 600);

  
  // Calls the custom functions to action
 anim1 = new Animation1();
 anim2 = new Animation2();
 anim3 = new Animation3();
 

  
}


function draw() {

  background(0)
  // renders the functions one by one
  anim1.render();
  anim2.render();
  anim3.render();

  
}






// controls all user interations
function keyPressed() {
  // pauses the shape animations
  if (keyCode == 80) {
    paused = !paused;
  }
  // pauses the text animation
  if (keyCode == 32){
    moveIt = !moveIt;
  }



}

