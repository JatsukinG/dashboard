const btnClose = document.querySelector('.btnClose');
const nav = document.querySelector('.navigationBar');


btnClose.addEventListener('click', (e) => {
    nav.classList.toggle('close');

    btnClose.innerHTML='>';

});
