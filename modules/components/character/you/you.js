/*
Description:
The You class creates a protagonist.
Use .add() method to render and add the element it to the page.
*/

import Character from '../character/character.js'

export default class You extends Character {

    constructor() {
        super();
    }

    add(parent) {
        this.div.className = 'you';
        parent.appendChild(this.div);
        return this;
    }
}
