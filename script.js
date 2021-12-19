'use strict';

const btn = document.querySelector('#btn');
const square = document.querySelector('#square');
const btn2 = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const span = document.getElementById('range-span');
const circle = document.querySelector('#circle');

const input = function(event) {
    let text = document.querySelector('#text').value;
    square.style.backgroundColor = text;
};

const changeSize = function(event) {
    //console.log(event.type);
    span.textContent = 'Размер круга ' + event.target.value + '%';
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';
};

btn.addEventListener('click', input); 
btn2.style.display = 'none';
range.addEventListener('input', changeSize);