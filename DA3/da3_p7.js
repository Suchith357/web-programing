function printNumbers() {
    var n = parseInt(document.getElementById("num").value);
    var i = 1;
    var result = "";

    while(i <= n) {
        result += i + " ";
        i++;
    }

    document.getElementById("out").innerHTML = result;
}