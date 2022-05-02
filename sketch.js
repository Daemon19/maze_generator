let starCanvas;
let circlePos;

function setup() {
    createCanvas(windowWidth, windowHeight);

    starCanvas = createGraphics(width, height);
    starCanvas.background(0);
    starCanvas.noStroke();

    circlePos = createVector(width / 2, height / 2);

    noStroke();
}

function draw() {
    circlePos.x += random(-5, 5);
    circlePos.y += random(-5, 5);

    let starX = random(0, starCanvas.width);
    let starY = random(0, starCanvas.height);
    starCanvas.fill(220);
    starCanvas.circle(starX, starY, 5);
    image(starCanvas, 0, 0);

    fill("gray");
    circle(circlePos.x, circlePos.y, 50);
}