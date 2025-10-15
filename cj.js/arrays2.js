//why people store elements inside of arrays is cus we can perform certain operations such as; 
//adding/removing element, searching for elements, reversing elemnts, sorting of elements 
// Here we'll talk about arrays behaviour;
//Inside every array objects there are built in functions such as push(), pop(), shift(), unshift(), map(), filter(), reduce() e.t.c.
//THe push() method enables to add to end of an array.
let ar = [10,20,30,40,50,70];
console.log(ar);
ar.push(55);
console.log(ar);
//The unshift method enables u to add element to the beginning of an array
ar.unshift(42);
console.log(ar);
//The method to remove an element from the end is the use of pop()
ar.pop();
//the use of pop() tend to return the value to u as well as removing the value, so you can also get the value that's being popped.
console.log(ar)
let b= ar.pop()
console.log(b);
console.log(ar);
// Using shift() will remove an element from the beginning and also return it if given a storage space
let c = ar.unshift();
console.log(c);
console.log(ar);
//All the above operations the removing and adding elements from the beginning u do some shifting operations to the index
//Using the splice() method can help to delete an element from an index/ insert an element in an index, 
//also you can increase the size of indexes in an array, as well rechange the element of an array
//THE SPLICE() SYNTAX; splice(startindex, delete count, items) The start index represent where you want to begin operation, the delete count is the index count you want to remove, and the items area is the item you want to add in the array, 
//while every other comma placed after the delete count represent the number of index creation from the start index.
ab = [30,40,50,60,70,80,90,20,10];
console.log(ab);
ab.splice(3,0,55,65);
console.log(ab);
//The above splice was use to only insert value from the third index sin the delete count ws zero.
ab.splice(6,1);
console.log(ab);
//here the sixth index =70 was removed
let d= ab.splice(4,2,77,87,90,43,90)
console.log(d)
console.log(ab)
//U can return the array to get the opreation which was removed if need be as done above
//Take note also that the operation done on the array above was both inserting and removal
//If you want to find an element in an array when you don't know the index you can use the indeOf() method 
//and the lastIndexOf() Method when u want the last value index.
console.log(ab.indexOf(20));
console.log(ab.lastIndexOf(90));
console.log(ab.indexOf(82));
console.log(ab.includes(400));
console.log(ab.includes(80));
//The indexof() method only tells us the positional value of an element 
//The includes() Method show the presence of an element in an array

//MAP() Method creates a new array by applying a function to each element and using a callback for it
//THE SYNTAX; the array, function expression, let mapVariable = array.map(callback)
let ages = [1,4,16,25,49,50];
function squareRoot(x)
{
    return Math.sqrt(x);
}

 console.log(ages.map(squareRoot))
 console.log(ages);
 //the result can be collected in a variable for easy readability, also we can use the different function types
let square = function(y)
{
    return Math.log(y)
}
let res = ages.map(square);
console.log(res);
console.log(ages);


//filter() Method creates a new array with elements that meet a specific condition
 let bc=[42,14,12,20,13,26];
 function agesBelowTwenty(x)
 {
    if (x>20)
    {
        return true;
    }
    else{
        return false;
    }
 }
console.log(bc.filter(agesBelowTwenty))
//the filter can be done through another means such as looping through and aslo using the if else statement for the body as well
//But it's far much easier with this. You can use the terinary operator to convert the whole information to one line with the arrow function.
//you can make it more compact see below
let resu = ages.filter((x)=>
{
    if (x<20){
        return true;
    } else{
        return false;
    }
});
console.log(resu);
//Perform the terinary operation for the if else as assignment.


//the reduce() method uses a total variable, the value for each variable and also the initialization value of the total
//As used below the total variable "total", the value for each variable"x", the initialization value of the total"0" 
//This is used to reduce the values of an array so that u can get the total of the array following an operation
let numbers = [7,4,2,8,6,15,22,3];

let rese= numbers.reduce((total,x) => total + x, 0);
console.log(rese)
console.log(numbers);

//some() method tests if a single passes a test,
let sec = numbers.some(x=> x<5);
console.log(sec)
//every() method checks if every element passes the test.
let se = numbers.every(x => x>1)
console.log(se);
//both every and some gives boolean values
//find() method here gives the value itself of the the first index that satisfies the condition
let send = numbers.find(x=> x>2);
console.log(send);
//findIndex() method gives you the index value
let sen = numbers.findIndex(x => x<2)
console.log(sen)
//-1 shows when the value asked using a method is not seen, if the method is not a boolean type method
//using sort() method has to do with arangement of array elements in ascending order/alphabetical order
let fruits = ["bannana", "orange","Tomatoes", "Pear", "Strawberries", "Guava", "Corn", "Apple"]
let ft = fruits.sort()
console.log(ft);
let nur = numbers.sort()
console.log(nur)
//This sorting will bring 15 to the first place because of the presence of 1



//MULTI-DIMENSIONAL ARRAYS
let are = [
    [25, 39,32],
    [22,36,28],
    [24, 37, 30]
];

let a;
let e;
 for(a=0;a<are.length;a++)
 {
    for(e=0;e<are[a].length;e++)
    {
        console.log(are[a][e])
    }
 }
console.log(are)
//Perform a three dimensional array
//ARRAYS ARE USED WITH LOOPS TO ENABLE THEM WORK BETTER OR THEY MIGHT END UP NOT BEING PROGRAMS



//SHALLOW COPY AND DEEP COPY
//shallow copy is done using two methods; The "spread operator"=> (...) and the "slice() method"
//Using the spread operator method for shallow copy
let ar1=[10,20,30,40];
console.log(ar1);
let ar2 = [...ar1];
console.log(ar2);

ar1.push(99)
console.log(ar1);
console.log(ar2);
//using the slice() method 
let arr1 =[[10,20],[30,44]]
 console.log(arr1);
 let arr2 = arr1.slice();
 console.log(arr2)
 arr1[1].push(96);
console.log(arr1);
console.log(arr2);
//shallow copy changes reflects on nested arrays while for one dimension u won't notice it
//DEEP COPY
//deep copy is done using a function called structuredClone()
let abr1 = [40,30,20,10];
console.log(abr1)
let abr2 = structuredClone(abr1);
console.log(abr2);
abr1.push(87);
console.log(abr1);
console.log(abr2);
// the deep copy make new copies of both the nested arrays and the arrays references
// while the shallow copy copies the array body and then the reference for the case of nested rrays is then connected like as in pass by reference in objects.