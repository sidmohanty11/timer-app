const display = document.querySelector('h3');
const timeLeft = document.querySelectorAll('input');
const button = document.querySelector('button');

function countDown() {
    let hr = timeLeft[0].value;
    let min = timeLeft[1].value;
    let sec = timeLeft[2].value;
    if (hr === '') {
        hr = 0;
    } if (min === '') {
        min = 0;
    } if (sec === '') {
        sec = 0;
    }
    let x = setInterval(function () {
        if (hr <= 24 && hr >= 0 && min <= 60 && min >= 0 && sec >= 0 && sec <= 60) {
            display.innerText = `TIME LEFT:- ${hr} hours : ${min} minutes : ${sec} seconds`;
        }
        if (sec > 0) {
            sec -= 1;
        } else if (min > 0) {
            min -= 1;
            sec = 60;
        } else if (hr > 0) {
            hr -= 1;
            min = 60;
        }
        if (hr === 0 && min === 0 && sec === 0) {
            setTimeout(()=>{
                display.innerText = "TIME OVER!!!!!";
                clearInterval(x);
            },1000);
        }
    }, 1000);
}

button.addEventListener('click', () => {
    countDown();
    timeLeft[0].value = '';
    timeLeft[1].value = '';
    timeLeft[2].value = '';
});
