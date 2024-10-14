let password = document.getElementById('userPassword').value;

// FUNZIONE PER LA LUNGHEZZA
function passwordLength(password, className) {
    if (password.length >= 9) {
        checked(className)
    } else {
        noChecked(className)
    }
}


// FUNZIONE PER LA MAIUSCOLA
function UppercasePassword(password, className) {
    if (/[A-Z]/.test(password)) {
        checked(className)
    } else {
        noChecked(className)
    }
}

// FUNZIONE PER IL NUMERO
function number(password, className) {
    if (/[0-9]/.test(password)) {
        checked(className)
    } else {
        noChecked(className)
    }
}

//FUNZIONE PER IL CARATTERE SPECIALE
function specialCase(password, className) {
    if (/[!@#$%^&£*(),.?":{}|<>]/.test(password)) {
        checked(className)
    } else {
        noChecked(className)
    }
}
function checked(className) {
    document.getElementById(className).classList.add('checked');
    document.querySelector(`#${className} .fa-check`).classList.remove('none');
    document.querySelector(`#${className} .fa-xmark`).classList.add('none');
}
function noChecked(className) {
    document.getElementById(className).classList.remove('checked');
    document.querySelector(`#${className} .fa-xmark`).classList.remove('none');
    document.querySelector(`#${className} .fa-check`).classList.add('none');
}

// Aggiungi un EventListener all'input della password
document.getElementById('userPassword').addEventListener('input', function () {
    password = this.value;
    passwordLength(password, 'length')
    UppercasePassword(password, 'upperCase')
    number(password, 'number')
    specialCase(password, 'specialCase')
});