// Globals
var player = document.getElementById("Player");
var playerX = 7;
var playerY = 7;
var moveVertical = false;
let tileSize = 0.7;
let activeMoves = {
	left: 0,
  right: 0,
  up: 0,
  down: 0,
}

// Binds
document.onkeydown = keyDown;
document.onkeyup = keyUp;

// keyDown happens consistently while a key is pressed, so it requires special checks
function keyDown(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    // up arrow
    if(!activeMoves.up) { 
      activeMoves.up = 1;
      moveVertical = true;
    }
  }
  else if (e.keyCode == '40') {
    // down arrow
    if(!activeMoves.down) {
      activeMoves.down = 1;
      moveVertical = true;
    }
  }
  else if (e.keyCode == '37') {
    // left arrow
    if(!activeMoves.left) {
      activeMoves.left = 1;
      moveVertical = false;
    }
  }
  else if (e.keyCode == '39') {
    // right arrow
    if(!activeMoves.right) {
      activeMoves.right = 1;
      moveVertical = false;
    }
  }
  e.preventDefault();
}

function keyUp(e) {
  e = e || window.event;
  if (e.keyCode == '38') {
    // up arrow
    activeMoves.up = 0;
    moveVertical = false;
  }
  else if (e.keyCode == '40') {
    // down arrow
    activeMoves.down = 0;
    moveVertical = false;
  }
  else if (e.keyCode == '37') {
    // left arrow
    activeMoves.left = 0;
    moveVertical = true;
  }
  else if (e.keyCode == '39') {
    // right arrow
    activeMoves.right = 0;
    moveVertical = true;
  }
  e.preventDefault();
}

// Check if the player can move in a direction
// Parameter 'direction' may be one of:
// up, down, left, right as string
function playerCanMove(direction){
	switch(direction) {
  	case "up":
    	return activeMoves.up && !(playerY-tileSize <= 0);
    	break;
    case "down":
    	return activeMoves.down && !(playerY+tileSize >= window.innerHeight);
      break;
    case "left":
    	return activeMoves.left && !(playerX-tileSize <= 0);
      break;
    case "right":
    	return activeMoves.right && !(playerX+tileSize >= window.innerWidth);
      break;
    default:
    	throw TypeError(`${direction} is not a valid direction for playerCanMove!`);
    	break;
  }
}

// Movement loop at 0.5s per loop
// Keep this loop separate from the render loop or gameplay logic loops
setInterval(() => {
	// Forfeit turn if there are no moves to make
  // Note that we forfeit here rather than at the flip below because we want to check right at move time
  // If we did it below we'd miss the player pressing a button between intervals!
	if(!playerCanMove("up") && !playerCanMove("down")) moveVertical = false;
  if(!playerCanMove("left") && !playerCanMove("right")) moveVertical = true;
  
  // Decide which direction's turn it is and move
	if(!moveVertical) {
    player.style.left = (playerCanMove("right") ? playerX+=tileSize : playerX)+"px";
    player.style.left = (playerCanMove("left") ? playerX-=tileSize : playerX)+"px";
  } else {
    player.style.top = (playerCanMove("up") ? playerY-=tileSize : playerY)+"px";
   	player.style.top = (playerCanMove("down") ? playerY+=tileSize : playerY)+"px";
  }
  // Flip the direction turn
  moveVertical = !moveVertical;
}, 1);
