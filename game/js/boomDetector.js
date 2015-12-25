function boomDetector(beam){
    var enemyPos = {
        left:parseInt(document.getElementById('enemy').style.left),
        bottom:parseInt(document.getElementById('enemy').style.bottom)
    }
    
    if(
        (enemyPos.left-10 <parseInt(beam.style.left)) &&
        (enemyPos.left+50 > parseInt(beam.style.left ))&&
        (enemyPos.bottom - 10 < parseInt(beam.style.bottom ))&&
        (enemyPos.bottom + 10 > parseInt(beam.style.bottom))) {
        beam.remove();
        enemyPosition.left = '800px';
        killScore++;
        document.getElementById('scoreResult').innerHTML = 'score ' +killScore;
    }
}

function chekWin(){
    if(killScore < 70 && ammoTotal > 100){
        alert('You lose');
    }
    if(killScore >70 && ammoTotal < 100){
        alert('You win');
    }
}