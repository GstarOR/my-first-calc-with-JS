//PROMISE CHAINNING
let monothongs= "pure vowel sounds (e.g., /i/ in 'see', /a/ in 'father')."
let diphthongs = "Gliding vowel sounds (e.g., /ai/ in 'price')."
let lS = 'Duration can distinguish meaning in some vowel languages.'
function step1(){
 return new Promise((resolve,reject)=>{
        console.log("just finished from the assembly")
        setTimeout(function(){
            console.log("The teacher has just entered the class")
            resolve();
        },4000)
 })
};
function step2(){
    return new Promise(function(reject,resolve){
        console.log("we all greeted the teacher Good morning ma, we are happy to see you, God bless you and your family Amen")
        setTimeout(()=>{
            console.log("The teacher just introduced the topic to be Vowel Sounds")
            resolve();
        },4000)
    })

}
function step3(){
new Promise((function(reject,resolve){
    console.log("Vowel Sounds are those sounds which we produce without obstruction of airflow in our vocal tract")
    setTimeout(function abs(){
        console.log("vowel sounds are a, e, i, o, u")
        resolve();
    },3000)
}))

}
function step4(){
    new Promise((resolve,reject)=>{
        console.log("we learnt some words like 'bat', 'cat', 'kitten', 'school' e.t.c.")
       setTimeout( ()=>{console.log(`there are different types of vowel sounds, we have;
            monotongues           : ${monothongs}
            Diphthongs            : ${diphthongs}
            Long and Short Vowels : ${lS}`)
            reject()}, 300)
    })
}
// step1()
// .then(step2)
// .then(step3)
// .then(step4)
// .then(()=>{console.log('we completed the class with a lot of knowledge')})
// .catch(()=>{console.log('The teacher was called while teaching and she left immediately')})


//PROMISE ASYNC AWAIT
//Here we are going to convert the chainned promises to asynchronous await promises
//let's start with our examles in promise2.js 
function officeOpen() {
     new Promise((resolve,reject)=>{
    console.log("Office Secretary is on her way to work")
    setTimeout(
        function(){
            console.log("My Secretary has gotten to the office building")
            resolve();
        },
        4000)
})
};

async function abs(){
    await officeOpen();
    console.log("The Office is opened, Clients can start coming")
}
abs();
//when using this from the memory POV await is an async function as well as asynch which stell the asynch function to be suspended till the await is completed.
//Never forget that during async operations before any macro queeing moves from one to another all micro queing must be done first
//when using your resolve and rejects to represent .then() and .catch(), you sould always align properly
//new Promise(a,b) where a is to .then() and b is to .catch()
//second example

function officeOpen(){
    return new Promise((resolve,reject)=>{
    console.log("Office Secretary is on her way to work")
    setTimeout(
        function(secArrive){
            console.log("My Secretary has gotten to the office building")
            resolve();
        },
        4000)
})
};
async function abc(){
    try{
    await officeOpen();
    console.log("The Office is opened, Clients can start coming");
    console.log("My workers are on celebration week in Paris, every job needs to be done online");
}
catch{
    console.log("Promise failed")
}
};
abc();
//now let's convert the above chaining in this page to async await in the next page

