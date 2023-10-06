/**
 * Represents a moving cloud in the game's background.
 *
 * The `Cloud` class extends the `MovableObject` class and provides the visual representation
 * of a cloud in the game's backdrop. The cloud moves from right to left, adding a parallax
 * effect or a feeling of depth to the game.
 *
 * @class
 * @extends MovableObject
 *
 * @property {number} y - The y-coordinate for the cloud's starting position.
 * @property {number} width - The width of the cloud's image.
 * @property {number} height - The height of the cloud's image.
 * @property {number} speed - The speed at which the cloud moves.
 *
 * @constructor
 * Initializes a new cloud object, sets its image, and randomizes its x-coordinate
 * within a specific range. After creation, the cloud starts its animation/movement.
 */
class Cloud extends MovableObject {
  y = 50;
  width = 500;
  height = 300;
  speed = 0.15;

  //img/5_background/layers/4_clouds/1.png
  constructor() {
    super().loadImage("../img/5_background/layers/4_clouds/1.png");

    this.x = Math.random() * 500;

    this.animate();
  }
  animate() {
    this.moveLeft();
  }
}
