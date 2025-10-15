// Here under Object Creation Methods
//We are starting with object literal notation
// it start with parentheses within which there are key:value, key:value, pairs. where the key is the state/property while the value is then given and at the end of the parentheses u place the semi-column.
//while creating the behaviors you use function expression for it using the name of the function as the key and the value as the body 
//always remember that every single object is assigned to a name or refence to call it/access it. e.g "student" as used below
//how then can you acces an objects prperty > object.key> [object.key for the state/properties[object.key() for the behavior]
let student = {
    name : "Ovie",
    grade : "Grade",
    age : 14,

    coding : function(){
        console.log("I code like a Guru");
    },
    singing : function(){
        console.log("I can sing very well");
    },
    dancing : function(){
        console.log("I'm very good at dancing");
    }
};

console.log(student.name);
console.log(student.age)

student.dancing();
student.singing();
student.coding();
//try to uderstand how one can passby value and also how one can pas by reference.