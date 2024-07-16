let input = document.getElementById('inputBox');
let button =document.querySelectorAll('button');

let string ="";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
    })
})

// Select the checkbox input for dark mode toggle
const checkbox = document.querySelector('.switch input');

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listener for the checkbox
checkbox.addEventListener('change', toggleDarkMode);