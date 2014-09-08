var typeExamples = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [], [12], ['something'], function(){}];


function coerceToNumber(array) {
  return array.map(function(item){
    return +item;
  });
}

function coerceToString(array) {
  return array.map(function(item) {
    return "" + item;
  });
}

function coerceToBoolean(array) {
  return array.map(function(item) {
    return !!item;
  });
}
