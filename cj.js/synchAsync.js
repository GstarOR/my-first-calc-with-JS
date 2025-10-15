//JavaScript is a single thread synchronously execution programming language
//The code below shows the effect of synchronous execution(line by ine execution)
function fun1()
{
    console.log("fun1 has started execution process")
    console.log("fun1 has finished execution process")

}
function fun2()
{
    console.log("fun2 has started execution process")
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    for(;Date.now() <= end;)
    {

    }
    console.log("fun2 has finiwshed execution process")
}
function fun3()
{
    console.log("fun3 has started execution process")
    console.log("fun3 has ended execution process")
}

fun1();
fun2();
fun3();

// the above process was a synchronous process, with the aid of WEB APIs/node.js one can now make use of asynchronous execution within Javascript
