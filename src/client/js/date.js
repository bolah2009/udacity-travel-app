const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const date = dateString => new Date(dateString);

const dateTimeFormat = new Intl.DateTimeFormat('en-NG', options);

export const formatDate = dateString => dateTimeFormat.format(date(dateString));

export const getDayDiff = tripDateString => {
  const today = new Date();
  const tripDate = new Date(tripDateString);
  const diffInTime = tripDate.getTime() - today.getTime();
  return Math.round(diffInTime / (1000 * 3600 * 24));
};

export const getCountdownDays = tripDateString => {
  const days = getDayDiff(tripDateString);

  if (days > 1) return `${days} days away`;
  if (days === 0) return 'today';
  return `${Math.abs(days)} ago`;
};
