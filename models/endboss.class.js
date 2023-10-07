/**
 * Represents the main antagonist of the game - the Endboss.
 * The Endboss has different animation states: walking, hit, and dead.
 * The player can reduce the Endboss's health by hitting him.
 * @extends MovableObject
 */
class Endboss extends MovableObject {
  /**
   * The height of the Endboss.
   * @type {number}
   */
  height = 400;

  /**
   * The width of the Endboss.
   * @type {number}
   */
  width = 250;

  /**
   * The y-coordinate of the Endboss.
   * @type {number}
   */
  y = 50;

  /**
   * The health points of the Endboss.
   * When it reaches 0, the Endboss is considered dead.
   * @type {number}
   */
  BossHealth = 100;

  /**
   * Indicates if the Endboss has been hit.
   * @type {boolean}
   */
  hit = false;

  /**
   * Indicates if the Endboss is dead.
   * @type {boolean}
   */
  bossIsDead = false;

  /**
   * Images representing the walking state of the Endboss.
   * @type {Array<string>}
   */
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

  /**
   * Images representing the hit state of the Endboss.
   * @type {Array<string>}
   */
  IMAGES_HIT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  /**
   * Images representing the dead state of the Endboss.
   * @type {Array<string>}
   */
  IMAGES_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  /**
   * Creates a new Endboss instance, sets its position, loads its images, and initializes animations.
   */
  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.currentImage = 0;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HIT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 2500;
    this.animate();
  }

  /**
   * Initiates the animation sequence for the Endboss based on its state: hit, dead, or walking.
   */
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

  /**
   * Handles the logic when the Endboss is hit by the player.
   * Reduces the BossHealth and updates the state of the Endboss.
   */
  bossGotHit() {
    if (this.BossHealth > 0) {
      this.BossHealth -= 25;
      this.hit = true;
    } else {
      this.bossIsDead = true;
    }
  }
}
