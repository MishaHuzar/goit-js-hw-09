const form = document.querySelector('.feedback-form');
const { email: inputEmail, message: textareaMessage } = form.elements;

const key = 'feedback-form-state';

const formData = { email: '', message: '' };

noLoseDataByReloauding();

form.addEventListener('input', onInput);

function onInput(event) {
  const inputData = inputEmail.value.trim();
  const textareaData = textareaMessage.value.trim();

  formData.email = inputData;
  formData.message = textareaData;

  localStorage.setItem(key, JSON.stringify(formData));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (!inputEmail.value.trim() || !textareaMessage.value.trim()) {
    alert('Fill please all fields!');
    return;
  }

  if (inputEmail.value.trim() && textareaMessage.value.trim()) {
    console.log(formData);
  }

  localStorage.removeItem(key);
  event.currentTarget.reset();
}

function noLoseDataByReloauding() {
  const storageData = JSON.parse(localStorage.getItem(key)) || {};

  const { email: savedEmail, message: savedMessage } = storageData;

  inputEmail.value = savedEmail ? savedEmail : '';
  textareaMessage.value = savedMessage ? savedMessage : '';
}