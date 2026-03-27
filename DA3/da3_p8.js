function table() {
    var n = parseInt(document.getElementById("num").value);
    var i = 1;
    var result = "";

    do {
        result += n + " x " + i + " = " + (n*i) + "<br>";
        i++;
    } while(i <= 10);

    document.getElementById("out").innerHTML = result;
}