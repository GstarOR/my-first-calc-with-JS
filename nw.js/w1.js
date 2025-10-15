//document.getElementById("deen").innerHTML = "we can start now";
//document.getElementsByClassName("project")[0].textContent = ("after rain comes sun")
//document.querySelectorAll(".project")[1].innerHTML = ("let's be guilded");
const a = document.getElementById("secondNumber")
const b = document.getElementById("firstNumber")
const btn = document.getElementsByClassName("btn")
let c = document.getElementById("result")
function sum(a,b){
     c.innerHTML = parseInt(a.value) + parseInt(b.value) ;
    return c;
}
