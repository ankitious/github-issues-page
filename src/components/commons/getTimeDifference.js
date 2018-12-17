const getMsDifference = date => new Date() - new Date(date);

const getHrDiff = date => Math.floor(getMsDifference(date) / 1000 / 60 / 60);

const getHoursDifference = date => (Math.floor(getMsDifference(date) / 1000 / 60 / 60) >= 2 ? `${Math.floor(getMsDifference(date) / 1000 / 60 / 60)} hours` : 'an hour');

const getDaysDifference = date => (Math.floor(getHrDiff(date) / 24) >= 2 ? `${Math.floor(getHrDiff(date) / 24)} days` : 'a day');

export const getDifference = date => (getHrDiff(date) >= 24
  ? getDaysDifference(date) : getHoursDifference(date));
