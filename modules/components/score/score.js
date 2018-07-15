/*
Description:
The Score class creates a modal window that offers the the player to see the score or begin a new game.
Use the .add() method to render and add the window to the page.
The .plus() and .addListeners() methods are for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {game} from '../../main.js';

export default class Score {

    constructor() {
        this.div = document.createElement('div');
        this.score = 0;
    }

    add(parent) {
        this.div.className = 'score-background';
        this.div.innerHTML = `<div class="score-window"><p>All right, that&rsquo;s it for today!</p><p>Nice job! Your score is ${this.score}. We&rsquo;ll continue tomorrow.</p><div class="score-show">SHOW SCORE</div><div class="score-begin">NEW GAME</div></div>`;
        parent.appendChild(this.div);
        return this;
    }

    plus(points) {
        this.score += points;
        return this;
    }

    addListeners() {
        this.div.querySelector('.score-show').addEventListener('click', this._render.bind(this));
        this.div.querySelector('.score-begin').addEventListener('click', this._launch);
        return this;
    }

    write() {
        const score = window.localStorage.getItem('score');
        if (score) {
            window.localStorage.setItem('score', `${score.slice(0, -1)},${this.score}]`);
        } else {
            window.localStorage.setItem('score', `[${this.score}]`);
        }
        return this;
    }

    _launch() {
        document.body.innerHTML = '';
        game.game.reset();
        game.game.launch();
    }

    _render() {
        const score = JSON.parse(window.localStorage.getItem('score'));
        if (this.table) {
            this.table.classList.toggle('-removed');
        } else {
            this.table = document.createElement('div');
            this.table.innerHTML = `${score.sort((a, b) => b - a).map((v, i) => (i < 10) ? `<span>${i + 1}</span><span>${v}</span>` : '').join('')}`;
            this.div.querySelector('.score-show').insertAdjacentElement('afterEnd', this.table);
        }
    }
}
