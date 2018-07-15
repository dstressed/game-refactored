/*
Description:
The Mistake class creates a challenge window that asks the player to find a mistake in the sentence and rewrite it correctly.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Mistake extends Challenge {

    constructor() {
        super();
        this.mistake = data.mistakes[this.random(data.mistakes.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-mistake';
        this.div.innerHTML = `<p>Find a mistake and rewrite the sentence correctly:</p><p>${this.mistake[0]}</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value;
        this.hit((this.mistake[1] === answer) ? 'enemy' : 'you', 15);
    }
}
