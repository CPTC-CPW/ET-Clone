var canvas = document.getElementById("game-canvas");
var square = canvas.getContext("2d");
square.fillStyle = "#000000";
square.fillRect(25, 25, 50, 50);
document.addEventListener('keydown', moveDetect);
function moveDetect(event) {
    var key = event.key;
    if (key == 'w' || key == 'W') {
        alert("W was pressed");
    }
    else if (key == 'a' || key == 'A') {
        alert("A was pressed");
    }
    else if (key == 's' || key == 'S') {
        alert("S was pressed");
    }
    else if (key == 'd' || key == 'D') {
        alert("D was pressed");
    }
}
