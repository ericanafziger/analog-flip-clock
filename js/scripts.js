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
  var hoursTensArray = ["hours-tens-top-front", "hours-tens-top-back", "hours-tens-bottom-top", "hours-tens-bottom-bottom"];
  for (var i = 0; i < hoursTensArray.length; i++) {
    document.getElementById(hoursTensArray[i]).innerHTML = "<h1>" + hour[0] + "</h1>";
  }

  var hoursOnesArray = ["hours-ones-top-front", "hours-ones-top-back", "hours-ones-bottom-top", "hours-ones-bottom-bottom"];
  for (var i = 0; i < hoursOnesArray.length; i++) {
    document.getElementById(hoursOnesArray[i]).innerHTML = "<h1>" + hour[1] + "</h1>";
  }

  var minutesTensArray = ["minutes-tens-top-front", "minutes-tens-top-back", "minutes-tens-bottom-top", "minutes-tens-bottom-bottom"];
  for (var i = 0; i < minutesTensArray.length; i++) {
    document.getElementById(minutesTensArray[i]).innerHTML = "<h1>" + minutes[0] + "</h1>";
  }

  var minutesOnesArray = ["minutes-ones-top-front", "minutes-ones-top-back", "minutes-ones-bottom-top", "minutes-ones-bottom-bottom"];
  for (var i = 0; i < minutesOnesArray.length; i++) {
    document.getElementById(minutesOnesArray[i]).innerHTML = "<h1>" + minutes[1] + "</h1>";
  }
  var secondsTensArray = ["seconds-tens-top-front", "seconds-tens-top-back", "seconds-tens-bottom-top"];
  for (var i = 0; i < secondsTensArray.length; i++) {
    document.getElementById(secondsTensArray[i]).innerHTML = "<h1>" + seconds[0] + "</h1>";
  }
  document.getElementById("seconds-tens-bottom-bottom").innerHTML = "<h1>" + secondsBottom[0] + "</h1>";


  document.getElementById("seconds-ones-top-front").innerHTML = "<h1>" + seconds[1] + "</h1>";
    document.getElementById("seconds-ones-top-back").innerHTML = "<h1>" + seconds[1] + "</h1><p>" + ampm + "</p>";
  document.getElementById("seconds-ones-bottom-top").innerHTML = "<h1>" + seconds[1] + "</h1>";
  document.getElementById("seconds-ones-bottom-bottom").innerHTML = "<h1>" + secondsBottom[1] + "</h1><p>" + ampm + "</p>";
}



setInterval("clock()", 1000); //updates every 1000ms
