
function changcollor(){
    let color = prompt('Введіть колір фону сторінки англійською')
    document.body.style.backgroundColor = color;
}

function changFont(){
    document.body.style.fontFamily = 'monospace';
    document.body.style.fontSize = '22px';
}

function fontCentr() {
    document.getElementById('first_h').style.textAlign = 'center'
}

function pBackground() {
    let p = document.getElementsByTagName('p');
    p[0].style.backgroundColor = 'lightblue'
}

function linkcollor() {
    let color = prompt('Введіть колір посилань англійською')
    document.body.firstElementChild.nextElementSibling.style.color = 'red';
    for (const elem of document.getElementsByTagName('a')){
        elem.style.color = color;
    }
}

function colorOfDivText(){
    let color = prompt('Введіть колір тексту англійською')
    document.body.firstElementChild.nextElementSibling.nextElementSibling.style.color = `${color}`
}

function sizeOfDivText(){
    let size = prompt('Введіть розмір шрифта')
    document.body.firstElementChild.nextElementSibling.nextElementSibling.style.fontSize = `${size}px`
}

function boldOfDivText(){
    document.body.firstElementChild.nextElementSibling.nextElementSibling.style.fontWeight= `bold`
}


function typeOfUlText(){
    let typeoful = document.getElementsByTagName('ul')
    typeoful[0].type = 'circle'
}

function changLink() {
    let first = prompt('Введіть перше посилання без https://www.');
    let second = prompt('Введіть друге посилання без https://www.');
    let third = prompt('Введіть третє посилання без https://www.');
    let tegs = document.getElementsByTagName('a');
    tegs[0].href = `https://www.${first}`;
    tegs[0].target = '_blank';
    tegs[0].textContent = first;
    tegs[1].href = `https://www.${second}`;
    tegs[1].target = '_blank';
    tegs[1].textContent = second;
    tegs[2].href = `https://www.${third}`;
    tegs[2].target = '_blank';
    tegs[2].textContent = third;
}