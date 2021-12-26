


function clock() {

    const hourArrow = document.querySelector('.hours');
    const minuteArrow = document.querySelector('.minutes');
    const secondeArrow = document.querySelector('.secondes');

    const date = new Date()

    const secondes = date.getSeconds()
    const secondesDeg = secondes * 6
    secondeArrow.style.transform = `rotateZ(${secondesDeg}deg)`

    const minutes = date.getMinutes()
    const minutesDeg = minutes * 6
    minuteArrow.style.transform = `rotateZ(${minutesDeg}deg)`

    const hours = date.getHours()
    const hoursDeg = hours * 30
    hourArrow.style.transform = `rotateZ(${hoursDeg + (minutesDeg / 12)}deg)`

}

setInterval(clock, 1000)

clock()

