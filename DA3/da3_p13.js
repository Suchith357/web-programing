function calculateTotal() {
    var items = document.querySelectorAll("input[type='checkbox']");
    var total = 0;

    for (var item of items) {
        if(item.checked) {
            total += parseFloat(item.value);
        }
    }

    document.getElementById("res").innerHTML = "Total Price: " + total;
}