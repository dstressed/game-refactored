/*
Description:
The Articles class creates a challenge window that asks the player to insert the correct article.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Articles extends Challenge {

    constructor() {
        super();
        this.sentence = data.articles[this.random(data.articles.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-articles';
        this.div.innerHTML = `<p>Insert A, AN or THE:</p><div><span>${this.sentence[0]}</span><input type="text" placeholder="?"><span>${this.sentence[2]}</span></div><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.sentence[1] === answer) ? 'enemy' : 'you', 20);
    }
}