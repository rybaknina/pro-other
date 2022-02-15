"use strict";

let formEl = document.querySelector(".action-form");
let inputName = document.querySelector(".message__name");
let inputPhone = document.querySelector(".message__phone");
let inputEmail = document.querySelector(".message__email");
let inputComment = document.querySelector(".message__comment");

const nameReg = /^([А-Я][а-яё]{1,23}|[A-Z][a-z]{1,23})$/;
const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i;
const phoneReg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

// /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/im; // for Belarus

function checkInput(event) {
    if (!nameReg.test(inputName.value)) {
        alert("Wrong name");
        inputName.style.borderColor = "red";
    } else {
        inputName.style.borderColor = "rgb(118, 118, 118)";
    }
    if (!emailReg.test(inputEmail.value)) {
        alert("Wrong email");
        inputEmail.style.borderColor = "red";
    } else {
        inputEmail.style.borderColor = "rgb(118, 118, 118)";
    }
    if (!phoneReg.test(inputPhone.value)) {
        alert("Wrong phone number");
        inputPhone.style.borderColor = "red";
    } else {
        inputPhone.style.borderColor = "rgb(118, 118, 118)";
    }
    if (inputComment.value.trim() === "") {
        alert("Wrong comment");
        inputComment.style.borderColor = "red";
    } else {
        inputComment.style.borderColor = "rgb(118, 118, 118)";
    }
    event.preventDefault();
}

formEl.addEventListener("submit", checkInput);


