// Change type of Clock
const btn = document.querySelector('.btn')
const clockSlider = document.querySelector('.clock_slider')

btn.addEventListener('click', () => {
    clockSlider.classList.contains("slide")
        ? btn.innerHTML = "DIGITAL"
        : btn.innerHTML = "ANALOG"
    clockSlider.classList.toggle("slide")
})


// Analog clock 
function analog_clock() {

    const hourArrow = document.querySelector('.analog_hours');
    const minuteArrow = document.querySelector('.analog_minutes');
    const secondeArrow = document.querySelector('.analog_secondes');

    const date = new Date()
    // 6 => degree of every seconde (360/60 => 6°)
    const secondes = date.getSeconds()
    const secondesDeg = secondes * 6
    secondeArrow.style.transform = `rotateZ(${secondesDeg}deg)`
    // 6 => same as seconde
    const minutes = date.getMinutes()
    const minutesDeg = minutes * 6
    minuteArrow.style.transform = `rotateZ(${minutesDeg}deg)`

    // 30 => degree of hour (360/ 12 => 30°)
    // hoursDeg + (minutesDeg / 12) => to move Hour hand with minutes
    // => 2h 54min => 60° + 4,5° => 64,5°
    // => 2h 57min => 60° + 4,75° => 64,75° etc
    const hours = date.getHours()
    const hoursDeg = hours * 30
    hourArrow.style.transform = `rotateZ(${hoursDeg + (minutesDeg / 12)}deg)`

}

setInterval(analog_clock, 1000)
analog_clock()

// Digital clock
function digital_clock() {
    const date = new Date()
    const hoursScreen = document.querySelector('.digital_hours')
    const minutesScreen = document.querySelector('.digital_minutes')
    const secondesScreen = document.querySelector('.digital_secondes')

    const secondes = date.getSeconds()

    // if it <= 9 add "0" => 09 etc.
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