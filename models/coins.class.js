class Coins extends MovableObject {
    y = 240;
    height = 100;
    width = 100;
  
    constructor() {
      super().loadImage("../img/8_coin/coin_2.png");
      this.x = 500 + Math.random() * 1500;
  }

}
  