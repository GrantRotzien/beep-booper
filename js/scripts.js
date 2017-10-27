function numLister(num) {
  var numArray = [];
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      numArray.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      numArray.push(" " + i);
    }
  }
  //Case is support for specs
  var beepCase = numArray.toString().replace(/1/g, " " + "Beep!");
  var boopCase = beepCase.replace(/0/g, " " + "Boop!");
  var outputNum = boopCase.replace(/,/g, "");

  return outputNum
  console.log(outputNum);
};












// User Interface Logic:
$(function() {
  $("#counter").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#num-input").val());
    var output = numLister(userInput);
    $("#countup-output").text(output);
  });
});
