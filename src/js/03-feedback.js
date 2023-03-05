import throttle from 'lodash.throttle';

const refForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

refForm.addEventListener('input', throttle(onTextFormInput, 500));
refForm.addEventListener('submit', onFormSubmit);

const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
const { email, message } = refForm;

reloadPage();

function onTextFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function reloadPage() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  dataForm = {};
}
