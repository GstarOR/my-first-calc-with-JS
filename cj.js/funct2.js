// here we talk about diiferent ways to writ functions in javascript
// they are the ; fucntion declaration, function expression, arrow functions, immediately invoked function expression and the generator function
//So we start with the mostly used and common function in javascript
// FUNCTION DECLARATION; here the keyword comes first b4 the name  th body and letter called or invoked 
// function name()
// {
//      body
// }
// name()

function baby(a,b)
{
    let c;
    return c=a+b;
}
let y=10;
let x=20;
let res= baby(x,y);
 console.log(res)
//FUNCTION EXPRESSION 
// let c = function()
// {

// }
// name()
let des = function(a,b)
{
    return a +b;
}
let l = des(50,60)
console.log(l)
//ARROW FUNCTION
//The arrow function which you see is a shortened form of the function expression
let den = function(a,b)
{
    return a +b;
}
let p = den(50,60)
console.log(p)
//now yu dont need the  name and function keyword for an arrow function
// (a,b) =>
// {
//     return a+b;
// }
//but to call a function u need the name if the arrow is not on same line
// therefore
let e = (a,b) =>
{
    return a-b;
}
console.log(e(20,10))
//Now let write te arrow function on one line
let ed = (a,b) => { return a-b;}
console.log(ed(30,14))
// the flower brakets are of no use and if there is no flower brackets no need for return
let etc = (a,b) => a-b;
console.log(etc(50,10))

//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IFFE)
//here the function is called immediately the code is completed
//it is actually a function expression where the name is removed leaving the function keyword
//also since we don't give a name to call it also we use the parentheses in a way it can be understood
//if it was to be in maths it's a complex euation, so we place the function expression
//inside brackets to let the code kow that the information of the function is together 
// then we call immediately with the parentheses at the end b4 we complete the equation.

console.log((function(a,b) 
{
    return a+b;
})(10,20) );


//USING FUNCTIONS AS CALLBACK

function mul(a,b)
{
    return a*b;
}
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return b-a;
}
function div(a,b)
{
    return b % a;
}
function calc(a, b, callBack)
{
    return callBack(a,b);
}
console.log(calc(20,40,div));
// in the above the callback function is the div, cus it was later called while the higher order fuction is the calc function
