//Variáveis
var trex, trexCorrendo;
var chao; 
var canvas;
var gravidade = 0.9;
var forcaPulo = -10;

//carregar animações
function preload(){ 
  trexCorrendo = loadAnimation("t1.png","t3.png", "t4.png");
}

function setup() {
  canvas = createCanvas(600, 200); //larg, alt
  canvas.center();

  //crie um sprite de trex
  trex = createSprite(50,150,20,50);
  trex.addAnimation("correndo", trexCorrendo);
  //adicione dimensão ao trex
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  chao = createSprite(300,170,600,20); 

}

function draw() {// desenhar
  background(220); //fundo
  drawSprites(); //desenha os sprite


 

  
  if (keyDown("space")) {
    trex.velocityY = forcaPulo;
  }

  trex.velocityY += gravidade;

  //impedir que o trex caia (por conta da gravidade)
  trex.collide(chao);
  
}
