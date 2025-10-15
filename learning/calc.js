let input = document.getElementById("inputBox")
let buttons = document.querySelectorAll("button");

let string  = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try{
                string = eval(string);
                input.value = string;
            }
            catch{
                input.value = "Error";
                string ="";
            }
        }  else if (buttonValue === 'AC'){
            string = "";
            input.value = string;
        } else if(buttonValue === 'DEL'){
            string=string.substring(0, string.length -1)
            input.value = string;
        } else {
            if (string === "Error") {
                string = "";
            }
            string += buttonValue;
            input.value = string;
        }
    });
});
