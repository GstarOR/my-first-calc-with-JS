let display = document.getElementById('display');
let startCount = document.getElementById('startCount');
let stopCount = document.getElementById('stopCount');
let clearCount = document.getElementById('resetCount');

let msec = 0;
let sec = 0;
let min = 0;

let timer = null;
startCount.addEventListener('click', function(){
    if (timer !== null){
        clearInterval(timer);
    }
        timer = setInterval(stopwatch, 10);
});

stopCount.addEventListener('click', function(){
    clearInterval(timer);
});
clearCount.addEventListener('click', function(){
    clearInterval(timer);
    timer = null;
    msec = 0;
    sec = 0;
    min = 0;
    display.innerHTML = '00 : 00 : 00';
});

function stopwatch(){
    msec++;

    if (msec == 100){
        msec=0;
        sec++;
        if (sec == 60){
            sec = 0;
            min++;
        }
    }
    let msecString = msec < 10 ? '0' + msec : msec;
    let secString = sec < 10 ? '0' + sec : sec;
    let minString = min < 10 ? '0' + min : min;
    if (msec < 10) {
        '0' + msec;
    } else {
        msec;
    }
    display.innerHTML = minString + ' : ' + secString + ' : ' + msecString;
};
