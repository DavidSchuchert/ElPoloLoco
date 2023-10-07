/**
 * Represents the health bar for the boss in the game, which is a type of drawable object.
 * @extends DRAWABLE_OBJECT
 */
class BOSSHEALTHBAR extends DRAWABLE_OBJECT {
  /**
   * An array of image paths representing different health states of the boss.
   * @type {string[]}
   */
  IMAGES = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png",
  ];

/** 
 * Represents the current percentage of the boss's health.
 * @type {number}
 */
  percentage = 100;

  /**
   * Creates a new BOSSHEALTHBAR instance.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 2525;
    this.y = 400;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
  }

  /**
   * Sets the health percentage for the boss and updates the displayed image accordingly.
   * @param {number} percentage - The new health percentage for the boss.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Determines the appropriate image index based on the current health percentage.
   * @returns {number} - The index of the image to be displayed.
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
