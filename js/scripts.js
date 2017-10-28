function numLister(num) {
  var numArray = [];
  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      numArray.push("<li> " + "I'm sorry, Dave. I'm afraid I can't do that." + "</li>");
    } else {
      numArray.push("<li> " + i + " </li>");
    }
  }
  //Case is support for specs
  var beepCase = numArray.toString().replace(/1/g, " " + "Beep! ");
  var boopCase = beepCase.replace(/0/g, " " + "Boop!");
  var outputNum = boopCase.replace(/,/g, "");

  return outputNum
};

// User Interface Logic:
$(function() {
  $("#counter").submit(function(event) {
    event.preventDefault();
    $('#countup-output').empty();
    $("#countup-output").append(numLister(parseInt($("#number-input").val())));
  });
});
