/**
 * Represents a throwable object within the game, which is a type of movable object.
 * @extends MovableObject
 */
class ThrowableObject extends MovableObject {
  /**
   * Creates a new ThrowableObject instance.
   * @param {number} x - The initial x-coordinate of the object.
   * @param {number} y - The initial y-coordinate of the object.
   */
  constructor(x, y) {
    super().loadImage("../img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw(100, 200);
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
