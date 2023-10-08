/**
 * Manages collisions within a game world.
 */
class CollisionManager {
  /**
   * Creates a new CollisionManager instance.
   * @param {Object} world - The game world in which collisions occur.
   */
  constructor(world) {
    this.world = world;
    this.tollerance_x = 10;
    this.tollerance_y = 25;
  }

  /**
   * Checks and handles collisions between various game entities including character, enemies, bottles, coins, and endboss.
   */
  checkCollisions() {
    /* check for collision with enemy */
    this.world.level.enemies.forEach((enemy, index) => {
      // First, check for jumping on the enemy
      if (
        this.world.character.isColliding(enemy) &&
        this.world.character.y + this.world.character.height <=
          enemy.y + this.tollerance_y &&
        this.world.character.speedY <= -10 &&
        this.world.character.x + this.world.character.width >=
          enemy.x - this.tollerance_x &&
        this.world.character.x <= enemy.x + enemy.width + this.tollerance_x
      ) {
        enemy.hit();
        enemy.isHit = true;
        setTimeout(() => {
          let enemyIndex = this.world.level.enemies.indexOf(enemy);
          if (enemyIndex !== -1) {
            this.world.level.enemies.splice(enemyIndex, 1);
          }
          enemy.isHit = false;
        }, 500);
      } else if (this.world.character.isColliding(enemy) && !enemy.isHit) {
        this.world.character.hit();
        this.world.statusBar.setPercentage(this.world.character.energy);
      }

      if (this.world.character.energy == 0) {
        this.world.GameEnds();
      }
    });

    /* Check for Collision from Endboss to Character */

    this.world.level.endboss.forEach((boss, index) => {
      if (this.world.character.isColliding(boss)) {
        this.world.character.hit();
        this.world.statusBar.setPercentage(this.world.character.energy);
        boss.hasHit = true;
      }
      if (this.world.character.energy == 0) {
        this.world.GameEnds();
      }
    });

    /* Check for Collision from Bottle with Endboss */
    this.world.throwableObjects.forEach((throwableBottle, index) => {
      this.world.level.endboss.forEach((boss) => {
        if (boss.isColliding(throwableBottle)) {
          boss.bossGotHit();
          this.world.bossHealthBar.setPercentage(boss.BossHealth);
          if (!this.world.StopSounds) {
            this.world.bottle_smash_sound.play();
          } else {
            this.world.bottle_smash_sound.pause();
          }

          this.world.throwableObjects.splice(index, 1);
        }
        if (boss.bossIsDead) {
          this.world.GameEnds();
        }
      });
    });

    /**
     * Checks for throwable objects in the game world and manages their creation and lifecycle.
     */
    this.world.level.bottles.forEach((bottle, index) => {
      if (this.world.character.isColliding(bottle)) {
        this.world.bottlesInInventory++;
        this.world.level.bottles.splice(index, 1);
        this.world.salsaBar.setPercentage(this.world.bottlesInInventory * 20);
        if (!this.world.StopSounds) {
          this.world.collect_bottle_sound.play();
        } else {
          this.world.collect_bottle_sound.pause();
        }
      }
    });

    /* check for collision with Coin */
    this.world.level.coins.forEach((coin, index) => {
      if (this.world.character.isColliding(coin)) {
        this.world.CoinsInInventory++;
        this.world.level.coins.splice(index, 1);
        this.world.coinBar.setPercentage(this.world.CoinsInInventory * 20);
        if (!this.world.StopSounds) {
          this.world.collect_coin_sound.play();
        } else {
          this.world.collect_coin_sound.pause();
        }
      }
    });
  }

  /**
   * Checks for throwable objects and handles their creation and management.
   */
  checkThrowObjects() {
    if (this.world.keyboard.D && !this.world.D_Pressed && this.world.bottlesInInventory >= 1) {
      let bottle = new ThrowableObject(
        this.world.character.x + 100,
        this.world.character.y + 100
      );
      this.world.throwableObjects.push(bottle);
      this.world.bottlesInInventory--;
      this.world.salsaBar.setPercentage(this.world.bottlesInInventory * 20);
      this.world.D_Pressed = true; 
    } else if (!this.world.keyboard.D) {
      this.world.D_Pressed = false; 
    }
  }
}