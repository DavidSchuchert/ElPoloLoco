/**
 * Represents a throwable object within the game, which is a type of movable object.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {

    /**
   * Array of image paths for the bottle Spin animation.
   * @type {string[]}
   */
  IMAGES_BOTTLE_SPIN = [
    "/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  /**
   * Creates a new ThrowableObject instance.
   * @param {number} x - The initial x-coordinate of the object.
   * @param {number} y - The initial y-coordinate of the object.
   */
  constructor(x, y) {
    super().loadImage(
      "../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
    this.currentImage = 0;
    this.loadImages(this.IMAGES_BOTTLE_SPIN);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw(100, 200);
    this.animate();
  }

    /**
   * Initiates the bottle's animations and movement.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_BOTTLE_SPIN);
    }, 50);
  }

  /**
   * Causes the object to be thrown, moving it forward while applying gravity.
   */
  throw() {
    this.speedY = 10;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
