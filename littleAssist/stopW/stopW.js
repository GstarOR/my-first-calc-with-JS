let msec = document.getElementById("msec");
let sec = document.getElementById("sec");
let min = document.getElementById("min");


let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('clear');


let msecCount = 0;
let secCount = 0;
let minCount = 0;
let timerID = null;



function startTimer() {
    msecCount++;
    if (msecCount == 100) {
        msecCount = 0;
        secCount++;
        if(secCount == 60) {
            secCount = 0;
            minCount++;
        }
    }
 
    if (msecCount < 10) {
        msec.textContent = '0' + msecCount;
    } else {
        msec.textContent = msecCount;
    }
    if (secCount <10) {
        sec.textContent = '0' + secCount;
    }   else {
        sec.textContent = secCount;
    }
    if (minCount < 10){
        min.textContent = '0' + minCount;
    } else{min.textContent = minCount;
    }

}

 startBtn.addEventListener('click', function() {
    if (timerID !== null) {
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);
});
stopBtn.addEventListener('click', function() {
    clearInterval(timerID);
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerID);
    msecCount = 0;
    secCount = 0;
    minCount = 0;
    
    // Reset the display
    msec.textContent = '00';
    sec.textContent = '00';
    min.textContent = '00';
});