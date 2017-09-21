function setup() {
createCanvas(400, 400);
angleMode(DEGREES);
}
//background
function draw() {
    background(255, 255, 255);
    translate(200, 200);
    rotate(-90);

//timing
let hr = hour();
let mn = minute();
let sc = second();

strokeWeight(8);
stroke(98, 154, 238);
noFill();
let end = map(sc, 0, 59, 0, 360);
arc(0, 0, 300, 300, 0, end);

push();
rotate(end);
stroke(98, 154, 238);
line(0, 0, 100, 0);
pop();

stroke(150, 100, 255);
let end2 = map(mn, 0, 59, 0, 360);
arc(0, 0, 280, 280, 0, end2);

push();
rotate(end2);
stroke(150, 100, 255);
line(0, 0, 75, 0);
pop();

stroke(150, 255, 100);
let end3 = map(hr % 12, 0, 12, 0, 360);
arc(0, 0, 260, 260, 0, end3);

push();
rotate(end3);
stroke(150, 255, 100);
line(0, 0, 50, 0);
pop();

stroke(0);
point(0, 0);
rect(-162.5, -162.5, 325, 325, 40);

stroke(255);
strokeWeight(2);
rect(-162.5, -162.5, 325, 325, 40);

/*stroke(0);
line(0, 0, 0, 162);
line(0, 0, 162, 0);
line(0, 0, 0, -162);
line(0, 0, -162, 0);*/




/*stroke(0);
strokeWeight(2);
line(0, 100, 0, 110);
line(0, -100, 0, -110);
line(100, 0, 110, 0);
line(-100, 0, -110, 0);
line(0, 100, 100, 0);
line(0, -100, 100, 0);
line(0, 100, -100, 0);
line(0, -100, -100, 0);*/

//fill(255);
//noStroke();
//text(hr + ':' + mn + ':' + sc, 10, 200);
}