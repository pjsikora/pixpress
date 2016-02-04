class GPIOAjax {
    constructor() {

    }

    enable(e) {
        this.ajax('on');
    }

    disable(e, num) {
        this.ajax('enable/'+num);
    }

    disableAll() {
        this.ajax('on');
    }

    disableLed() {
        this.ajax('on');
    }

    disableAll() {
        this.ajax('on');
    }

    disableLed() {
        this.ajax('on');
    }

    animationOn(e) {
        this.ajax("/animate-on");
    }

    animationOff(e) {
        this.ajax("/animate-off");
    }

    ajax() {
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
        }
    }
}

class DOMManipulator {
    gpio;

    constructor() {
        gpio = new GPIOAjax();
    }


}

class Main {
    constructor() {

    }
}