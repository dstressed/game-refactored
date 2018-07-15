/*
Description:
The Cue class creates a character cue.
Use the .render() method to render the element and the .add() method to add it to the page.
The .addListeners() and .addContinue() methods is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/


import {game} from '../../../main.js';
import Continue from '../continue/continue.js';

export default class Cue {

    constructor() {
        this.div = document.createElement('div');
        this.i = 0;
        this.cues = [
            {
                turn: 'enemy',
                cue: 'This is the first day of your training, private!'
            },
            {
                turn: 'enemy',
                cue: 'It&rsquo;s time to finally show what you&rsquo;ve learnt in the Academy.'
            },
            {
                turn: 'enemy',
                cue: 'First, you&rsquo;ll practice on me, and if you&rsquo;re good enough, I&rsquo;l let you fight with real enemies.'
            },
            {
                turn: 'enemy',
                cue: 'Just pick an attack, get through a challenge, and blast it off! C&rsquo;mon, what are you waiting for?'
            },
        ];
        this._delay = 2500;
    }

    render() {
        const turn = this.cues[this.i].turn;
        this.div.className = `cue-${turn}`;
        this.div.innerHTML = `<p>${game.health[turn].name}</p><p>${this.cues[this.i].cue}</p>`;
        this.i++;
        return this;
    }

    add(parent) {
        parent.appendChild(this.div);
        return this;
    }

    addContinue() {
        setTimeout(() => {
            new Continue().add(this.div).addListeners()
        }, this._delay);
        return this;
    }

    remove() {
        this.div.classList.add('-removed');
        return this;
    }

}