let singin = document.querySelector('.form__singin');
let singup = document.querySelector('.form__singup');
let contentModal = document.querySelector('.content__modal')
let inputsSingup = singup.querySelectorAll('input');
let inputsSingin = singin.querySelectorAll('input');
let user = [];

// МОДАЛЬНОЕ ОКНО
const SingInBtn = document.querySelector('.singin-btn');
const SingUpBtn = document.querySelector('.singup-btn');
const FormBox = document.querySelector('.form-box');


SingUpBtn.addEventListener('click', ()=>{
    FormBox.classList.add('active');
})
SingInBtn.addEventListener('click', ()=>{
    FormBox.classList.remove('active');
})

const linkAuthorization = document.querySelector('.link__authorization');

const modal = document.querySelector('.modal');
const backBtn = document.querySelector('.back');
const fullPage= document.querySelector('.fullpage')
linkAuthorization.addEventListener('click', ()=>{
    if (linkAuthorization.textContent === 'ВХОД') {
        modal.classList.remove('none')
    }else{
        modal.classList.add('none')
    }
    let users = JSON.parse(localStorage.getItem('user'));
    for(let elem of users){
        if (linkAuthorization.textContent === `ВЫХОД (${elem.login})`) {
            linkAuthorization.textContent = `ВХОД`;
        }
    }
})
backBtn.addEventListener('click', ()=>{
    modal.classList.add('none')
})


// РЕГИСТРАЦИЯ И ВХОД
singup.addEventListener('submit', function(e){
    e.preventDefault();



    let newUser = {
        login: [...inputsSingup][0].value,
        pas: [...inputsSingup][1].value
    }
    user.push(newUser)
    localStorage.setItem('user', JSON.stringify(user));

    FormBox.classList.remove('active');
})

singin.addEventListener('submit', function(e){
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem('user'));
    for(let elem of users){
        // console.log(elem.login);
        if([...inputsSingin][0].value != '' && [...inputsSingin][0].value != ''){
            if (elem.login == [...inputsSingin][0].value && elem.pas == [...inputsSingin][1].value) {
                linkAuthorization.textContent = `ВЫХОД (${elem.login})`;
                modal.classList.add('none')
                break;
            }
        }else{
            alert('Введите лонгин и пароль');
        }
    }


});

for(let elem of inputsSingup){
    elem.addEventListener('input', function () {
        if ([...inputsSingup][0].value != '' && [...inputsSingup][1].value != '') {
          document.querySelector('.form__btn__singup').disabled = false;  
        }else{
            document.querySelector('.form__btn__singup').disabled = true;  
        }
    })
}

for(let elem of inputsSingin){
    elem.addEventListener('input', function () {
        if ([...inputsSingin][0].value != '' && [...inputsSingin][1].value != '') {
          document.querySelector('.form__btn__singin').disabled = false;  
        }else{
            document.querySelector('.form__btn__singin').disabled = true;  
        }
    })
}



