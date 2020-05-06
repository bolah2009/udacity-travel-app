const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const username = process.env.API_USER_NAME;
const weatherbitKey = process.env.WEATHERBIT_API_KEY;
const pixabayKey = process.env.PIXABAY_API_KEY;

const fetchAPI = async uri => {
  const response = await fetch(uri);
  return response.json();
};

const pixabay = async (query = '') => {
  let locationImageURL =
    'https://res.cloudinary.com/bolaah/image/upload/v1588787585/placeholder.png';
  const cleanQuery = query.replace(' ', '+');
  const uri = `https://pixabay.com/api/?key=${pixabayKey}&q=${cleanQuery}&image_type=photo&category=places`;
  const responseData = await fetchAPI(uri);
  const { hits } = responseData;
  if (hits && hits.length) {
    locationImageURL = hits[0].webformatURL;
  }
  return { locationImageURL };
};

const weatherbit = async ({ lat = 0, lon = 0 }) => {
  const uri = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${weatherbitKey}`;
  const responseData = await fetchAPI(uri);
  const { data } = responseData;
  if (data && data.length) {
    return data;
  }
  throw new Error('No weather information found');
};

const geonames = async (query = '') => {
  const uri = `http://api.geonames.org/searchJSON?q=${query}&maxRows=3&username=${username}`;
  const data = await fetchAPI(uri);
  const { totalResultsCount, geonames } = data;
  if (totalResultsCount) {
    return geonames;
  }
  throw new Error('No location found');
};

module.exports = { geonames, weatherbit, pixabay };
