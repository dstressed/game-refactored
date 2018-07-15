/*
Description:
The Challenge class is a parent class of all in-game challenges ans is not for separate usage.
*/

import {game} from '../../../main.js';

export default class Challenge {

    constructor() {
        this.div = document.createElement('div');
    }

    hit(character, points) {
        this.remove();
        game.health[character].minus(points);
        game.game[character](points);
        game.character[character].hit();
        return this;
    }

    remove() {
        this.div.parentElement.removeChild(this.div);
        return this;
    }
}
