// // let userRole="small";

// // if (userRole === "bigger") {
// //    console.log("your space is available")
// // } else {
// //    console.log("no space for you") 
// // }


// let userRole = "admin";

// if(userRole === "admin")
// {
//     console.log('Full Access Granted');
// }
// else if(userRole === "editor")
// {
//     console.log('Editor Access Granted');
// }
// else if(userRole == "author");
// {
//     console.log("Authors Role Granted")
// } 
//  {
//     console.log("Student Access Granted")
// }

let grace = "all";
let given;
if (grace == "been") {
    given = "halleluyah";
} else {
    given = "alot of work is to be done";
}
 console.log(given)

given = grace == "but"? "halleluyah":"alot of work has to be done"
console.log(given)



let optioner = "author";

switch (optioner) {
    case "admin":
        console.log("Admins Access Granted")
        break;
    case "editor":
        console.log("Editors Access Granted")
        break;
    case "author":
        console.log("Author Access Granted")
        break;
    case "student":
        console.log("Student Access Granted")
        break;
    default:
        console.log("Access Denied!")
}

let weekDay = 6;

switch (weekDay) {
    case 1:
    case 6:
        console.log("Happy Monday")
        break;
    
    case 5:
        console.log("Thank God it Friday")
        break;
    case 2:
    case 3:
    case 4:
        console.log("Worksafely")
        break;
    case 0:
        console.log("Happy Weekend")
        break;

}

let age = 11;

switch(0<age<=100){
    case   age <= 11:
        console.log("Child Ticket")
        break;
    case  age >= 12 && age <= 65:

        console.log("Adult Ticket")
        break;
    case age >= 66:
        console.log("Senior Citizen")
        break;
}

let page = 100;

if (page <= 12) {
    console.log("child ticket")
} else if (page >=12 && page <=65) {
    console.log("Adult ticket purchase")
} else {
    console.log("Senior Citizen")
}

// a loop consist of four major parts which are the initialization, condition, body and the icrement/decrement
// let i;

// for(i=1;i<=5;i++)
// {
//     console.log("*")
// }

// i=1;
// while (i<=6) {
//     console.log("*")
//     i++
// }

// i=1
// do {
//     console.log("*")
//     i++
// } while (i<=3);