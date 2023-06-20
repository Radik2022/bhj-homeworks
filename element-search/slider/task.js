let sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

const removingClasses = () => sliderItem.forEach(element => element.classList.remove('slider__item_active') );
const addClass = index => sliderItem[index].classList.add('slider__item_active');

sliderArrowNext.onclick = () => {
    let classExistenceCheck = sliderItem.findIndex(element => element.classList.contains('slider__item_active'));
    if(classExistenceCheck === sliderItem.length - 1){classExistenceCheck = -1}
    removingClasses();
    addClass(classExistenceCheck + 1);
};

sliderArrowPrev.onclick = () => {
    let classExistenceCheck = sliderItem.findIndex(element => element.classList.contains('slider__item_active'));
    if(classExistenceCheck <= 0){classExistenceCheck = sliderItem.length}
    removingClasses();
    addClass(classExistenceCheck - 1);
};
