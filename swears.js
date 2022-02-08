// TODO: Set up how many balls we want
let ballCount = 10;
// TODO: Set up x and y position variable to equal an empty array
let x = [];
let y = [];
// TODO: Set up speed, size and color variable to equal an empty array
let xSpeed = [];
let ySpeed = [];
let size = [];
let r = [];
let r1 = [];
let g = [];
let g1 = [];
let b = [];
let b1 = [];
let bounce = [];
let bo, cu, fu, shi;

function preload() {
  bo = loadSound('./bo.wav');
  cu = loadSound('./cu.wav');
  fu = loadSound('./fu.wav');
  shi = loadSound('./shi.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // TODO: Create a for loop that iterates through i until it reaches the ball count value
    for (let i = 0; i < ballCount; i++) {
    // Inside the for loop:
    // TODO: Set x and y position to be the center
    x[i] = width / 2;
    y[i] = height / 2;
    // TODO: Set the speeds to be random
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(-5, 5);
    // TODO: Set the size to be random
    size[i] = random(10, 50);
    // TODO: Set the colors to be random
    r[i] = random(0, 256);
    r1[i] = random(0, 256);
    g[i] = random(0, 256);
    g1[i] = random(0, 256);
    b[i] = random(0, 256);
    b1[i] = random(0, 256);
    bounce[i] = false;
    }

}

function draw() {
  background(0, 50);
  
  // TODO: Iterate through a new for loop to change the properties in order to animate the balls
  for (let i = 0; i < ballCount; i++) {

    // Inside the for loop:
    // TODO: Increment speed for x position
    x[i] += xSpeed[i];

    // TODO: Increment speed for y position
    y[i] += ySpeed[i];
    
    // TODO: Set random R, G, B values
    
    // TODO: Style to have no strokes
    noStroke();    
    
    // TODO: Reverse x direction if ball hits left or right sides
    if (x[i] < 0 || x[i] > width) {
      xSpeed[i] *= -1;
      //xSpeed[i] += 1;
      if (bounce[i]) {
        bounce[i] = false;
      } else {
        bounce[i] = true;
      }
    } 

    // TODO: Reverse y direction if ball hits top or bottom sides
    if (y[i] < 0 || y[i] > height) {
      ySpeed[i] *= -1;
      //ySpeed[i] += 1;
      if (bounce[i]) {
        bounce[i] = false;
      } else {
        bounce[i] = true;
      }
    }
    
    let change = true;
    push();
    // TODO: Draw the bouncing balls
    if (!bounce[i]) {
      fill(r[i], g[i], b[i]);
      ellipse(x[i], y[i], size[i], size[i]);
    } else {
      angleMode(DEGREES);
      Math.random() > 0.9 === true ? rotate(45) : rotate(0);
      Math.random() > 0.8 === true ? background(random(50), random(50)) : background(0, 50);
      Math.random() < 0.2 === true ? fill(random(256), random(256), random(256)) : fill(r1[i], g1[i], b1[i]);
      Math.random() > 0.8 === true ? scale(10) : scale(1);
      // while(change) {
        Math.random() > 0.999 === true ? bo.play() : change = false;
      Math.random() > 0.999 === true ? cu.play() : change = false;
      Math.random() > 0.999 === true ? fu.play() : change = false;
      Math.random() > 0.999 === true ? shi.play() : change = false;
      // };
      ellipse(x[i], y[i], size[i], size[i]);
    }
    
    pop();
  
  }
} 