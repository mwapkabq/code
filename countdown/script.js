
var minutes = 25;
var seconds = 0;
var timer;

function startTimer() {
	timer = setInterval(decrementTime, 1000);
}

function stopTimer() {
	clearInterval(timer);
}

function decrementTime() {
	if (seconds == 0) {
		if (minutes == 0) {
			stopTimer();
			alert("Time's up!");
		} else {
			minutes--;
			seconds = 59;
		}
	} else {
		seconds--;
	}

	updateTimer();
}

function updateTimer() {
	document.getElementById("minutes").innerHTML = padZero(minutes);
	document.getElementById("seconds").innerHTML = padZero(seconds);
}

function padZero(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}
