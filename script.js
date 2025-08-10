function updateClock() {
  const now = new Date();

  // Time formatting
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeStr = `${hours}:${minutes}:${seconds}`;

  // Date formatting
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString(undefined, options);

  document.getElementById("time").textContent = timeStr;
  document.getElementById("date").textContent = dateStr;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
