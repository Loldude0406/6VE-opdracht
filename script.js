/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
var Bal1x = 50;
var Bal1y = 50; 
var SnelheidX1 = 10;
var SnelheidY1 = 10;
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  background('black');
  // stel vulkleur in
  fill(255, 255, 255);
  Bal1x = Bal1x + SnelheidX1;
  Bal1y = Bal1y + SnelheidY1;
  // teken een cirkel
  ellipse(Bal1x ,Bal1y ,80 , 80);

  
  if ( Bal1x === 1240){
    SnelheidX1 = SnelheidX1 * -1;
  }
  if ( Bal1x === 40){
    SnelheidX1 = SnelheidX1 * -1; 
  }
  if ( Bal1y === 680){
    SnelheidY1 = SnelheidY1 * -1;
  }
  if ( Bal1y === 40){
    SnelheidY1 = SnelheidY1 * -1;
  }

 }
