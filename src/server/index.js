const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const dotenv = require('dotenv');
const { geonames, weatherbit, pixabay } = require('./api');
const cleanData = require('./cleanData');

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use(express.static('dist'));

const port = process.env.PORT;

app.listen(port);

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
    throw Error(error.message);
  }

  res.send(currentData);
};

app.post('/submit', generateData);
