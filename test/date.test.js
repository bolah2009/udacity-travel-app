const { formatDate, getCountdownDays, getDayDiff } = require('../src/client/js/date');

let today = 0;
let fiveDays = 0;
let previousDay = 0;
let futureDay = 0;

beforeEach(() => {
  today = new Date().getTime() + 3000;
  fiveDays = 1000 * 3600 * 24 * 5;
  previousDay = today - fiveDays;
  futureDay = today + fiveDays;
});

describe('`formatDate` function', () => {
  it('returns a string', () => {
    expect(typeof formatDate('2020-10-10')).toBe('string');
  });
});

describe('`getDayDiff` function', () => {
  it('returns a number', () => {
    expect(typeof getDayDiff('2020-10-10')).toBe('number');
  });

  it('returns a positive number for future date', () => {
    expect(getDayDiff(futureDay)).toBeGreaterThan(0);
  });

  it('returns a negative number for past date', () => {
    expect(getDayDiff(previousDay)).toBeLessThan(0);
  });

  it('returns zero for today date', () => {
    expect(getDayDiff(today)).toBe(0);
  });
});

describe('`getCountdownDays` function', () => {
  it('returns a number', () => {
    expect(typeof getCountdownDays('2020-10-10')).toBe('string');
  });

  it("to match 'away' for future date", () => {
    expect(getCountdownDays(futureDay)).toMatch(/away/);
  });

  it("to match 'ago' for past date", () => {
    expect(getCountdownDays(previousDay)).toMatch(/ago/);
  });

  it("to match 'today' for today date", () => {
    expect(getCountdownDays(today)).toMatch(/today/);
  });
});
