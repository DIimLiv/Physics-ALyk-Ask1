function showText(vel) {
  // Text
  let text0 = "0";
  let text1 = "30";
  let text2 = "60";
  let text3 = "90";
  let text4 = "120";
  let text5 = "150";
  let text6 = "180";
  let text7 = "210";
  let text8 = "x (m)";
  let text9 = "ταχύτητα = " + vel / 4 + " m/s";

  let text12 = "1";
  let text13 = "2";
  let text14 = "3";
  let text15 = "4";
  let text16 = "5";
  let text17 = "6";
  let text18 = "7";
  let tInterval = 30;

  let text19 = "10";
  let text20 = "20";
  let text21 = "30";
  let text22 = "40";
  let text23 = "50";
  let text24 = "60";
  let vInterval = 30;

  let text25 = "t (s)";
  let text26 = "v (m/s)";
  let text27 = "x (m)";

  // Γραμμή κίνησης
  drawingContext.font = "20px serif"; // Change the size and font

  drawingContext.fillText(text0, xInit, yInit + ball.d / 2);
  drawingContext.fillText(text1, xInit + 120, yInit + ball.d / 2);
  drawingContext.fillText(text2, xInit + 240, yInit + ball.d / 2);
  drawingContext.fillText(text3, xInit + 360, yInit + ball.d / 2);
  drawingContext.fillText(text4, xInit + 480, yInit + ball.d / 2);
  drawingContext.fillText(text5, xInit + 600, yInit + ball.d / 2);
  drawingContext.fillText(text6, xInit + 720, yInit + ball.d / 2);
  drawingContext.fillText(text7, xInit + 840, yInit + ball.d / 2);

  drawingContext.font = "italic 20px serif"; // Change the size and font
  drawingContext.fillText(text8, xFin + 20, yInit + ball.d / 2);

  drawingContext.fillText(text9, 400, 120);

  // Διάγραμμα ταχύτητας-χρόνου
  drawingContext.font = "20px serif";
  stroke(125);
  strokeWeight(1);

  drawingContext.fillText(text0, diag1Start.x - 5, diag1Start.y + 20);
  drawingContext.fillText(text12, diag1Start.x + tInterval, diag1Start.y + 20);
  line(
    diag1Start.x + tInterval,
    diag1Start.y,
    diag1Start.x + tInterval,
    diag1Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text13,
    diag1Start.x + 2 * tInterval,
    diag1Start.y + 20
  );
  line(
    diag1Start.x + 2 * tInterval,
    diag1Start.y,
    diag1Start.x + 2 * tInterval,
    diag1Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text14,
    diag1Start.x + 3 * tInterval,
    diag1Start.y + 20
  );
  line(
    diag1Start.x + 3 * tInterval,
    diag1Start.y,
    diag1Start.x + 3 * tInterval,
    diag1Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text15,
    diag1Start.x + 4 * tInterval,
    diag1Start.y + 20
  );
  line(
    diag1Start.x + 4 * tInterval,
    diag1Start.y,
    diag1Start.x + 4 * tInterval,
    diag1Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text16,
    diag1Start.x + 5 * tInterval,
    diag1Start.y + 20
  );
  line(
    diag1Start.x + 5 * tInterval,
    diag1Start.y,
    diag1Start.x + 5 * tInterval,
    diag1Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text17,
    diag1Start.x + 6 * tInterval,
    diag1Start.y + 20
  );
  line(
    diag1Start.x + 6 * tInterval,
    diag1Start.y,
    diag1Start.x + 6 * tInterval,
    diag1Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text18,
    diag1Start.x + 7 * tInterval,
    diag1Start.y + 20
  );
  line(
    diag1Start.x + 7 * tInterval,
    diag1Start.y,
    diag1Start.x + 7 * tInterval,
    diag1Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text25,
    diag1Start.x + 7.5 * tInterval,
    diag1Start.y - 10
  );

  drawingContext.fillText(text0, diag1Start.x - 15, diag1Start.y + 5);
  drawingContext.fillText(text19, diag1Start.x - 25, diag1Start.y - vInterval);
  line(
    diag1Start.x,
    diag1Start.y - (vInterval + 5),
    diag1Start.x + 7 * tInterval,
    diag1Start.y - (vInterval + 5)
  );
  drawingContext.fillText(
    text20,
    diag1Start.x - 25,
    diag1Start.y - 2 * vInterval
  );
  line(
    diag1Start.x,
    diag1Start.y - (2 * vInterval + 5),
    diag1Start.x + 7 * tInterval,
    diag1Start.y - (2 * vInterval + 5)
  );
  drawingContext.fillText(
    text21,
    diag1Start.x - 25,
    diag1Start.y - 3 * vInterval
  );
  line(
    diag1Start.x,
    diag1Start.y - (3 * vInterval + 5),
    diag1Start.x + 7 * tInterval,
    diag1Start.y - (3 * vInterval + 5)
  );
  drawingContext.fillText(
    text22,
    diag1Start.x - 25,
    diag1Start.y - 4 * vInterval
  );
  line(
    diag1Start.x,
    diag1Start.y - (4 * vInterval + 5),
    diag1Start.x + 7 * tInterval,
    diag1Start.y - (4 * vInterval + 5)
  );
  drawingContext.fillText(
    text23,
    diag1Start.x - 25,
    diag1Start.y - 5 * vInterval
  );
  line(
    diag1Start.x,
    diag1Start.y - (5 * vInterval + 5),
    diag1Start.x + 7 * tInterval,
    diag1Start.y - (5 * vInterval + 5)
  );
  drawingContext.fillText(
    text24,
    diag1Start.x - 25,
    diag1Start.y - 6 * vInterval
  );
  line(
    diag1Start.x,
    diag1Start.y - (6 * vInterval + 5),
    diag1Start.x + 7 * tInterval,
    diag1Start.y - (6 * vInterval + 5)
  );
  drawingContext.fillText(
    text26,
    diag1Start.x - 10,
    diag1Start.y - 7.5 * vInterval
  );

  // Διάγραμμα μετατόπισης-χρόνου
  drawingContext.font = "20px serif";

  drawingContext.fillText(text0, diag2Start.x - 5, diag2Start.y + 20);
  drawingContext.fillText(text12, diag2Start.x + tInterval, diag2Start.y + 20);
  line(
    diag2Start.x + tInterval,
    diag2Start.y,
    diag2Start.x + tInterval,
    diag2Start.y - 7.3 * vInterval
  );
  drawingContext.fillText(
    text13,
    diag2Start.x + 2 * tInterval,
    diag2Start.y + 20
  );
  line(
    diag2Start.x + 2 * tInterval,
    diag2Start.y,
    diag2Start.x + 2 * tInterval,
    diag2Start.y - 7.3 * vInterval
  );
  drawingContext.fillText(
    text14,
    diag2Start.x + 3 * tInterval,
    diag2Start.y + 20
  );
  line(
    diag2Start.x + 3 * tInterval,
    diag2Start.y,
    diag2Start.x + 3 * tInterval,
    diag2Start.y - 7.3 * vInterval
  );
  drawingContext.fillText(
    text15,
    diag2Start.x + 4 * tInterval,
    diag2Start.y + 20
  );
  line(
    diag2Start.x + 4 * tInterval,
    diag2Start.y,
    diag2Start.x + 4 * tInterval,
    diag2Start.y - 7.3 * vInterval
  );
  drawingContext.fillText(
    text16,
    diag2Start.x + 5 * tInterval,
    diag2Start.y + 20
  );
  line(
    diag2Start.x + 5 * tInterval,
    diag2Start.y,
    diag2Start.x + 5 * tInterval,
    diag2Start.y - 7.3 * vInterval
  );
  drawingContext.fillText(
    text17,
    diag2Start.x + 6 * tInterval,
    diag2Start.y + 20
  );
  line(
    diag2Start.x + 6 * tInterval,
    diag2Start.y,
    diag2Start.x + 6 * tInterval,
    diag2Start.y - 7.3 * vInterval
  );
  drawingContext.fillText(
    text18,
    diag2Start.x + 7 * tInterval,
    diag2Start.y + 20
  );
  line(
    diag2Start.x + 7 * tInterval,
    diag2Start.y,
    diag2Start.x + 7 * tInterval,
    diag2Start.y - 7.3 * vInterval
  );
  drawingContext.fillText(
    text25,
    diag2Start.x + 7.4 * tInterval,
    diag2Start.y - 10
  );

  drawingContext.fillText(text0, diag2Start.x - 15, diag2Start.y + 5);
  drawingContext.fillText(text1, diag2Start.x - 25, diag2Start.y - vInterval);
  line(
    diag2Start.x,
    diag2Start.y - (vInterval + 5),
    diag2Start.x + 7 * tInterval,
    diag2Start.y - (vInterval + 5)
  );
  drawingContext.fillText(
    text2,
    diag2Start.x - 25,
    diag2Start.y - 2 * vInterval
  );
  line(
    diag2Start.x,
    diag2Start.y - (2 * vInterval + 5),
    diag2Start.x + 7 * tInterval,
    diag2Start.y - (2 * vInterval + 5)
  );
  drawingContext.fillText(
    text3,
    diag2Start.x - 25,
    diag2Start.y - 3 * vInterval
  );
  line(
    diag2Start.x,
    diag2Start.y - (3 * vInterval + 5),
    diag2Start.x + 7 * tInterval,
    diag2Start.y - (3 * vInterval + 5)
  );
  drawingContext.fillText(
    text4,
    diag2Start.x - 35,
    diag2Start.y - 4 * vInterval
  );
  line(
    diag2Start.x,
    diag2Start.y - (4 * vInterval + 5),
    diag2Start.x + 7 * tInterval,
    diag2Start.y - (4 * vInterval + 5)
  );
  drawingContext.fillText(
    text5,
    diag2Start.x - 35,
    diag2Start.y - 5 * vInterval
  );
  line(
    diag2Start.x,
    diag2Start.y - (5 * vInterval + 5),
    diag2Start.x + 7 * tInterval,
    diag2Start.y - (5 * vInterval + 5)
  );
  drawingContext.fillText(
    text6,
    diag2Start.x - 35,
    diag2Start.y - 6 * vInterval
  );
  line(
    diag2Start.x,
    diag2Start.y - (6 * vInterval + 5),
    diag2Start.x + 7 * tInterval,
    diag2Start.y - (6 * vInterval + 5)
  );
  drawingContext.fillText(
    text7,
    diag2Start.x - 35,
    diag2Start.y - 7 * vInterval
  );
  line(
    diag2Start.x,
    diag2Start.y - (7 * vInterval + 5),
    diag2Start.x + 7 * tInterval,
    diag2Start.y - (7 * vInterval + 5)
  );
  drawingContext.fillText(
    text27,
    diag2Start.x - 5,
    diag2Start.y - 7.5 * vInterval
  );

  // Διάγραμμα ταχύτητας-μετατόπισης
  drawingContext.font = "15px serif";
  stroke(125);
  strokeWeight(1);

  drawingContext.fillText(text0, diag3Start.x - 5, diag3Start.y + 20);
  drawingContext.fillText(
    text1,
    diag3Start.x + tInterval - 10,
    diag3Start.y + 20
  );
  line(
    diag3Start.x + tInterval,
    diag3Start.y,
    diag3Start.x + tInterval,
    diag3Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text2,
    diag3Start.x + 2 * tInterval - 10,
    diag3Start.y + 20
  );
  line(
    diag3Start.x + 2 * tInterval,
    diag3Start.y,
    diag3Start.x + 2 * tInterval,
    diag3Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text3,
    diag3Start.x + 3 * tInterval - 10,
    diag3Start.y + 20
  );
  line(
    diag3Start.x + 3 * tInterval,
    diag3Start.y,
    diag3Start.x + 3 * tInterval,
    diag3Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text4,
    diag3Start.x + 4 * tInterval - 10,
    diag3Start.y + 20
  );
  line(
    diag3Start.x + 4 * tInterval,
    diag3Start.y,
    diag3Start.x + 4 * tInterval,
    diag3Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text5,
    diag3Start.x + 5 * tInterval - 10,
    diag3Start.y + 20
  );
  line(
    diag3Start.x + 5 * tInterval,
    diag3Start.y,
    diag3Start.x + 5 * tInterval,
    diag3Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text6,
    diag3Start.x + 6 * tInterval - 10,
    diag3Start.y + 20
  );
  line(
    diag3Start.x + 6 * tInterval,
    diag3Start.y,
    diag3Start.x + 6 * tInterval,
    diag3Start.y - 6.5 * vInterval
  );
  drawingContext.fillText(
    text7,
    diag3Start.x + 7 * tInterval - 10,
    diag3Start.y + 20
  );
  line(
    diag3Start.x + 7 * tInterval,
    diag3Start.y,
    diag3Start.x + 7 * tInterval,
    diag3Start.y - 6.5 * vInterval
  );
  drawingContext.font = "20px serif";
  drawingContext.fillText(
    text8,
    diag3Start.x + 7.5 * tInterval,
    diag3Start.y - 10
  );

  drawingContext.font = "20px serif";
  drawingContext.fillText(text0, diag3Start.x - 15, diag3Start.y + 5);
  drawingContext.fillText(text19, diag3Start.x - 25, diag3Start.y - vInterval);
  line(
    diag3Start.x,
    diag3Start.y - (vInterval + 5),
    diag3Start.x + 7 * tInterval,
    diag3Start.y - (vInterval + 5)
  );
  drawingContext.fillText(
    text20,
    diag3Start.x - 25,
    diag3Start.y - 2 * vInterval
  );
  line(
    diag3Start.x,
    diag3Start.y - (2 * vInterval + 5),
    diag3Start.x + 7 * tInterval,
    diag3Start.y - (2 * vInterval + 5)
  );
  drawingContext.fillText(
    text21,
    diag3Start.x - 25,
    diag3Start.y - 3 * vInterval
  );
  line(
    diag3Start.x,
    diag3Start.y - (3 * vInterval + 5),
    diag3Start.x + 7 * tInterval,
    diag3Start.y - (3 * vInterval + 5)
  );
  drawingContext.fillText(
    text22,
    diag3Start.x - 25,
    diag3Start.y - 4 * vInterval
  );
  line(
    diag3Start.x,
    diag3Start.y - (4 * vInterval + 5),
    diag3Start.x + 7 * tInterval,
    diag3Start.y - (4 * vInterval + 5)
  );
  drawingContext.fillText(
    text23,
    diag3Start.x - 25,
    diag3Start.y - 5 * vInterval
  );
  line(
    diag3Start.x,
    diag3Start.y - (5 * vInterval + 5),
    diag3Start.x + 7 * tInterval,
    diag3Start.y - (5 * vInterval + 5)
  );
  drawingContext.fillText(
    text24,
    diag3Start.x - 25,
    diag3Start.y - 6 * vInterval
  );
  line(
    diag3Start.x,
    diag3Start.y - (6 * vInterval + 5),
    diag3Start.x + 7 * tInterval,
    diag3Start.y - (6 * vInterval + 5)
  );
  drawingContext.fillText(
    text26,
    diag3Start.x - 10,
    diag3Start.y - 7.5 * vInterval
  );

  // Xρόνος t
  let text10 = "t: " + t.toFixed(3) + " sec";
  drawingContext.font = "20px serif";
  drawingContext.fillText(text10, 100, 140);

  // Μετατόπιση x
  let text11 = "x: " + ((vel / 4) * t).toFixed(3) + " m";
  drawingContext.font = "20px serif";
  drawingContext.fillText(text11, 100, 170);
}
