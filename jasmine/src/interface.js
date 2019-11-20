$(document).ready(function() {

  counter = new RowCounter();

  $('#left-button').click(function() {
    counter.increaseLeft();
    $('#left-value').text(counter.leftValue);
  })

  $('#right-button').click(function() {
    counter.increaseRight();
    $('#right-value').text(counter.rightValue);
  })

});
