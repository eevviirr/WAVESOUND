let steps = document.querySelectorAll('.step')
let titleMixing = document.querySelector('.title__mixing');
let textMixing = document.querySelector('.text__mixing');
let icon = document.getElementById('icon');
let imgBorder = document.querySelector('.img--border');
[...steps][0].addEventListener('click', function(){
	titleMixing.textContent = `БАЛАНС ГРОМКОСТИ И ПАНОРАМИРОВАНИЕ`
	textMixing.textContent = `Прежде чем начать, установите все параметры громкости и панорамирования на ноль. Этот процесс называется нормализацией. Обратите внимание, что это нужно делать со всеми инструментами. Как соло, так и в качестве субстрата.`;
	[...steps][0].style.color = '#BB1414';
	[...steps][1].style.color = '#e5e5e5';
	[...steps][2].style.color = '#e5e5e5';
	icon.src = "img/mixer.gif"
    icon.style.transform = 'rotate(2deg)';


    imgBorder.style.transform = 'scale(1.02) rotate(-3deg)';
});


[...steps][1].addEventListener('click', function(){
	titleMixing.textContent = `ЭКВАЛИЗАЦИЯ И ДИНАМИЧЕСКАЯ ОБРАБОТКА`
	textMixing.textContent = `Основная задача эквалайзера — избежать частотных конфликтов. Например, чтобы бас и бочка звучали вместе, а не перекрывали друг друга. Обратите внимание, что эквализация нужна не для кардинального изменения частотного баланса, а лишь для того, чтобы подчеркнуть нюансы в звучании композиции.`;
	[...steps][1].style.color = '#BB1414';
	[...steps][0].style.color = '#e5e5e5';
	[...steps][2].style.color = '#e5e5e5';
	icon.src = 'img/man_on_studio.jpg';
    icon.style.transform = ' rotate(-3deg)';


    imgBorder.style.transform = 'scale(1.02) rotate(3deg)'

});

[...steps][2].addEventListener('click', function(){
	titleMixing.textContent = `ХУДОЖЕСТВЕННАЯ ОБРАБОТКА`
	textMixing.textContent = `Это самая лучшая, самая интересная и творческая часть. На этом этапе ведется работа с художественными нюансами, добавляются различные «фишки» для украшения дорожки. Например, задержка «пинг-понг» для гитары или эффекты эха и дисторшна для вокала.`;

	[...steps][2].style.color = '#BB1414';
	[...steps][0].style.color = '#e5e5e5';
	[...steps][1].style.color = '#e5e5e5';
	icon.src = 'img/man2.gif'
    icon.style.transform = 'rotate(4deg)';

    imgBorder.style.transform = 'scale(1.02) rotate(-2deg)'
});




// СЕКЦИЯ ПРИМЕРЫ
// СЛАЙДЕР

let offset = 50;
let offset2 = 25;
let offset3 = 0;
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

let sliderItem = document.querySelectorAll('.slider__item');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playPause = document.querySelector('.play-pause');
let audioplayer = document.querySelector('.audioplayer');



// ВЫКЛЮЧЕНИЕ ЗВУКА В ПЛЕЕРЕ
let muted = document.querySelector('.muted')
muted.onclick = mut;

function mut(){
    audioplayer.muted = true;
    muted.onclick = unmut;
    muted.style.width = '30px';
}
function unmut(){
    audioplayer.muted = false;
    muted.onclick = mut;
    muted.style.width = '15px';
}


playPause.addEventListener('click', function(){
    pause.classList.toggle('none');
    play.classList.toggle('none');
})

// ПЛЕЙ ПАУЗА ПЛЕЕРА

playPause.onclick = playAudio;

function playAudio(){
    audioplayer.play();
    playPause.onclick = pauseAudio;
}
function pauseAudio(){
    audioplayer.pause();
    playPause.onclick = playAudio;
}

let titlePlayer = document.querySelector('.title__player');
let nameMusic = document.querySelector('.name__music')

// ВИДЕО НА ПЛЕЕРЕ
let video = document.querySelector('.video')
let containerPalyer = document.querySelector('.container__palyer');
let player = document.querySelector('.player');
let slider = document.querySelectorAll('.slider__item');

if(offset == 50){
    arrowLeft.disabled = true;
}
if(offset == 150){
    arrowRight.disabled = true;
}




// ПРАВАЯ КНОПКА
arrowRight.addEventListener('click', function(){

    offset += 50;

    if(offset > 150){
        offset = 50;
    }
    [...sliderItem][0].style.left = `${offset}%`;
    // console.log(offset);





    if(offset == 50){
        arrowLeft.disabled = true;
    }
    if (offset > 50 || offset < 50){
        arrowLeft.disabled = false;
    }



    if(offset == 150){
        arrowRight.disabled = true;
    }
    if (offset > 150 || offset < 150){
        arrowLeft.disabled = false;
    }
    // console.log(offset);





    offset2 += 25;
    if(offset2 > 50){
        offset2 += 50;

    }
    if(offset2 > 125){
        offset2 = 25;
    }
    if(offset2 > 25){
        [...sliderItem][1].style.transform = `scale(1) perspective(600px) rotateY(0deg)`;
        titlePlayer.textContent = 'ЛСП';
        nameMusic.textContent = 'Девочка-пришелец';
        video.src = 'videos/lsp.mp4';
        audioplayer.src = 'audio/lsp.mp3'
        // audioplayer.play();
    }
    if(offset2 == 25){
        [...sliderItem][1].style.transform = `scale(0.9)`;
    }

    [...sliderItem][1].style.left = `${offset2}%`;
    // console.log(offset2);



    
    offset3 += 25;
    if(offset3 > 50){
        offset3 += 50;
    }
    if(offset3 > 100){
        offset3 = 0;
    }
    if (offset3 > 0) {
        [...sliderItem][2].style.transform = `scale(0.9) perspective(600px) rotateY(10deg)`;
    }else if (offset3 == 0){
        [...sliderItem][2].style.transform = `scale(0.8) perspective(600px) rotateY(20deg)`;
    }
    if(offset3 > 25){
        titlePlayer.textContent = 'ДЖИЗУС';
        nameMusic.textContent = 'Рассвет';
        video.src = 'videos/dzisus.mp4';
        audioplayer.src = 'audio/dzizus.mp3';
        [...sliderItem][2].style.transform = `scale(1)`;
        // audioplayer.play();
    }
    [...sliderItem][2].style.left = `${offset3}%`;
    // console.log(offset3);
    
    if (audioplayer.play()) {
        pause.classList.remove('none');
        play.classList.add('none');
        playPause.onclick = pauseAudio;
    }else{
        pause.classList.add('none');
        play.classList.remove('none');
        playPause.onclick = playAudio;
    }

})




// ЛЕВАЯ КНОПКА
arrowLeft.addEventListener('click', function(){


    offset -= 50;
    if(offset < 50){
        offset = 50;
    }
    if (offset == 50) {
        titlePlayer.textContent = 'MIYAGI & ANDY PANDA';
        nameMusic.textContent = 'MINOR';       
        video.src = 'videos/minor.mp4';
        audioplayer.src = 'audio/minor.mp3'
        // audioplayer.play();
    }
    [...sliderItem][0].style.left = `${offset}%`;
    console.log(offset);

    if(offset >= 50 && offset <= 100){
        arrowRight.disabled = false;
    }else{
        arrowRight.disabled = true;
    }
    if(offset <= 50){
        arrowLeft.disabled = true;
    }



    if (audioplayer.play()) {
        console.log('111');
    }


    offset2 -= 25;
    if(offset2 >= 100){
        offset2 = 50;

    }
    if(offset2 < 50){ 
        [...sliderItem][1].style.transform = `scale(0.9) perspective(600px) rotateY(10deg)`;
    }
    if (offset2 == 50) {
        titlePlayer.textContent = 'ЛСП';
        nameMusic.textContent = 'Девочка-пришелец';
        video.src = 'videos/lsp.mp4';
        audioplayer.src = 'audio/lsp.mp3'
        // audioplayer.play();
    }
    if(offset2 <= 25){
        offset2 = 25;
    }
    [...sliderItem][1].style.left = `${offset2}%`;
    // console.log(offset2);



    offset3 -= 25;
    if(offset3 < 50){
        [...sliderItem][2].style.transform = `scale(0.9) perspective(600px) rotateY(10deg)`;
    }
    if(offset3 < 25){
        offset3 = 0;
        [...sliderItem][2].style.transform = `scale(0.8) perspective(600px) rotateY(20deg)`;
    }

    [...sliderItem][2].style.left = `${offset3}%`;
    // console.log(offset3);

    if (audioplayer.play()) {
        pause.classList.remove('none');
        play.classList.add('none');
        playPause.onclick = pauseAudio;
    }else{
        pause.classList.add('none');
        play.classList.remove('none');
        playPause.onclick = playAudio;
    }
})


// ПРОГРЕСС БАР НА ПЛЕЕРЕ
let dotMusic = document.querySelector('.dot__music');
audioplayer.addEventListener('timeupdate', function(e){
	const {duration, currentTime} = e.srcElement;
	progressPercents = (currentTime / duration) * 100;
	dotMusic.style.width = `${progressPercents}%`
})


lineMusic = document.querySelector('.line__music');

lineMusic.addEventListener('click', function(e){
	const width = this.clientWidth;
	let clickX = e.offsetX;
	let diration = audioplayer.duration;

	audioplayer.currentTime = (clickX / width) * diration;
})
// КНОПКА ПРОСМОТРА ВИДЕО

const preview = document.querySelector('.preview');
const header = document.querySelector('.header__basis');
let titleEx = document.querySelector('.title__ex')
let arrowSlid = document.querySelectorAll('.arrow-slid');
    preview.onclick = prew;
    function prew(){
        [...slider][0].style.opacity = '0';
        [...slider][1].style.opacity = '0';
        [...slider][2].style.opacity = '0';
        player.style.opacity = '0';
        [...arrowSlid][0].style.opacity = '0';
        [...arrowSlid][1].style.opacity = '0';
        titleEx.style.opacity = '0';

        preview.onclick = unprew;
    }

    function unprew(){
        [...slider][0].style.opacity = '1';
        [...slider][1].style.opacity = '1';
        [...slider][2].style.opacity = '1';
        player.style.opacity = '1';
        [...arrowSlid][0].style.opacity = '1';
        [...arrowSlid][1].style.opacity = '1';
        titleEx.style.opacity = '1';
        preview.onclick = prew;
    }


// АНИМАЦИЯ БУРГЕРА
let linkMenu = document.querySelectorAll('.link__menu');
let mixer = document.querySelector('.mixer');
// console.log([...linkMenu][0]);



const hero = document.querySelector('.hero');

const burger = document.querySelectorAll('.burger');
let menu = document.querySelector('.menu__basic');
for(let burgers of burger){
    // console.log(burgers);
    burgers.addEventListener('click', ()=>{
        menu.classList.toggle('menu-active');
        burgers.classList.toggle('burger-active');
    })
    
    for(let links of linkMenu){
        links.addEventListener('click', function(){
            hero.style.zIndex = '1';
            let i = 0;
            let menuInterval = setInterval(() => {
            menu.classList.remove('menu-active');
            burgers.classList.remove('burger-active');
                i++;
            if (i > 1) {
                clearInterval(menuInterval);
                hero.style.zIndex = '10005';
            }
            }, 500);
        })
    }

}





// СЕКЦИЯ ОТЗЫВЫ


// ПОКАЗАТЬ ВЕСЬ ТЕКСТ ОТЗЫВА

let prevText = document.querySelectorAll('.prev--text');
let reviewText = document.querySelectorAll('.review__text');
const reviews = document.getElementById('reviews')
for (let i = 0; i < prevText.length; i++) {
    const element = prevText[i];
    element.onclick = prev;

    function prev(){
        reviews.style.height = 'auto';
        [...reviewText][i].classList.add('review__text--active')
        element.onclick = closePrev;
        [...prevText][i].textContent = 'Скрыть';
    }
    function closePrev(){
        reviews.style.height = 'auto';
        [...reviewText][i].classList.remove('review__text--active')
        element.onclick = prev;
        [...prevText][i].textContent = 'Показать полностью';
    }
}

// ПОКАЗАТЬ ВСЕ ОТЗЫВЫ


const reviewContainer = document.querySelector('.container__reviews');
const prevAll = document.querySelector('.button__review__all');
let review = document.querySelectorAll('.review');

prevAll.addEventListener('click', function(){
    for(let reviewItem of review){
        reviewItem.classList.remove('none');
    }
    reviews.style.height = 'auto';
    prevAll.classList.add('none')
})

let likes = document.querySelectorAll('.likes')
let numLikes = document.querySelectorAll('.numLikes');
let heart = document.querySelectorAll('path')

for (let i = 0; i < 10; i++) {
    [...numLikes][i].textContent = Math.floor(Math.random() * 10);
    [...likes][i].onclick = plus;

    function plus() {
        [...numLikes][i].textContent = Number([...numLikes][i].textContent) + 1;
        [...heart][i].style.fill = '#BB1414';
        [...likes][i].onclick = minus;
    }
    function minus() {
        [...numLikes][i].textContent = Number([...numLikes][i].textContent) - 1;
        [...heart][i].style.fill = '#111';
        [...likes][i].onclick = plus;
    }
}



// ИЗМЕНЕНИЕ ИЗОБРАЖЕНИЯ

const adventages = document.getElementById('adventages');
const cards = document.querySelectorAll('.card');

[...cards][0].addEventListener('mouseover', ()=>{
    adventages.style.background = 'no-repeat url(img/studio.jpg)' ;
    adventages.style.backgroundSize = 'cover' ;
});

[...cards][1].addEventListener('mouseover', ()=>{
    adventages.style.background = 'no-repeat url(img/studio2.jpg)' ;
    adventages.style.backgroundSize = 'cover' ;
});

[...cards][2].addEventListener('mouseover', ()=>{
    adventages.style.background = 'no-repeat url(img/studio3.jpg)' ;
    adventages.style.backgroundSize = 'cover' ;
});















