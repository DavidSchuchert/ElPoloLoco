/**
 * Represents the main character in the game.
 * 
 * The `Character` class is an extension of the `MovableObject` class. It provides functionality 
 * specific to the main character, such as walking, jumping, animations for different statuses, and 
 * responding to keyboard inputs. The character has different states represented by different animations, 
 * such as walking, jumping, being hurt, being idle, or being dead.
 * 
 * @class
 * 
 * @extends MovableObject
 * 
 * @property {Array<string>} IMAGES_WALKING - Array of image paths for the walking animation.
 * @property {Array<string>} IMAGES_JUMPING - Array of image paths for the jumping animation.
 * @property {Array<string>} IMAGES_DEAD - Array of image paths for the death animation.
 * @property {Array<string>} IMAGES_HURT - Array of image paths for the hurt animation.
 * @property {Array<string>} IMAGES_IDLE - Array of image paths for the idle animation.
 * @property {number} currentImage - Index of the current image being displayed.
 * @property {Object} world - Reference to the world in which the character exists.
 * @property {Audio} walking_sound - Audio object for the walking sound.
 * @property {Audio} jump_sound - Audio object for the jumping sound.
 * @property {number} animationInterval - Interval for the character's animations.
 * 
 * @constructor 
 * Initializes a new Character object with default parameters, loads relevant images, and starts animations.
 * 
 * @method animate
 * Starts the main animation loop for the character.
 * 
 * @method setAnimationInterval
 * Sets the interval rate for the character's animations.
 * @param {number} rate - The interval rate in milliseconds.
 * 
 * @method moveCharacter
 * Moves the character based on keyboard inputs.
 * 
 * @method playCharacterStatusAnimations
 * Plays the relevant animation based on the character's status.
 */
class Character extends MovableObject {
  height = 280;
  y = 135;
  speed = 10;
  IMAGES_WALKING = [
    "../img/2_character_pepe/2_walk/W-21.png",
    "../img/2_character_pepe/2_walk/W-22.png",
    "../img/2_character_pepe/2_walk/W-23.png",
    "../img/2_character_pepe/2_walk/W-24.png",
    "../img/2_character_pepe/2_walk/W-25.png",
    "../img/2_character_pepe/2_walk/W-26.png",
  ];
  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_DEAD = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  IMAGES_HURT = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];
  IMAGES_IDLE = [
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  currentImage = 0;
  world;
  walking_sound = new Audio("audio/walk.mp3");
  jump_sound = new Audio("/audio/jump.mp3");
  animationInterval = null;

  constructor() {
    super().loadImage("../img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_IDLE);
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveCharacter();
    }, 1000 / 60);
  
    this.setAnimationInterval(50);
  }
  
  setAnimationInterval(rate) {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
    
    this.animationInterval = setInterval(() => {
      this.playCharacterStatusAnimations();
    }, rate);
  }

  moveCharacter() {
    this.walking_sound.pause();

    if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
      this.moveRight();
      if (!world.StopSounds) {
        this.walking_sound.play();
      } else {
        this.walking_sound.pause();
      }
    }

    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      this.otherDirection = true;
    }

    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.jump();
      if (!world.StopSounds) {
        this.jump_sound.play();
      } else {
        this.jump_sound.pause();
      }
    }
    this.world.camera_x = -this.x + 100;
  }

  playCharacterStatusAnimations() {
    if (this.isDead()) {
      this.setAnimationInterval(50);
      this.playAnimation(this.IMAGES_DEAD);
    } else if (this.isHurt()) {
      this.setAnimationInterval(50);
      this.playAnimation(this.IMAGES_HURT);
    } else if (this.isAboveGround()) {
      this.setAnimationInterval(100); 
      this.playAnimation(this.IMAGES_JUMPING);
    } else {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.setAnimationInterval(50);
        this.playAnimation(this.IMAGES_WALKING);
      }
    }
    if (
      !this.world.keyboard.RIGHT &&
      !this.world.keyboard.LEFT &&
      !this.isAboveGround() &&
      !this.isHurt() &&
      !this.isDead()
    ) {
      this.setAnimationInterval(50);
      this.playAnimation(this.IMAGES_IDLE);
    }
  }
}
