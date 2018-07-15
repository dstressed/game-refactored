import Loader from './components/loader/loader.js';
import Utilities from './components/utilities/utilities.js';
import Game from './screens/game/game.js';
import Menu from './screens/menu/menu/menu.js';
import Prologue from './screens/prologue/prologue/prologue.js';
import Room from './screens/room/room.js';
import Health from './components/health/health.js';
import You from './components/character/you/you.js';
import Inventory from './components/inventory/inventory.js';
import Cue from './components/cue/cue/cue.js';
import Attacks from './components/attacks/attacks.js';
import Articles from './components/challenge/articles/articles.js';
import Color from './components/challenge/color/color.js';
import Comparing from './components/challenge/comparing/comparing.js';
import Letter from './components/challenge/letter/letter.js';
import Letters from './components/challenge/letters/letters.js';
import Listening from './components/challenge/listening/listening.js';
import Mistake from './components/challenge/mistake/mistake.js';
import Number from './components/challenge/number/number.js';
import Past from './components/challenge/past/past.js';
import Plural from './components/challenge/plural/plural.js';
import Problem from './components/challenge/problem/problem.js';
import Question from './components/challenge/question/question.js';
import Riddle from './components/challenge/riddle/riddle.js';
import Shape from './components/challenge/shape/shape.js';
import Translation from './components/challenge/translation/translation.js';
import Enemy from './components/character/enemy/enemy.js';
import Score from './components/score/score.js';


export const game = {
    utilities: new Utilities().add(),
    loader: new Loader().load(),
    game: new Game(),
    menu: new Menu(),
    prologue: new Prologue(),
    room: new Room(),
    health: {
        enemy: new Health(),
        you: new Health(),
    },
    character: {
        enemy: new Enemy(),
        you: new You(),
    },
    inventory: new Inventory(),
    cue: new Cue(),
    attacks: new Attacks(),
    list: [
        Articles,
        Color,
        Comparing,
        Letter,
        Letters,
        Mistake,
        Number,
        Past,
        Plural,
        Problem,
        Question,
        Riddle,
        Shape,
        Translation,
        Listening,
    ],
    score: new Score(),
};