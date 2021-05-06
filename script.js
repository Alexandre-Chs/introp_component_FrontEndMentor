const submit = document.querySelector(".submit"); 

// INPUTS SELECTOR //

const FirstName = document.querySelector("#firstName")
const LastName = document.querySelector("#lastName")
const Email = document.querySelector("#email")
const Password = document.querySelector("#password")

// ERROR //

const errorFirstName = document.querySelector(".errorFname")
const errorLastName = document.querySelector(".errorLname")
const errorEmail = document.querySelector(".errorEmail")
const errorPassword = document.querySelector(".errorPassword")




submit.addEventListener('click', (e) => {
    if(FirstName.value.trim() === "" ) {
        errorFirstName.classList.add('visible');
    } else { 
        errorFirstName.classList.remove('visible')
    }

    if(LastName.value.trim() === "" ) {
        errorLastName.classList.add('visible');
    } else { 
        errorLastName.classList.remove('visible')
    }

    if(Email.value.trim() === "" ) {
        errorEmail.classList.add('visible');
    } else { 
        errorEmail.classList.remove('visible')
    }

    if(Password.value.trim() === "" ) {
        errorPassword.classList.add('visible');
    } else { 
        errorPassword.classList.remove('visible')
    }

})