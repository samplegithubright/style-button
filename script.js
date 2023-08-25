let element = document.querySelector('.box');
element.addEventListener('click', abc);

function abc() {
    element.style.color = 'white';
    element.style.border = '2px solid blue';
    element.style.width = '500px';
    element.style.height = '500px';
    element.style.background = 'blue';
}