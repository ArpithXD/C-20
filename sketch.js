var moving_rect, fixed_rect;

function setup() {

  createCanvas(1200,800);
  moving_rect = createSprite(200, 200, 50, 80);
  fixed_rect = createSprite(400,200,80,50);

  moving_rect.shapeColor = "yellow";
  fixed_rect.shapeColor = "yellow";

  moving_rect.debug = true;
  fixed_rect.debug = true;
}

function draw() {
  background(0);  

  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if (moving_rect.x - fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2 &&
      fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2 &&
      moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2 &&
      fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2 ) {
    moving_rect.shapeColor = "red";
    fixed_rect.shapeColor = "red";
  } else {
    moving_rect.shapeColor = "yellow";
    fixed_rect.shapeColor = "yellow";
  }
  drawSprites();
}