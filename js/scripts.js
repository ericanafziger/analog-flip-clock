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
  var minutesBottom = [];
  var hoursBottom = [];

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

  var hoursTens;
  var hoursOnes;
  var minutesTens;
  var minutesOnes;
  var secondsTens;
  var secondsOnes;
  var secondsOnesBottom;

  setInterval(function(){
    clock();
    //================= Seconds Output ================//
    var newSecondsTens = output[2].seconds[0];
    if (newSecondsTens !== secondsTens) {
      secondsTens = newSecondsTens;
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
    //================= Minutes Output ================//
    var newMinutesTens = output[1].minutes[0];
    if (newMinutesTens !== minutesTens) {
      minutesTens = newMinutesTens;
    }
    $('#minutes-tens-top-front h1').html(minutesTens);
    $('#minutes-tens-top-back h1').html(minutesTens);
    $('#minutes-tens-bottom-top h1').html(minutesTens);

    var newMinutesOnes = output[1].minutes[1];
    if (newMinutesOnes !== minutesOnes) {
      minutesOnes = newMinutesOnes;
    }
    $('#minutes-ones-top-front h1').html(minutesOnes);
    $('#minutes-ones-top-back h1').html(minutesOnes);
    $('#minutes-ones-bottom-top h1').html(minutesOnes);
    //================= Hours Output ================//
    var newHoursTens = output[0].hour[0];
    if (newHoursTens !== hoursTens) {
      hoursTens = newHoursTens;
    }
    $('#hours-tens-top-front h1').html(hoursTens);
    $('#hours-tens-top-back h1').html(hoursTens);
    $('#hours-tens-bottom-top h1').html(hoursTens);

    var newHoursOnes = output[0].hour[1];
    if (newHoursOnes !== hoursOnes) {
      hoursOnes = newHoursOnes;
    }
    $('#hours-ones-top-front h1').html(hoursOnes);
    $('#hours-ones-top-back h1').html(hoursOnes);
    $('#hours-ones-bottom-top h1').html(hoursOnes);

  }, 1000);//end of Set Interval function

  //=============Beginning of binding to DOM functions=================//

  $('#hours-tens-top-front').bind("DOMSubtreeModified", function() {
    $('#hours-tens-top-front').addClass('animate-front').delay(1000).queue(function(next){
      $(this).removeClass('animate-front');
      $('#hours-tens-bottom-bottom h1').html(hoursTens);
      next();
    });
    $('#hours-tens-top-back').addClass('animate-back').delay(1000).queue(function(next){
      $(this).removeClass('animate-back');
      $('#hours-tens-bottom-bottom h1').html(hoursTens);
      next();
    });
  });

  $('#hours-ones-top-front').bind("DOMSubtreeModified", function() {
    $('#hours-ones-top-front').addClass('animate-front').delay(1000).queue(function(next){
      $(this).removeClass('animate-front');
      $('#hours-ones-bottom-bottom h1').html(hoursOnes);
      next();
    });
    $('#hours-ones-top-back').addClass('animate-back').delay(1000).queue(function(next){
      $(this).removeClass('animate-back');
      $('#hours-ones-bottom-bottom h1').html(hoursOnes);
      next();
    });
  });

  $('#minutes-tens-top-front').bind("DOMSubtreeModified", function() {
    $('#minutes-tens-top-front').addClass('animate-front').delay(1000).queue(function(next){
      $(this).removeClass('animate-front');
      $('#minutes-tens-bottom-bottom h1').html(minutesTens);
      next();
    });
    $('#minutes-tens-top-back').addClass('animate-back').delay(1000).queue(function(next){
      $(this).removeClass('animate-back');
      $('#minutes-tens-bottom-bottom h1').html(minutesTens);
      next();
    });
  });

  $('#minutes-ones-top-front').bind("DOMSubtreeModified", function() {
    $('#minutes-ones-top-front').addClass('animate-front').delay(1000).queue(function(next){
      $(this).removeClass('animate-front');
      $('#minutes-ones-bottom-bottom h1').html(minutesOnes);
      next();
    });
    $('#minutes-ones-top-back').addClass('animate-back').delay(1000).queue(function(next){
      $(this).removeClass('animate-back');
      $('#minutes-ones-bottom-bottom h1').html(minutesOnes);
      next();
    });
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
  $('#seconds-ones-top-front').bind("DOMSubtreeModified", function() {
    $('#seconds-ones-top-front').addClass('animate-front2');
    $('#seconds-ones-top-back').addClass('animate-back2');
  });

});//end of Document Ready
