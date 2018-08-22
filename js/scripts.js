var players = [];
var playerTurnIndex = 0;

var Player = function (name, score) {
  this.name = name;
  this.score = score;
  this.turn = false;
}


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

//shows on page who's turn it is
var isTurn = function() {
  for(i=0;i<players.length;i++)
    if (players[i].turn === true) {
      $('.whoTurn').text(players[i].name);
    }
}

var switchTurn = function() {
  players[playerTurnIndex].turn = false;
  if (playerTurnIndex === players.length-1) {
    playerTurnIndex = 0;
  } else {
    playerTurnIndex += 1;
  }
  players[playerTurnIndex].turn = true;
}

var currentScore = function() {
  var currentScore = players[playerTurnIndex].score;
  return currentScore;
}

var addScore = function(inputScore) {
  players[playerTurnIndex].score += inputScore;
}

var evalScore = function() {
  $('#nameP1').text(players[0].name);
  $('#nameP2').text(players[1].name);
  $('#scoreP1').text(players[0].score);
  $('#scoreP2').text(players[1].score);
}

$(document).ready(function() {
  var newPlayer = new Player("Brian", 0);
  players.push(newPlayer);
  var newPlayer = new Player("Vera", 0);
  players.push(newPlayer);
  evalScore();
  var score = 0;
  var runningTally = 0;
  var output;
  $('#rollDice').click(function() {
    var roll = Math.ceil(Math.random()*6);
    output = evalDice(roll);
    if (output === 0){
      runningTally = 0;
      $('.output').append("You Rolled a '1'. Your tally is reset.<br>");
      switchTurn();
      isTurn();
    } else {
      var tempScore = runningTally + output + currentScore();
      var ending = isFinished(tempScore);
      if (ending !== undefined) {
        $('.output').append(ending + " with a score of " + tempScore);
      } else {
        runningTally += output;
        $('.output').append("Roll: " + output + " This is your tally: " + runningTally + '<br>');
      }
    }
  });

  $('#holdGame').click(function(){
    addScore(runningTally);
    $('.output').append("Your turn is on hold. Your tally is " + runningTally + " Total Score: " + currentScore() + "<br>");
    runningTally = 0;
    switchTurn();
    isTurn();
    evalScore();

  });

  $('#begin').click(function() {
    $('.game').show();
    $('#begin').hide();
    playerTurnIndex = Math.ceil(Math.random()*2)-1;
    players[playerTurnIndex].turn = true;
    isTurn();

  });

});
