// Form validation helper functions

// Validate phone number is numeric between 6 and 11
export function isPhone(inputtxt) {
    var phone = inputtxt;
    var phoneNum = phone.replace(/[^\d]/g, '');
    if (phoneNum.length > 6 && phoneNum.length < 14) {
        return true;
    }
}

// Validate Number
export function isNumeric(inputtxt) {
    var numbers = /^[0-9]+$/;

    if (inputtxt.match(numbers)) {
        return true;
    }
    else {
        return false;
    }
}

// Validate Email Address
export function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

// Validate User Input length
export function isRange(inputtxt, minlength, maxlength) {
    var userInput = inputtxt;

    if (userInput.length >= minlength && userInput.length <= maxlength) {
        return true;
    }
    else {
        return false;
    }
}

// Check if Input is empty
export function isEmpty(inputtx) {
    if(inputtx){
        if (inputtx.length == 0) {
            return true;
        }
    }
    return false;
}

// Check if input is all letters
export function isAllLetters(inputtxt) {
    var letters = /^[A-Za-z]+$/;

    if (inputtxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}

// Validate American Express card
export function isAmericanExpress(inputtxt) {
    var cardno = /^(?:3[47][0-9]{13})$/;

    if (inputtxt.match(cardno)) {
        return true;
    }
    else {
        return false;
    }
}

// Validate Visa card
export function isVisa(inputtxt) {
    var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

    if (inputtxt.match(cardno)) {
        return true;
    }
    else {
        return false;
    }
}

// Validate MasterCard
export function isMasterCard(inputtxt) {
    var cardno = /^(?:5[1-5][0-9]{14})$/;

    if (inputtxt.match(cardno)) {
        return true;
    }
    else {
        return false;
    }
}