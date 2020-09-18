const toggleMenu = document.querySelector('.btn-toggle-nav');
const menu = document.querySelector('aside');
const colorNameBackGround = document.querySelector('.color');

toggleMenu.addEventListener('click', function () {
    menu.classList.toggle('menu-open')
})

const startHome = document.querySelector('.home');
const toggleColorWhite = function () {
    if (document.body.classList.contains('home')) {
        document.body.classList.remove('home');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('home');
        colorNameBackGround.textContent = 'Home'
    }
}
startHome.addEventListener('click', toggleColorWhite)

const red = document.querySelector('.rood');
const toggleColorRed = function () {
    if (document.body.classList.contains('rood')) {
        document.body.classList.remove('rood');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('rood');
        colorNameBackGround.textContent = 'Rood'
    }
}
red.addEventListener('click', toggleColorRed);

const orange = document.querySelector('.oranje');
const toggleColorOrange = function () {
    if (document.body.classList.contains('oranje')) {
        document.body.classList.remove('oranje');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('oranje');
        colorNameBackGround.textContent = 'Oranje'
    }
}
orange.addEventListener('click', toggleColorOrange);

const yellow = document.querySelector('.geel');
const toggleColorYellow = function () {
    if (document.body.classList.contains('geel')) {
        document.body.classList.remove('geel');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('geel');
        colorNameBackGround.textContent = 'Geel'
    }
}
yellow.addEventListener('click', toggleColorYellow)

const green = document.querySelector('.groen');
const toggleColorGreen = function () {
    if (document.body.classList.contains('groen')) {
        document.body.classList.remove('groen');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('groen');
        colorNameBackGround.textContent = 'Groen'
    }
}
green.addEventListener('click', toggleColorGreen);

const blue = document.querySelector('.blauw');
const toggleColorBlue = function () {
    if (document.body.classList.contains('blauw')) {
        document.body.classList.remove('blauw');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('blauw');
        colorNameBackGround.textContent = 'Blauw'
    }
}
blue.addEventListener('click', toggleColorBlue);

const indigo = document.querySelector('.indigo');
const toggleColorIndigo = function () {
    if (document.body.classList.contains('indigo')) {
        document.body.classList.remove('indigo');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('indigo');
        colorNameBackGround.textContent = 'Indigo'
    }
}
indigo.addEventListener('click', toggleColorIndigo);

const violet = document.querySelector('.violet');
const toggleColorViolet = function () {
    if (document.body.classList.contains('violet')) {
        document.body.classList.remove('violet');
    } else {
        document.body.removeAttribute('class');
        document.body.classList.add('violet');
        colorNameBackGround.textContent = 'Violet'
    }
}
violet.addEventListener('click', toggleColorViolet);

// document.body.addEventListener('keydown', function (event) {
//     if (event.key === 'r') {
//         toggleColorRed();
//     } else if (event.key === 'g') {
//         toggleColorYellow();
//     }
// });

//Pro tip (voor de toekomst): 
//const menuItems = document.querySelectorAll('li');
//menuItems.forEach(function (li) {
//     li.addEventListener('click', function () {
//         let className = li.getAttribute('class');
//         document.body.classList.toggle(className);
//     })
// });
