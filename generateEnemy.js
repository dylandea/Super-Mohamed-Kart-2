let posEnnemis_X,
	posEnnemis_Y,
	enemy,
	size_content_top,
	size_content_bottom,
	size_content_right,
	size_content_left,
	enemy_animation_frame;

function enemy_counter_function() {
	const enemy_counter = document.querySelectorAll(`.enemy`).length;
    
	if (enemy_counter == 0 && end_game === false) {
		cancelAnimationFrame(enemy_animation_frame);
		generateEnemy();
	}
}

function generateEnemy() {
	let enemy;

	size_content_top = div_game.getBoundingClientRect().top;
    size_content_bottom = div_game.getBoundingClientRect().bottom - resize_Frame;
    size_content_left = div_game.getBoundingClientRect().left;
    size_content_right = div_game.getBoundingClientRect().right;

	const numberOfEnemiesAtTheSameTimeOnTheScreen = 3;
    const possibleEnemiesPositions = [Math.round(height*38/100), Math.round(height*55/100), Math.round(height*69/100), Math.round(height*82/100)]; //à changer pour correspondre avec les voies de l'autoroute
    const possibleEnemiesCharacters = ["benoit", "dylan", "chris", "nicolas"];

	for (let i = 0; i < numberOfEnemiesAtTheSameTimeOnTheScreen; i++) {
		posEnnemis_X = Math.floor(Math.random() * width) + size_content_right;;
		posEnnemis_Y = possibleEnemiesPositions[Math.floor(Math.random() * possibleEnemiesPositions.length)];
        character = possibleEnemiesCharacters[Math.floor(Math.random() * possibleEnemiesCharacters.length)];
		enemy = document.createElement("span");
		enemy.className = `enemy`;
		gamesItems.append(enemy);
		enemy = document.querySelectorAll(`.enemy`)[i];
		enemy.style.cssText = `
        position: absolute;
        height: 18%;
	    width: 20%;
        background: url("image/${character}.png") no-repeat;
        background-size: contain;
        margin: 0;
        padding: 0;
        z-index: 3; 
        display: flex;
        justify-content: center;  
        align-items: center; 
        top: ${posEnnemis_Y}px; 
        left: ${posEnnemis_X}px;
        `;
        if (character=="chris") {
            enemy.style.height = "21%";
            enemy.style.width =  "23%"
        } else if (character=="dylan") {
            enemy.style.height = "17%";
            enemy.style.width =  "19%"
        } else if (character=="nicolas") {
            enemy.style.height = "17%";
            enemy.style.width =  "19%"
        } 
	}


	


    let existingEnemies = document.querySelectorAll(`.enemy`);

    let move_translate_X = 0;

    for (let i = 0; i < existingEnemies.length; i++) {
        function moveX() {
            existingEnemies[i].style.transform = `translateX(${(move_translate_X-=enemySpeed)}px)`;
            enemy_animation_frame = requestAnimationFrame(moveX);
            enemy_counter_function();
        }

        enemy_animation_frame = requestAnimationFrame(moveX);
    }
    enemySpeed+=1
    speedMomo+=1
}
