/*
Description:
The Score class adds functions used by all classes.
Use the .add() method to add utility functions and the .remove() method to remove them.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

export default class Utilities {

    add() {
        Object.prototype.random = this._random;
        return this;
    }

    remove() {
        delete Object.prototype.random;
        return this;
    }

    _random(b, a = 0) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
}