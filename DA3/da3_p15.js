function changeStyle() {
    var text = document.getElementById("text");

    var size = document.querySelector("input[type='range']").value;
    var color = document.getElementById("color").value;
    var bg = document.getElementById("bg").value;

    text.style.fontSize = size + "px";
    text.style.color = color;
    text.style.backgroundColor = bg;
}