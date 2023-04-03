
function showTime() { 
    var date = new Date();
    var housr = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = 'AM'
    if (housr > 12) { 
        session = 'PM'
        document.getElementById('MyClockDisplay').classList.add('pm');
    }
    if (h == 0) { 
        h = 12;
    } 
    if (housr < 10) { 
        housr = '0' + housr;
    }
    if (minute < 10) { 
        minute = '0' + minute;
    }
    if (second < 10) { 
        second = '0' + second;
    }

    var time = housr + ':' + minute + ':' + second + session
    document.getElementById('MyClockDisplay').innerText = time;   

}

showTime();
setInterval(showTime, 1000);
// 12


