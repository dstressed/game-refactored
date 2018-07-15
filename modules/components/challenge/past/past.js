/*
Description:
The Past class creates a challenge window that asks the player to name the past tense of the verb.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Past extends Challenge {

    constructor() {
        super();
        this.past = data.words.filter(v => v.pi);
        this.past = this.past[this.random(this.past.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-past';
        this.div.innerHTML = `<p>What&rsquo;s the past tense of ${this.past.word.toUpperCase()}?</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.past.pi === answer) ? 'enemy' : 'you', 15);
    }
}
