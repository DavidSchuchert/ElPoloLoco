/**
 * Represents a movable game object.
 *
 * The `MovableObject` class extends the `DRAWABLE_OBJECT` class, adding properties and methods
 * to simulate physics, handle collisions, and manage the object's state (e.g., energy,
 * last time it was hit). This class acts as a base for other game objects that need to move,
 * get hurt, or interact in a more dynamic fashion with the environment.
 *
 * @class
 * @extends DRAWABLE_OBJECT
 *
 * @property {number} speed - Horizontal movement speed of the object. Defaults to 0.15.
 * @property {number} speedY - Vertical speed of the object, affected by gravity.
 * @property {number} accerleration - Gravity applied to the object, affects speedY.
 * @property {boolean} otherDirection - Indicates if the object is facing the opposite direction.
 * @property {number} energy - Represents the health or vitality of the object. When it reaches 0, the object is considered dead.
 * @property {number} lastHit - Timestamp of the last time the object was hit.
 *
 * @method applyGravity - Simulates gravity on the object.
 * @method isAboveGround - Determines if the object is above ground level or not.
 * @method isColliding - Checks if the object is colliding with another object.
 * @method hit - Reduces the object's energy and records the last time it was hit.
 * @method isHurt - Checks if the object was recently hurt.
 * @method isDead - Checks if the object's energy has been depleted to zero.
 * @method playAnimation - Displays a series of images as an animation.
 * @method moveRight - Moves the object to the right based on its speed.
 * @method moveLeft - Moves the object to the left based on its speed.
 * @method jump - Makes the object jump.
 */
class MovableObject extends DRAWABLE_OBJECT {
  speed = 0.15;
  speedY = 0;
  accerleration = 1;
  otherDirection = false;
  energy = 100;
  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.accerleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true; // Throwable object should always fall
    } else {
      return this.y < 140;
    }
  }

  isColliding(obj) {
    return (
      this.x + this.width > obj.x &&
      this.y + this.height > obj.y &&
      this.x < obj.x &&
      this.y < obj.y + obj.height
    );
  }

  hit() {
    this.energy -= 5;

    if (this.energy <= 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }

  isDead() {
    return this.energy == 0;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length; //let i = 0 % 6; 0, Rest 0 // i = 0, 1, 2, 3, 4, 5, 0
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 15;
  }
}
