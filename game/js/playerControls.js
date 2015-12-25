var playerCurentPosition = {
    left:false,
    right:false,
    top:false,
    bottom:false,
    fire:false,
    x:0,
    y:0,
    speed:5,
    ammunitionCartage : [],
    lastShotTimeStamp:Date.now()

};
var step = 3;

var gameLoop;


function blindControls(){
    document.body.addEventListener('keydown',function(e){
        setPosition(e,true);
        if(e.keyCode == 32){
            shoot();
        }
        window.requestAnimationFrame(function(){
            moveGameObject(e,step);
        })

    },false);
    document.body.addEventListener('keyup',function(e){
        setPosition(e,false);

    },false);

}

function setPosition(e,keyPosed){

    switch(e.keyCode) {
        case 65:
            playerCurentPosition.left = keyPosed;
            break;
        case 68:
            playerCurentPosition.right = keyPosed;
            break;
        case 87:
            playerCurentPosition.top = keyPosed;
            break;
        case 83:
            playerCurentPosition.bottom = keyPosed;
            break;
        case 32:
            playerCurentPosition.fire = keyPosed;
            break;
    }

}

function moveGameObject(e,step){

    playerCurentPosition.speed = step;
    gameObj = document.getElementById('player');
    if(playerCurentPosition.top){
        playerCurentPosition.y += (playerCurentPosition.speed );

    }
    if(playerCurentPosition.bottom){
        playerCurentPosition.y -= (playerCurentPosition.speed );

    }
    if(playerCurentPosition.left){
        playerCurentPosition.x -= (playerCurentPosition.speed );

    }
    if(playerCurentPosition.right){
        playerCurentPosition.x += (playerCurentPosition.speed );


    }
    gameObj.style.bottom = playerCurentPosition.y  + 'px';
    gameObj.style.left = playerCurentPosition.x + 'px';
}


function shoot(){
    if(Date.now()-playerCurentPosition.lastShotTimeStamp >400){
        playSound();
        var laser = createElement('div','beam',document.getElementById('gameContainer'));
        laser.style.left =parseInt(document.getElementById('player').style.left)+ 29+'px';
        laser.style.bottom = parseInt(document.getElementById('player').style.bottom)+ 29+'px';
        playerCurentPosition.ammunitionCartage.push(laser);
        playerCurentPosition.lastShotTimeStamp = Date.now();
        ammoTotal++;
        document.getElementById('ammoResult').innerHTML = 'ammo ' +(100- ammoTotal);
        
    }
}

function moveShotsForward(){
    playerCurentPosition.ammunitionCartage.forEach(function(laser){
        if(parseInt(laser.style.bottom ,10)  > 650){
            laser.remove();
        }else{
            laser.style.bottom = parseInt(laser.style.bottom ,10)+8+'px';
        }

        boomDetector(laser);


    });
}

