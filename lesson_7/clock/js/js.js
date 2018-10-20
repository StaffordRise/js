function realTime() {
    let time = document.getElementById('time'),
         now = new Date(),
         hours = now.getHours();
         minutes = now.getMinutes();
         seconds = now.getSeconds();

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    time.innerHTML = hours + ':' + minutes + ':' + seconds; 

}
setInterval(realTime,1000);