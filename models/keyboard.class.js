/**
 * Represents the current state of keyboard inputs.
 *
 * The `Keyboard` class provides a simple way to track the state of specific keys.
 * Each key has a boolean value representing whether it's currently pressed (true)
 * or not pressed (false).
 *
 * @class
 *
 * @property {boolean} LEFT - Represents the state of the LEFT arrow key.
 * @property {boolean} RIGHT - Represents the state of the RIGHT arrow key.
 * @property {boolean} UP - Represents the state of the UP arrow key.
 * @property {boolean} DOWN - Represents the state of the DOWN arrow key.
 * @property {boolean} SPACE - Represents the state of the SPACE key.
 * @property {boolean} D - Represents the state of the D key.
 *
 * @constructor
 * Initializes a new Keyboard object with all keys set to an unpressed state (false).
 */
class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;
}
