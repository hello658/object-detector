img = "";
status = "";
function preload(){
 img = loadImage('https://mahdihat791.github.io/projectSolutionC131-C133/bed_room.html');
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDectector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML = "status : Detecting Objects"
}

function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000")
text("bed", 45, 75);
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);

fill("FF0000");
text("table", 320, 120);
nofill();
stroke("#FF0000");
rect(300, 90, 270, 320 );
}

function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
 if (error) {
   console.log(error);
 }
 console.log(results);
}