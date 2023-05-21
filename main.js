function check() {
    var inputLink = document.getElementById("input").value;
    var output = document.getElementById("output");

    if (valid(inputLink)) {
        var domain = checker(inputLink);

        if (domain !== null) {
            if (domain.endsWith(".zip")) {
                output.innerText = "This link is a .zip domain";
                output.classList.add("red");
            } else {
                output.innerText = "This link came from " + domain;
                output.classList.remove("red");
            }
        } else {
            output.innerText = "Invalid link";
            output.classList.remove("red");
        }
    } else {
        output.innerText = "Invalid link";
        output.classList.remove("red");
    }
}

function valid(link) {
    var pattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;
    return pattern.test(link);
}

function checker(link) {
    var match = link.match(/^(?:https?:\/\/)?(?:www\.)?([^\/\n?]+)/im);
    return match ? match[1] : null;
}