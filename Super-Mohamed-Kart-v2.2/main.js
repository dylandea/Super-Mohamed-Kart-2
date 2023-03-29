const momo = document.querySelector("#momo");
const div_game = document.querySelector(".game");
const gamesItems = document.querySelector(".game_items");
let enemySpeed = 1;
const homePage = document.querySelector("#homePage");
const startScreen = document.querySelector("#homePage");
const buttonPlay = document.querySelector("#play");
const score_text = document.querySelector(".score_text");
const shoot_momo_class = document.querySelector(".shoot_momo_class");


buttonPlay.addEventListener("click", clickPlayHandler, false);

function clickPlayHandler(e) {
    startScreen.style.opacity = 0;
    gamesItems.style.opacity = 1;

    move();
    setTimeout(() => {
        generateEnemy();
    }, 1000);
}



// momo.style.cssText += `transform: translateY(${positionY}px);left: 20px;`;
// const momo_content = document.querySelector(".momo_content");
let height, width;
let resize_Frame = 135;
let end_game = false;

function window_dimension() {
    height = window.innerHeight;
    width = window.innerWidth;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
let right_pressed = false;
let left_pressed = false;
let shoot_pressed = false;


// MOVE keyboard key control
function keyDownHandler(e) {
    if (e.keyCode == 37) {
        right_pressed = true;
    } else if (e.keyCode == 39) {
        left_pressed = true;
    } else if (e.keyCode == 32) {

        shoot_pressed = true;
    }
}
// MOVE keyboard key control

// key control keyboard STOP
function keyUpHandler(e) {
    if (e.keyCode == 37) {
        right_pressed = false;
    } else if (e.keyCode == 39) {
        left_pressed = false;
    } else if (e.keyCode == 32) {
        shoot_pressed = false;
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

    if (momo_position_top <= Math.round(height * 32 / 100)) {
        right_pressed = false;
    } else if (momo_position_bottom >= height) {
        left_pressed = false;
    }
}
let move_frame;
let game, span;
let boolean_shoot = true;
let pain_au_chocolat_positionX = 2;
let speed_shoot_momo = 4;

function shoot_momo() {

    move_frame_shoot_momo = requestAnimationFrame(shoot_momo);

    if (shoot_pressed && boolean_shoot) {
        positionY_shoot_momo = momo_position_Y;
        boolean_shoot = false;
    }

    if (pain_au_chocolat_positionX < width) {
        shoot_momo_class.style.cssText += `transform: translateX(${pain_au_chocolat_positionX}px); opacity:1; left: 100px;top:${positionY_shoot_momo}px`;
        pain_au_chocolat_positionX += speed_shoot_momo;
    }


    if (pain_au_chocolat_positionX >= width) {
        pain_au_chocolat_positionX = 0;
        cancelAnimationFrame(move_frame_shoot_momo);
        boolean_shoot = true;
    };
}

let positionY = 250;
let speedMomo = 8;

function move() {
    move_frame = requestAnimationFrame(move);

    momo.style.cssText += `transform: translateY(${positionY}px); left: 50px;`;


    position();
    if (right_pressed) {
        positionY -= speedMomo;
    } else if (left_pressed) {
        positionY += speedMomo;
    }
    window_dimension();
    if (shoot_pressed && boolean_shoot) {
        shoot_momo();
    }
    updateScore();
    handleCrash();



};



//délai avant première apparition des ennemies, donc délai avant début du jeu



function clear_game() {
    gamesItems.style.opacity = 0;
    setTimeout(() => {
        location.reload();
    }, 2000);

    /* end_game = true;
    gamesItems.style.opacity = 0;

        const enemies = document.querySelectorAll(`.enemy`);
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].remove();
        }


    cancelAnimationFrame(enemy_animation_frame);
    cancelAnimationFrame(move_frame); */

}