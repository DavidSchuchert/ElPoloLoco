/**
 * Represents the coin status bar in the game's HUD (Heads-Up Display).
 *
 * The `COINBAR` class extends the `DRAWABLE_OBJECT` class and provides a visual representation
 * of the player's coin collection progress. The bar changes its image based on the percentage
 * of coins collected, offering the player a visual feedback on their collection status.
 *
 * @class
 * @extends DRAWABLE_OBJECT
 *
 * @property {Array<string>} IMAGES - Array of image paths representing different coin collection statuses.
 * @property {number} percentage - Current percentage of coins collected by the player.
 *
 * @constructor
 * Initializes a new coin status bar, loads its images, sets its initial position,
 * dimensions, and percentage value. Upon instantiation, the visual representation of the bar
 * is set based on the initial percentage value.
 *
 * @method setPercentage
 * Sets the coin collection percentage and updates the bar's visual representation accordingly.
 *
 * @method resolveImageIndex
 * Determines which image from the IMAGES array should be displayed based on the current coin collection percentage.
 */
class COINBAR extends DRAWABLE_OBJECT {
  IMAGES = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  percentage = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 500;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(0);
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
