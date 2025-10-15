// A string is a sequence of characters. They are created using double and single quotes also using back ticks for string literal template
let classs ="Jss2";
let names = 'Great';
let school = `Afiesere Secondary School`;
let ac1 = "my name is ${name} and I'm in ${classs}, I attend ${school}";
let acc = `my name is ${names} and I'm in ${classs} I attend ${school}`;
console.log(acc)
console.log(ac1);
//String operations are carried out on the heap segment in a string pool and then references are given ostorage in the stack segment of the memory.
//And also they are objects, which makes them use reference as first class citizens
//what is string interning
//the use of new string creates an object which can be referenced to the string pool but will have it's own address
let s1 = "JavaScript";
let s2 = "JAVASCRIPT"
let s3 = 'JavaScript';
let s4 = new String("JavaScript");
console.log(s1==s2);
console.log(s1===s3);
console.log(s1==s4);
console.log(s1===s4);
console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);
console.log(typeof s4);

//string concatenation can be done using the concatenation operator and also the use of concat() method
let t1=s1+s2;
let t2 = s2.concat(s1);
console.log(t1);
console.log(t2)
//strings are immutable which means they cannot be changed 
//If strings cannot be changed we can actually cause some indirect changes to them by setting a new reference for the string
let t3 = s1.slice(1);
console.log(t3); 
let e1 = "cat";
console.log(e1)
let e2 = "b"+ e1.slice(1);
e1 =e2;
console.log(e2)
console.log(e1)
console.log (e2!==e1)
// here e2 is changed to e1 and e1 has been sent to the gabbage programme.

