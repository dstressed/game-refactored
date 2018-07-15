/*
Description:
The Continue class is used by the Prologue class to tell the player to proceed further.
Use .add() method to render and add the element it to the page.
The .addListeners() and .addContinue() methods is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/


import {game} from '../../../main.js';

export default class Continue {

    constructor() {
        this.span = document.createElement('span');
    }

    add(parent) {
        this.span.className = 'prologue-continue';
        this.span.innerHTML = 'CLICK TO CONTINUE';
        parent.appendChild(this.span);
        return this;
    }

    addListeners() {
        document.body.addEventListener('click', this._continue);
        return this;
    }

    _continue() {
        document.body.removeEventListener('click', Continue.prototype._continue);
        switch (game.prologue.i) {
            case game.prologue.lines.length:
                game.game.begin();
                break;
            default:
                game.prologue.render().addContinue();
        }
    }
}
