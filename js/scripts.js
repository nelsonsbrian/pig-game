

var evalDice = function(input) {
  var output;
  var runningTally;
  if (input === 1) {
    output = 0;
  } else {
    output = input;
  }
  return output;
}





$(document).ready(function() {

  var runningTally = 0;

  $('#rollDice').click(function() {
    var roll = Math.ceil(Math.random()*6);
    var output = evalDice(roll);
    if (output === 0){
      runningTally = 0;
      alert("Your turn is over; tally reset to 0.");
    }
    runningTally += output;



    $('.output').append(output + "This is your tally: " + runningTally + '<br>');
  });




});
