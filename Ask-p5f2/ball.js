class Ball {
  constructor(x, y, d, color, velocity) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.color = color;
    this.velocity = velocity;
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.d);
  }

  move(vel) {
    let t1 = new Date().getTime(); // τωρινός χρόνος σε milliseconds
    dt = 0.001 * (t1 - t0); // ο χρόνος που έχει περάσει σε seconds από την τελευταία κλήση
    //console.log("t0 = " + t0 + " t1 = " + t1 + " dt = " + dt);

    t0 = t1; // ξανασετάρισμα του t0
    t += dt;

    this.x = this.x + vel * dt;
  }
}
