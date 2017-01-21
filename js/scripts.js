function clock() {
  function addZero(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }
  var ampm;
  var hours;
  var d = new Date();
  var h = (d.getHours());
  if (h > 12) {
    hours = ((h + 11) % 12) + 1;
    hours = addZero(hours);
    ampm = "pm";
  } else if (h === 12) {
    hours = 12;
    ampm = "pm";
  } else if (h === 0) {
    hours = 12;
    ampm = "am";
  } else if (h < 12){
    hours = addZero(h);
    ampm = "am";
  }
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());

  var hour = hours.toString().split("");
  var minutes = m.toString().split("");
  var seconds = s.toString().split("");
  var secondsBottom = [];

  if (s > 10) {
    secondsBottom =  (s-1).toString().split("");
  } else if (s < 10 && s > 0){
    var s = addZero(d.getSeconds());
    var secondsSplit = "0" + (s-1).toString().split("");
    secondsBottom = secondsSplit.split("");
  } else if (s == 0) {
    var s = 59;
    secondsBottom = s.toString().split("");
  } else if (s == 10) {
    var s = "0" + 9;
    secondsBottom = s.toString().split("");
  }

  return output = [{"hour": hour}, {"minutes": minutes}, {"seconds": seconds}, {"secondsBottom": secondsBottom}];
}



$(document).ready(function() {

  var hour;
  var minute;
  var secondsTens;
  var secondsOnes;
  var secondsOnesBottom;
  var secondsTensBottom;

  setInterval(function(){
    clock();
    //================= Seconds Output ================//
    var newSecondsTens = output[2].seconds[0];
    var newSecondsTensBottom = output[3].secondsBottom[0];
    if (newSecondsTens !== secondsTens) {
      secondsTens = newSecondsTens;
      secondsTensBottom = newSecondsTensBottom;
    }
    $('#seconds-tens-top-front h1').html(secondsTens);
    $('#seconds-tens-top-back h1').html(secondsTens);
    $('#seconds-tens-bottom-top h1').html(secondsTens);

    var newSecondsOnes = output[2].seconds[1];
    var newSecondsOnesBottom = output[3].secondsBottom[1];
    if (newSecondsOnes !== secondsOnes) {
      secondsOnes = newSecondsOnes;
      secondsOnesBottom = newSecondsOnesBottom;
    }
    $('#seconds-ones-top-front h1').html(secondsOnes);
    $('#seconds-ones-top-back h1').html(secondsOnes);
    $('#seconds-ones-bottom-top h1').html(secondsOnes);
    $('#seconds-ones-bottom-bottom h1').html(secondsOnesBottom);
  }, 1000);

  $('#seconds-ones-top-front').bind("DOMSubtreeModified", function() {
      $('#seconds-ones-top-front').addClass('animate-front2');
      $('#seconds-ones-top-back').addClass('animate-back2');
  });
  $('#seconds-tens-top-front').bind("DOMSubtreeModified", function() {
    $('#seconds-tens-top-front').addClass('animate-front').delay(1000).queue(function(next){
      $(this).removeClass('animate-front');
      $('#seconds-tens-bottom-bottom h1').html(secondsTens);
      next();
    });
    $('#seconds-tens-top-back').addClass('animate-back').delay(1000).queue(function(next){
      $(this).removeClass('animate-back');
      $('#seconds-tens-bottom-bottom h1').html(secondsTens);
      next();
    });
  });

});
