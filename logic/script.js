let securityArray = [false, false, false, false]

// let security = []

document.getElementById('userPassword').addEventListener('input', function () {
    //PRENDO IL VALORE
    let password = this.value;
    //TESTO LA PAROLA INSERITA DALL'UTENTE
    passwordLength(password, 'length', securityArray, 0)
    UppercasePassword(password, 'upperCase', securityArray, 1)
    number(password, 'number', securityArray, 2)
    specialCase(password, 'specialCase', securityArray, 3)
    // FUNZIONE PER L'AGGIUNTA DI CLASSI
    addClass('authBar', 'easy', 'medium', 'hard', 'superStrong', securityArray)
    // console.log(securityArray);

});



