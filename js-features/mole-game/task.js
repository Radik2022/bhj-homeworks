const holeHasMole = document.querySelector('.hole_has-mole');
const hole = document.querySelectorAll('.hole');
const holeGame = document.querySelector('.hole-game');
const dead = document.querySelector('#dead');
const lost = document.querySelector('#lost');

function beaverFishing() {
    for (let i = 0; i < hole.length; i++){
        hole[i].onclick = function () {
            if(hole[i].className.includes( 'hole_has-mole' )){
               let now = +dead.textContent;
               if(now >= 10){
                 alert("вы победили!!!");
                 clearInterval(idInterval);
                 location. reload()
               } else {
                dead.textContent = now + 1;
               }

            } else {
                let nowLost = +lost.textContent;
                if(nowLost >= 5){
                  alert("вы проиграли.");
                  clearInterval(idInterval);
                  location. reload()
                } else {
                    lost.textContent = nowLost + 1;
                }
            }

            }
    }
} 
const idInterval = setInterval(beaverFishing, 10);
