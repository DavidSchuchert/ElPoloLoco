class Bottles extends MovableObject {
    y = 370;
    height = 60;
    width = 60;
  
    constructor() {
      super().loadImage("../img/6_salsa_bottle/salsa_bottle.png");
      this.x = 500 + Math.random() * 1500;
  }

}
  