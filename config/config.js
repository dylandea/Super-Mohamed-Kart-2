const config = {
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
    },

};