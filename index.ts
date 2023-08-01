const { app, BrowserWindow } = require('electron')

const path = require('path')
let interv;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
    }
})
    win.loadFile('index.html')
    win.removeMenu();
}
app.whenReady().then(() => {
    createWindow()
})

function incrementTimer() {
    if (timerIsOn == "on") {
        if (seconds < 10) {
            seconds+= 1;
            timer.innerHTML = `${minutes}:${tens}${seconds}`;
        }
        if (seconds >= 10) {
            tens+= 1;
            seconds = 0;
            timer.innerHTML = `${minutes}:${tens}${seconds}`;
        }
        if (tens >= 6) {
            minutes+= 1;
            tens = 0;
        }
        timer.innerHTML = `${minutes}:${tens}${seconds}`;
}}

function runTimer() {
    timerIsOn = 'on';
    if (timerIsOn == 'on' && seconds <= 0) {
        interv = setInterval(incrementTimer, 1000);
    }
}

function pause() {
    timerIsOn = 'off';
}

function resetTimer() {
    clearInterval(interv);
    seconds = 0;
    tens = 0;
    minutes = 0;
    timer.innerHTML = `${minutes}:${tens}${seconds}`;
}
