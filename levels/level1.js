/**
 * Represents the first level of the game.
 * The level is constructed using various game objects including:
 * - Chickens as enemies.
 * - An Endboss.
 * - Bottles as collectible items.
 * - Coins as collectible items.
 * - Clouds as background decorations.
 * - Multiple layers of parallax background images to create a sense of depth.
 * 
 * @type {Level}
 * @property {Chicken[]} level1.enemies - Array of Chicken objects as enemies for the level.
 * @property {Endboss[]} level1.endboss - Array containing the Endboss for the level.
 * @property {Bottles[]} level1.bottles - Array of Bottles objects for the character to collect.
 * @property {Coins[]} level1.coins - Array of Coins objects for the character to collect.
 * @property {Cloud[]} level1.clouds - Array of Cloud objects as background elements.
 * @property {BackgroundObject[]} level1.backgroundObjects - Array of BackgroundObject instances for creating a parallax background effect.
 */

const level1 = new Level(
    [new Chicken(), new Chicken(), new Chicken()]
    ,
    [new Endboss()]
    ,
    [new Bottles(), new Bottles(), new Bottles(), new Bottles(), new Bottles()]
    ,
    [new Coins(), new Coins(), new Coins(), new Coins(), new Coins()]
    ,
    [new Cloud()]
    ,
    [
        new BackgroundObject("../img/5_background/layers/air.png", -719),
        new BackgroundObject("../img/5_background/layers/3_third_layer/2.png", -719),
        new BackgroundObject("../img/5_background/layers/2_second_layer/2.png", -719),
        new BackgroundObject("../img/5_background/layers/1_first_layer/2.png", -719),
    
        new BackgroundObject("../img/5_background/layers/air.png", 0),
        new BackgroundObject("../img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("../img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("../img/5_background/layers/1_first_layer/1.png", 0),
    
        new BackgroundObject("../img/5_background/layers/air.png", 719),
        new BackgroundObject("../img/5_background/layers/3_third_layer/2.png", 719),
        new BackgroundObject("../img/5_background/layers/2_second_layer/2.png", 719),
        new BackgroundObject("../img/5_background/layers/1_first_layer/2.png", 719),
    
        new BackgroundObject("../img/5_background/layers/air.png", 719*2),
        new BackgroundObject("../img/5_background/layers/3_third_layer/1.png", 719*2),
        new BackgroundObject("../img/5_background/layers/2_second_layer/1.png", 719*2),
        new BackgroundObject("../img/5_background/layers/1_first_layer/1.png", 719*2),
    
        new BackgroundObject("../img/5_background/layers/air.png", 719 * 3),
        new BackgroundObject("../img/5_background/layers/3_third_layer/2.png", 719 * 3),
        new BackgroundObject("../img/5_background/layers/2_second_layer/2.png", 719 * 3),
        new BackgroundObject("../img/5_background/layers/1_first_layer/2.png", 719 * 3),
    
    
      ]
);