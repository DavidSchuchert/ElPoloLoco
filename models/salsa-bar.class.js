/**
 * Represents the Salsa status bar in the game.
 * This is an extension of the DRAWABLE_OBJECT class, which provides the game 
 * with a visual representation of the salsa percentage, using different images.
 */
class SALSABAR extends DRAWABLE_OBJECT {

  /**
   * Array of images that depict different percentage levels for the salsa bar.
   * @type {Array<string>}
   */
  IMAGES = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  /**
   * Percentage value of the salsa in the bar.
   * @type {number}
   */
  percentage = 0;

  /**
   * Constructs a new SALSABAR object, initializes the image and sets its properties.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 50;
    this.width = 200;
    this.height = 60;
    this.setPercentage(0);
  }

  /**
   * Sets the percentage of the salsa bar and updates the display image accordingly.
   * @param {number} percentage - The new percentage value to set.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the image index for the current percentage.
   * @returns {number} - The index of the image in the IMAGES array that corresponds to the current percentage.
   */
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
