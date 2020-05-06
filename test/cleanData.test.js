const cleanData = require('../src/server/cleanData.js');

const mockData = [
  {
    valid_date: '2020-05-19',
    weather: { icon: 'c03d', code: 803, description: 'Broken clouds' },
    max_temp: 17.9,
    datetime: '2020-05-19',
    temp: 16.3,
    min_temp: 12.8,
  },
  {
    valid_date: '2020-05-20',
    weather: { icon: 'c04d', code: 804, description: 'Overcast clouds' },
    max_temp: 15.6,
    datetime: '2020-05-20',
    temp: 14.2,
    min_temp: 9.8,
  },
  {
    valid_date: '2020-05-21',
    weather: { icon: 'c02d', code: 802, description: 'Scattered clouds' },
    max_temp: 17.1,
    datetime: '2020-05-21',
    temp: 13.4,
    min_temp: 9.8,
  },
];
const date = '2020-05-20';

const newData = cleanData(mockData, date);
const selectedData = {
  valid_date: '2020-05-20',
  weather: { icon: 'c04d', code: 804, description: 'Overcast clouds' },
  max_temp: 15.6,
  datetime: '2020-05-20',
  temp: 14.2,
  min_temp: 9.8,
};

test('it returns an object', () => {
  expect(typeof newData).toBe('object');
});

test('it return the uses the last data if data with the current date is not found', () => {
  const newData = cleanData(mockData, '2020-05-25');
  const mockDataLastData = mockData[mockData.length - 1];
  expect(newData.weatherDate).toBe(mockDataLastData.valid_date);
});

describe('`id` property', () => {
  it('has a `id` property', () => {
    expect(newData).toHaveProperty('id');
  });

  it('`id` property is a string', () => {
    expect(typeof newData.id).toBe('string');
  });
});

describe('`temp` property', () => {
  it('has a `temp` property', () => {
    expect(newData).toHaveProperty('temp', selectedData.temp);
  });

  it('`temp` property is a number', () => {
    expect(typeof newData.temp).toBe('number');
  });
});

describe('`minTemp` property', () => {
  it('has a `minTemp` property', () => {
    expect(newData).toHaveProperty('minTemp', selectedData.min_temp);
  });

  it('`minTemp` property is a number', () => {
    expect(typeof newData.minTemp).toBe('number');
  });
});

describe('`maxTemp` property', () => {
  it('has a `maxTemp` property', () => {
    expect(newData).toHaveProperty('maxTemp', selectedData.max_temp);
  });

  it('`maxTemp` property is a number', () => {
    expect(typeof newData.maxTemp).toBe('number');
  });
});

describe('`weatherDate` property', () => {
  it('has a `weatherDate` property', () => {
    expect(newData).toHaveProperty('weatherDate', selectedData.valid_date);
  });

  it('`weatherDate` property is a string', () => {
    expect(typeof newData.weatherDate).toBe('string');
  });
});

describe('`weatherIcon` property', () => {
  it('has a `weatherIcon` property', () => {
    expect(newData).toHaveProperty('weatherIcon', selectedData.weather.icon);
  });

  it('`weatherIcon` property is a string', () => {
    expect(typeof newData.weatherIcon).toBe('string');
  });
});

describe('`weatherDesc` property', () => {
  it('has a `weatherDesc` property', () => {
    expect(newData).toHaveProperty('weatherDesc', selectedData.weather.description);
  });

  it('`weatherDesc` property is a string', () => {
    expect(typeof newData.weatherDesc).toBe('string');
  });
});
