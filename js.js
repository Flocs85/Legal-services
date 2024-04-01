'use strict';

const burgerListToggle = () => {
    const burgerList = document.getElementById("burger-menu");

    if (burgerList.style.left === '0px' || burgerList.style.left === '0') {
        burgerList.style.left = '-300px';
    } else {
        burgerList.style.left = 0;
    }
};

document.getElementById('burger-button').addEventListener("click", burgerListToggle);
document.getElementById('burger-close').addEventListener("click", burgerListToggle);



