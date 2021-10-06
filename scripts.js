function setup() {
    createCanvas(600,600);
    colorMode(HSB, 278, 328, 200);
    noStroke();
}
let x= 210
let speed= 1

let y= 310

const barWidth = 1
let lastBar = -1

function draw() {
    background(220);
    fill("white");
    strokeWeight(4);
    stroke(51);     
    rect(20,20, 558, 558);
    fill ("purple");
    rect (30, 30, 60, 100);
    fill ("orange");
    strokeWeight(4);
    stroke(51);
    rect(200, 150, 200, 90);
    fill("red");
    strokeWeight(4);
    stroke(51);
    rect(90, 60, 120, 250);
    stroke(51);
    line (30,60,30,578);
    line (20, 568, 578, 568);

    fill(0, 126, 255);

    
    // let whichBar = mouseX / barWidth;
    // if (whichBar !== lastBar) {
    //   let barX = whichBar * barWidth;
    //   fill(barX, mouseY, 150);
    //   rect(300, 240, barWidth, 328);
    //   lastBar = whichBar;
    // }

    strokeWeight(4);
    stroke(51);
    rect (300, 240, 278, 328);

    stroke(51);
    line (30, 310, 300, 310);
    line (210, 20, 210, 60);
    line (400, 20, 400, 210);
    line (30, 500, 298, 500);
    line (30, 520, 298, 520);


    line(x, 20, x, 150);
    x = x + speed;
    
    if (x > 400) {
        speed = -1
    }else if (x < 210){
        speed = 1
    }

    line(30, y, 300, y);
    y = y + speed;

    if (y > 500){
        speed = -1
    }else if (y < 300){
        speed = 1
    }
  }
