/*
Description:
The Health class creates a loader.
Use the .load() method to pre-load all images.
Use the .add() method to render and add the window to the page.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {data} from './data.js';
import {game} from "../../main.js";

export default class Loader {

    constructor() {
        this.div = document.createElement('div');
        this.count = data.images.length;
    }

    load() {
        data.images.forEach(v => {
            const img = document.createElement('img');
            img.src = v;
            img.onload = this._loaded.bind(this);
        });
        return this;
    }

    _loaded() {
        this.count--;
        if (!this.count) {
            this.remove();
            game.game.launch();
        }
    }

    remove() {
        document.body.querySelector('.loader').classList.add('-removed');
        return this;
    }

    add(parent) {
        this.div.className = 'loader';
        this.div.innerHTML = '<div></div>';
        parent.appendChild(this.div);
        return this;
    }
}
