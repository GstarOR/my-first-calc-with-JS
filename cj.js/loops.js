// //There are various types of loops
// //for loops
// console.log("*")
// let i;

// for (i = 1; i<=7 ;i++)
// {
//     console.log("*");
// }

// i=1
// do {
//     console.log("#")
//     i++;
// } while (i<=9);
// i=0;
// while(i<=4){
//     console.log("%")
//     i++;
// }
//to print using rows not on the column cus console takes the full width of the line it uses 
//We tend to make use of concatenation
// let i;
// let j;
// let row;
// let m=11;


// for (i = 0; i < m; i++) {
//     row = "";
//     for (j = 0; j < m; j++) 
//     {
//         if(j==0|| j==m-1|| i==0 || i==m-1||j==Math.floor(m/2)
//         || i== Math.floor(m/2)||i==j||i+j==m-1||i+j==Math.floor(m/2)
//         ||j-i==Math.floor(m/2) ||i-j==Math.floor(m/2) ||j+i==(m-1)+(Math.floor(m/2)))
//         {
//             row = row + "*";
//         }
//         else
//         {
//             row = row + " ";
//         }
//     }
//     console.log(row);
// }

// let a;
// let b;
// let c=15
// let row;
// for (b = 0; b <= 4; b++) {
//     row = " "

//     for (a = 0; a <= c; a++) {
//         row += "/"
//     }
//     console.log(row) 
// }

