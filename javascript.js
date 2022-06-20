get =document.getElementById

const form = document.getElementById("form")
let firstname=document.getElementById('first-name')
let lastname=document.getElementById('last-name')
let email=document.getElementById('email')
let password=document.getElementById('password')


// Error Message 
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    const img =formControl.querySelector('img');
    img.style.display = "block";
    small.innerText=message;
    console.log(small)
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    if(firstname.value===''){
        showError(firstname,'First Name cannot be empty')
    }
    if(lastname.value===''){
        showError(lastname,'Last Name cannot be empty')
    }
    if(email.value===''){
        showError(email,'Looks like this is not an email')
    }
    if(password.value===''){
        showError(password,'Password cannot be empty')
    }
})