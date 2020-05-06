const { v4: generateID } = require('uuid');

const cleanData = (allData, date) => {
  const data = allData.find(d => d.valid_date === date) || allData[allData.length - 1];
  const {
    min_temp: minTemp,
    max_temp: maxTemp,
    valid_date: weatherDate,
    temp,
    weather: { icon: weatherIcon, description: weatherDesc },
  } = data;

  const id = generateID();

  return {
    id,
    minTemp,
    maxTemp,
    temp,
    weatherIcon,
    weatherDesc,
    weatherDate,
  };
};

module.exports = cleanData;
