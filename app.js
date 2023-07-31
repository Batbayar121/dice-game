//togloom duussan esehiig hadgaldag huvisagch
var isNewGame;
// togloomiin eeljiig hadgaldag huvisagch
var activePlayer;
// togloomiin tsugluulsan onoog hadgaldag huvisagch
var scores ;
// toglogchiin eeljindee tsugluulj bgaa onoog hadgaldag huvisagch
var roundScore;

var dDom = document.querySelector('.dice');
restartGame();
function restartGame(){
    // togloom ehlelee gedeg tolovt oruulna
    isNewGame = true;

    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
// won hesgiig solih
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    dDom.style.display = 'none';
};
// window.document.querySelector('#score-0').textContent = 0;
// roll dice hiih ni
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
// dDom.style.display = 'none'; // zurag alga bolno 
dDom.style.display = 'none';
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isNewGame){
        // 1-6 hurtel random too ogno
        var diceNumber = Math.floor(Math.random()*6)+1;
        // shoonii zurag gargaj ogno
        dDom.style.display = 'block';
        // buusan sanamsargui taarsan zurgiig ogch bna
        dDom.src = 'dice-'+diceNumber+'.png';
        if(diceNumber !== 1){
        roundScore += diceNumber;
        document.getElementById('current-'+activePlayer).textContent = roundScore;
        }else{
        Player();
        }
    }else{
        alert('togloom duussan bna')
    };
});
// hold hiih ni 
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame){
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer]
        if(scores[activePlayer] >= 100){
            // togloomiig duussan tolovt oruulna
            isNewGame = false;
            document.getElementById('name-'+activePlayer).textContent = 'won';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }else{
            Player();
        } 
    }else{
        alert('togloom duussan bna')
    }
});

function Player(){
    roundScore = 0;
    document.getElementById('current-'+activePlayer).textContent = 0;
     // if(activePlayer === 0){
        //     activePlayer = 1;
        // }else{
        //     activePlayer = 0;
        // }
    activePlayer === 0 ?(activePlayer = 1):(activePlayer = 0);
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    dDom.style.display = 'none';
};
document.querySelector('.btn-new').addEventListener('click', function(){
    restartGame();
})