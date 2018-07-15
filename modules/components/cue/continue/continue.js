/*
Description:
The Continue class is used by the Cue class to tell the player to proceed further.
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
        this.span.className = 'cue-continue';
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
        switch (game.cue.i) {
            case 3:
                game.health.enemy.show();
                game.health.you.show();
                game.attacks.add(game.game.div).addListeners();
                break;
            case game.cue.cues.length:
                game.cue.remove();
                return;
        }
        game.cue.render().addContinue();
    }
}
