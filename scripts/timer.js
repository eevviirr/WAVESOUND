let timer_text = document.getElementById("timer")

function zero(num) {
    if (num <= 9){
        return `0${num}`
    } else {
        return num
    }
}

function timer() {
    let now = new Date()
    let date = new Date("December 31, 2023 00:00:00")

    let diff = date - now

    let days = Math.floor(diff / 86400000)
    let hours = Math.floor(diff % 86400000 / 3600000)
    let minutes = Math.floor(diff % 86400000 % 3600000 / 60000)
    let seconds = Math.floor(diff % 86400000 % 3600000 % 60000 / 1000)

    timer_text.innerHTML = `До конца:<br>${zero(days)} дня : ${zero(hours)} часов : ${zero(minutes)} минут : ${zero(seconds)} секунд`
}
timer();
setInterval(timer, 1000)