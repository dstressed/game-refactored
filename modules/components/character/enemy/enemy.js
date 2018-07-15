/*
Description:
The Enemy class creates an enemy.
Use the .render() method to render the element and the .add() method to add it to the page.
*/

import Character from '../character/character.js';

export default class Enemy extends Character{

    constructor() {
        super();
        this._shapes = [
            'square',
            'circle',
            'triangle',
        ];
    }

    teacher() {
        this.div.className = 'teacher';
        this.div.innerHTML = '';
        return this;
    }

    render() {
        const shape = this._shapes[this.random(this._shapes.length - 1)];
        this.div.className = `enemy enemy-${shape}`;
        this.div.innerHTML = `<div class="${shape}-top-0${this.random(3)}"></div><div class="${shape}-middle-0${this.random(3)}"></div><div class="${shape}-bottom-0${this.random(3)}"></div>`;
        return this;
    }

    add(parent) {
        parent.appendChild(this.div);
        return this;
    }
}
