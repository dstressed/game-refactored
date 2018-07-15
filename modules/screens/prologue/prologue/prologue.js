/*
Description:
The Prologue class creates a prologue.
Use the .render() method to render the element and the .add() method to add it to the page.
The .addListeners() and .addContinue() methods is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Continue from '../continue/continue.js';

export default class Prologue {

    constructor() {
        this.div = document.createElement('div');
        this.i = 0;
        this.lines = [
            'This is the story about shapes and their kingdom where they lived happily until the day a new ruler came to power.',
            'They called themselves the Perfect Trinity and declared war to all the shapes that bore any difference from themselves.',
            'Claiming the war was the dawn of a brighter future, The Trinity turned thousands of shapes into their followers and made them put a fight against whom they believed were &ldquo;imperfect.&rdquo;',
        ];
        this._delay = 2500;
    }

    render() {
        this.div.className = 'prologue';
        this.div.innerHTML = `<div class="prologue-image-0${this.i}"></div><p>${this.lines[this.i]}</p>`;
        this.i++;
        return this;
    }

    add(parent) {
        parent.appendChild(this.div);
        return this;
    }

    addContinue() {
        setTimeout(() => {
            new Continue().add(this.div).addListeners();
        }, this._delay);
        return this;
    }

    remove() {
        this.div.classList.add('-removed');
        return this;
    }
}
