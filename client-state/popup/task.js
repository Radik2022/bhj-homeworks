const modalMain = document.querySelector('#modal_main');
const modalClose = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.querySelector('#modal_success');
modalMain.classList.add('modal_active');

for(let i = 0; i < modalClose.length; i++){
    modalClose[i].onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.style.display = 'none';
    }
};

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.style.display = 'flex';
  };
