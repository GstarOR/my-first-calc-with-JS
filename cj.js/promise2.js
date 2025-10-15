//PROMISE EXAMPLES
//You should know how to create a promise using a promise constructor
//learn how promise work from the memory point of view.
// let prm = new Promise((reject,resolve)=>{
//     console.log("I will come to work this morning");
//     resolve("success");   
//     reject("I coudn't come to work this morning");

// });

// prm
// .then((result)=> {
//     console.log(result)
// })
// .catch((answer)=>{
//     console.log(answer)
// })

//So what i noticed is that once you create a promise if you want to call the execution function externally you can call it using another function called as .then() or .catch()
let officeOpen= new Promise((resolve,reject)=>{
    console.log("Office Secretary is on her way to work")
    setTimeout(
        function(secArrive){
            console.log("My Secretary has gotten to the office building")
            resolve();
        },
        4000)
})

officeOpen
.then(function(secArrive){
    console.log("The Office is opened, Clients can start coming")
})
.catch((function(secArrive){
    console.log("My workers are on celebration week in Paris, every job needs to be done online")
})());

//Find the eeror in the above code

let officeOpen1= new Promise((resolve,reject)=>{
    console.log("Office Secretary is on her way to work")
    setTimeout(
        function(secArrive){
            console.log("My Secretary has gotten to the office building")
            resolve();
        },
        4000)
})

officeOpen1
.then(function(secArrive){
    console.log("The Office is opened, Clients can start coming")
})
.catch((function(secArrive){
    console.log("My workers are on celebration week in Paris, every job needs to be done online")
})());
//try to read the above code with respect to the memory POI following TapAcademy's sequence
function nightRest(){
   return new Promise((reject,resolve)=>{
    console.log("I just closed from the office")
    setTimeout(function(){
        console.log("I've gotten home");
        resolve();
    },3000);
});
};
nightRest()
.then(function (){
    console.log("ThankGod, I'm on my bed this evening")
})
.catch(function (){
    console.log("I've not slept this morning")
})
