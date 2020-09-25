//Create variables here
var dog, happyDog;
var database;
var foodS , foodStock;

function preload()
{
  database=firebase.database();
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() 
{
  createCanvas(500, 500);
  dog1 = createSprite(250,300,50,50);
  dog1.addImage("dogImg",dog);
  dog1.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
 
  
}


function draw() 
{  
  background(rgb(46, 139, 87));
  if(keyWentDown(UP_ARROW))
  {
   writeStock(foodS);
   dog.addImage("dogImg",happyDog);
  }

  drawSprites();
  //add styles here

}
function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  database.ref('/').update({
    Food:x
  })
}



