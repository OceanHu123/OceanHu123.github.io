const cat = document.getElementById('tomg');
const mouse = document.getElementById('jerryg');
const cheese = document.getElementById('cheese');
let gameArea = document.getElementById('game');
let gameWidth = gameArea.clientWidth;
let gameHeight = gameArea.clientHeight;
let catX = Math.floor(gameWidth * 0.02);
let catY = Math.floor(gameHeight * 0.85);
let mouseX = Math.floor(gameWidth * 0.95);
let mouseY = Math.floor(gameHeight * 0.02);
const timer = document.getElementById('timer');
const scoredisplay = document.getElementById('score');
let timeleft = 60;
let score = 0;
const obstacle = document.getElementById('obstacle');
let step = Math.floor(gameWidth * 0.01);
let timeinterval, jerryMoveInterval, collisionInterval, cheeseInterval, obstacleInterval;


document.addEventListener('keydown', function(event){
	tommove(event);
})
function closeRules(){
	document.getElementById('rules').style.display = 'none';
	startgame();
}
function startgame(){
	clearIntervals();
	document.addEventListener('keydown',tommove);
	scoredisplay.textContent = `score: ${score}`;
    timeinterval = setInterval(updatetimer, 1000);
    jerryMoveInterval = setInterval(jerrymove, 300);
    collisionInterval = setInterval(collision, 50);
    cheeseInterval = setInterval(moveCheese, 5000);
    obstacleInterval = setInterval(moveobstacle, 4000);
	tommove();
	scoredisplay.textContent = `score: ${score}`;
}
function tommove(event){
	if(event.key === 'w' && catY > 0){
		catY -= step;
	}
	if(event.key === 's' && catY < gameHeight - gameWidth * 0.075){
		catY += step;
	}
	if(event.key === 'a' && catX > 0){
		catX -= step;
	}
	if(event.key === 'd' && catX < gameWidth - gameWidth * 0.075){
		catX += step;
	}
	updatePosition();
}
function jerrymove(){
	clearInterval(jerrymove);
	let directions = ['up', 'down', 'left', 'right'];
	let randmove = directions[Math.floor(Math.random()*4)];
	switch(randmove){
	case 'up':
		if (mouseY > 0){
			mouseY -= step*4;
            break;
        }
    case 'down':
        if (mouseY < gameHeight - gameWidth * 0.05*10){
        	mouseY += step*4;
            break;
        }
    case 'left':
        if (mouseX > 0){
        	mouseX -= step*4;
            break;
        }
    case 'right':
        if (mouseX < gameWidth - gameWidth * 0.05*10){
        	mouseX += step*4;
            break;
        }
	}
	updatePosition();
}
function moveCheese() {
    cheeseX = Math.floor(Math.random() * (gameWidth - gameWidth * 0.03));
    cheeseY = Math.floor(Math.random() * (gameHeight - gameWidth * 0.03));
    updatePosition();
}
function moveobstacle(){
	obstacleX = Math.floor(Math.random() * (gameWidth - gameWidth * 0.04));
    obstacleY = Math.floor(Math.random() * (gameHeight - gameWidth * 0.04));
    updatePosition();
}
function updatePosition() {
  cat.style.left = catX + 'px';
  cat.style.top = catY + 'px';
  mouse.style.left = mouseX + 'px';
  mouse.style.top = mouseY + 'px';
  cheese.style.left = cheeseX + 'px';
  cheese.style.top = cheeseY + 'px';
  obstacle.style.left = obstacleX + 'px';
  obstacle.style.top = obstacleY + 'px';
}
function updatetimer(){
	if(timeleft > 0){
		timeleft--;
		timer.textContent = `time left: ${timeleft} seconds`;
	}
	else{
		clearIntervals();
		alert('time up! Your final score is ' + score);
		reset();
	}
};
function catFlashEffect() {
    cat.classList.add('cat-flash');
    setTimeout(() => cat.classList.remove('cat-flash'), 500);
}
function collision(){
	let tomrect = cat.getBoundingClientRect();
	let jerryrect = mouse.getBoundingClientRect();
	let cheeseRect = cheese.getBoundingClientRect();
	const obstacleRect = obstacle.getBoundingClientRect();
	if(tomrect.left < jerryrect.right && tomrect.right > jerryrect.left && tomrect.top < jerryrect.bottom && tomrect.bottom > jerryrect.top){
		score += 5;
        scoredisplay.textContent = `score: ${score}`;
        mouseX = Math.floor(Math.random() * (gameWidth * 0.95));
        mouseY = Math.floor(Math.random() * (gameHeight * 0.02));
        updatePosition();
        catFlashEffect();
	}
	if (
        tomrect.left < cheeseRect.right &&
        tomrect.right > cheeseRect.left &&
        tomrect.top < cheeseRect.bottom &&
        tomrect.bottom > cheeseRect.top
    ) {
        score += 10;
        scoredisplay.textContent = `score: ${score}`;
        document.getElementById('cheesesound').play();
        cheese.classList.add('cheese-animate');
        moveCheese();
        setTimeout(() => {
            moveCheese();
            cheese.classList.remove('cheese-animate');
        }, 500);
    }
    if (
        tomrect.left < obstacleRect.right &&
        tomrect.right > obstacleRect.left &&
        tomrect.top < obstacleRect.bottom &&
        tomrect.bottom > obstacleRect.top
    ) {
        score -= 5;
        scoredisplay.textContent = `score: ${score}`;
        obstacle.style.left = obstacleX + 'px';
        obstacle.style.top = obstacleY + 'px';
        moveobstacle();
        alert('You hit an obstacle! Watch out!')
        updatePosition();
        catFlashEffect();
    }
}

function reset(){
	clearIntervals();
	timeleft = 60;
	score = 0;
	catX = Math.floor(gameWidth * 0.02);
    catY = Math.floor(gameHeight * 0.85);
    mouseX = Math.floor(gameWidth * 0.95);
    mouseY = Math.floor(gameHeight * 0.02);
	timer.textContent = 'timer left: 60 seconds';
	scoredisplay.textContent = 'score: 0'
	updatePosition();
	document.getElementById('rules').style.display = 'block';
}
function clearIntervals() {
    clearInterval(timeinterval);
    clearInterval(jerryMoveInterval);
    clearInterval(collisionInterval);
    clearInterval(cheeseInterval);
    clearInterval(obstacleInterval);
}







const backToTopButton = document.getElementById("backToTop");


window.onscroll = function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    backToTopButton.style.display = "block"; 
  } else {
    backToTopButton.style.display = "none"; 
  }
};


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}