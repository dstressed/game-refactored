/*
Description:
The Menu class creates a menu of the game.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {game} from '../../../main.js';
import Options from '../options/options.js';
import Exit from '../exit/exit.js';

export default class Menu {

    constructor() {
        this.div = document.createElement('div');
    }

    add(parent) {
        this.div.className = 'game-menu';
        this.div.innerHTML = '<div class="menu-image"></div><h1>Start</h1><h1>Options</h1><h1>Exit</h1>';
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.addEventListener('click', this._splitter);
        return this;
    }

    remove() {
        this.div.classList.add('-removed');
        return this;
    }

    _splitter(event) {
        switch (event.target.innerHTML.toLowerCase()) {
            case 'start':
                game.menu.remove();
                game.prologue.render().add(game.game.div).addContinue();
                break;
            case 'options':
                if (game.options) {
                    game.options.show();
                } else {
                    game.options = new Options().add(document.body).addListeners();
                }
                break;
            case 'exit':
                if (game.exit) {
                    game.exit.show();
                } else {
                    game.exit = new Exit().add(document.body).addListeners();
                }
        }
    }
}
