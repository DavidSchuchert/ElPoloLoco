/**
 * Represents the visual objects in the game's background.
 * 
 * The `BackgroundObject` class is a subclass of `MovableObject` that is used to represent 
 * various non-interactive elements in the game's backdrop. These objects can be 
 * elements such as clouds, trees, buildings, etc. They are typically static but can 
 * be movable if required by the game dynamics.
 * 
 * @class
 * @extends MovableObject
 * 
 * @property {number} width - The width of the background object. Defaults to 720.
 * @property {number} height - The height of the background object. Defaults to 480.
 * 
 * @method constructor - Creates a new instance of BackgroundObject with the specified image, x-coordinate, 
 *                       and adjusts the y-coordinate based on the object's height.
 */
class BackgroundObject extends MovableObject {

width = 720;
height =  480;

  constructor(imagePath, x, y) {
    super().loadImage(imagePath);
    this.y = 480 - this.height; // 480 - 400
    this.x = x;
  }
}
