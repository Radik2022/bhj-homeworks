const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);
function clear (){
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick =  function (){

    if (getHole(i).classList.contains('hole_has-mole')){
      dead.textContent++;
    }

    else {
      lost.textContent++;
    }

    if (dead.textContent == 10) {
      alert('Победа!');
      clear();
    }

    else if (lost.textContent == 5) {
      alert('Вы проиграли');
      clear();
    }
  }
}
