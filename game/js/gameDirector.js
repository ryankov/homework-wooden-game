var killScore = 0;
var ammoTotal = 0;
window.addEventListener('load',function(e){
    console.log('Creating game scene');
    console.log('Loading ui');
    
    loadUi();
  
    
    createElement('div','player',document.getElementById('gameContainer'));
    loadScene(0);
    loadShip(0,false);
    
    
    console.log('Enabling user inputs');
    blindControls();
    console.log('Load enemy');
    var enemy = createElement('div','enemy',document.getElementById('gameContainer'));
    loadShip(1,true);
    setEnemyDificulty(1,enemy);
    
    
    





},false);

