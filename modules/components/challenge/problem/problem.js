/*
Description:
The Mistake class creates a challenge window that asks the player to solve a arithmetic problem.
Numbers and operations are chosen randomly.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import Challenge from '../challenge/challenge.js';
import {data} from '../challenge/data.js';

export default class Problem extends Challenge {

    constructor() {
        super();
    }

    add(parent) {
        const limit = 10;
        const operation = data.operations[this.random(data.operations.length - 1)];
        const numbers = this._numbers(operation[1], limit);
        this.answer = this._solve(operation[1], numbers);
        this.div.className = 'challenge challenge-problem';
        this.div.innerHTML = `<p>What&rsquo;s ${numbers[0]} ${operation[0]} ${numbers[1]}?</p><div><span>${numbers[0]}</span><span>${operation[1]}</span><span>${numbers[1]}</span><span>=</span><input type="text" placeholder="?"></div><span class="challenge-submit">OK</span>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _numbers(operation, limit) {
        if (operation === '÷') {
            const number = this.random(limit, 4);
            const divisors = this._factorize(number);
            return (divisors.length) ? [number, divisors[this.random(divisors.length - 1)]] : this._numbers(operation, limit);
        }
        return [this.random(limit, 1), this.random(limit, 1)].sort((a, b) => b - a);
    }

    _factorize(n) {
        return new Array(n).fill('').map((v, i) => (i > 1 && !(n % i)) ? i : '').filter(v => v);
    }

    _solve(operation, numbers) {
        switch (operation) {
            case '+':
                return numbers[0] + numbers[1];
            case '−':
                return numbers[0] - numbers[1];
            case '×':
                return numbers[0] * numbers[1];
            case '÷':
                return numbers[0] / numbers[1];
        }
    }

    _check() {
        const answer = Number(this.div.querySelector('input').value);
        this.hit((this.answer === answer) ? 'enemy' : 'you', 20);
    }
}