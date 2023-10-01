class World {
  character = new Character();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  statusBar = new STATUSBAR;
  salsaBar = new SALSABAR;
  throwableObjects = [];
  bottlesInInventory = 0;
  collect_bottle_sound = new Audio("audio/collectBottle.mp3");

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }
  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
this.checkCollisions();
this.checkThrowObjects();
    }, 100);
  }

  checkCollisions(){
    /* check for collision with enemy */
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) ) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
/* Check for Collision with bottle */
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle) ) {
        this.bottlesInInventory++;
        this.level.bottles.splice(index, 1);
        this.salsaBar.setPercentage(this.bottlesInInventory * 20);
        this.collect_bottle_sound.play();
      }
    });

  }

  checkThrowObjects(){
    if(this.keyboard.D && this.bottlesInInventory >= 1){
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
      this.throwableObjects.push(bottle);
      this.bottlesInInventory--;
      this.salsaBar.setPercentage(this.bottlesInInventory * 20);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    
    this.ctx.translate(-this.camera_x, 0);
    ///----SPACE FOR FIXED OBJECTS!----
    this.addToMap(this.statusBar);
    this.addToMap(this.salsaBar);
    this.ctx.translate(this.camera_x, 0);

 
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObjects);
    

    this.ctx.translate(-this.camera_x, 0);

    //draw wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipimageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipimageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
