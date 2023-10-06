/**
 * Represents a Chicken enemy in the game.
 *
 * The Chicken is a type of `MovableObject` which can walk and also gets hit.
 * When hit, the Chicken changes its animation and stops moving.
 *
 * @class
 * @extends MovableObject
 *
 * @property {number} y - The y-coordinate position of the Chicken. Defaults to 370.
 * @property {number} height - The height of the Chicken. Defaults to 60.
 * @property {number} width - The width of the Chicken. Defaults to 60.
 * @property {boolean} isHit - Boolean flag to check if the Chicken is hit. Defaults to false.
 * @property {string[]} IMAGES_WALKING - Array of paths to the walking animation images.
 * @property {string[]} IMAGES_HIT - Array of paths to the hit (or dead) animation image.
 * @property {number} currentImage - The current frame index of the Chicken's animation.
 * @property {number} speed - Speed at which the Chicken moves. Randomized between 0.15 to 0.65.
 *
 * @method animate - Handles the Chicken's movement and animation frame updates.
 * @method hit - Function to handle the event when the Chicken is hit.
 */
class Chicken extends MovableObject {
  y = 370;
  height = 60;
  width = 60;
  isHit = false;

  IMAGES_WALKING = [
    "/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_HIT = ["../img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

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
