class Level{
enemies;
clouds;
bottles;
coins;
backgroundObjects;
level_end_x = 2200;

constructor(enemies, bottles, coins, clouds, backgroundObjects){
    this.enemies = enemies;
    this.coins = coins;
    this.bottles = bottles;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
}
}