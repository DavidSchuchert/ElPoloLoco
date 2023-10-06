class CollisionManager {
    constructor(world) {
        this.world = world;
    }

    checkCollisions() {
        /* check for collision with enemy */
        this.world.level.enemies.forEach((enemy, index) => {
            if(this.world.character.isColliding(enemy) && this.world.character.speedY <=-10){
                console.log("enemy Killed");
                enemy.hit();
                setTimeout(() => {
                    let enemyIndex = this.world.level.enemies.indexOf(enemy);
                    if (enemyIndex !== -1) {
                        this.world.level.enemies.splice(enemyIndex, 1);
                    }
                }, 500);
            }
            if (this.world.character.isColliding(enemy) && enemy.isHit == false ) {
                this.world.character.hit();
                this.world.statusBar.setPercentage(this.world.character.energy);
            }
            if(this.world.character.energy == 0){
                this.world.GameEnds();
            }
        });

        /* Check for Collision from Bottle with Endboss */
        this.world.throwableObjects.forEach((throwableBottle, index) => {
            this.world.level.endboss.forEach(boss => {
                if (boss.isColliding(throwableBottle)) {
                    console.log("hit Boss");
                    boss.bossGotHit();
                    this.world.bossHealthBar.setPercentage(boss.BossHealth);
                    if(!this.world.StopSounds){
                        this.world.bottle_smash_sound.play();
                    } else {
                        this.world.bottle_smash_sound.pause();
                    }
                    
                    this.world.throwableObjects.splice(index, 1);
                }
                if(boss.bossIsDead){
                    this.world.GameEnds();
                }
            });
        });

        /* Check for Collision with bottle */
        this.world.level.bottles.forEach((bottle, index) => {
            if (this.world.character.isColliding(bottle) ) {
                this.world.bottlesInInventory++;
                this.world.level.bottles.splice(index, 1);
                this.world.salsaBar.setPercentage(this.world.bottlesInInventory * 20);
                if (!this.world.StopSounds){
                    this.world.collect_bottle_sound.play();
                } else {
                    this.world.collect_bottle_sound.pause();
                }
            }
        });

        /* check for collision with Coin */
        this.world.level.coins.forEach((coin, index) => {
            if (this.world.character.isColliding(coin) ) {
                this.world.CoinsInInventory++;
                this.world.level.coins.splice(index, 1);
                this.world.coinBar.setPercentage(this.world.CoinsInInventory * 20);
                if (!this.world.StopSounds){
                    this.world.collect_coin_sound.play();
                } else {
                    this.world.collect_coin_sound.pause();
                }
            }
        });
    }

    checkThrowObjects() {
        if(this.world.keyboard.D && this.world.bottlesInInventory >= 1){
            let bottle = new ThrowableObject(this.world.character.x + 100, this.world.character.y + 100);
            this.world.throwableObjects.push(bottle);
            this.world.bottlesInInventory--;
            this.world.salsaBar.setPercentage(this.world.bottlesInInventory * 20);
        }
    }
}
