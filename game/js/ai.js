var enemyPosition = {

    left:800,
    bottom:590,
    speed:2

}

function setEnemyDificulty(difLevel,enemy){

    if(difLevel){
        moveLeftToLeft(enemy);
    }
    console.log(enemyPosition.left);

}


function moveLeftToLeft(enemy){

    if(enemyPosition.left > 0){
        enemyPosition.left -=enemyPosition.speed;

    }else{
        enemyPosition.left = 800;
    }

    enemy.style.left = enemyPosition.left+'px';
    enemy.style.bottom = enemyPosition.bottom +'px';

    window.requestAnimationFrame(function(){
        moveLeftToLeft(document.getElementById('enemy'));
        moveShotsForward();
        chekWin();

    })

}