var audio = new Audio('/game/sound/sound-x-wing.mp3');


function playSound(){
    setTimeout(function(){ audio.play(); }, 0);

}





function loadScene(scene){
    var gameScene = document.getElementById('backGroundStars');
    var scenes =["url(/game/assets/space-background.png)"];

    gameScene.style.backgroundImage = scenes[scene];


}



function loadShip(ship,isEnemy){
    var player = document.getElementById('player');
    var gameShips = ["/game/assets/xwing.png","/game/assets/Tiefighter.png"];

    var skin = document.createElement('img');
    skin.setAttribute('height','64px');
    skin.setAttribute('width','59px');
    skin.src = gameShips[ship];



    if(isEnemy){
        document.getElementById('enemy').appendChild(skin);
    }else{
        player.appendChild(skin);
    }


}