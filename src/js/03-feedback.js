const throttle = require('lodash.throttle');
import throttle from "lodash.throttle";
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = "feedback-form-state";
const feedback = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.input'),
    textarea: document.querySelector('.textarea'),
}
newFormOutput();

const formData = {};
feedback.form.addEventListener('input', throttle(hendlerFormOut, 500));
function hendlerFormOut (evt) {
    formData[evt.target.name] = evt.target.valua;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

feedback.form.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    if(email.value === "" || message.value === ""){
        return alert("Всі поля повинні бути заповнені!");
    }
    localStorage.removeItem(STORAGE_KEY);
    feedback.form.reset();
});

function newFormOutput() {
    const savedMessage =JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedMessage) {
        feedback.input.value = savedMessage.email;
        feedback.textarea.value = savedMessage.message;
    }
}
