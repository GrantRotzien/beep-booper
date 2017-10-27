

var toInteger = function(stringArray) {
  var parsedInteger = [];
  stringArray.forEach(function(string) {
    var integer = parseInt(string);
    parsedInteger.push(integer);
    console.log(parsedInteger)
  });

};












// User Interface Logic:
$(function() {
  $("#counter").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#num-input").val());
    var output = inputCounter(userInput);
    $("#countup-output").text(output);
  });
});
