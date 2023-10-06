/**
 * Represents the main antagonist, the Endboss, in the game.
 *
 * The Endboss is a type of `MovableObject` with specific features such as health,
 * different animation states for walking, being hit, and dying.
 *
 * @class
 * @extends MovableObject
 *
 * @property {number} height - The height of the Endboss. Defaults to 400.
 * @property {number} width - The width of the Endboss. Defaults to 250.
 * @property {number} y - The y-coordinate position of the Endboss. Defaults to 50.
 * @property {number} BossHealth - The health points of the Endboss. Defaults to 100.
 * @property {boolean} hit - Indicates if the Endboss is currently being hit. Defaults to false.
 * @property {boolean} bossIsDead - Indicates if the Endboss is dead. Defaults to false.
 * @property {Array<string>} IMAGES_WALKING - The array of image paths used for the walking animation.
 * @property {Array<string>} IMAGES_HIT - The array of image paths used for the hit animation.
 * @property {Array<string>} IMAGES_DEAD - The array of image paths used for the death animation.
 *
 * @method constructor - Creates a new instance of Endboss.
 * @method animate - Controls the animation logic for the Endboss based on its state.
 * @method bossGotHit - Handles the logic when the Endboss is hit by a projectile.
 */
class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;
  BossHealth = 100;
  hit = false;
  bossIsDead = false;

  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_HIT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.currentImage = 0;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HIT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2500;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.hit && !this.bossIsDead) {
        this.playAnimation(this.IMAGES_HIT);
        this.hit = false;
      } else if (this.bossIsDead) {
        this.playAnimation(this.IMAGES_DEAD);
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 200);
  }

  bossGotHit() {
    if (this.BossHealth > 0) {
      this.BossHealth -= 25;
      this.hit = true;
    } else {
      this.bossIsDead = true;
    }
  }
}
