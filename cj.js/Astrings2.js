//STRING METHODS
//there are various methods for working or programming stings like
//TRIM ;removing white space
//CASE CONVERSION; Converting to upper or lower case
//INCLUDES; Check substring existence
//ENSWITH && STARTSWITH; This validates an information/ existence of a subtring
//SLICE; extract substring by position
//REPLACE; Replace first occurence
//LASTINDEXOF; Finding the last occurence position
//INDEXOF; Finding first occurence position;
//REPEAT; This repeats a string the amount of times needed
//SPLIT; Breaking string into array

//Let's start with a normal form wherein the name , email and a small bio of a person was submitted to javaScript but we need to run certain manipulations on it so as not to read incorrect data.
//all the information sent to javascript we placed in a variable called as 'userInput'
let userInput = " Chukwudi Jennifer | ChuKuJenny@express.COM | I love JavaScript programming. Also I'm into JavaScript coffee construction!"
console.log(userInput)
//let's say we want to split the information given using the | as the seperator we make use of the split method
let user = userInput.split("|");
console.log(user);
//the split method has made an array of 3 cells using the specified seperator
//lets say we want to get each information after the spliting is done
let name = user[0];
let email = user[1];
let bio = user[2]

console.log(name)
console.log(email)
console.log(bio)
//let's say we've gotten the things accurately, but recall that te information in the name and are not cwell arranged
//we can use the case conversion to convert the case to the one we need.
//also lets trim the white spaces at both ends
name =name.toUpperCase().trim();
email= email.toLowerCase().trim();
console.log(name);
console.log(email);
//lets say that we want to check if the information on the bio contains javascript
console.log(bio.includes("JavaScript"))
//let's check the positional placement of the first and last javascript
console.log(bio.indexOf("JavaScript"))
console.log(bio.lastIndexOf("JavaScript"))
// the index position tells you the positional value of the first index only which will enable you get the index for all others
//let's say i want to replace "JavaScript" with "JS" it can be done using the replace method
//it is done using `.replace(what needs replacement, the replacement)`
bio = bio.replace("JavaScript","JS");
console.log(bio)
//there's another which involves replacing all replaces every string with the mother variable that mathces
let profession = bio.replaceAll("JavaScript", "JS")
console.log(bio)
//So let's say if the form was a resume and it needs to meet certain requirements we can check dem using includes, endswith,startswith e.t.c.
let likeJS = bio.includes("JS");
let likeCoffee =bio.includes("coffee");
console.log(likeJS);
console.log(likeCoffee);
//lets check if the name and email contian certain things at the end, look for a scenario where you can check for the start
let validEmail = email.includes("@") && email.endsWith(".com");
console.log(validEmail)
//what I'll do here is that i'll use the repeat, and it's like the split where the seperator is placed in the parentheses
//here the amount of repeatations needed is placed within the parentheses
let divider="_".repeat(30)
//Now let's gather the whole information using an object literal template
let finalProfile = `

User Profile:
${divider}


Name                : ${name.trim()};
Email               : ${email.trim()}
LikesJS             : ${likeJS}
LikesCoffee         : ${likeCoffee}


${divider}
`
console.log(finalProfile);
