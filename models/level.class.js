/**
 * Represents a game level with all its entities and elements.
 * 
 * The `Level` class encapsulates all components that make up a game level, 
 * such as enemies, endboss, collectibles (bottles and coins), clouds, and other background objects. 
 * It also defines the end point of the level through the `level_end_x` property.
 * 
 * @class
 * 
 * @property {Array} enemies - List of all enemies present in the level.
 * @property {Object} endboss - The main antagonist or challenge at the end of the level.
 * @property {Array} bottles - List of all bottle collectibles in the level.
 * @property {Array} coins - List of all coin collectibles in the level.
 * @property {Array} clouds - List of all cloud elements in the level background.
 * @property {Array} backgroundObjects - List of all other miscellaneous objects that are part of the level's background.
 * @property {number} level_end_x - The x-coordinate defining the endpoint of the level.
 * 
 * @constructor 
 * @param {Array} enemies - List of all enemies.
 * @param {Object} endboss - The endboss of the level.
 * @param {Array} bottles - List of bottles.
 * @param {Array} coins - List of coins.
 * @param {Array} clouds - List of clouds.
 * @param {Array} backgroundObjects - List of background objects.
 * Initializes a new Level object with the provided parameters.
 */
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