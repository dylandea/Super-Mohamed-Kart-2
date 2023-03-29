function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkIfTwoRectIntersect(r1, x, r2) {
    r1 = r1.getBoundingClientRect(); 
    r2 = r2.getBoundingClientRect(); 

    return !(
        r2.left > r1.right - 50 ||
        r2.right < r1.left + 150||
        r2.top > r1.bottom - 50 ||
        r2.bottom < r1.top + 50
    );
}


function handleCrash() {
    const enemies = document.querySelectorAll(".enemy");
    for (let i = 0; i < enemies.length; i++) {
        if (checkIfTwoRectIntersect(momo, -resize_Frame * 0.347, enemies[i])) {

           // inner_text_style("Vous ne savez pas conduire...", 5, 2);

           // spaceship_explodes_audio();

            let momoLocation = momo.getBoundingClientRect();
            let enemyLocation = enemies[i].getBoundingClientRect();


            let vX = Math.round(momoLocation.x + resize_Frame * 0.7);
            let vY = Math.round(momoLocation.y + resize_Frame * 0.52);
            let eX = Math.round(
                enemyLocation.x + resize_Frame * 0.48
            );
            let eY = Math.round(
                enemyLocation.y + resize_Frame * 0.52
            );

            //explosion de momo
            const explosion1 = new Start_explose();
            explosion1.explose(
                vX,
                vY,
                100
            );

            const explosion2 = new Start_explose();
            explosion2.explose(
                vX + getRandomInt(-resize_Frame * 1.04, resize_Frame * 1.04),
                vY,
                resize_Frame * 0.5,
                100
            );

            //explosion de l'ennemi
            const explosion_enemy_spaceship_1 = new Start_explose();
            explosion_enemy_spaceship_1.explose(
                eX,
                eY,
                100
            );

            const explosion_enemy_spaceship_2 = new Start_explose();
            explosion_enemy_spaceship_2.explose(
                eX + getRandomInt(-resize_Frame * 1.04, resize_Frame * 1.04),
                eY,
                resize_Frame * 0.5,
                100
            );

            enemies[i].remove();

            
            clear_game();
        }
        
        /* arrete le jeu si points en dessous de 0 à cause du franchissement de la ligne
        else if (score < 0) {
            inner_text_style(config.configure_text.mission_failed, 5, 0);
            clear_game();
        } */
    }
}



// start_explose.js
let random = (mini, maxi) => Math.floor(Math.random() * mini) + maxi;

const color_Explosion_Function = () => {
    let color_Table_Explosion = [
        "blue",
        "chartreuse",
        "darkorange",
        "gold",
        "yellow",
        "red",
    ];
    let random_Array_Explosion = Math.floor(
        Math.random() * color_Table_Explosion.length
    );
    color_Explosion = color_Table_Explosion[random_Array_Explosion];
};

let color_Explosion;

let number_id_init_explosion = 1;
let number_id_style_explosion = 1;
let number_id_remove = 1;

class Start_explose {
    constructor() {
        this.position_X = 0;
        this.position_Y = 0;
        this.number_particle = 0;
    }
    explose(position_X, position_Y, number_particle) {
        this.position_X += position_X;
        this.position_Y += position_Y;
        this.number_particle += number_particle;

        // creation div
        let i = 0;
        
        while (i < this.number_particle) {
            let span = document.createElement("span");
            div_game.append(span);
            span.id = `number${number_id_init_explosion}`;
            span.className = "particle";
            let style_Explosion_initial = `
            position: absolute;
            margin: 0;
            padding: 0; 
            height: 0;
            width: 0;
            top: ${this.position_Y}px;
            left: ${this.position_X}px;
            border-radius: 1em;
            opacity: 1;
            `;
            number_id_init_explosion += 1;
            span.style.cssText = style_Explosion_initial;
            i++;
        }
        let time_transition = 0;

        let ii = 0;
        setTimeout(() => {
            while (ii < this.number_particle) {
                let style_Explosion_Move;
                color_Explosion_Function();

                let random_size = random(resize_Frame * 0.027, resize_Frame * 0.007);
                let random_top = random(resize_Frame * 0.34, -resize_Frame * 0.34);
                let random_left = random(resize_Frame * 0.34, -resize_Frame * 0.34);

                style_Explosion_Move = `
            position: absolute;
            z-index: 1; 
            transform: translateX(${random_left}px) translateY(${random_top}px);
            box-shadow: 0 0 ${random_size}em ${random_size}em ${color_Explosion};    
            opacity: 0; 
            height: 0; 
            width: 0;
            transition: transform 0.25s ${time_transition}s, box-shadow 0.25s ${time_transition}s,opacity 1s ${time_transition}s;              
            `;
                const particle_Class_Name = document.querySelector(
                    `#number${number_id_style_explosion}`
                );

                number_id_style_explosion += 1;
                time_transition += 0.01;
                particle_Class_Name.style.cssText += style_Explosion_Move;

                ii++;
            }
        }, 0);

        let iii = 0;
        setTimeout(() => {
            while (iii < this.number_particle) {
                const particle_Class_Name = document.querySelectorAll(
                    `#number${number_id_remove}`
                );
                // let particle_Class_Name = document.querySelectorAll(`.particle`);

                particle_Class_Name[0].remove();

                number_id_remove += 1;
                iii++;
            }
        }, this.number_particle * 50);
    }
}