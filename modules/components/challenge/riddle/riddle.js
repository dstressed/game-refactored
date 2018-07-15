/*
Description:
The Mistake class creates a challenge window that asks the player to solve the riddle.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Riddle extends Challenge {

    constructor() {
        super();
        this.riddle = data.riddles[this.random(data.riddles.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-riddle';
        this.div.innerHTML = `<p>Solve the riddle:</p><p>${this.riddle[0]}</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        if (this.riddle[1] === answer) {
            this.hit('enemy', 25);
        } else {
            this.hit('you', 10);
        }
    }
}
