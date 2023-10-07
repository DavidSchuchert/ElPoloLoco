/**
 * Represents the health status bar in the game.
 * This is an extension of the DRAWABLE_OBJECT class, which provides the game 
 * with a visual representation of the player's health percentage, using different images.
 */
class STATUSBAR extends DRAWABLE_OBJECT {

  /**
   * Array of images that depict different percentage levels for the health status bar.
   * @type {Array<string>}
   */
  IMAGES = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  /**
   * Percentage value of the health in the status bar.
   * @type {number}
   */
  percentage = 100;

  /**
   * Constructs a new STATUSBAR object, initializes the image and sets its properties.
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
  }

  /**
   * Sets the percentage of the health status bar and updates the display image accordingly.
   * @param {number} percentage - The new percentage value to set.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Resolves the image index for the current percentage of health.
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
