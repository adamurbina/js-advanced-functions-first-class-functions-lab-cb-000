const returnFirstTwoDrivers  = function (drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers  = function (drivers){
  return drivers.slice(-2);
}

const selectingDrivers = function (drivers) {
  array = [];
  array.push(returnFirstTwoDrivers(drivers));
  array.push(returnLastTwoDrivers(drivers));
  return array; 
}
