

var evalDice = function(input) {
  var output;
  if (input === 1) {
    output = "Your Turn is Over."
  } else {
    output = input;
  }
  return output;
}





$(document).ready(function() {


  $('#rollDice').click(function() {
    var roll = Math.ceil(Math.random()*6);
    var output = evalDice(roll);

    $('.output').append(output + '<br>');
  });




});
