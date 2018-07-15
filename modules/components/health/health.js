/*
Description:
The Health class creates a character health bar.
Use the .render() method to render the element and the .add() method to add it to the page.
The .plus(), .minus(), .enemy(), and .you() methods are for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {game} from '../../main.js';

export default class Health {

    constructor() {
        this.div = document.createElement('div');
        this.points = 100;
        this._names = [
            ['Pesky', 'Meticulous', 'Shredded', 'Soggy', 'Greasy', 'Illusive'],
            ['Circleman', 'Shape', 'Squareman', 'Conehead', 'Troublemaker', 'Frankenstein'],
        ];
    }

    render(name) {
        const i = this.random(this._names.length - 1);
        this.name = name || `${this._names[0][i]} ${this._names[1][i]}`;
        this.div.className = 'health';
        this.div.innerHTML = `<p>${this.name}</p><div class="health-bar-container"><div class="health-bar"></div></div>`;
        return this;
    }

    add(parent) {
        parent.appendChild(this.div);
        return this;
    }

    hide() {
        this.div.classList.add('-hidden');
        return this;
    }

    show() {
        this.div.classList.remove('-hidden');
        return this;
    }

    plus(points = 100) {
        this.points += points;
        this.points = (this.points > 100) ? 100 : this.points;
        this.div.querySelector('.health-bar').style.width = `${this.points}%`;
        return this;
    }

    minus(points = 100) {
        this.points -= points;
        this.points = (this.points < 0) ? 0 : this.points;
        this.div.querySelector('.health-bar').style.width = `${this.points}%`;
        return this;
    }
}
