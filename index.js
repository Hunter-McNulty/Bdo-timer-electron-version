var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require('path');
var createWindow = function () {
    var win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.loadFile('index.html');
};
app.whenReady().then(function () {
    createWindow();
});
function incrementTimer() {
    if (timerIsOn == "on") {
        if (seconds < 10) {
            seconds += 1;
            timer.innerHTML = "".concat(minutes, ":").concat(tens).concat(seconds);
        }
        if (seconds >= 10) {
            tens += 1;
            seconds = 0;
            timer.innerHTML = "".concat(minutes, ":").concat(tens).concat(seconds);
        }
        if (tens >= 6) {
            minutes += 1;
            tens = 0;
        }
        timer.innerHTML = "".concat(minutes, ":").concat(tens).concat(seconds);
    }
}
function runTimer() {
    timerIsOn = 'on';
    if (timerIsOn == 'on' && seconds <= 0) {
        var interv = setInterval(incrementTimer, 1000);
    }
}
function pause() {
    timerIsOn = 'off';
}
function resetTimer() {
    seconds = 0;
    tens = 0;
    minutes = 0;
    timer.innerHTML = "".concat(minutes, ":").concat(tens).concat(seconds);
}
