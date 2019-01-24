const returnFirstTwoDrivers  = function (drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers  = function (drivers){
  return drivers.slice(-2);
}

const selectingDrivers = function (drivers) {
  const array = [];
  array.push(returnFirstTwoDrivers);
  array.push(returnLastTwoDrivers);
  return array;
}
