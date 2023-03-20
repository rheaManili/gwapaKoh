const form = document.getElementById('form');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const password = document.getElementById('password');
const username = document.getElementById('username');
const birthdate = document.getElementById('birthdate');

function checkButton() {    
            var getSelectedValue = document.querySelector(   
                'input[name="gender"]:checked'); 


           
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




const validateInputs = () => {
  const emailValue = email.value.trim();
  const email2Value = email2.value.trim();
    const passwordValue = password.value.trim();
    const usernameValue = username.value.trim();
    const dayValue = day.value.trim();
    const monthValue = month.value.trim();
      const yearValue = year.value.trim();
      

    
    if(emailValue === '') {
        setError(email, 'You need to enter your email.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'This email is invalid. Make sure it is written like example@email.com');
    } else {
        setSuccess(email);
    }
    
    if(email2Value === '') {
        setError(email2, 'You need to confirm your email.');
    } else if (email2Value !== emailValue) {
        setError(email2, "The email addresses don't match.");
    } else {
        setSuccess(email2);
    }

    if(passwordValue === '') {
        setError(password, 'You need to enter a password.');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
if(usernameValue === '') {
        setError(username, 'Enter a name for your profile.');
    } else {
        setSuccess(username);
    }
    if(dayValue === '') {
        setError(day, 'Enter a valid day of the month.');
    } else if (dayValue > '31') {
        setError(day, 'Enter a valid day of the month.');
    } else if (dayValue < '1') {
        setError(day, 'Enter a valid day of the month.');
    } else {
        setSuccess(day);
    }
     
if(monthValue === 'month') {
        setError(month, 'Select your birth month.');
    } else {
        setSuccess(month);
    }
    if(yearValue === '') {
        setError(year, 'Enter a valid year');
    } else if (yearValue > '2017') {
        setError(year, ' Sorry, you dont meet Spotifys age requirements.');
    } else if (yearValue < '1900') {
        setError(year, 'Enter a valid year');
    } else {
        setSuccess(year);
    }

   if(getSelectedValue != null) {   
                document.getElementById("disp").innerHTML   
                    = getSelectedValue.value   
                    + " is selected";   
            }   
            else {   
                document.getElementById("error").innerHTML   
                    = "Select your gender";   
            }   
        }    
};