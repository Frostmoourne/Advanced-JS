function valideForm() {
    let regexp_name = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/g;
    let regexp_email = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    let regexp_phone = /\+\d{1,4}\(?\d{3}\)?\d{3}-?\d{4}\b/;
    let regexp_message = /[a-zа-яё0-9]/;

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('text').value;

    // Проверяем имя
    if(regexp_name.test(name) === true) {
        document.getElementById('name-form').className = 'form-group ok';
    } else {
        document.getElementById('name-form').className = 'form-group fail';
    }
    // Проверяем телефон
    if(regexp_phone.test(phone) === true) {
        document.getElementById('phone-form').className = 'form-group ok';
    } else {
        document.getElementById('phone-form').className = 'form-group fail';
    }
    // Проверяем email
    if(regexp_email.test(email) === true) {
        document.getElementById('email-form').className = 'form-group ok';
    } else {
        document.getElementById('email-form').className = 'form-group fail';
    }
}