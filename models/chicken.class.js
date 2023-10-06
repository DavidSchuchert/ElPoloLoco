class Chicken extends MovableObject {
  y = 370;
  height = 60;
  width = 60;
  isHit = false;

  IMAGES_WALKING = [
    "../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_HIT = [
    "../img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
];


  currentImage = 0;

  constructor() {
    super().loadImage("../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");

    this.x = 500 + Math.random() * 1500;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HIT);
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    this.moveLeft();

    setInterval(() => {
      if (this.isHit) {
            this.playAnimation(this.IMAGES_HIT);
        } else {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }, 100);
  }

  hit() {
    this.isHit = true;
    this.speed = 0;
}

}

