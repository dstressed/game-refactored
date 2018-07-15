/*
Description:
The Color class creates a challenge window that asks the player to name the color of the given square.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Color extends Challenge {

    constructor() {
        super();
        this.color = data.words.filter(v => v.tag === 'color');
        this.color = this.color[this.random(this.color.length - 1)].word;
    }

    add(parent) {
        this.div.className = 'challenge challenge-color';
        this.div.innerHTML = `<p>What color is the square?</p><div class="color-square color-${this.color}"></div><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.color === answer) ? 'enemy' : 'you', 10);
    }
}
