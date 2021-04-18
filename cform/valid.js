const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    let validation = checkInputs();

    if (validation === true) {
        form.submit();
    }
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
  

    if (usernameValue === '') {
       alert("user name can not blank")
        return false;
    } 

    if (emailValue === '') {
        alert("email must be fill in ");
        return false;
    } else if (!isEmail(emailValue)) {
        alert("Email must be this format (asajib7654@gmail.com)");
        return false;
    } 

    if (passwordValue === '') {
        alert("password must be fill in ");
        return false;
    } else if (passwordValue.length < 6) {
        alert("password must be 6 in ");
        return false;
    }

   
    return true;
    
}



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


