/**
 * Represents the health bar of the main antagonist, the Endboss.
 * 
 * The `BOSSHEALTHBAR` is a type of `DRAWABLE_OBJECT` that visually represents the health 
 * status of the Endboss using various images to show the health percentage.
 * 
 * @class
 * @extends DRAWABLE_OBJECT
 * 
 * @property {Array<string>} IMAGES - The array of image paths used to represent different health percentages.
 * @property {number} percentage - The current health percentage of the Endboss. Defaults to 100.
 * 
 * @method constructor - Creates a new instance of BOSSHEALTHBAR with default settings.
 * @method setPercentage - Updates the health percentage and changes the display image accordingly.
 * @method resolveImageIndex - Determines the appropriate image index based on the current health percentage.
 */
class BOSSHEALTHBAR extends DRAWABLE_OBJECT {
  IMAGES = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png",

  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 2525;
    this.y = 400;
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
