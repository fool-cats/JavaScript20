// originally

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');


function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}


function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return re.test(String(email).toLowerCase);  //return true if email is valid
}

// //  event listener
// form.addEventListener('submit',function (e) {
//     // If we submit in the form, the page will be reloaded
//     // we want to stop reloading the page 
//     e.preventDefault();

//     // get the value property
//     // console.log(username.value)

//     // get the element(input)
//     // console.log(username)

//     if(username.value === ""){
//         showError(username,"Username is required")
//     }else{
//         showSuccess(username)
//     }

//     if(email.value === ""){
//         showError(email,"Email is required")
//     }else if(isValidEmail(email.value)){
//         showError(email.value,"email is not valid")
//     }
//     else{
//         showSuccess(email)
//     }


//     if(password.value === ""){
//         showError(password,"password is required")
//     }else{
//         showSuccess(password)
//     }

//     if(password2.value === ""){
//         showError(password2,"password again is required")
//     }else{
//         showSuccess(password2)
//     }
// })



// Refactor code


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// check length

function checkLength(input, min,max) {
    if (input.value.length < min || input.value.length > max) {
        showError(input, `${getFieldName(input)} must be between ${min} and ${max}`)
    }else{
        showSuccess(input)
    }
}

// checkRequite 

function checkRequite(inputArr) {
    inputArr.forEach(function(item) { 
        if (item.value.trim() === '') {
            showError(item,`${getFieldName(item)} is required`)
        }else{
            showSuccess(item)
        }
    } )
}

// get the field name

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//  event listener
form.addEventListener('submit',function (e) {
    // If we submit in the form, the page will be reloaded
    // we want to stop reloading the page 
    e.preventDefault();

    // get the value property
    // console.log(username.value)

    // get the element(input)
    // console.log(username)

    checkRequite([username,email,password,password2])

    checkLength(username,3,15);
    checkLength(password, 6,20 )


})