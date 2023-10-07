/**
 * Represents a coin bar status in the game, which shows the amount of coins collected or progress made.
 * @extends DRAWABLE_OBJECT
 */
class COINBAR extends DRAWABLE_OBJECT {
  /**
   * The images representing various stages of the coin bar.
   * @type {Array<string>}
   */
  IMAGES = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  /**
   * The percentage representation of the coin bar.
   * @type {number}
   */
  percentage = 0;

  /**
   * Creates a new COINBAR instance, sets its position and initializes its image based on percentage.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 500;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(0);
  }

  /**
   * Sets the percentage and image of the coin bar based on the provided percentage.
   * @param {number} percentage - The percentage to set for the coin bar.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Determines the appropriate image index based on the current percentage.
   * @returns {number} - The index of the image in the IMAGES array to be used.
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
