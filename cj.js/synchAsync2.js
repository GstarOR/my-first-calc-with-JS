// //here we shall be writing some asynchronous programs which will show you how to make a program run effectively without each block of code blocking anothers code execution like as javascript would normally do
// //lets use fun1, 2 and 3 to represent a web appliction as we did in the other page, but here the web application.
// function fun() {
//     function fun1() {
//         console.log("fun1 execution has started")
//         console.log("fun1 execution has ended")
//     }
//     function fun2() {
//         console.log("fun2 execution has begun")
//         let start = Date.now();
//         let delay = 5000;
//         let end = start + delay;
//         while (Date.now() <= end) {

//         }
//         console.log("fun2 execution has come to an end")
//     }
//     function fun3() {
//         console.log("fun3 execution has started")
//         console.log("fun3 execution has started")
//     }

//     fun1();
//     //setTimeout() has two argument one is the callback and the other is the timefor it to be stored in the  WEB APIs block space b4 it completes it execution on the empty stack when other are done with execution
//     //After the timeout being set by the programmer is collected by the programmer the WEB APIs hold it for the time interval given to the callback given while event loop scan the call stack if it empty b4 it sends the function to the call stack
//     // note that the setTimeout() does not execute the program, the execution depends on if the call stack is empty or not.
//     setTimeout(fun2, 2000);
//     fun3();
// };
// // Here you will notice that the node.js/webapi created a housing for the function afet we used one of the asynchronous functions on the TIMER called setTimeout()
// //and after the call stack execution block was free, then was the delayed function placed and it's execution didnt block fun3 execution
// //this will therefore prevent lagging in our webpages.
// //Notice that after all execution is done, then and only then is the delay execution done due to the settimeout which is a node.js tool
// //fun()

// //Here lets take a example using four parts of a webpage called fun1, fun2, fun3 and fun4
// //where fun2, and fun3 need time for their execution, but fun 4 does not need time to execute
// function funs() {
// function fun1() {
//         console.log("fun1 execution has started")
//         console.log("fun1 execution has ended")
//     }
//     function fun2() {
//         console.log("fun2 execution has begun")
//         let start = Date.now();
//         let delay = 5000;
//         let end = start + delay;
//         while (Date.now() <= end) {

//         }
//         console.log("fun2 execution has come to an end")
//     }
//     function fun3() {
//         console.log("fun3 execution has started")
//         let start = Date.now();
//         let delay = 8000;
//         let end = start + delay;
//         for(;Date.now()<=end;)
//         {

//         }
//         console.log("fun3 execution has started")
//     }
//     function fun4() {
//         console.log("fun4 execution has started")
//         console.log("fun4 execution has ended")
//     }
//     fun1();
//     setTimeout(fun2,3000);
//     setTimeout(fun3,2000);
//     fun4();
// }
// //the execution of the above will result in bringing both fun2 and fun3 to the callbackque after the time interval given
// //Also EVENT LOOP continously scans the programm if the call stack is empty b4 throwing the block of codes into the execution context

// funs()

//SETINTERVAL
//This TIMER is another WEB APIs tool which is used in the case scenario where there's need to fetch info. from a server on a constant bases just like in tradingview,live scores in games, live streaming, betnaija and others. we dont need to stop the application of others cus it won't stop even if there's a time interval
//the setInterval() takes two arguments as in setTimeout() 
function funt() {
    console.log("we are going on with the work in progress")
}
//setInterval(funt, 2000);
//if you notice the above function directly returns every 2seconds wich is equivalent to every 2000miliseconds
//this is done by set interval function

//Every set interval function is assigned to an interval id
function funm() {
    console.log("Always be happy, We ensure to fix the issue soon")
}
let intervalID = setInterval(funm, 2000);
clearInterval(intervalID)
//CLEAR INTERVAL
//when the clearInterval() is used as in the above we notice that it tends to clear the APIs information, hence ther's no info in the webapis area.
//This function takes only a single argument therefore we can only connect it to the set inverval() if we want to stop the reoccurence after some time using the setTimeOut()

function funn() {
    console.log("I might end up stoping after some time oh")
}
let universe = setInterval(funn, 2000);
setTimeout(() => clearInterval(universe), 10000)
//setInterval() will keep repeating while clearInterval() will clear it, while if we need to clear after a particular time we use the setTimeout() does that function

//lets now make use of a socialmedia app where the user logs in the bio/profile gets loaded first, lets say the freindlist then gets loaded(what if the person has a lot of freinds,this will take time)
//we also have the persons posts, and as well the comments made under the posts with the persons comments as well.
//using the above knowledge we shall decern some common problems which need fixing.
//
function loadDashBoard() {
    setTimeout(() => {
        console.log("This is the Users DashBaord...")

        setTimeout(() => {
            {
                console.log("This is the Users friendList...")
            }
            setTimeout(() => {
                {
                    console.log("This is the Users Posts...")
                }
                setTimeout(() => {
                    console.log("This is the Users Peoples Comments...")
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
};
loadDashBoard()
// the above shape is called as callback hell/ pyramid of doom
//in the above when collecting informtion from a server there's tendency for an error to occur. This error can be given an object, function e.t.c.
//so we need to print something incase of any error, and therefore we do this below

function loadDashBoard2(id,callback) {
    let error;
    if (error) {
      return callback(error);
    }
    setTimeout(() => {
        if (error) {
            return callback(error)
        }
        console.log("This is the Users DashBaord2...")

        setTimeout(() => {
            if (error) {
                return callback(error);
            }
            {
                console.log("This is the Users friendList2...")
            }
            setTimeout(() => {
                if (error) {
                    return callback(error)
                }
                {
                    console.log("This is the Users Posts2...")
                }
                setTimeout(() => {
                    if (error) {
                        return callback(error);
                    }
                    console.log("This is the Users Peoples Comments2...")
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
};

function errorHandler(error)
{
    console.log("There is a certain error...")
}

loadDashBoard2("101",errorHandler);
// whatif i place a value for the error cus the error above without a value is undefined and seen as false. So it didn't execute
//Let's take a tendency of an error which occured at the users posts

function loadDashBoard3(id,callback) {
    let error;
    if (error) {
      return callback(error);
    }
    setTimeout(() => {
        if (error) {
            return callback(error)
        }
        console.log("This is the Users DashBaord3...")

        setTimeout(() => {
            if (error) {
                return callback(error);
            }
            {
                console.log("This is the Users friendList3...")
            }
            setTimeout(() => {
                error = "there's an error"
                if (error) {
                    return callback(error)
                }
                {
                    console.log("This is the Users Posts3...")
                }
                setTimeout(() => {
                    if (error) {
                        return callback(error);
                    }
                    console.log("This is the Users Peoples Comments3...")
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
};

function errorHandler2(error)
{
    console.log("There is a certain error2...")
}

loadDashBoard3("101",errorHandler2);
//in the above function error seems to be true on the post function so it will return the control back to the function house without checking for the comments and show error on the screen.
//Anyfurher nesting would worsen readability