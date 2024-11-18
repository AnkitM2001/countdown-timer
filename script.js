let timer;
let remainingTime;
let isPaused = false;

document.getElementById('startButton').addEventListener('click', function() {
    let minutes = parseInt(document.getElementById('minutesInput').value);
    if (isNaN(minutes)) {
        alert('Please enter a valid number');
        return;
    }
    remainingTime = minutes * 60;
    updateDisplay();
    timer = setInterval(countDown, 1000);
});

document.getElementById('pauseButton').addEventListener('click', function() {
    if (isPaused) {
        timer = setInterval(countDown, 1000);
    } else {
        clearInterval(timer);
    }
    isPaused = !isPaused;
});

document.getElementById('resetButton').addEventListener('click', function() {
    clearInterval(timer);
    remainingTime = 0;
    updateDisplay();
    document.getElementById('minutesInput').value = '';
});

function countDown() {
    if (remainingTime > 0) {
        remainingTime--;
        updateDisplay();
    } else {
        clearInterval(timer);
        alert("Time's up!");
    }
}

function updateDisplay() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    document.getElementById('timeDisplay').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
