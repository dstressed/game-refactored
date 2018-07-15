/*
Description:
The Game class creates the main element of the game.
Use the .add() method to render and add the window to the page.
The .begin() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

import {game} from '../../main.js';

export default class Game {

    constructor() {
        this.div = document.createElement('div');
    }

    launch() {
        this.add(document.body);
        game.menu.add(game.game.div).addListeners();
    }

    add(parent) {
        this.div.className = 'game';
        parent.appendChild(this.div);
        return this;
    }

    begin() {
        game.prologue.remove();
        game.room.add(this.div);
        game.health.enemy.render('Sarge Peterson').add(game.room.div).hide();
        game.health.you.render('You').add(game.room.div).hide();
        game.character.enemy.teacher().add(game.room.div);
        game.character.you.add(game.room.div);
        game.inventory.add(game.room.div).addListeners();
        game.cue.render().add(this.div).addContinue();
        return this;
    }

    enemy(points) {
        if (game.health.enemy.points < 1) {
            game.health.enemy.render().plus();
            game.character.enemy.render();
        }
        game.score.plus(points);
        game.attacks.show();
        return this;
    }

    you() {
        if (game.health.you.points < 1) {
            game.score.add(this.div).addListeners().write();
        } else {
            game.attacks.show();
        }
        return this;
    }

    reset() {
        game.game = new game.game.constructor();
        game.menu = new game.menu.constructor();
        game.options = '';
        game.exit = '';
        game.prologue = new game.prologue.constructor();
        game.room = new game.room.constructor();
        game.health.enemy = new game.health.enemy.constructor();
        game.health.you = new game.health.you.constructor();
        game.character.enemy = new game.character.enemy.constructor();
        game.character.you = new game.character.you.constructor();
        game.inventory = new game.inventory.constructor();
        game.cue = new game.cue.constructor();
        game.attacks = new game.attacks.constructor();
        game.score = new game.score.constructor();
    }
}
