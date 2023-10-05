var startTime;
var elapsedTime = 0;
var timerInterval;

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateDisplay, 10);
}

function stop() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

function updateDisplay() {
  var milliseconds = elapsedTime % 1000;
  var seconds = Math.floor(elapsedTime / 1000) % 60;
  var minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
  var hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  var displayText =
    pad(hours) + ":" +
    pad(minutes) + ":" +
    pad(seconds) + "." +
    padMilliseconds(milliseconds);

  document.getElementById("display").textContent = displayText;
  elapsedTime = Date.now() - startTime;
}

function pad(number) {
  return (number < 10) ? "0" + number : number;
}

function padMilliseconds(milliseconds) {
  return (milliseconds < 10) ? "00" + milliseconds :
    (milliseconds < 100) ? "0" + milliseconds : milliseconds;
}