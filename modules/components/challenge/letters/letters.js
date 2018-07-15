/*
Description:
The Letters class creates a challenge window that asks the player to rearrange letters into a word.
The word is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import Placeholder from './placeholder.js';
import {data} from '../challenge/data.js';

export default class Letters extends Challenge {

    constructor() {
        super();
        this.word = data.words[this.random(data.words.length - 1)].word;
    }

    add(parent) {
        this.div.className = 'challenge challenge-sorting';
        this.div.innerHTML = `<p>Make a word from the following letters:</p><div class="letters">${this.word.split('').map(v => `<span>${v}</span>`).sort(() => Math.random() - Math.random()).join('')}</div><span class=challenge-submit>OK</span>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.letters').addEventListener('mousedown', this._drag);
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _drag(event) {
        const [parent, target, pageX] = [event.target.parentElement, event.target, event.pageX];
        const offsetX = pageX - target.getBoundingClientRect().left;
        const parentLeft = parent.getBoundingClientRect().left;
        const targetRight = parent.offsetWidth - target.offsetWidth;
        const placeholder = new Placeholder().add(target);
        target.style.position = 'absolute';
        shift(pageX);
        addListeners();

        function shift(pageX) {
            const targetLeft = pageX - parentLeft - offsetX;
            target.style.left = (targetLeft < 0) ? 0 : ((targetLeft > targetRight) ? targetRight : targetLeft) + 'px';
        }

        function addListeners() {
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', drop);
            document.addEventListener('dragstart', prevent);
        }

        function move(event) {
            event.preventDefault();
            shift(event.pageX);
            check();
        }

        function drop() {
            removeListeners();
            replace();
        }

        function prevent(event) {
            event.preventDefault();
        }

        function check() {
            if (target.offsetLeft > placeholder.offsetLeft + placeholder.offsetWidth - 0.5) {
                parent.insertBefore(placeholder, placeholder.nextElementSibling.nextElementSibling);
            } else if (target.offsetLeft + target.offsetWidth - 0.5 < placeholder.offsetLeft) {
                parent.insertBefore(placeholder, placeholder.previousElementSibling);
            }
        }

        function removeListeners() {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', drop);
            document.removeEventListener('dragstart', prevent);
    }

        function replace() {
            target.style.position = '';
            target.style.left = '';
            parent.replaceChild(target, placeholder);
        }
    }

    _check() {
        const answer = [...this.div.querySelector('.letters').children].reduce((p, c) => p + c.innerHTML, '');
        this.hit((this.word === answer) ? 'enemy' : 'you', 25);
    }
}
