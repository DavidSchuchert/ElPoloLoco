/**
 * Represents a status bar that visually indicates a particular status (e.g., health) in the game.
 * 
 * The `STATUSBAR` class provides a visual representation for certain game statuses, such as player's health.
 * It uses different images to represent different percentages of the status. For instance, 
 * if it's representing health, then an image with a fuller bar would mean higher health and vice versa.
 * 
 * @class
 * 
 * @extends DRAWABLE_OBJECT
 * 
 * @property {Array<string>} IMAGES - List of paths to images corresponding to various percentage values.
 * @property {number} percentage - Current percentage value that the status bar represents.
 * 
 * @constructor 
 * Initializes a new STATUSBAR object with default parameters.
 * 
 * @method setPercentage
 * Sets the percentage value of the status bar and updates its image accordingly.
 * @param {number} percentage - The new percentage value.
 * 
 * @method resolveImageIndex
 * Resolves the index of the image in the IMAGES array based on the current percentage.
 * @returns {number} Index of the appropriate image.
 */
class STATUSBAR extends DRAWABLE_OBJECT {
  IMAGES = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }
  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
