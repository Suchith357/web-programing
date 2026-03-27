function showMessage() {
    var msg = document.getElementById("output");
    
    // outerHTML replaces the entire element
    msg.outerHTML = "<h2>Hello, world!</h2>";
}