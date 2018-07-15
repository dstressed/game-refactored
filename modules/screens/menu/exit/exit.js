/*
Description:
The Exit class creates an exit window.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {game} from '../../../main.js';

export default class Exit {

    constructor() {
        this.div = document.createElement('div');
    }

    add(parent) {
        this.div.className = 'exit-background';
        this.div.innerHTML = '<div class="exit-window"><p>ARE YOU SURE YOU WANT TO QUIT?</p><div class="exit-buttons"><span>YES</span><span>NO</span></div></div>';
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.addEventListener('click', this._splitter);
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

    _splitter(event) {
        switch (event.target.innerHTML.toLowerCase()) {
            case 'yes':
                window.close();
                break;
            case 'no':
                game.exit.hide();
        }
    }
}