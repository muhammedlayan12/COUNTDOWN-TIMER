function CountdownTimer(totalTimeInSeconds) {
    this.totalTime = totalTimeInSeconds;
    this.remainingTime = totalTimeInSeconds;
    this.intervalId = null;
    this.formatTime = function (seconds) {
        var minutes = Math.floor(seconds / 60);
        var secs = seconds % 60;
        return String(minutes).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
    };
    this.updateDisplay = function () {
        console.log(this.formatTime(this.remainingTime));
    };
    this.tick = function () {
        if (this.remainingTime > 0) {
            this.remainingTime--;
            this.updateDisplay();
        }
        else {
            this.stop();
            console.log('Countdown finished');
        }
    };
    this.start = function () {
        var self = this;
        if (this.intervalId === null) {
            this.intervalId = setInterval(function () {
                self.tick();
            }, 1000);
        }
    };
    this.stop = function () {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    };
    this.reset = function () {
        this.stop();
        this.remainingTime = this.totalTime;
        this.updateDisplay();
    };
}
var countdown = new CountdownTimer(10);
countdown.start();
