// Άσκηση ευθύγραμμης ομαλής κίνησης. Το κινητό σε χρόνο t = 4 s διανύει 120 m με ταχύτητα u = 30 m/s.
// Κρατάω ρεαλιστικό τον χρόνο κίνησης t = 4 s.
// Για να είναι ευδιάκριτο το σχήμα τα 120 m τα κάνω 480 px (120*4).
// Επομένως η ταχύτητα υπολογίζεται σε u = s/t = 480/4 = 120 px/s.
// Δηλαδή τελικά έχω τις αντιστοιχίες:
// t = 4s, s = 120 m = 480 px, u = 30 m/s = 120 px/s.
let canvas;
let startBtn;
let stopBtn;
let continueBtn;
let vSlider;
let logo;

let ball;
let t;
let t0;
let dt;
let tAnim;
let continueAnimating = true;

t0 = new Date().getTime(); // αρχικοποίηση του t0
t = 0; // αρχικοποίηση του t
tAnim = 4; // Ολικός χρόνος προσομοίωσης

let ballInitPos; // Αρχική θέση της μπάλας
let ballDiameter; // Διάμετρος μπάλας
let ballColor; // Χρώμα μπάλας
let ballInitVelo2D; // Αρχική ταχύτητα της μπάλας

function setup() {
  //Canvas
  canvas = createCanvas(1000, 1100);
  canvas.parent("#canvasArea");
  canvas.style("position", "static");
  canvas.style("top", "0px");
  canvas.style("left", "0px");

  logo = select("#logo");
  logo.parent("#canvasArea");
  logo.style("position", "absolute");
  logo.style("top", "1200px");
  logo.style("left", "200px");

  startBtn = createButton("Ξεκίνα");
  startBtn.mousePressed(startAnim);
  startBtn.parent("#canvasArea");
  startBtn.style("position", "absolute");
  startBtn.style("top", "680px");
  startBtn.style("left", "35%");
  startBtn.style("background-color", "red");
  startBtn.style("width", "7%");
  startBtn.style("height", "6%");
  startBtn.style("font-size", "1rem");

  stopBtn = createButton("Σταμάτα");
  stopBtn.mousePressed(stopAnim);
  stopBtn.parent("#canvasArea");
  stopBtn.style("position", "absolute");
  stopBtn.style("top", "680px");
  stopBtn.style("left", "45%");
  stopBtn.style("background-color", "yellow");
  stopBtn.style("width", "7%");
  stopBtn.style("height", "6%");
  stopBtn.style("font-size", "1rem");

  continueBtn = createButton("Συνέχισε");
  continueBtn.mousePressed(continueAnim);
  continueBtn.parent("#canvasArea");
  continueBtn.style("position", "absolute");
  continueBtn.style("top", "680px");
  continueBtn.style("left", "55%");
  continueBtn.style("background-color", "orange");
  continueBtn.style("width", "7%");
  continueBtn.style("height", "6%");
  continueBtn.style("font-size", "1rem");

  //Sliders
  vSlider = createSlider(0, 240, 120, 20);
  vSlider.parent("#canvasArea");
  vSlider.style("position", "absolute");
  vSlider.style("top", "500px");
  vSlider.style("left", "47%");
  // vSlider.position(900, 100);

  // Μπάλα
  ballInitPos = new Vector2D(50, 250); // Αρχική θέση της μπάλας
  ballDiameter = 40; // Διάμετρος μπάλας
  ballColor = "blue"; // Χρώμα μπάλας
  ballInitVelo2D = new Vector2D(120, 0); // Αρχική ταχύτητα της μπάλας

  ball = new Ball(
    ballInitPos.x,
    ballInitPos.y,
    ballDiameter,
    ballColor,
    ballInitVelo2D
  ); //(x, y, διάμετρος, χρώμα, αρχική ταχύτητα)

  // Γραμμή
  xInit = ballInitPos.x - ball.d / 2;
  yInit = ballInitPos.y + ball.d / 2;
  xFin = 900;
  yFin = yInit;
  line1 = new Line(xInit, yInit, xFin, yFin, "red");

  // Διάγραμμα ταχύτητας-χρόνου
  diag1Start = new Vector2D(200, 700);
  tAxis = 240;
  vAxis = 220;
  time1Axis = new Line(
    diag1Start.x,
    diag1Start.y,
    diag1Start.x + tAxis,
    diag1Start.y,
    "black"
  );
  velocityAxis = new Line(
    diag1Start.x,
    diag1Start.y,
    diag1Start.x,
    diag1Start.y - vAxis,
    "black"
  );

  // Διάγραμμα μετατόπισης-χρόνου
  diag2Start = new Vector2D(600, 700);
  xAxis = 220;
  time2Axis = new Line(
    diag2Start.x,
    diag2Start.y,
    diag2Start.x + tAxis,
    diag2Start.y,
    "black"
  );
  displacementAxis = new Line(
    diag2Start.x,
    diag2Start.y,
    diag2Start.x,
    diag2Start.y - xAxis,
    "black"
  );

  // Διάγραμμα ταχύτητας-μετατόπισης
  diag3Start = new Vector2D(400, 1000);
  displacement3Axis = new Line(
    diag3Start.x,
    diag3Start.y,
    diag3Start.x + xAxis,
    diag3Start.y,
    "black"
  );
  velocity3Axis = new Line(
    diag3Start.x,
    diag3Start.y,
    diag3Start.x,
    diag3Start.y - vAxis,
    "black"
  );
}

function draw() {
  if (!continueAnimating || ball.x > xFin) {
    return;
  }

  clear();

  const vel = vSlider.value();

  ball.show();
  line1.show();

  strokeWeight(2);
  time1Axis.show();
  velocityAxis.show();
  time2Axis.show();
  displacementAxis.show();
  displacement3Axis.show();
  velocity3Axis.show();

  ball.move(vel);

  showText(vel);

  strokeWeight(4);
  stroke(255, 0, 0);

  // Καμπύλη ταχύτητας-χρόνου
  line(
    diag1Start.x,
    diag1Start.y - 0.78 * vel,
    diag1Start.x + 30 * t,
    diag1Start.y - 0.78 * vel
  );

  // Καμπύλη μετατόπισης-χρόνου
  line(
    diag2Start.x,
    diag2Start.y,
    diag2Start.x + 30 * t,
    diag2Start.y - 30 * (vel / 120) * t
  );

  // Καμπύλη ταχύτητας-μετατόπισης
  line(
    diag3Start.x,
    diag3Start.y - 0.78 * vel,
    diag3Start.x + 30 * t,
    diag3Start.y - 0.78 * vel
  );
}

function startAnim() {
  continueAnimating = true;
  ball.x = ballInitPos.x;
  ball.y = ballInitPos.y;
  t0 = new Date().getTime();
  t1 = new Date().getTime();
  t = 0;
}

function stopAnim() {
  continueAnimating = false;
  ball.x = ball.x;
  ball.y = ball.y;
}

function continueAnim() {
  continueAnimating = true;
  ball.x = ball.x;
  ball.y = ball.y;
  t0 = new Date().getTime();
  t1 = new Date().getTime();
}
