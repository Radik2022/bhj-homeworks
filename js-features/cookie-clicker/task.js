const clicker__counter = document.querySelector('#clicker__counter');
const cookie = document.querySelector('#cookie');
const click__speed = document.querySelector('#click__speed');
let newDate = null;

cookie.onclick = function () {
    let timer = Number(clicker__counter.textContent);
    if(timer === 0){
        newDate =  new Date();
    }

    if(timer >= 0 && timer < 666){
        clicker__counter.textContent = timer + 1;
        cookie.classList.toggle('cookieAdd');
        let now = new Date();
        let result = (now - newDate) / 100 ;
        click__speed.textContent = result.toFixed(1);
        newDate = new Date();
    } else {
        clicker__counter.textContent = 0;
    }

};
