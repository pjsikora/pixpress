function ajax(url) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/"+url, true);
    xhttp.send();
}


function enable(e) {
    ajax('on');
    //var xhttp = new XMLHttpRequest();
    //
    //xhttp.open("GET", "/on", true);
    //xhttp.send();
}

function enableLed(e, num) {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/enable/" + num, true);
    xhttp.send();
}

function disableLed(e, num) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/disable/" + num, true);
    xhttp.send();
}

function disable(e) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/off", true);
    xhttp.send();
}

function animationOn(e) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/animate-on", true);
    xhttp.send();
}
function animationOff(e) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/animate-off", true);
    xhttp.send();
}