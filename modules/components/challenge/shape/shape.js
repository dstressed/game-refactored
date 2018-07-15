/*
Description:
The Mistake class creates a challenge window that asks the player to name the shape.
The shape is chosen randomly from the list of the available shapes.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Shape extends Challenge {

    constructor() {
        super();
        this.shape = data.shapes[this.random(data.shapes.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-shape';
        this.div.innerHTML = `<p>What shape is it?</p><div class="shape shape-${this.shape}"></div><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.shape === answer) ? 'enemy' : 'you', 10);
    }
}
