
function repite(){
var startTime = new Date("july 19, 2021");

// later record end time
var endTime = new Date();

// time difference in ms
var timeDiff = endTime - startTime;

// strip the ms
timeDiff /= 1000;

// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
var seconds = Math.round(timeDiff % 60);

// remove seconds from the date
timeDiff = Math.floor(timeDiff / 60);

// get minutes
var minutes = Math.round(timeDiff % 60);

// remove minutes from the date
timeDiff = Math.floor(timeDiff / 60);

// get hours
var hours = Math.round(timeDiff % 24);

// remove hours from the date
timeDiff = Math.floor(timeDiff / 24);

// the rest of timeDiff is number of days
var days = timeDiff ;

    // document.getElementById('second').innerHTML = seconds;


    if (days != 1){ //si el dia es distinto a uno entonces son "días"
        document.getElementById('day').innerHTML = days + " " + 'Días';
    }
    else{
        document.getElementById('day').innerHTML = days + " " + 'Día';
    }

    if (hours != 1){ //si la hora es distinto a uno entonces son "horas"
        document.getElementById('hour').innerHTML = hours + " " + 'Horas';
    }
    else{
        document.getElementById('hour').innerHTML = hours + " " + 'Hora';
    }

    if (minutes != 1){ //si el minuto es distinto a uno entonces son "minutos"
        document.getElementById('minute').innerHTML = minutes + " " + 'Minutos';
    }
    else{
        document.getElementById('minute').innerHTML = minutes + " " + 'Minuto';
    }

    if (seconds != 1){ //si el segundo es distinto a uno entonces son "segundos"
        document.getElementById('second').innerHTML = seconds + " " + 'Segundos';
    }
    else{
        document.getElementById('second').innerHTML = seconds + " " + 'Segundo';
    }
}


window.onload = function() {
    setInterval(repite, 1000);
  }
