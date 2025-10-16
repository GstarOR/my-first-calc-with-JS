let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function clockRotation(){
//    instead of directly using the new Date function for each variable
//    we can use it once and store it in a variable
    let time = new Date();
//  here we are using getHours function to get the current hour and likewise for minute and second
    let hh = time.getHours();
    let mm = time.getMinutes();
    let second = time.getSeconds();
// since weve 12 hours in a clock we will multiply the hour by 30
    let hRotation = 30*hh + mm/2; // we are adding mm/2 to make the hour hand move slightly when minute hand moves
    let mRotation = 6*mm;   // 360/60 = 6   // we are multiplying minute by 6 to get the degree of rotation
    let sRotation = 6*second; // 360/60 = 6  // we are multiplying second by 6 to get the degree of rotation 
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;    
}
setInterval(clockRotation, 1000);
clockRotation(); // to avoid delay of 1 second in loading the clock for the first time
// we are calling the function once here so that the clock loads with correct time initially
// after that the setInterval function will call the function every second to update the time
// we can also use setTimeout function instead of setInterval function
// but then we have to call the function again and again inside the function itself
// which is not a good practice