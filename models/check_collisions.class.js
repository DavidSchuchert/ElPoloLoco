/**
 * Manages collisions within the game world.
 */
class CollisionManager {
  /**
   * Initializes a new instance of the CollisionManager.
   * @param {World} world - The game world instance.
   */
  constructor(world) {
    this.world = world;
  }

  /**
   * Checks and handles various types of collisions within the game:
   * - Collision between the character and enemies.
   * - Collision between throwable bottles and the endboss.
   * - Collision between the character and collectible bottles.
   * - Collision between the character and collectible coins.
   *
   * When collisions are detected, this method will:
   * - Remove killed enemies from the game.
   * - Adjust health bars and status bars based on interactions.
   * - Play or pause sound effects based on the state of the game.
   * - Remove collected items from the game world and increment inventory counters.
   * - End the game when certain conditions are met (e.g., character energy reaches zero).
   */
  checkCollisions() {
    /* check for collision with enemy */
    this.world.level.enemies.forEach((enemy, index) => {
      if (
        this.world.character.isColliding(enemy) &&
        this.world.character.speedY <= -10
      ) {
        console.log("enemy Killed");
        enemy.hit();
        setTimeout(() => {
          let enemyIndex = this.world.level.enemies.indexOf(enemy);
          if (enemyIndex !== -1) {
            this.world.level.enemies.splice(enemyIndex, 1);
          }
        }, 500);
      }
      if (this.world.character.isColliding(enemy) && enemy.isHit == false) {
        this.world.character.hit();
        this.world.statusBar.setPercentage(this.world.character.energy);
      }
      if (this.world.character.energy == 0) {
        this.world.GameEnds();
      }
    });

    /* Check for Collision from Bottle with Endboss */
    this.world.throwableObjects.forEach((throwableBottle, index) => {
      this.world.level.endboss.forEach((boss) => {
        if (boss.isColliding(throwableBottle)) {
          console.log("hit Boss");
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

    /* Check for Collision with bottle */
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
    if (this.world.keyboard.D && this.world.bottlesInInventory >= 1) {
      let bottle = new ThrowableObject(
        this.world.character.x + 100,
        this.world.character.y + 100
      );
      this.world.throwableObjects.push(bottle);
      this.world.bottlesInInventory--;
      this.world.salsaBar.setPercentage(this.world.bottlesInInventory * 20);
    }
  }
}
