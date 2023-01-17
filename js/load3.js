function setup() {
  // 全画面表示
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(500,30);
  background("#56738f");
  let d = (width / 2) * 0.8;
  push();
  translate(width / 2, height / 2);
  let g = drawingContext.createLinearGradient(-d, 0, d, 0);
  let n = 0;
  let step = 20;
  for (let i = 0; i < step; i++) {
    let t = i / step;
    // print(t);
    if (n++ % 2 == 0) {
      g.addColorStop(t + 0.001, color(0));
      g.addColorStop(t + 1 / step, color(0));
    } else {
      g.addColorStop(t + 0.001, color(255));
      g.addColorStop(t + 1 / step, color(255));
    }
  }
  drawingContext.setLineDash([(d / step) * 2]);
  drawingContext.lineDashOffset = frameCount / 2.3;
  drawingContext.strokeStyle = g;
  strokeWeight(d/2);
  strokeCap(SQUARE);
  line(-d, 0, d, 0);
  pop();
}
