

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

var isFinished = function(score) {
  var output;
  if (score >= 15) {
    output = 'You have won';
    return output;
  }
}



$(document).ready(function() {
  var score = 0;
  var runningTally = 0;
  var output;
  $('#rollDice').click(function() {
    var roll = Math.ceil(Math.random()*6);
    output = evalDice(roll);
    if (output === 0){
      runningTally = 0;
      $('.output').append("You Rolled a '1'. Your tally is reset.<br>");
    } else {
      runningTally += output;
      $('.output').append("Roll: " + output + " This is your tally: " + runningTally + '<br>');
    }
  });

  $('#holdGame').click(function(){
    score += runningTally;
    $('.output').append("Your turn is on hold. Your tally is " + runningTally + " Total Score: " + score + "<br>");
    runningTally = 0;
    var ending = isFinished(score);

    if (ending !== undefined) {
      $('.output').append(ending);
    }
  });


});
