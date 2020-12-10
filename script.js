const hour_hand = document.getElementById("hour-hand");
const minute_hand = document.getElementById("minute-hand");
const second_hand = document.getElementById("second-hand");
const days_hand = document.getElementById("days-hand");

const input_hour = document.getElementById("time-colector");
const input_date = document.getElementById("date-colector");

var x = setInterval(function() {
  try {
    let time = input_hour.value;
    let date = input_date.value;

    var desired_dt = new Date(date + " " + time).toISOString(),
      actual_dt = new Date().getTime(),
      desired_dt = new Date(desired_dt).getTime();
    var distance = desired_dt - actual_dt;

    convertToTime(distance);

    if (distance <= 0) {
      clearInterval(x);
    }
  } catch {}
}, 1000);

convertToTime = num => {
  var days = Math.floor(num / (1000 * 60 * 60 * 24));
  var hour = Math.floor((num % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((num % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((num % (1000 * 60)) / 1000);

  console.log(seconds);

  days_hand.innerHTML = days;
  hour_hand.innerHTML = hour;
  minute_hand.innerHTML = minutes;
  second_hand.innerHTML = seconds;
};
