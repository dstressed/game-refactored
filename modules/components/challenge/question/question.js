/*
Description:
The Mistake class creates a challenge window that asks the player to finish the answer to a question.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Question extends Challenge {

    constructor() {
        super();
        this.question = data.questions[this.random(data.questions.length - 1)];
        this.reply = this.question[1][0].split(' ')[0];
    }

    add(parent) {
        this.div.className = 'challenge challenge-question';
        this.div.innerHTML = `<p>Finish the answer:</p><p>${this.question[0]}</p><div><span>${this.reply}</span><input type="text" placeholder="?">.</div><span class="challenge-submit">OK</span>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value;
        this.hit(~this.question[1].indexOf(`${this.reply} ${answer}.`) ? 'enemy' : 'you', 20);
    }
}
