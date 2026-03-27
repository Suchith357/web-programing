function generateEmail(btn) {
    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;

    var email = f + "." + l + "@park.edu";

    document.getElementById("result").innerHTML = email;

    // reset form
    btn.form.reset();

    // focus back
    document.getElementById("fname").focus();
}