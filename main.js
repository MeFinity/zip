function check() {
    var inputLink = document.getElementById("input").value;
    var output = document.getElementById("output");

    if (valid(inputLink)) {
        var domain = checker(inputLink);

        if (domain !== null) {
            if (domain.endsWith(".zip")) {
                output.innerText = "This link is a .zip domain";
                output.classList.add("red");
                output.classList.remove("green");
            } else {
                output.innerText = "This link came from " + domain;
                output.classList.add("green");
            }
        }
    } else {
        output.innerText = inputLink + " is an Invalid link";
        output.classList.remove("green");
    }
}

function valid(link) {
    var pattern = /^(https?:\/\/)?([^\s\/?#]+\.)+[^\s\/?#]+(\/[^\s]*)?(\/[^?\s#]*\.[^?\s#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;
    return pattern.test(link);
}

function checker(link) {
    var match = link.match(/^(?:https?:\/\/)?(?:www\.)?([^\/\n?]+)/im);
    return match ? match[1] : null;
}