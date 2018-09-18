/* OPEN MENU DESKTOP */

var openMenu = false;

function menuBurgerDesktop() {
    var trait1 = document.querySelector('#Trait1');
    var trait2 = document.querySelector('#Trait2');
    var trait3 = document.querySelector('#Trait3');
    var menuBurger = document.querySelector('.menuBurger');

    if (openMenu) {
        trait1.style.transform = "rotate(0deg) scaleX(1)";
        trait2.style.transform = "rotate(0deg) scaleX(1)";
        trait3.style.transform = "rotate(0deg) scaleX(1)";

        menuBurger.style.opacity = "0";
        menuBurger.style.marginLeft = "-100vw";

        changeCouleurOnScroll();
        
        openMenu = false;
    } else {
        trait1.style.transform = "rotate(45deg) scaleX(1.18)";
        trait2.style.transform = "rotate(0deg) scaleX(0)";
        trait3.style.transform = "rotate(-45deg) scaleX(1.18)";

        trait1.style.backgroundColor = "white";
        trait2.style.backgroundColor = "white";
        trait3.style.backgroundColor = "white";
        
        menuBurger.style.opacity = "1";
        menuBurger.style.marginLeft = "0vw";
        

        openMenu = true;
    }

}

// FONCTIONS AU SCROLL

function changeCouleurBurger(couleur) {
    document.querySelector('#Trait1').style.backgroundColor = couleur;
    document.querySelector('#Trait2').style.backgroundColor = couleur;
    document.querySelector('#Trait3').style.backgroundColor = couleur;
}

function getPositionTop(elId) {
    return document.body.getBoundingClientRect().top - document.querySelector(elId).getBoundingClientRect().top;
}

var posSec8;
var posSec7;
var posSec6;
var posSec5;
var posSec4;
var posSec3;
var posSec2;

function getPositions() {
    posSec2 = getPositionTop("#space") + 10;
    posSec3 = getPositionTop("#sky") + 10;
    posSec4 = getPositionTop("#city") + 10;
    posSec5 = getPositionTop("#forest") + 10;
    posSec6 = getPositionTop("#beach") + 10;
    posSec7 = getPositionTop("#ocean") + 10;
    posSec8 = getPositionTop("#foot") + 10;
    changeCouleurOnScroll();
}

function changeCouleurOnScroll() {
    var position = document.body.getBoundingClientRect();
    if (position.top >= posSec2) {
        changeCouleurBurger('white');
    } else if (position.top >= posSec3) {
        changeCouleurBurger('#1b123f');
    } else if (position.top >= posSec4) {
        changeCouleurBurger('#4a9edd');
    } else if (position.top >= posSec5) {
        changeCouleurBurger('#515151');
    } else if (position.top >= posSec6) {
        changeCouleurBurger('#1bd968');
    } else if (position.top >= posSec7) {
        changeCouleurBurger('#ffdb00');
    } else if (position.top >= posSec8) {
        changeCouleurBurger('#4a5bdd');
    } else {
        changeCouleurBurger('white');
    }
}
