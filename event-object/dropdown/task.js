const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

function onclickValue() { dropdownList.classList.toggle('dropdown__list_active')};
dropdownValue.addEventListener('click', onclickValue);

function onclickItem(event) {
    dropdownValue.textContent = event.target.textContent;
    dropdownList.classList.remove('dropdown__list_active')
    return false;
};
dropdownItem.forEach(element => element.onclick = onclickItem);
