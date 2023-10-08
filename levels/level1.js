/**
 * Represents the first level of the game.
 * This instantiation sets up various objects within the level such as enemies, end boss,
 * bottles, coins, clouds, and background objects. Each object type is passed as an array
 * to create multiple instances of the same type.
 * @type {Level}
 * @constant
 */
const level1 = new Level(
  createLevelObjects.createLevelChickens(),
  createLevelObjects.createLevelEndboss(),
  createLevelObjects.createLevelBottles(),
  createLevelObjects.createLevelCoins(),
  createLevelObjects.createLevelClouds(),
  createLevelObjects.createLevelBackgrounds()
);
