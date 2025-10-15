//the async await from the former chainning example in Promises3.js
let monothongs;
let diphthongs; 
let lS; 

monothongs= "pure vowel sounds (e.g., /i/ in 'see', /a/ in 'father')."
diphthongs = "Gliding vowel sounds (e.g., /ai/ in 'price')."
lS = 'Duration can distinguish meaning in some vowel languages.'

function step1b(){
 return new Promise((resolve,reject)=>{
        console.log("just finished from the assembly")
        setTimeout(function(){
            console.log("The teacher has just entered the class")
            resolve();
        },4000)
 })
};

function step2b(){
    return new Promise(function(reject,resolve){
        console.log("we all greeted the teacher Good morning ma, we are happy to see you, God bless you and your family Amen")
        setTimeout(()=>{
            console.log("The teacher just introduced the topic to be Vowel Sounds")
            resolve();
        },4000)
    })

}

function step3b(){
return new Promise((function(reject,resolve){
    console.log("Vowel Sounds are those sounds which we produce without obstruction of airflow in our vocal tract")
    setTimeout(function abs(){
        console.log("vowel sounds are a, e, i, o, u")
        resolve();
    },3000)
}))

}
function step4b(){
    return new Promise((resolve,reject)=>{
        console.log("we learnt some words like 'bat', 'cat', 'kitten', 'school' e.t.c.")
       setTimeout( ()=>{console.log(`there are different types of vowel sounds, we have;
            monotongues           : ${monothongs}
            Diphthongs            : ${diphthongs}
            Long and Short Vowels : ${lS}`)
            reject()}, 300)
    })
};
async function steps(){
    try{
        await step1b();
        await step2b();
        await step3b();
        await step4b();
        console.log('we completed the class with a lot of knowledge')
    }
    catch{
        console.log('The teacher was called while teaching and she left immediately')
    }
}
steps();


