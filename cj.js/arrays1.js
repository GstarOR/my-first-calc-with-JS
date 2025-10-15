//Arrays are used to create variables and also easy acces to the information placed with a 
//variable instead of creating a variable for each single word or information given
//An Array is created with square brackets and semicolumn.
let arr = ["Beauty", "Faith", "grace", "Goody", "Gift" ];
console.log(arr)
console.log(arr[2])
// in the above the names of the employees have been placed in a single variable an can be accessed individually and as a group
//You can create an empty block of array and as well place values within the cells from outside 
//This is done using the array constructor just like using the object constructor
let arr1= new Array(5);
arr1[0] = 20;
arr1[1] = 30;
arr1[2]= 27;
arr1[3] = 56;
arr1[4] = 70;

console.log(arr1[0])
console.log(arr1[2])
console.log(arr1[1])
console.log(arr1[4])
//an array is made up of cells with every cell carrying it's own positional placement called as index "index of a array"
//The index of an array begin count from zero to..., as we can see above when being called
//every index in an array is seperated by a comma
//Arrays are used inline with loops for better iteration and resuabiity
let psq = new Array(6)
psq[0]=37;
psq[1] = 40;
psq[2]=45;
psq[3]=48;
psq[4]=73;
psq[5] =86;

let a;
for(a=0 ; a < psq.length ; a++){
    console.log(psq[a])
}
//Every object has bothth the state /properties and the behavior. If every Array is an object 
// i.e every array must have two properties the "name" and "length"
//APPLYING IT TO THE NORMAL CODE
let ef = ["Gift", 7.56, true, "Benin City"]
let c;
for(c=ef.length-1;c>=0;c--){
    console.log(ef[c]);
} 
//using the for...of loop
let cd= ["Beauty", "OgagaOghene", "Atareyor", "Jss 3", "AFIESERE SECONDARY SCHOOL",
     "Always attentive in class"]
for(let a of cd){
    console.log(a)
}
//Using the for...of loop is a very good thing, although it has its advantages and disadvantages,
//such that u dont need to go over the stres of initializing and incrementing like the for, while and do..while loop.
//The disadvantage is that u cannot pick a single one, cus simplicity has disavantages, 
//if it were not so a man who can go to work on barefoot woudn't have to create a car.
//The FOR...OF loop is read as ;
//"for(of arr){}" hey, I want to acces the elements of an array called arr. 
//Every time please go and pick one element from my array and give it to me.
//"for(let x of cd){}" Hey, for each element picked, store it in a varaible called as "x"