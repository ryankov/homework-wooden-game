function createElement(typeOfElement,idOfElement,attachToElemnt){
    var elmnt = document.createElement(typeOfElement);
        elmnt.id = idOfElement;
    attachToElemnt.appendChild(elmnt);
    return elmnt;
}
function loadUi(){
    var ui ={
        score:createElement('div','scoreResult',document.getElementById('gameContainer')),
        ammo:createElement('div','ammoResult',document.getElementById('gameContainer'))
    }
    document.getElementById('scoreResult').innerHTML = 'score 0';
    document.getElementById('ammoResult').innerHTML = 'ammo 100';
}