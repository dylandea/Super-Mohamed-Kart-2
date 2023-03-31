const config = {
    // GENERAL CONFIGURATION
    general_configuration: {
        // initial standard value: 0.15 / higher value : + / lower value: -
        size_spaceships: 0.15,

        // initial standard value: 5 / higher value : + / lower value: -
        number_enemies: 5,

        // initial standard value: 20 / higher value : + / lower value: -
        score_negative: 20, // blue spaceship hit by enemy spaceship (negative score)

        // initial standard value: 10 / higher value : + / lower value: -
        score_positive: 10, // enemy spaceship hit by blue spaceship (positive score)

        // initial standard value: 500 / higher value : + / lower value: -
        points_to_win_the_game: 500,
    },

    // CONFIGURE TEXT
    configure_text: {
        Rule_game: () => {
            return `
        <div class="text_content">
        <h1 class="title">Super Mohamed Kart 2</h1>
        <p class="text"> Éviter les codeurs en herbe ou chocoblaster les si vous pouvez!!!<br> Si vous êtes touché par un tir ennemi, <span style="color: rgb(252, 161, 255);">vous perdez 20
            points</span>.<br>Si vous percutez un ennemi, <span style="color: rgb(252, 161, 255);">vous perdez
            la partie</span>. <br> Si vos points sont inférieurs à ZÉROS, <span style="color: rgb(252, 161, 255);">vous perdez la partie</span>. <br> bonne chance !
            </p>
            <div class="footer">
            
            <div class="phone"></div>
            <div class="select_mode">select mode</div>
            <div class="keyboard"></div>
            
            </div>
            </div>
            `;
        },

        mission_failed: "Your mission failed !",

        blue_spaceship_destroyed: "Your spaceship has been destroyed !",
    },

    // BLUE SPACESHIP CONFIGURATION
    blue_spaceship: {
        pull: {
            // initial standard value: 300 / higher value : - / lower value: +
            number_fire: 300,

            // initial standard value: 0.50 / higher value : + / lower value: -
            advance_speed_fire: 0.5,
        },

        animation: {
            // initial standard value: 300 / higher value : + / lower value: -
            shaded_impact_effect: 300,

            // initial standard value: 20  / higher value : - / lower value: +
            speed_animation_shooting: 20,

            // initial standard value: 6 / higher value : + / lower value: -
            movement_speed: 6,

            // initial standard value: 100 / higher value : + / lower value: -
            number_explosion_collision_with_enemy: 100,

            // initial standard value: 100 / higher value : + / lower value: -
            number_explodes_enemy_fire: 100,
        },
    },

    // SPACESHIP ENEMY CONFIGURATION
    spaceship_enemy: {
        // initial standard value: 0.1 / higher value : + / lower value: -
        enemy_speed: 0.05,

        pull: {
            // initial standard value: 250 / max fire value: 0 / min fire value: 5000
            enemy_rate_of_fire:0,

            // initial standard value: 0.25 / higher value : + / lower value: -
            advance_speed_enemy_fire: 0,
        },
    },
};