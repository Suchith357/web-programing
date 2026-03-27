function calc(op) {
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    var result;

    switch(op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/':
            if (b == 0) {
                result = "Cannot divide by zero";
            } else {
                result = a / b;
            }
            break;
    }

    document.getElementById("ans").innerHTML = result;
}