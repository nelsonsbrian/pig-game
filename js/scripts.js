$(document).ready(function() {


  $('#rollDice').click(function() {
    var roll = Math.ceil(Math.random()*6);


    $('.output').append(roll);
  });




});
