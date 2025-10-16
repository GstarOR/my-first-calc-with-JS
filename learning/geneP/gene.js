let inputSlider = document.getElementById('inputslider');
let sliderValue = document.getElementById('slidervalue');
let passBox = document.getElementById('passBox');
let lowerCase = document.getElementById('lowercase');
let upperCase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyText = document.getElementById('copytext');
console.log(copyText);

//show the initial value of the slider.
sliderValue.innerHTML = inputSlider.value;

//update the slider value display once the slider is moved
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})
//Event listener to generate a single character on button click
genBtn.addEventListener('click', () => {
    //calling the function to generate a single character
    passBox.value = generatePassword()
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~`@#$%^&*?>+,<";

//function to generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";


    if (allChars.length === 0) {
        return genPassword;
    }
    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    //genPassword = allChars.charAt(Math.floor(Math.random() * allChars.length));
    return genPassword;
}

//copy password to clipboard

copyText.addEventListener('click', () => {
    if (passBox.value.length <= 0 || passBox.value !== "") {
        navigator.clipboard.writeText(passBox.value);
        copyText.textContent = "check";
        copyText.title = "Password Copied!";
        setTimeout(() => {
            copyText.textContent = "content_copy";
            copyText.title = "Copy to clipboard";
        },3000);
    }
    });