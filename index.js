const returnFirstTwoDrivers  = function (drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers  = function (drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function () {
    return num * num;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function fetchSpecifiedDrivers(arrayOfDrivers, function){
  function(arrayOfDrivers);
}
