const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

function removesTheClass(constName, classNam) {constName.forEach(el => el.classList.remove(classNam))};

tab.forEach(element => {
   element.addEventListener('click', () =>{
       removesTheClass(tab, 'tab_active');
       element.classList.add('tab_active');
       let i = tab.findIndex(element => element.classList.contains('tab_active'));
       removesTheClass(tabContent, 'tab__content_active');
       tabContent[i].classList.add('tab__content_active');
   });
});
