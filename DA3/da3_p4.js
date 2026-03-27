function calculate() {
    var length = 10;      // integer
    var width = 5;
    var area1 = length * width;

    var length2 = 10.5;   // float
    var width2 = 4.5;
    var area2 = length2 * width2;

    document.getElementById("res").innerHTML =
        "Integer Area: " + area1 + "<br>Float Area: " + area2;
}