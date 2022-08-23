var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState; //faltava ela
var allPlayers, car1, car2, car3, cars, car1_img, car2_img;
var fullimage, powerCoinImage, fuels, powerCoins

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  fullimage = loadImage("./assets/fuel.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);

  //verificar numero de players conectados
  if(playerCount === 2){
    game.update(1);
  }
  //verificar o estado de jogo para começar a partida
  if(gameState === 1){
    game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}