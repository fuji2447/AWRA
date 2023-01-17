const palette = ["#00ff0070", "#9400d370", "#ffd70070", "#4169e170", "#ff149370"];
const num = [4, 25, 5];

let objs = [];
let objsNum = 10;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noStroke();

  cam = createCamera();

  startIndex = floor(random(objs.length));
  goalIndex = floor(random(objs.length));

  for (let i = 0; i < objsNum; i++) {
    objs.push(new Obj());
  }
}

function draw() {
  background("#00000000");
  lights();

  for (let i = 0; i < objs.length; i++) {
    objs[i].move();
    objs[i].display();
  }
}

class Obj {
  constructor() {
    this.init();
  }

  init() {
    this.c = random(palette);
    this.pos = createVector(random(-width, width), random(-height, height), random(-50, 0));
    this.posStep = createVector(0, random(-5, -1), 0);
    this.rot = createVector(random(360), random(360), random(360));
    this.rotStep = createVector(random(-1, 1), random(-1, 1), random(-1, 1));
    this.s = random(50, 100);
    this.num = random(num);
  }

  move() {
    this.pos.add(this.posStep);
    this.rot.add(this.rotStep);

    if (this.pos.y < -height) {
      this.init();
      this.pos = createVector(random(-width, width), height, random(-500, 500));
    }
  }

  display() {
    fill(this.c);

    push();
    translate(this.pos.x, this.pos.y, this.pos.z);

    rotateX(this.rot.x);
    rotateY(this.rot.y);
    rotateZ(this.rot.z);

    cylinder(this.s, this.s / 2, this.num, 1);
    pop();
  }
}