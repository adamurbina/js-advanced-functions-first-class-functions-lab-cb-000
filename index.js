const returnFirstTwoDrivers  = function (drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers  = function (drivers){
  return drivers.slice(-2);
}

const selectingDrivers = function (drivers) {
  return [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)];
}
