// Aggiungi un EventListener all'input della password
document.getElementById('userPassword').addEventListener('input', function () {
    let password = this.value;
    passwordLength(password, 'length')
    UppercasePassword(password, 'upperCase')
    number(password, 'number')
    specialCase(password, 'specialCase')
});