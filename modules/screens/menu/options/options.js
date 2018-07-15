/*
Description:
The Options class creates a options window.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {game} from '../../../main.js';

export default class Options {

    constructor() {
        this.div = document.createElement('div');
        this.listening = game.list.length;
    }

    add(parent) {
        this.div.className = 'options-background';
        this.div.innerHTML = '<div class="options-window"><h1>OPTIONS</h1><div class="options-sound"><p>Sound</p><span class="checkbox -checked"></span></div><span class="button-back">BACK</span></div>';
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.checkbox').addEventListener('click', this._toggle.bind(this));
        this.div.querySelector('.button-back').addEventListener('click', this.hide.bind(this));
        return this;
    }

    show() {
        this.div.classList.remove('-hidden');
        return this;
    }

    hide() {
        this.div.classList.add('-hidden');
        return this;
    }

    _toggle(event) {
        this.listening = (isFinite(this.listening)) ?
            game.list.pop() :
            game.list.push(this.listening);
        event.target.classList.toggle('-checked');
    }
}