function count() {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    var selected = [];
    var count = 0;

    checkboxes.forEach(function(cb) {
        if(cb.checked) {
            selected.push(cb.value);
            count++;
        }
    });

    document.getElementById("out").innerHTML =
        "Selected Count: " + count + "<br>Subjects: " + selected.join(", ");
}