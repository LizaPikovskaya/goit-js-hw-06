const form = document.querySelector(".login-form");

form.addEventListener('submit', onValidation)

function onValidation (event) {
    event.preventDefault()
    const {email, password} = event.currentTarget.elements;
    if(email.value.trim() ==='' || password.value.trim() === '') {
       return alert('You must fill all fields')
    } else {
        const resultObj = {
          [email.name]: email.value,
          [password.name]: password.value,
        };
        console.log(resultObj);
    }
    event.currentTarget.reset()
}
