import { getCountdownDays, getDayDiff, formatDate } from './date';

const tripCardFragment = data => {
  const {
    date,
    location,
    minTemp,
    maxTemp,
    temp,
    weatherIcon,
    weatherDesc,
    locationImageURL,
    weatherDate,
  } = data;

  const isPastTrip = getDayDiff(date) < 1;
  const formattedDate = formatDate(date);

  const className = 'trip-list';
  const element = 'li';
  const html = `
     <section class="trip-card ${isPastTrip ? 'past-trip' : ''} d-flex col row-md">
       <div 
       style="background:  center / cover no-repeat url('${locationImageURL}');" 
       class="location-img">
       </div>
       <div class="trip-details">
         <h3 class="trip-header">
         My trip to: <span class="trip-location">${location}</span>
         </h3>
         <h4 class="trip-header">Departing: ${formattedDate}</h4>
         <p id="countdown"><span class="trip-location">${location} </span>
         is ${getCountdownDays(date)}</p>
         <p>Typical weather for ${weatherDate === date ? 'then' : weatherDate} is:</p>
         <div class="d-flex row jc-sb ai-c">
         <div class="weather-details">
         <p>Temperature - ${temp}, High - ${maxTemp}, Low - ${minTemp}</p>
         <p>${weatherDesc}</p>
         </div>
         <div class="weather-icon">
         <img 
         src="https://www.weatherbit.io/static/img/icons/${weatherIcon}.png" 
         alt="Weather Icon" 
         class="img" />
         </div>
       </div>
     </section>`;

  const documentFragment = document.createDocumentFragment();
  const newElement = document.createElement(element);

  newElement.classList.add(className);
  newElement.innerHTML = html;
  documentFragment.appendChild(newElement);
  return documentFragment;
};

export default tripCardFragment;
