/**
 * Represents a bottle object in the game.
 *
 * The `Bottles` class is a subclass of `MovableObject` that represents
 * a bottle, which is a collecible.
 * it's drawn from a specific image and can have a randomized x-position within
 * a given range.
 *
 * @class
 * @extends MovableObject
 *
 * @property {number} y - The vertical position of the bottle. Defaults to 370.
 * @property {number} height - The height of the bottle. Defaults to 60.
 * @property {number} width - The width of the bottle. Defaults to 60.
 *
 * @method constructor - Initializes a new instance of Bottles. The x-coordinate
 *                       is randomized within a range, while the image path for the
 *                       bottle is predefined.
 */
class Bottles extends MovableObject {
  y = 370;
  height = 60;
  width = 60;

  constructor() {
    super().loadImage("../img/6_salsa_bottle/salsa_bottle.png");
    this.x = 500 + Math.random() * 1500;
  }
}
