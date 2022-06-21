import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input[name = email]'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const FEEDBACK_FORM_STATE = 'feedback-form-state';
let feedbackFormData = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('submit', onFormSubmit);

populateFormFields();

function onFormSubmit(e) {
  e.preventDefault();

  if (
    feedbackFormData.email.length === 0 ||
    feedbackFormData.message.length === 0
  ) {
    alert('All areas must be filled');
  }
  if (
    feedbackFormData.email.length > 0 &&
    feedbackFormData.message.length > 0
  ) {
    console.log(feedbackFormData);
    refs.form.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);
  }
}

function onFormInput(e) {
  feedbackFormData[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(feedbackFormData));
}

function populateFormFields() {
  const savedFeedback = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

  if (savedFeedback) {
    feedbackFormData = { ...savedFeedback };

    refs.email.value = feedbackFormData.email;
    refs.textarea.value = feedbackFormData.message;
  }
}
