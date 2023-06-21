const deadline = new Date(2023, 04, 04, 13, 10, 10);
const timerSeconds = document.querySelector('#timerSeconds');
const timerHours = document.querySelector('#timerHours');
const timerMinutes = document.querySelector('#timerMinutes');
const timerDays = document.querySelector('#timerDays');
const idInterval = setInterval(countingDownTheTime, 1000);



function countingDownTheTime() {
    const diff = deadline - new Date();

    if(diff <= 0) {
        clearInterval(idInterval);
       alert('Вы победили в конкурсе!')
       
    } else {
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        timerDays.textContent = days < 10 ? '0' + days : days;
        timerHours.textContent = hours < 10 ? '0' + hours : hours;
        timerMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        timerSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        
    }

}
