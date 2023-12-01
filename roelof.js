var button = document.querySelector('button');
var error_message = document.querySelector('.error'); 

button.addEventListener('click', (e) => {
    e.preventDefault(); 
    var inputbox = document.querySelector('input'); 
    var input = inputbox.value;
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input.match(validRegex)){
        error_message.style = "visibility: visible" ;
        inputbox.style = "border: 1px solid red" ; 
    } else {
        inputbox.style = "border: 1px solid green"; 
        error_message.style = 'visibiliy: hidden'
    }

})

