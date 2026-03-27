function show() {
    var radios = document.getElementsByName("color");
    var selected = "";

    for(var i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            selected = radios[i].value;
        }
    }

    document.getElementById("res").innerHTML = "Selected: " + selected;
}