function setup() {
    createCanvas(600, 600)
    background("black");
  }
  
  function draw(){
    stroke("blue");
    fill("red");
    
    if(mouseIspressed){
      rect(mouseX, mousey, 20, 35);
    }
    
   }