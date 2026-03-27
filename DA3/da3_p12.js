function validate() {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    var selected = [];

    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
    }

    if(selected.length < 3) {
        document.getElementById("out").innerHTML =
            "Select at least 3 skills!";
    } else {
        document.getElementById("out").innerHTML =
            "Skills: " + selected.join(", ");
    }
}