const throttle = require('lodash.throttle');

const form = document.querySelector("form");
 
const userMessage = {
    email: "",
    message: "",
};

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onFormInput, 500));

updateUserMessage();

function updateUserMessage() {
    const savedMessage = localStorage.getItem('feedback-form-state');
    if (savedMessage) {
        const { email, message } = JSON.parse(savedMessage);
        form.email.value = email;
        form.message.value = message;
        userMessage.email = email;
        userMessage.message = message;
    }
}

function onFormSubmit(event) { 
    event.preventDefault();
    const savedMessage = localStorage.getItem('feedback-form-state');
    const parsedMessage = JSON.parse(savedMessage);

    console.log(parsedMessage);

    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


function onFormInput(event) {
   
    if (event.target.nodeName === 'INPUT') {
        userMessage.email = event.target.value;
    } else {
        userMessage.message = event.target.value;
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(userMessage));
}




