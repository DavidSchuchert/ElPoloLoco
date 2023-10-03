class Level{
enemies;
endboss;
clouds;
bottles;
coins;
backgroundObjects;
level_end_x = 2200;

constructor(enemies, endboss, bottles, coins, clouds, backgroundObjects){
    this.enemies = enemies;
    this.endboss = endboss;
    this.coins = coins;
    this.bottles = bottles;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
}
}