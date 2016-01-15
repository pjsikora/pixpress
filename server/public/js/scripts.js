function ajax(url) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/api/"+url, true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(JSON.parse(xhttp.responseText).message);

            var element = document.createElement("P");
            var text = document.createTextNode(JSON.parse(xhttp.responseText).message);       // Create a text node

            element.appendChild(text);
            document.getElementById('logger').appendChild(element);
        }
    };
}


function enable(e) {
    ajax('on');
}

function enableLed(e, num) {
    ajax('enable/'+num);
}

function disableLed(e, num) {
    ajax('disable/'+num);
}

function disable(e) {
    ajax('off');
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