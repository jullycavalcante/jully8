function setup() {
  createCanvas(600, 600);
  background("rgb(0,0,0)");
}

function draw() {
  stroke("rgb(255,0,172)");
  fill("rgb(0,0,0)");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
