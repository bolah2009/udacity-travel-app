import postData from './postData';
import tripCardFragment from './tripCardFragment';
import dataStore from './localStore';

const { setData: saveToLocalStorage } = dataStore();

export const updateUI = data => {
  if (data.error) return;
  const tripListElement = document.querySelector('#trips-list');
  const newTripFragment = tripCardFragment(data);
  tripListElement.appendChild(newTripFragment);
};

const handleSubmit = event => {
  event.preventDefault();

  const { value: location } = document.querySelector('#loc');
  const { value: date } = document.querySelector('#depart');

  postData({ location, date })
    .then(data => data.json())
    .then(data => {
      saveToLocalStorage(data);
      updateUI({ ...data, error: false });
    })
    .catch(e => updateUI({ error: true, errorMessage: e.message, location, date }));

  event.target.reset();
};

export default handleSubmit;
