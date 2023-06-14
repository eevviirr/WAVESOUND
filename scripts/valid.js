let nameUser = document.querySelector('.name--user');
let email = document.querySelector('.email--user');
let tel = document.querySelector('.tel--user');
let validName = document.querySelector('.valid--name');
let validEmail = document.querySelector('.valid--email');
let submit = document.querySelector('.btn__feedback');


let inputs = document.querySelector('.form__feedback').querySelectorAll('input')



// ВАЛИДАЦИЯ ЭЛЕКТРОННОЙ ПОЧТЫ
email.addEventListener('focus', function(){
    validEmail.style.height = '100px';
})
email.addEventListener('blur', function(){
    validEmail.style.height = '0';
})

email.addEventListener('input', emailValid)
function emailValid(){
    if (/^.+@.+\..+$/.test(email.value)) {
        validEmail.style.color = 'green';
        email.style.border = '1px solid green';
        return true;
    }else{
        validEmail.style.color = 'red';
        email.style.border = '1px solid red';
        return false;
    }
}



nameUser.addEventListener('focus', function(){
    validName.style.height = '100px';

})
nameUser.addEventListener('blur', function(){
    validName.style.height = '0';
})

nameUser.addEventListener('input', nameValid)
function nameValid(){
    if (/^[а-яА-ЯйЙёЁa-zA-Z]+$/.test(nameUser.value)) {
        [...validName.querySelectorAll('li')][1].style.color = 'green';
    }else{
        [...validName.querySelectorAll('li')][1].style.color = 'red';   
    }

    if(nameUser.value.length >= 4){
        [...validName.querySelectorAll('li')][0].style.color = 'green';
    }else{
        [...validName.querySelectorAll('li')][0].style.color = 'red';
    }

    if(/^[а-яА-ЯйЙёЁa-zA-Z]+$/.test(nameUser.value) && nameUser.value.length >= 4){
        nameUser.style.border = '1px solid green';
        return true;
    }else{
        nameUser.style.border = '1px solid red';
        return false;
    }
}



tel.addEventListener('focus', function(){
    if (!(/^\+7[0-9]+$/.test(tel.value)) && !(tel.value.length == 12)) {
        tel.value = '+7';
    }
})

function telValue(){
    if (/^\+7[0-9]{10}$/.test(tel.value) && tel.value.length == 12) {
        tel.style.border = '1px solid green';
        return true;
    }else{
        tel.style.border = '1px solid red';
        return false;
    }
}

tel.addEventListener('input', telValue)





for (let input of inputs){
    input.addEventListener('input', function(){
        if (telValue() && emailValid() && nameValid()) {
            submit.disabled = false;
        }else{
            submit.disabled = true;
        }
    })
}