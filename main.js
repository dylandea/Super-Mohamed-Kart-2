const momo = document.querySelector("#momo");
const homePage = document.querySelector("#homePage");
const startScreen = document.querySelector("#homePage");
const buttonPlay = document.querySelector("#play");

buttonPlay.addEventListener("click", clickPlayHandler, false);

function clickPlayHandler(e) {
    startScreen.style.cssText= `opacity: 0;`;
}



// momo.style.cssText += `transform: translateY(${positionY}px);left: 20px;`;
// const momo_content = document.querySelector(".momo_content");
let height, width;

function window_dimension() {
    height = window.innerHeight;
    width = window.innerWidth;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let right_pressed = false;
let left_pressed = false;
let pull_pressed = false;


// MOVE keyboard key control
function keyDownHandler(e) {
    if (e.keyCode == 37) {
        right_pressed = true;
        // move DOWN ///////////
        //console.log("droite");
    } else if (e.keyCode == 39) {
        left_pressed = true;
        // move UP ///////////
        //console.log("gauche");
    } else if (e.keyCode == 32) {
     
        pull_pressed = true;
        // PULL ///////////
        console.log('pull')
    }
}
// MOVE keyboard key control

// key control keyboard STOP
function keyUpHandler(e) {
    if (e.keyCode == 37) {
        right_pressed = false;

        // move STOP DOWN ///////////
        //console.log("stop droite");
    } else if (e.keyCode == 39) {
        left_pressed = false;
        // move STOP UP ///////////
        //console.log("stop gauche");
    } else if (e.keyCode == 32) {
        pull_pressed = false;
        // STOP PULL ///////////
        //console.log('pull stop')
    }
}
// key control keyboard STOP


// frame momo position to not exit the field - position frame momo pour ne pas sortir du champ

let momo_position, momo_position_X, momo_position_Y, momo_position_top, momo_position_bottom;

function position() {

    momo_position = momo.getBoundingClientRect();
    momo_position_X = Math.round(momo_position.x);
    momo_position_Y = Math.round(momo_position.y);
    momo_position_top = Math.round(momo_position.top);
    momo_position_bottom = Math.round(momo_position.bottom);

    console.log("y: " + momo_position.y);
    console.log("x: " + momo_position_X);
    console.log("y: " + momo_position_Y);
    console.log("top: " + momo_position_top);
    console.log("bottom: " + momo_position_bottom);

    if (momo_position_top <= 300) {
        right_pressed = false;
    } else if (momo_position_bottom >= height) {
        left_pressed = false;
    }
}
let positionY, move_frame, speedMomo;

// ==================================================================================

// ==================================================================================

positionY = 330;
speedMomo = 2;

function move() {

    momo.style.cssText += `transform: translateY(${positionY}px);left: 20px;`;

    position();
    if (right_pressed) {
        positionY -= speedMomo;


        console.log("height " + height, "width " + width);
    } else if (left_pressed) {
        positionY += speedMomo;

        console.log("height " + height, "width " + width);
    }
    window_dimension();






    move_frame = requestAnimationFrame(move);
};

move();