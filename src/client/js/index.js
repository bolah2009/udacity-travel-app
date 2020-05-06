import handleSubmit, { updateUI } from './formHandler';
import dataStore from './localStore';

const startApp = () => {
  const storedData = dataStore();
  if (storedData.isNotEmpty()) {
    const allData = storedData.store;
    allData.forEach(updateUI);
  }

  const formElement = document.querySelector('form');
  const toggleForm = document.querySelector('#toggle-form-button');

  toggleForm.addEventListener('click', () => formElement.classList.toggle('d-none'));
  formElement.addEventListener('submit', handleSubmit);
};

export default startApp;
