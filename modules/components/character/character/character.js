/*
Description:
The Character class is a parent class of all in-game characters ans is not for separate usage.
*/

export default class Character {

    constructor() {
        this.div = document.createElement('div');
        this._delay = 500;
    }

    hit() {
        this.div.classList.add('hit');
        setTimeout(() => {
            this.div.classList.remove('hit');
        }, this._delay);
    }
}
