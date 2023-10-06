/**
 * Represents a visual status bar indicating the amount of salsa available.
 *
 * The `SALSABAR` class extends the `DRAWABLE_OBJECT` class and provides functionality to display
 * a bar that visually represents a percentage value by displaying appropriate image assets
 * based on the set percentage. This class can be used to give the player feedback on
 * how much salsa they have left in the game.
 *
 * @class
 * @extends DRAWABLE_OBJECT
 *
 * @property {string[]} IMAGES - Array of file paths to image assets representing different percentage states of the salsa bar.
 * @property {number} percentage - The current percentage value the salsa bar should display.
 *
 * @method setPercentage - Sets the percentage value and updates the displayed image based on the new percentage.
 * @method resolveImageIndex - Determines which image from the IMAGES array should be displayed based on the current percentage value.
 */
class SALSABAR extends DRAWABLE_OBJECT {
  IMAGES = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  percentage = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 50;
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
