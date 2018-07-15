/*
Description:
The Mistake class creates a challenge window that asks the player to write a number in letters.
The number is chosen randomly from 0 to 99.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Number extends Challenge {

    constructor() {
        super();
    }

    add(parent) {
        const number = this.random(99);
        this.answer = this._word(number);
        this.div.className = 'challenge challenge-number';
        this.div.innerHTML = `<p>Write ${number} in letters:</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _word(n) {
        const remainder = n % 10;
        if (n > 20 && remainder) {
            return `${data.numbers[n - remainder]} ${data.numbers[remainder]}`;
        } else {
            return data.numbers[n];
        }
    }

    _check() {
        const answer = this.div.querySelector('input').value;
        this.hit((this.answer === answer) ? 'enemy' : 'you', 15);
    }
}
