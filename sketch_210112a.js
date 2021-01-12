// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(7, 78, 131);
  c2 = color(0,164,191);
  c3 = color(227, 236, 252);
}

function draw() {
  //background(51);
  push();
  translate( width, 0);
  rotate((HALF_PI)/2);
  grdDiamond(0, 0, height * 1.42, c1, c2, c3);
  pop(0);   
   
 translate( 0, (-width*0.2));
  for (let i = 1; i <=3; i++) {
    let lineY = (i * (height * 0.1)) + (i * (height * 0.20));
    setGradient( height*0.075,  lineY, height*0.85 , width*0.2, c1, c2, c3, Y_AXIS);
  }
  
  save("20210112.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(c);
      line(x, i, x + w, i);
      
       if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function grdDiamond(x, y, h, c1, c2, c3){
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h)/2, 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h)/2 ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      if ( i <= ((y + h)/2)){
        stroke(c);
        line( (x * h) - (i), i, (x * h) + i, i);
      }else{
        stroke(p);
        line( (x - h) + i , i, (x + h) - i , i);
      }
    }
}
