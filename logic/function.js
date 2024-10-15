// FUNZIONE PER LA LUNGHEZZA
function passwordLength(password, className, array, index) {
    if (password.length >= 9) {
        checked(className);
        array[index] = true;

        // if (!security.includes('token1')) {
        //     security.push('token1')
        // }
    } else {
        noChecked(className);
        array[index] = false;

        // if (security.includes('token1')) {
        //     let position = security.indexOf('token1');
        //     security.splice(position, 1)
        // }
    }

}

// FUNZIONE PER LA MAIUSCOLA
function UppercasePassword(password, className, array, index) {
    if (/[A-Z]/.test(password)) {
        checked(className)
        array[index] = true;

        // if (!security.includes('token2')) {
        //     security.push('token2')
        // }
    } else {
        noChecked(className)
        array[index] = false;

        // if (security.includes('token2')) {
        //     let position = security.indexOf('token2');
        //     security.splice(position, 1)
        // }
    }
}

// FUNZIONE PER IL NUMERO
function number(password, className, array, index) {
    if (/[0-9]/.test(password)) {
        checked(className)
        array[index] = true;

        // if (!security.includes('token3')) {
        //     security.push('token3')
        // }
    } else {
        noChecked(className)
        array[index] = false;

        // if (security.includes('token3')) {
        //     let position = security.indexOf('token3');
        //     security.splice(position, 1)
        // }
    }
}

//FUNZIONE PER IL CARATTERE SPECIALE
function specialCase(password, className, array, index) {
    if (/[!@#$%^&£*(),.?":{}|<>]/.test(password)) {
        checked(className)
        array[index] = true;

        // if (!security.includes('token4')) {
        //     security.push('token4')
        // }
    } else {
        noChecked(className)
        array[index] = false;

        // if (security.includes('token4')) {
        //     let position = security.indexOf('token4');
        //     security.splice(position, 1)
        // }
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

// function addClass(id, class1, class2, class3, class4, array) {
//     let element = document.getElementById(id)
//     element.classList.remove(class1, class2, class3, class4);

//     if (array.length > 3) {
//         element.classList.add(class4);
//     } else if (array.length > 2) {
//         element.classList.add(class3);
//     } else if (array.length > 1) {
//         element.classList.add(class2);
//     } else if (array.length > 0) {
//         element.classList.add(class1);
//     }
// }

function addClass(id, class1, class2, class3, class4, array) {
    if (array.includes(true)) {
        let elementDOM = document.getElementById(id)
        elementDOM.classList.remove(class1, class2, class3, class4);

        let counter = array.filter(item => item === true).length;

        if (counter > 3) {
            elementDOM.classList.add(class4);
        } else if (counter > 2) {
            elementDOM.classList.add(class3);
        } else if (counter > 1) {
            elementDOM.classList.add(class2);
        } else if (counter > 0) {
            elementDOM.classList.add(class1);
        }
        // console.log(counter, array);

    } else {
        let elementDOM = document.getElementById(id);
        elementDOM.classList.remove(class1, class2, class3, class4);
    }
}
