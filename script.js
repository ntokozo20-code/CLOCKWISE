let is24Hour = false;

function Time() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "AM";

  if (!is24Hour) {
    if (hours >= 12) {
      ampm = "PM";
      if (hours > 12) {
        hours = hours - 12;
      }
    }
    if (hours === 0) {
      hours = 12;
    }
  }

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("ampm").innerText = is24Hour ? "" : ampm;
  document.getElementById("date").innerText = now.toDateString();
}

const toggleBtn = document.getElementById("toggleFormat");

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.innerText = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
  Time();
});

setInterval(showTime, 1000);
Time();
