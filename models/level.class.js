class Level{
enemies;
clouds;
bottles;
backgroundObjects;
level_end_x = 2200;

constructor(enemies, bottles , clouds, backgroundObjects){
    this.enemies = enemies;
    this.bottles = bottles;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
}
}