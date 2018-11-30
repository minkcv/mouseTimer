var startTime = null;
var endTime = null;
var reps = 0;
var times = [];
var which = -1; // -1 indicates not started

function start() {
    if (which == -1) { // Don't start multiple times.
        which = Math.floor(Math.random() * 4);
        if (which == 0) {
            document.getElementById('topleft').style.background = 'red';
        }
        else if (which == 1) {
            document.getElementById('topright').style.background = 'red';
        }
        else if (which == 2) {
            document.getElementById('bottomleft').style.background = 'red';
        }
        else if (which == 3) {
            document.getElementById('bottomright').style.background = 'red';
        }
        startTime = performance.now();
    }
}

// User clicked the correct red button
// Save the time and restart the process
function click() {
    endTime = performance.now();
    var delta = endTime - startTime;
    times.push(delta);
    reps++;
    var avg = 0;
    times.forEach((t) => {
        avg += t;
    });
    avg /= reps;
    document.getElementById('time').innerHTML = delta;
    document.getElementById('reps').innerHTML = reps;
    document.getElementById('avg').innerHTML = avg;

    // Reset colors
    var btns = document.getElementsByTagName('button');
    for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        btn.style.background = '';
    }
    which = -1;
}

function clicktopleft() {
    if (which != 0)
        return; // Wrong button
    click();
}

function clicktopright() {
    if (which != 1)
        return; // Wrong button
    click();
}

function clickbottomleft() {
    if (which != 2)
        return; // Wrong button
    click();
}

function clickbottomright() {
    if (which != 3)
        return; // Wrong button
    click();
}