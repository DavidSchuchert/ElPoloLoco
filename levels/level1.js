/**
 * Represents the first level of the game.
 * This instantiation sets up various objects within the level such as enemies, end boss,
 * bottles, coins, clouds, and background objects. Each object type is passed as an array
 * to create multiple instances of the same type.
 *
 * @type {Level}
 * @constant
 */
const level1 = new Level(
  /**
   * Array of Chicken enemies for the level.
   * @type {Chicken[]}
   */
  [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
  ],

  /**
   * Array containing the end boss for the level.
   * @type {Endboss[]}
   */
  [new Endboss()],

  /**
   * Array of Bottles collectibles for the level.
   * @type {Bottles[]}
   */
  [new Bottles(), new Bottles(), new Bottles(), new Bottles(), new Bottles()],

  /**
   * Array of Coins collectibles for the level.
   * @type {Coins[]}
   */
  [new Coins(), new Coins(), new Coins(), new Coins(), new Coins()],

  /**
   * Array containing a Cloud object for the level.
   * @type {Cloud[]}
   */
  [new Cloud()],

  /**
   * Array of background objects to set the visual theme of the level.
   * The BackgroundObject instantiation requires two parameters: the image path and the x-position.
   * Multiple background objects create the parallax scrolling effect in the game.
   * @type {BackgroundObject[]}
   */
  [
    new BackgroundObject("../img/5_background/layers/air.png", -719),
    new BackgroundObject(
      "../img/5_background/layers/3_third_layer/2.png",
      -719
    ),
    new BackgroundObject(
      "../img/5_background/layers/2_second_layer/2.png",
      -719
    ),
    new BackgroundObject(
      "../img/5_background/layers/1_first_layer/2.png",
      -719
    ),

    new BackgroundObject("../img/5_background/layers/air.png", 0),
    new BackgroundObject("../img/5_background/layers/3_third_layer/1.png", 0),
    new BackgroundObject("../img/5_background/layers/2_second_layer/1.png", 0),
    new BackgroundObject("../img/5_background/layers/1_first_layer/1.png", 0),

    new BackgroundObject("../img/5_background/layers/air.png", 719),
    new BackgroundObject("../img/5_background/layers/3_third_layer/2.png", 719),
    new BackgroundObject(
      "../img/5_background/layers/2_second_layer/2.png",
      719
    ),
    new BackgroundObject("../img/5_background/layers/1_first_layer/2.png", 719),

    new BackgroundObject("../img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject(
      "../img/5_background/layers/3_third_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "../img/5_background/layers/2_second_layer/1.png",
      719 * 2
    ),
    new BackgroundObject(
      "../img/5_background/layers/1_first_layer/1.png",
      719 * 2
    ),

    new BackgroundObject("../img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject(
      "../img/5_background/layers/3_third_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "../img/5_background/layers/2_second_layer/2.png",
      719 * 3
    ),
    new BackgroundObject(
      "../img/5_background/layers/1_first_layer/2.png",
      719 * 3
    ),
  ]
);
