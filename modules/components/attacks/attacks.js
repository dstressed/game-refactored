/*
Description:
The Attacks class creates a modal window which allows the player to choose one of the attacks.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {game} from '../../main.js';

export default class Attacks {

    constructor() {
        this.div = document.createElement('div');
        this._attacks = [
            'Water Splash',
            'Piercing Shot',
            'Paper Cut',
        ];
    }

    add(parent, i = this._attacks.length) {
        this.div.className = 'attacks';
        this.div.innerHTML = new Array(i).fill('').map((v, i) => `<div class="attack"><div class="attack-image-0${i}"></div><p>${this._attacks[i]}</p></div>`).join('');
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.addEventListener('click', this._addChallenge.bind(this));
        return this;
    }

    hide() {
        this.div.classList.add('-hidden');
        return this;
    }

    show() {
        this.div.classList.remove('-hidden');
        return this;
    }

    _addChallenge(event) {
        if (event.target.closest('.attack')) {
            this.hide();
            game.challenge = new game.list[this.random(game.list.length - 1)]().add(game.game.div).addListeners();
        }
    }
}
