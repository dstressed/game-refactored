/*
Description:
The Letter class creates a challenge window that asks the player to complete a word with a missing letter.
The word is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Letter extends Challenge {

    constructor() {
        super();
        this.word = data.words[this.random(data.words.length - 1)].word;
        this.index = this.random(this.word.length - 1);
    }

    add(parent) {
        this.div.className = 'challenge challenge-letter';
        this.div.innerHTML = `<p>Insert the missing letter:</p><div><span>${this.word.slice(0, this.index)}</span><input type="text" placeholder="?"><span>${this.word.slice(this.index + 1)}</span></div><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.word[this.index] === answer) ? 'enemy' : 'you', 15);
    }
}
