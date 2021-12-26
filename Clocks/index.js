
const analogBtn = document.querySelector('.analog_btn')
const digitalBtn = document.querySelector('.digit_btn')
const clockSlider = document.querySelector('.clock_slider')

analogBtn.addEventListener('click', () => {
    clockSlider.style.left = "0"
})
digitalBtn.addEventListener('click', () => {
    clockSlider.style.left = "-350px"
})


function analog_clock() {

    const hourArrow = document.querySelector('.analog_hours');
    const minuteArrow = document.querySelector('.analog_minutes');
    const secondeArrow = document.querySelector('.analog_secondes');

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

setInterval(analog_clock, 1000)

analog_clock()

function digital_clock() {
    const date = new Date()
    const hoursScreen = document.querySelector('.digital_hours')
    const minutesScreen = document.querySelector('.digital_minutes')
    const secondesScreen = document.querySelector('.digital_secondes')

    const secondes = date.getSeconds()

    secondes <= 9
        ? secondesScreen.innerHTML = `0${secondes}`
        : secondesScreen.innerHTML = secondes


    const minutes = date.getMinutes()
    minutes <= 9
        ? minutesScreen.innerHTML = `0${minutes}`
        : minutesScreen.innerHTML = minutes


    const hours = date.getHours()
    hours <= 9
        ? hoursScreen.innerHTML = `0${hours}`
        : hoursScreen.innerHTML = hours

}
setInterval(digital_clock, 1000)
digital_clock()