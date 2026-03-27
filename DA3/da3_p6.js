var students = []; // array to store students

function addStudent() {

    // create object
    var student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value
    };

    students.push(student); // add to array

    displayStudents();
}

function displayStudents() {
    var table = document.getElementById("table");

    // clear old rows except header
    table.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
    </tr>`;

    // loop through array
    students.forEach(function(s) {
        var row = `<tr>
            <td>${s.name}</td>
            <td>${s.age}</td>
            <td>${s.course}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

    document.getElementById("name").focus();
}