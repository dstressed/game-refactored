/*
Description:
The Mistake class creates a challenge window that asks the player to translate the word into Russian.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Translation extends Challenge{

    constructor() {
        super();
        this.word = data.words[this.random(data.words.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-translation';
        this.div.innerHTML = `<p>What&rsquo;s <span>${this.word.word.toUpperCase()}</span> in Russian?</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((~this.word.translation.indexOf(answer)) ? 'enemy' : 'you', 20);
    }
}
