// W3Schools has very helpful tutorials for this. 
// https://www.w3schools.com/graphics/canvas_intro.asp 
// https://www.w3schools.com/graphics/game_intro.asp
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("game-canvas");
let square = canvas.getContext("2d");
square.fillStyle = "#000000";
square.fillRect(25, 25, 50, 50);
document.addEventListener('keydown', moveDetect);

function moveDetect(event) {
    let key = event.key;
    // Checking for upper and lowercase in case user has caps lock on
    if(key == 'w' || key == 'W') {
        alert("W was pressed");
    }
    else if(key == 'a'|| key == 'A') {
        alert("A was pressed");
    }
    else if(key == 's' || key == 'S') {
        alert("S was pressed");
    }
    else if(key == 'd' || key == 'D') {
        alert("D was pressed");
    }
}