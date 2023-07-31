//togloomnii eeljiig hadgalah huvisagch
var activePlayer;
//togloomiin tsugluulsan onoog hadgalgh huvisagch 
var scores;
//toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore;


var dDom=document.querySelector('.dice');
restartGame()
function restartGame(){
    activePlayer=0;
    scores=[0,0];
    roundScore=0;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
   //won hesgiig solih
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')

    document.querySelector('.player-0-panel').classList.add('active')

    dDom.style.display='none';
};

//shooni ali talaar buusaniig hadgalah huvisagch heregtei 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej ogno
{/* <div class="player-score" id="score-0">43</div> */}
// window.document.querySelector("#score-0").textContent=dice;
// document.querySelector('#score-1').textContent=dice;
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
//shoo shideh event-1

// document.querySelector('.dice').style.display='none'
// document.querySelector('.btn-roll').addEventListener('click',function(){
    //1-6 hurtel random too avna
//     var diceNumber=Math.floor(Math.random()*6)+1;
//     document.querySelector('.dice').style.display='block'
//     document.querySelector('.dice').src='dice-'+diceNumber+'.png';
// });
//shoo shideh event-2
document.querySelector('.btn-roll').addEventListener('click',function(){
    //1-6 hurtel random too avna
    var diceNumber=Math.floor(Math.random()*6)+1;
    //shoonii zurgiig web deer gargaj ireh 
    dDom.style.display='block';
    //buusan sanamsarguu toondhargalzah shoonii zurgiig web deer gargna
    dDom.src='dice-'+diceNumber+'.png';
    //buusan too n 1 ees yalgaatai bol idevhtei toglogchiin onoog nemegduulen
    if(diceNumber !==1){
        //1-ees ylgaatai too buulaa buusan toog toglogch nemj ogno
        roundScore += diceNumber;
        document.getElementById('current-'+activePlayer).textContent=roundScore;
    }else{
      Player();
    }
});
//hold 
document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer]=scores[activePlayer]+roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer]
    if(scores[activePlayer]>=20){
        document.getElementById('name-'+activePlayer).textContent='won';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
    }else{
        Player();    
    }
});

function Player(){
            roundScore=0;
            document.getElementById('current-'+activePlayer).textContent=0;
            activePlayer===0 ? (activePlayer=1) :(activePlayer=0);
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            dDom.style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',function(){   //=> restartGame
    restartGame();
})
