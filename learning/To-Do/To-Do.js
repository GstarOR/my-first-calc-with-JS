let inputBox = document.querySelector('input');
let listContainer = document.querySelector('#list-container')

function addTask(){
    if (inputBox.value === "") {
        alert('Fill the input Space')
    } else {
        let li= document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

let li
