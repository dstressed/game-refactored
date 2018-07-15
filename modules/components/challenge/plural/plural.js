/*
Description:
The Mistake class creates a challenge window that asks the player to name the plural of a noun.
The noun is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Plural extends Challenge {

    constructor() {
        super();
        this.word = data.words.filter(v => v.plural);
        this.word = this.word[this.random(this.word.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-number';
        this.div.innerHTML = `<p>What&rsquo;s the plural of ${this.word.word}?</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check(event) {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.word.plural === answer) ? 'enemy' : 'you', 15);
    }
}
