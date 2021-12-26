
const hourArrow = document.querySelector('.hours');
const minuteArrow = document.querySelector('.minutes');
const secondeArrow = document.querySelector('.secondes');




function clock() {




    setInterval(() => {
        const date = new Date()

        const hours = date.getHours() * 30
        const minutes = date.getMinutes() * 6
        const secondes = date.getSeconds() * 6


        hourArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minuteArrow.style.transform = `rotateZ(${minutes}deg)`
        secondeArrow.style.transform = `rotateZ(${secondes}deg)`

    }, 1000)
}
clock()

