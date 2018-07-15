/*
Description:
The Listening class creates a challenge window that asks the player to listen and write down what is spoken.
The word is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Listening extends Challenge {

    constructor() {
        super();
        this.word = data.words[this.random(data.words.length - 1)].word;
        this.utterance = new SpeechSynthesisUtterance(this.word);
    }

    add(parent) {
        this.div.className = 'challenge challenge-listening';
        this.div.innerHTML ='<p>Write down what you hear:</p><div><div class="listening-play"></div><input type="text"></div><span class="challenge-submit">OK</span>';
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.listening-play').addEventListener('click', this._play.bind(this));
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _play() {
        window.speechSynthesis.speak(this.utterance);
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.word === answer) ? 'enemy' : 'you', 15);
    }
}
