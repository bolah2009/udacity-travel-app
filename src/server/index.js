const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const { geonames, weatherbit, pixabay } = require('./api');
const cleanData = require('./cleanData');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(express.static('dist'));

const port = 5000;

const listening = port => {
  console.log('Server running ...');
  console.log(`Local Network http://localhost:${port}`);
  console.log(`Your Network http://192.168.43.134:${port}`);
};

app.listen(port, listening(port));

let currentData = {};

const generateData = async (req, res) => {
  const {
    body: { location, date },
  } = req;

  const cleanLoc = location.replace(' ', '+');

  try {
    const locationImageURL = await pixabay(cleanLoc);
    const arrayOfGeonames = await geonames(cleanLoc);
    const { lat, lng: lon } = await arrayOfGeonames[0];
    const weatherData = await weatherbit({ lat, lon });

    const cleanedData = cleanData(weatherData, date);

    currentData = { ...currentData, location, date, ...locationImageURL, ...cleanedData };
  } catch (error) {
    console.log(error);
    throw error;
  }

  res.send(currentData);
};

app.post('/submit', generateData);
