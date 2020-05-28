class Line {
  constructor(xInit, yInit, xFin, yFin, color) {
    this.xInit = xInit;
    this.yInit = yInit;
    this.xFin = xFin;
    this.yFin = yFin;
    this.color = color;
  }

  show() {
    stroke(this.color);
    line(this.xInit, this.yInit, this.xFin, this.yFin);
  }
}
