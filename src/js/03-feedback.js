import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
const feedback = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
}
let formData = {};
newFormOutput();
feedback.form.addEventListener('input', throttle(onInputForm, 500));
function onInputForm(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
feedback.form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (feedback.input.value === "" || feedback.textarea.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    }
    localStorage.removeItem(STORAGE_KEY);
    feedback.form.reset();
    formData = {};
});

function newFormOutput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        formData = JSON.parse(savedMessage) || {};
        feedback.input.value = formData.email || '';
        feedback.textarea.value = formData.message || '';
    }
}
