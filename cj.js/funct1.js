//functions are of four types in all lprogramming languages
//Using binary i can say that they are in order of 00, 01,10,11.
//always recall that a function must be called in order for EXECUTION CONTEXT to pick the information.
// The global execution context collects the information of all variables not inside a function when we begin the execution  why the EXECUTION CONTEXT picks the information of the function
//00 this is the type of function that recieves no input and gives no output.
let a = 30;
let b = 40;

function Cod()
{
    let c;
    c = a + b;
    console.log(c)
}
 Cod()
//01 this fuction has no input but give out output to the outside world
let d = 12;
let e = 30;

function dem()
{
    let f;
    f= e-d;
    return f;
}
let g = dem();
console.log(g);
//10 this function have an input but have no output
//in JS the input is called parameters whi9le the activity/ask is called the body.
let h =50;
let i = 49;
function add(h,i)
{
    let j = h+i;
    console.log(j)
}
add(h,i)
//11 this function contains both the input and the output 
//when any of the function has an output means it makes use of the value "return"
let k = 46;
let l =51;
function name(c,d) 
{
    var m;
    m=l%k;
    return m;    
}
let cet = name(k,l);
console.log(cet);

//the main use of function is for the DRY PRINCIPLE
