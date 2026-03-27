function calculateSI() {
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);

    // SI formula
    var si = (p * r * t) / 100;

    document.getElementById("res").innerHTML = "Simple Interest: " + si;
}