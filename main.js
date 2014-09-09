$(".accordion>div").on("click", function() {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});

var typeExamples = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [], [12], ['something'], function(){}];

var typeTitles = ["undefined", "null", "true", "false", '""', '"1.2"', '"one"', "0", "-0", "NaN", "Infinity", "-Infinity", "1", "{}", "[]", "[12]", "['something']", "function(){}"];

function quoteWrap(array) {
  return array.map(function(item) {
    return '"' + item + '"';
  });
}

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

function addColumn(heading, array, columnIndex) {
  var html = '<th class = "column-title column' + (columnIndex) + "\">" + heading + "</th>";
  $("tr").eq(0).append(html);
  array.forEach(function(item, index) {
    html = "<td class = \"column" + (columnIndex) + "\">" + item + "</td>";
    $("tr").eq(index+1).append(html);
  });
}

function firstColumn(heading, array) {
  var html = '<tr><th class="column-title heading-column">' + heading + "</th></tr>";
  $("tbody").append(html);
  array.forEach(function(item) {
    var html = '<tr><td class ="heading-column">' + item + "</td></tr>";
    $("tbody").append(html);
  });
}


firstColumn("Start with...", typeTitles);
addColumn("Coerce to String", quoteWrap(coerceToString(typeExamples)), 1);
addColumn("Coerce to Number", coerceToNumber(typeExamples), 2);
addColumn("Coerce to Boolean", coerceToBoolean(typeExamples), 3);

$("th.column1").addClass("open");

function openColumn(buttonName, columnNumber) {
  var columnNumberHeader = "th.column" + columnNumber;
  $(buttonName).on("click", function(){
    $("th").removeClass("open");
    $(columnNumberHeader).addClass("open");
  });
}

openColumn(".open-string", 1);
openColumn(".open-number", 2);
openColumn(".open-boolean", 3);
