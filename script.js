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

        else if (e.target.innerHTML == 'AC'){
            string= "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'Del'){
            string= string.substring(0, string.length -1);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

const checkbox = document.querySelector('.switch input');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

checkbox.addEventListener('change', toggleDarkMode);