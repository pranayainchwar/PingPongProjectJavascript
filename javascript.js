let userpaddle = document.getElementById("userpaddle");
let aipaddle = document.getElementById("aipaddle");
let ball = document.getElementById("ball");
let gamebox = document.getElementById("gamebox");
let zpressed = false;
let xpressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key == "z") {
    zpressed = true;
    console.log("z pressed");
  } else if (e.key == "x") {
    xpressed = true;
    console.log("x pressed");
  }
}

function keyUpHandler(e) {
  if (e.key == "z") {
    zpressed = false;
    console.log("z released ");
  } else if (e.key == "x") {
    xpressed = false;
    console.log("x released");
  }
}

// ball movement in 2d, it will have the some velocity in x any y diection, 
//and we will update the position of the ball by adding the velocity to the position of the ball 
//and we will also check if the  ball is hitting the wall or the paddle, if it is hitting the wall, we will change the direction of  the ball 
//and if it is hitting the paddle, we will change the direction of the ball and increase the speed of the ball
//the velocity of the ball can be represented by a vector, it can be decomposed into vx and vy( x and y components of the velocity vector)
//the formula is -> v^2 = vx^2 + vy^2 ( pythagores theorem)
// the formula is -> v= sqrt (Vx^2 + Vy^2) (pythagores theorem)

let Vx = -2;
let Vy = -3;
let V = Math.sqrt(Math.pow(Vx, 2) + Math.pow(Vy, 2));

function reset(){
  ball.style.left = "50%";
  ball.style.top = "50%";
  Vx = -2;
  Vy = -3;
  V = Math.sqrt(Math.pow(Vx,2) + Math.pow(Vy,2));
}
function gameloop() {
  if (ball.offsetLeft < 0){
   // Vx = -Vx;
   reset();
  }
  if(ball.offsetLeft >gamebox.offsetWidth - ball.offsetWidth){ 
  // Vx = -Vx;
  reset();
  }
  if (ball.offsetTop < 0){
    Vy = -Vy;
  }
  if (ball.offsetTop > gamebox.offsetHeight - ball.offsetHeight){
    Vy = -Vy;
  }

  ball.style.left = ball.offsetLeft + Vx + "px";
  ball.style.top = ball.offsetTop + Vy + "px";
  
  if (zpressed && userpaddle.offsetTop > 55) {
    userpaddle.style.top = userpaddle.offsetTop - 5 + "px";
  }
  if (xpressed && userpaddle.offsetTop < gamebox.offsetHeight - userpaddle.offsetHeight + 45) {
    userpaddle.style.top = userpaddle.offsetTop + 5 + "px";
  }
  requestAnimationFrame(gameloop);
}
gameloop();
