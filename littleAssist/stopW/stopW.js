let min = document.getElementById('min');
let sec = document.getElementById('sec');
let msec = document.getElementById('msec');
const startCount = document.getElementById('start');
const stopCount = document.getElementById('stop');
const clearCount = document.getElementById('clear');

let timer;
let seconds = 0;
let minutes = 0;
let mseconds = 0;

function stopwatch(){
 mseconds++;

 if (mseconds === 100){
    mseconds = 0;
    seconds++;

    if (seconds === 60){
        seconds = 0;
        minutes++; 
    }
}
//add leading zeros to the display
    let displaySeconds = String(seconds).padStart(2, '0');
    let displayMinutes = String(minutes).padStart(2, '0');
    let displayMSeconds  = String(mseconds).padStart(2, '0');   
    
    msec.innerText = displayMSeconds;
    min.innerText = displayMinutes;
    sec.innerText = displaySeconds;
}

startCount.addEventListener('click', function(){
    if(timer) {
        timer=null;
    timer = setInterval(stopwatch, 10);
}});
stopCount.addEventListener('click', function(){
    clearInterval(timer);
    timer = null;
});

clearCount.addEventListener('click', function(){
    clearInterval(timer);
    timer = null;
    mseconds = 0;
    seconds = 0;
    minutes = 0;
    msec.innerText = '00';
    min.innerText = '00';
    sec.innerText = '00';
});


