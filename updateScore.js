function updateScore() {
    const enemies = document.querySelectorAll(".enemy");
    for (let i = 0; i < enemies.length; i++) {
        let enemyRightSide = enemies[i].getBoundingClientRect().right;
        if (enemyRightSide <= size_content_left-50) {
            enemies[i].remove();
            console.log("ici")
            score+=1;
            /*  
            musique_succès();
            */
        }
    }
    /*
    //afficher le score
    score_text.innerText = score;
    */
}