/*
Description:
The Comparing class creates a challenge window that asks the player to compare two numbers and tell which one is greater.
Numbers are chosen randomly from 1 to 99.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';

export default class Comparing extends Challenge {

    constructor() {
        super();
    }

    add(parent) {
        const numbers = [this.random(99, 1), this.random(99, 1)];
        this.answer = (numbers[0] < numbers[1]) ? '<' : '>';
        this.div.className = 'challenge challenge-comparing';
        this.div.innerHTML = `<p>What number is greater?</p><div><span>${numbers[0]}</span><input type="text" placeholder="?"><span>${numbers[1]}</span></div><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.answer === answer) ? 'enemy' : 'you', 10);
    }
}
