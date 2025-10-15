// write js code here if required
// script.js

function updateTimer() {
  const timer = document.getElementById("timer");
  const now = new Date();

  // Extract date and time components
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format: dd/mm/yyyy, hh:mm:ss
  timer.textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}

// Call immediately once, then every second
updateTimer();
setInterval(updateTimer, 1000);
