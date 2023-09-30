let canvas;
let world;
let keyboard = new Keyboard();
let startButton = document.getElementById("startbutton");
bg_music = new Audio("audio/bg_music.mp3");

function init() {
  document.getElementById("startscreen").style.display = 'none';
  document.getElementById("canvas").style.display = 'block';
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  bg_music.play();

  console.log("My Character is", world.character);
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }

  console.log(e);
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }

  console.log(e);
});
