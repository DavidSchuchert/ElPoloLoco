class MovableObject {
  x = 120;
  y = 280;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  speed = 0.15
  otherDirection = false;

  //loadImage('./img/img.png')
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {

      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });

  }

  playAnimation(images){
    let i = this.currentImage % this.IMAGES_WALKING.length; //let i = 0 % 6; 0, Rest 0 // i = 0, 1, 2, 3, 4, 5, 0
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
  moveRight() {
    console.log("Moving right");
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
