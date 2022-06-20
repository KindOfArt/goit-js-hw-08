import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[name = email]'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};
const FEEDBACK_FORM_STATE = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onInputEmail, 500));
refs.textarea.addEventListener('input', throttle(onInputTextarea, 500));

populateFormFields();

function onFormSubmit(e) {
  e.preventDefault();

  localStorage.removeItem(FEEDBACK_FORM_STATE);

  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;
  formData.email = email;
  formData.message = message;

  console.log(formData);

  e.currentTarget.reset();
}
function onInputEmail(e) {
  const email = e.target.value;

  formData.email = email;

  setToLocalStorage(FEEDBACK_FORM_STATE, formData);
}
function onInputTextarea(e) {
  const message = e.target.value;

  formData.message = message;

  setToLocalStorage(FEEDBACK_FORM_STATE, formData);
}
function setToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
function populateFormFields() {
  const savedMessage = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));
  if (savedMessage) {
    refs.email.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}
