var stars = [];

function setup() { 
  createCanvas(800, 600);

	for (var i = 0; i < 200; i++) {
		stars[i] = new Star();
	}
} 

function draw() { 
  //Sky
  r = map(mouseY, 50, 600, 254, 0);
  g = map(mouseY, 50, 600, 240, 0);
  b = map(mouseY, 50, 600, 224, 0);
  background(r, g, b);
  
  
  for (var i = 0; i < stars.length; i++) {
    stars[i].draw();
  }

  //Sun
  r = map(mouseY, 200, 400, 239, 0);
  r = map(mouseY, 200, 400, 241, 0);
  b = map(mouseY, 200, 400, 236, 0);
  fill(r, g, 50, b);
  ellipse(width/2, mouseY, 80, 80);

  //Moon
  fill("white");
  ellipse(56, 46, 65, 65);

  //Forest
  if (keyCode === 70) {
    //Sky
    r = map(mouseY, 50, 600, 206, 0);
    g = map(mouseY, 50, 600, 229, 0);
    b = map(mouseY, 50, 600, 201, 0);
    background(r, g, b);

    for (var i = 0; i < stars.length; i++) {
      stars[i].draw();
    }

    //Sun
    r = map(mouseY, 200, 400, 239, 0);
    r = map(mouseY, 200, 400, 241, 0);
    b = map(mouseY, 200, 400, 236, 0);
    fill(r, g, 50, b);
    ellipse(width/2, mouseY, 80, 80);

    //Moon
    fill("white");
    ellipse(56, 46, 65, 65);

    //Mountains at the back
    fill(206, 229, 201);
    noStroke();
    beginShape();
    curveVertex(0, 328);
    curveVertex(0, 328);
    curveVertex(70, 312);
    curveVertex(133, 286);
    curveVertex(201, 314);
    curveVertex(267, 349);
    curveVertex(331, 352);
    curveVertex(419, 379);
    curveVertex(501, 350);
    curveVertex(560, 329);
    curveVertex(626, 340);
    curveVertex(679, 312);
    curveVertex(734, 303);
    curveVertex(800, 284);
    curveVertex(800, 600);
    curveVertex(0, 600);
    curveVertex(0, 328);
    endShape();


    //Trees in the back
    fill(96, 142, 113);
    noStroke();
    beginShape();
    vertex(133, 286);
    vertex(16, 600);
    vertex(229, 600);
    endShape();

    beginShape();
    vertex(313, 341);
    vertex(201, 600);
    vertex(434, 600);
    endShape();

    beginShape();
    vertex(400, 259);
    vertex(280, 600);
    vertex(514, 600);
    endShape();

    beginShape();
    vertex(545, 225);
    vertex(377, 600);
    vertex(700, 600);
    endShape();

    beginShape();
    vertex(659, 309);
    vertex(530, 600);
    vertex(774, 600);
    endShape();

    beginShape();
    vertex(761, 247);
    vertex(623, 600);
    vertex(800, 600);
    vertex(800, 424);
    endShape();

    //Trees in the middle
    fill(15, 69, 59);
    noStroke();
    beginShape();
    vertex(52, 355);
    vertex(0, 448);
    vertex(0, 600);
    vertex(191, 600);
    endShape();

    beginShape();
    vertex(218, 331);
    vertex(106, 600);
    vertex(321, 600);
    endShape();

    beginShape();
    vertex(447, 390);
    vertex(321, 600);
    vertex(548, 600);
    endShape();

    beginShape();
    vertex(691, 432);
    vertex(611, 600);
    vertex(784, 600);
    endShape();


    //Trees at the front
    fill(10, 36, 40);
    noStroke();
    beginShape();
    vertex(136, 482);
    vertex(81, 600);
    vertex(191, 600);
    endShape();

    beginShape();
    vertex(201, 453);
    vertex(136, 600);
    vertex(255, 600);
    endShape();

    beginShape();
    vertex(416, 453);
    vertex(353, 600);
    vertex(486, 600);
    endShape();

    beginShape();
    vertex(576, 473);
    vertex(507, 600);
    vertex(646, 600);
    endShape();

    beginShape();
    vertex(800, 424);
    vertex(732, 600);
    vertex(800, 600);
    endShape();
  } 


  //Beach
  if (keyCode === 66) {
    //Sky
    r = map(mouseY, 50, 600, 255, 0);
    g = map(mouseY, 50, 600, 253, 0);
    b = map(mouseY, 50, 600, 207, 0);
    background(r, g, b);

    for (var i = 0; i < stars.length; i++) {
      stars[i].draw();
    }

    //Sun
    r = map(mouseY, 200, 400, 239, 0);
    r = map(mouseY, 200, 400, 241, 0);
    b = map(mouseY, 200, 400, 236, 0);
    fill(r, g, 50, b);
    ellipse(width/2, mouseY, 80, 80);

    //Moon
    fill("white");
    ellipse(56, 46, 65, 65);

    //Cloud
    fill("white");
    noStroke();
    beginShape();
    curveVertex(0, 211);
    curveVertex(0, 211);
    curveVertex(16, 176);
    curveVertex(52, 165);
    curveVertex(86, 125);
    curveVertex(138, 111);
    curveVertex(191, 148);
    curveVertex(205, 179);
    curveVertex(223, 184);
    curveVertex(230, 198);
    curveVertex(256, 213);
    curveVertex(271, 233);
    curveVertex(275, 265);
    curveVertex(290, 270);
    curveVertex(299, 287);
    curveVertex(309, 286);
    curveVertex(318, 291);
    curveVertex(332, 276);
    curveVertex(368, 273);
    curveVertex(382, 287);
    curveVertex(394, 286);
    curveVertex(404, 290);
    curveVertex(415, 279);
    curveVertex(436, 267);
    curveVertex(454, 275);
    curveVertex(461, 252);
    curveVertex(508, 234);
    curveVertex(532, 253);
    curveVertex(551, 242);
    curveVertex(572, 239);
    curveVertex(599, 201);
    curveVertex(627, 196);
    curveVertex(644, 176);
    curveVertex(708, 156);
    curveVertex(754, 183);
    curveVertex(771, 212);
    curveVertex(794, 216);
    vertex(800, 230);
    vertex(800, 346);
    vertex(0, 346);
    vertex(0, 211);
    endShape();

    //Tree
    fill(104, 193, 113);
    noStroke();
    beginShape();
    curveVertex(591, 0);
    curveVertex(591, 0);
    curveVertex(579, 11);
    curveVertex(570, 23);
    curveVertex(563, 38);
    curveVertex(563, 38);
    curveVertex(581, 28);
    curveVertex(601, 16);
    curveVertex(621, 6);
    curveVertex(579, 34);
    curveVertex(549, 69);
    curveVertex(536, 112);
    curveVertex(559, 94);
    curveVertex(581, 71);
    curveVertex(561, 98);
    curveVertex(538, 124);
    curveVertex(598, 104);
    curveVertex(683, 46);
    curveVertex(674, 20);
    curveVertex(674, 20);
    curveVertex(692, 25);
    curveVertex(708, 34);
    curveVertex(711, 42);
    curveVertex(724, 39);
    curveVertex(743, 33);
    curveVertex(762, 31);
    curveVertex(749, 41);
    curveVertex(783, 28);
    curveVertex(800, 26);
    curveVertex(746, 49);
    curveVertex(692, 105);
    curveVertex(685, 148);
    curveVertex(699, 126);
    curveVertex(716, 104);
    curveVertex(695, 140);
    curveVertex(685, 186);
    curveVertex(694, 223);
    curveVertex(703, 200);
    curveVertex(711, 174);
    curveVertex(706, 208);
    curveVertex(698, 234);
    curveVertex(730, 206);
    curveVertex(756, 177);
    curveVertex(778, 128);
    curveVertex(762, 104);
    curveVertex(783, 104);
    curveVertex(800, 115);
    vertex(800, 0);
    vertex(591, 0);
    endShape();
    
    //Water
    fill(169, 218, 230);
    noStroke();
    beginShape();
    vertex(0, 346);
    vertex(800, 346);
    vertex(800, 600);
    vertex(0, 600);
    endShape();

    //Water
    fill(249, 252, 254);
    noStroke();
    beginShape();
    curveVertex(0, 436);
    curveVertex(136, 443);
    curveVertex(259, 464);
    curveVertex(425, 464);
    curveVertex(435, 441);
    curveVertex(626, 473);
    curveVertex(800, 489);
    curveVertex(800, 520);
    curveVertex(0, 520);
    curveVertex(0, 436);
    curveVertex(136, 443);
    endShape();

    //Sand
    fill(254, 220, 161);
    noStroke();
    beginShape();
    curveVertex(0, 600);
    curveVertex(0, 600);
    curveVertex(0, 451);
    curveVertex(0, 455);
    curveVertex(108, 455);
    curveVertex(230, 476);
    curveVertex(357, 482);
    curveVertex(464, 475);
    curveVertex(455, 455);
    curveVertex(584, 477);
    vertex(800, 504);
    vertex(800, 600);
    vertex(0, 600);
    endShape();

    fill(231, 53, 64);
    noStroke();
    beginShape();
    vertex(184, 520);
    vertex(182, 535);
    vertex(207, 544);
    vertex(178, 548);
    vertex(172, 567);
    vertex(158, 553);
    vertex(129, 553);
    vertex(144, 540);
    vertex(137, 525);
    vertex(162, 529);
    endShape();
  }


  //City
  if (keyCode === 67) {
    //Sky
    r = map(mouseY, 50, 600, 228, 0);
    g = map(mouseY, 50, 600, 242, 0);
    b = map(mouseY, 50, 600, 244, 0);
    background(r, g, b);

    for (var i = 0; i < stars.length; i++) {
      stars[i].draw();
    }

    //Sun
    r = map(mouseY, 200, 400, 239, 0);
    r = map(mouseY, 200, 400, 241, 0);
    b = map(mouseY, 200, 400, 236, 0);
    fill(r, g, 50, b);
    ellipse(width/2, mouseY, 80, 80);

    if (mouseY > 550) {
      //Moon
      fill("white");
      ellipse(56, 46, 65, 65);
    } else {
      noFill();
      ellipse() === false;
    }

    //Moon
    fill("white");
    ellipse(56, 46, 65, 65);

    //Buildings in background
    fill(175, 195, 194);
    noStroke();
    beginShape();
    vertex(0, 201);
    vertex(97, 201);
    vertex(97, 600);
    vertex(0, 600);
    endShape();

    beginShape();
    vertex(113, 485);
    vertex(160, 485);
    vertex(160, 600);
    vertex(113, 600);
    endShape();

    beginShape();
    vertex(305, 312);
    vertex(526, 312);
    vertex(526, 600);
    vertex(305, 600);
    endShape();

    beginShape();
    vertex(568, 561);
    vertex(651, 567);
    vertex(651, 601);
    vertex(568, 600);
    endShape();

    beginShape();
    vertex(632, 332);
    vertex(800, 332);
    vertex(800, 600);
    vertex(632, 600);
    endShape();

    //Buildings at back
    fill(141, 170, 169);
    noStroke();
    beginShape();
    vertex(54, 345);
    vertex(113, 345);
    vertex(113, 600);
    vertex(54, 600);
    endShape();

    beginShape();
    vertex(216, 278);
    vertex(305, 278);
    vertex(305, 600);
    vertex(216, 600);
    endShape();

    beginShape();
    vertex(376, 332);
    vertex(437, 332);
    vertex(437, 600);
    vertex(376, 600);
    endShape();

    beginShape();
    vertex(650, 273);
    vertex(778, 273);
    vertex(778, 600);
    vertex(651, 600);
    endShape();

    //Buildings in middle
    fill(86, 131, 130);
    noStroke();
    beginShape();
    vertex(0, 409);
    vertex(28, 409);
    vertex(28, 600);
    vertex(0, 600);
    endShape();

    beginShape();
    vertex(160, 394);
    vertex(251, 396);
    vertex(251, 600);
    vertex(160, 600);
    endShape();

    beginShape();
    vertex(305, 425);
    vertex(405, 425);
    vertex(405, 600);
    vertex(305, 600);
    endShape();

    beginShape();
    vertex(500, 413);
    vertex(568, 413);
    vertex(568, 600);
    vertex(500, 600);
    endShape();

    beginShape();
    vertex(763, 433);
    vertex(800, 433);
    vertex(800, 600);
    vertex(763, 600);
    endShape();


    //Buildings at front
    fill(68, 104, 102);
    noStroke();
    beginShape();
    vertex(19, 452);
    vertex(82, 452);
    vertex(82, 600);
    vertex(19, 600);
    endShape();

    beginShape();
    vertex(154, 534);
    vertex(206, 534);
    vertex(206, 600);
    vertex(154, 600);
    endShape();

    beginShape();
    vertex(251, 522);
    vertex(317, 522);
    vertex(317, 600);
    vertex(251, 600);
    endShape();

    beginShape();
    vertex(416, 547);
    vertex(483, 547);
    vertex(483, 600);
    vertex(416, 600);
    endShape();

    beginShape();
    vertex(590, 508);
    vertex(690, 507);
    vertex(690, 600);
    vertex(590, 600);
    endShape();
  }
}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}
