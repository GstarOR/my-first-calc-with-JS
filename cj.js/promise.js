//promises helps us to write asynchronous codes easire, deugging easier,and also makes understanding easier
//it prevents the usage of callback hell/pyramid of doom
//this is written using object literal method cus it's an object which we always pass a function
//new promise();
//we give it a name, every promise carries a callbackfunction which is called as the execution function
let prm = new Promise(()=>{

});
console.log(prm)

//It is the executor function that tries to fulfill the promise and it might either succed or fail.
let prq = new Promise(()=>{
    console.log("Executor Function...")
});
console.log(prq);
//An executor function has two states, we can change the state to either a failure state or to a success state
//using two function which are the success = resolve() failure= reject()
let prn = new Promise((reject)=>{
    console.log("Executor Functionn...")
    reject("failure")
});
console.log(prn);
//for success
let prnn = new Promise((resolve, reject)=>{
    console.log("Executor Function...")
    resolve("success");
});
console.log(prnn);
//you can't change the state but you can possibly cus change to the message which we placed as failure and success
//you can the pa
//A Promise is an object with a state, with an executor function, to basically say to a success you have to call resolve(). To basically change the state to failure or unfulfilled you have to call reject() and whatever is the data of success/resolve() and failure/reject() can be collected outside the promise using then() and catch() respectively.

let prs = new Promise((resolve, reject)=>{
    console.log("Executor Function...")
    resolve("success for the whole code");
});
prs
.then((result)=>{
    console.log(prs)
});

let prt = new Promise((resolve, reject)=>{
    console.log("Executor Function...")
    reject("failed the promise");
});
prt
.then((result)=>{
    console.log(prt)
})
.catch((result)=>{
    console.log(prt)
})


