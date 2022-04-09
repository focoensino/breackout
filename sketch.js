var paddle,pontos
var bola,grupoBlocos
var edges


function preload(){


}
                                                                                                      
function setup(){
  createCanvas(500,500)

paddle = createSprite(200,350,120,10 );
bola = createSprite(250,250,30,20)
edges= createEdgeSprites();
grupoBlocos = new Group()

pontos = 0;

bola.velocityX = 7  
bola.velocityY= -7



criarLinha(65,"red")
criarLinha(65+29,"blue")
criarLinha(65+29+29,"green")
criarLinha(65+29+29+29,"yellow")



}
                                     
function draw() {
 background(0)
paddle.x = World.mouseX;
if(paddle.x < 80){

  paddle.x =80;
  
  }
   
  
  
  if(paddle.x  >435 ){   

  paddle.x = 435;
  }
  
 

drawSprites();
textSize(20)
fill("red")
text("Pontuação: " + pontos,250,40)

                                         
bola.bounceOff(edges[0])
bola.bounceOff(edges[1])
bola.bounceOff(edges[2])
bola.bounceOff(paddle);
bola.bounceOff(grupoBlocos,destruirBlocos);

if(!grupoBlocos[0]){

  bola.velocityX = 0 
  bola.velocityY= 0

}



drawSprites()



}
function  criarLinha(y,cor) {
 
for(i = 0; i<6; i++){
var brick  = createSprite(64+54*i,y,50, 25);
brick.shapeColor=cor
grupoBlocos.add(brick)


  }
  }


  function destruirBlocos(bola,brick ){

      brick.remove()
      pontos = pontos + 1
  }