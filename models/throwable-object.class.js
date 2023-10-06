/**
 * Represents a ThrowableObject in the game.
 *
 * The ThrowableObject is a type of `MovableObject` which can be thrown by the player.
 * After being thrown, the object follows a certain trajectory based on its speed and gravity.
 *
 * @class
 * @extends MovableObject
 *
 * @property {number} x - The x-coordinate position of the ThrowableObject.
 * @property {number} y - The y-coordinate position of the ThrowableObject.
 * @property {number} height - The height of the ThrowableObject. Defaults to 60.
 * @property {number} width - The width of the ThrowableObject. Defaults to 50.
 *
 * @method constructor - Creates a new instance of ThrowableObject with specified x and y positions.
 * @method throw - Sets the speedY and gravity for the ThrowableObject and updates its x position over time.
 */
class ThrowableObject extends MovableObject {
  constructor(x, y) {
    super().loadImage("../img/6_salsa_bottle/salsa_bottle.png");
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw(100, 200);
  }

  throw() {
    this.speedY = 10;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
