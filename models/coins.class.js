/**
 * Represents a collectible coin in the game.
 *
 * The `Coins` class extends the `MovableObject` class and provides the visual representation
 * of a coin in the game. This coin can be placed at various positions within the game world
 * and potentially be collected by the player.
 *
 * @class
 * @extends MovableObject
 *
 * @property {number} y - The y-coordinate for the coin's starting position.
 * @property {number} height - The height of the coin's image.
 * @property {number} width - The width of the coin's image.
 *
 * @constructor
 * Initializes a new coin object, sets its image and randomizes its x-coordinate within a specific range.
 */
class Coins extends MovableObject {
  y = 240;
  height = 100;
  width = 100;

  constructor() {
    super().loadImage("../img/8_coin/coin_2.png");
    this.x = 500 + Math.random() * 1500;
  }
}
