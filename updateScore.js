let score = 0;

function updateScore() {
    enemies = document.querySelectorAll(".enemy");
    for (let i = 0; i < enemies.length; i++) {
        let enemyRightSide = enemies[i].getBoundingClientRect().right;
        if (enemyRightSide <= size_content_left) {
            enemies[i].remove();
            score+=1;
            /*  
            musique_succès();
            */
        }
    }
    
    score_text.innerText = score;
    
}