let canvas;
let world;
let keyboard = new Keyboard();
let startButton = document.getElementById("startbutton");


function init() {
  document.getElementById("startscreen").style.display = 'none';
  document.getElementById("canvas").style.display = 'block';
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);


  console.log("My Character is", world.character);
}
function muteAllSounds(){
  world.StopSounds = true;
  world.bg_music.pause()
  document.getElementById("unmutebutton").style.display = "block";
  document.getElementById("mutebutton").style.display = "none";
}

function unmuteAllSounds(){
  world.StopSounds = false;
  world.bg_music.play()
  document.getElementById("unmutebutton").style.display = "none";
  document.getElementById("mutebutton").style.display = "block";
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


function fullscreen(){
  let fullscreen = document.getElementById('fullscreen');
  enterFullscreen(fullscreen);
}

function exitfullscreen(){
  let fullscreen = document.getElementById('fullscreen');
  exitFullscreen(fullscreen);
}

function enterFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}



