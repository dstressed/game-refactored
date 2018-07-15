/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Challenge class is a parent class of all in-game challenges ans is not for separate usage.
*/



class Challenge {

    constructor() {
        this.div = document.createElement('div');
    }

    hit(character, points) {
        this.remove();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health[character].minus(points);
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game[character](points);
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character[character].hit();
        return this;
    }

    remove() {
        this.div.parentElement.removeChild(this.div);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Challenge;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_loader_loader_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_utilities_utilities_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__screens_game_game_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__screens_menu_menu_menu_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screens_prologue_prologue_prologue_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__screens_room_room_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_health_health_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_character_you_you_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_inventory_inventory_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cue_cue_cue_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_attacks_attacks_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_challenge_articles_articles_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_challenge_color_color_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_challenge_comparing_comparing_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_challenge_letter_letter_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_challenge_letters_letters_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_challenge_listening_listening_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_challenge_mistake_mistake_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_challenge_number_number_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_challenge_past_past_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_challenge_plural_plural_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_challenge_problem_problem_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_challenge_question_question_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_challenge_riddle_riddle_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_challenge_shape_shape_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_challenge_translation_translation_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_character_enemy_enemy_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_score_score_js__ = __webpack_require__(37);






























const game = {
    utilities: new __WEBPACK_IMPORTED_MODULE_1__components_utilities_utilities_js__["a" /* default */]().add(),
    loader: new __WEBPACK_IMPORTED_MODULE_0__components_loader_loader_js__["a" /* default */]().load(),
    game: new __WEBPACK_IMPORTED_MODULE_2__screens_game_game_js__["a" /* default */](),
    menu: new __WEBPACK_IMPORTED_MODULE_3__screens_menu_menu_menu_js__["a" /* default */](),
    prologue: new __WEBPACK_IMPORTED_MODULE_4__screens_prologue_prologue_prologue_js__["a" /* default */](),
    room: new __WEBPACK_IMPORTED_MODULE_5__screens_room_room_js__["a" /* default */](),
    health: {
        enemy: new __WEBPACK_IMPORTED_MODULE_6__components_health_health_js__["a" /* default */](),
        you: new __WEBPACK_IMPORTED_MODULE_6__components_health_health_js__["a" /* default */](),
    },
    character: {
        enemy: new __WEBPACK_IMPORTED_MODULE_26__components_character_enemy_enemy_js__["a" /* default */](),
        you: new __WEBPACK_IMPORTED_MODULE_7__components_character_you_you_js__["a" /* default */](),
    },
    inventory: new __WEBPACK_IMPORTED_MODULE_8__components_inventory_inventory_js__["a" /* default */](),
    cue: new __WEBPACK_IMPORTED_MODULE_9__components_cue_cue_cue_js__["a" /* default */](),
    attacks: new __WEBPACK_IMPORTED_MODULE_10__components_attacks_attacks_js__["a" /* default */](),
    list: [
        __WEBPACK_IMPORTED_MODULE_11__components_challenge_articles_articles_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_12__components_challenge_color_color_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_13__components_challenge_comparing_comparing_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_14__components_challenge_letter_letter_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_15__components_challenge_letters_letters_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_17__components_challenge_mistake_mistake_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_18__components_challenge_number_number_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_19__components_challenge_past_past_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_20__components_challenge_plural_plural_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_21__components_challenge_problem_problem_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_22__components_challenge_question_question_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_23__components_challenge_riddle_riddle_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_24__components_challenge_shape_shape_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_25__components_challenge_translation_translation_js__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_16__components_challenge_listening_listening_js__["a" /* default */],
    ],
    score: new __WEBPACK_IMPORTED_MODULE_27__components_score_score_js__["a" /* default */](),
};
/* harmony export (immutable) */ __webpack_exports__["game"] = game;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const data = {
    words: [
        {
            word: 'yellow',
            translation: ['жёлтый', 'жёлтенький', 'желтый', 'желтенький', 'желтоватый'],
            tag: 'color'
        },
        {
            word: 'autumn',
            translation: ['осень'],
            plural: 'autumns'
        },
        {
            word: 'dog',
            translation: ['собака', 'собачка', 'щенок', 'щеночек'],
            plural: 'dogs'
        },
        {
            word: 'spring',
            translation: ['весна'],
            plural: 'springs'
        },
        {
            word: 'cat',
            translation: ['кот', 'котик', 'котёнок', 'котенок', 'кошка', 'кошечка'],
            plural: 'cats'
        },
        {
            word: 'kitchen',
            translation: ['кухня', 'кухонька'],
            plural: 'kitchens'
        },
        {
            word: 'orange',
            translation: ['апельсин', 'апельсинчик'],
            plural: 'oranges'
        },
        {
            word: 'summer',
            translation: ['лето'],
            plural: 'summers'
        },
        {
            word: 'winter',
            translation: ['зима'],
            plural: 'winters'
        },
        {
            word: 'red',
            translation: ['красный', 'красненький', 'красноватый'],
            tag: 'color'
        },
        {
            word: 'toy',
            translation: ['игрушка', 'игрушечка'],
            plural: 'toys'
        },
        {
            word: 'mother',
            translation: ['мама', 'мамочка'],
            plural: 'mothers'
        },
        {
            word: 'father',
            translation: ['папа', 'папочка'],
            plural: 'fathers'
        },
        {
            word: 'sport',
            translation: ['спорт']
        },
        {
            word: 'food',
            translation: ['еда']
        },
        {
            word: 'apple',
            translation: ['яблоко', 'яблочко'],
            plural: 'apples'
        },
        {
            word: 'run',
            translation: ['бегать', 'бежать'],
            pi: 'run'
        },
        {
            word: 'do',
            translation: ['делать'],
            pi: 'did'
        },
        {
            word: 'sleep',
            translation: ['спать'],
            pi: 'slept'
        },
    ],
    articles: [
        ['This is', 'an', 'interesting movie.'],
        ['My mother is learning to play', 'the', 'piano.'],
        ['Spain is', 'a', 'European country.'],
        ['Do you know where I put', 'the', 'newspaper?'],
        ['It is better to tell', 'the', 'truth.'],
        ['That was', 'a', 'horrible mistake.'],
        ['She is reading', 'an', 'English book.'],
        ['Did you get', 'the', 'flowers that I sent you?'],
        ['Some days I buy', 'an', 'ice cream for dessert.'],
        ['Which bike do you like?', 'the', 'red one?'],
    ],
    mistakes: [
        ['The elephant is the most biggest animal.', 'The elephant is the biggest animal.'],
        ['I\'m young than my brother.', 'I\'m younger than my brother.'],
        ['Kate feed her rabbit in the morning.', 'Kate feeds her rabbit in the morning.'],
        ['Dogs more interesting than cats.', 'Dogs are more interesting than cats.'],
        ['Horses are fastest than cows.', 'Horses are faster than cows.'],
        ['Tanya wash her pet every day.', 'Tanya washes her pet every day.'],
        ['The monkey is the most funniest animal.', 'The monkey is the funniest animal.'],
    ],
    numbers: {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'one',
        '6': 'two',
        '7': 'three',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    },
    operations: [
        ['plus', '+'],
        ['minus', '−'],
        ['multiplied by', '×'],
        ['divided by', '÷'],
    ],
    questions: [
        ['Are you happy?', ['Yes, I am.']],
        ['Are you tired?', ['No, I\'m not.', 'No, I am not.']],
        ['Is your mum kind?', ['Yes, she is.']],
        ['Is your dad nice?', ['Yes, he is.']],
        ['Is your mum a teacher?', ['No, she isn\'t.', 'No, she is not.']],
        ['Is your dad a doctor?', ['No, he isn\'t.', 'No, he is not.']],
        ['Is your house nice?', ['Yes, it is.']],
    ],
    riddles: [
        ['What has a face and two hands but no arms or legs?', 'clock'],
        ['What has a neck but no head?', 'bottle'],
        ['I have keys but no doors, I have space but no rooms, I allow you to enter but you are never able to leave. What am I?', 'keyboard'],
        ['What has to be broken before you can use it?', 'egg'],
        ['I have wings, I\'m able to fly, I\'m not a bird yet I soar high in the sky. What am I?', 'airplane'],
        ['What can be big, white, dirty and wicked?', 'lie'],
        ['What has four legs, but can\'t walk?', 'table'],
    ],
    sentences: [

    ],
    shapes: [
        'square',
        'circle',
        'triangle',
    ],


};
/* harmony export (immutable) */ __webpack_exports__["a"] = data;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Description:
The Character class is a parent class of all in-game characters ans is not for separate usage.
*/

class Character {

    constructor() {
        this.div = document.createElement('div');
        this._delay = 500;
    }

    hit() {
        this.div.classList.add('hit');
        setTimeout(() => {
            this.div.classList.remove('hit');
        }, this._delay);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_js__ = __webpack_require__(1);
/*
Description:
The Health class creates a loader.
Use the .load() method to pre-load all images.
Use the .add() method to render and add the window to the page.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Loader {

    constructor() {
        this.div = document.createElement('div');
        this.count = __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* data */].images.length;
    }

    load() {
        __WEBPACK_IMPORTED_MODULE_0__data_js__["a" /* data */].images.forEach(v => {
            const img = document.createElement('img');
            img.src = v;
            img.onload = this._loaded.bind(this);
        });
        return this;
    }

    _loaded() {
        this.count--;
        if (!this.count) {
            this.remove();
            __WEBPACK_IMPORTED_MODULE_1__main_js__["game"].game.launch();
        }
    }

    remove() {
        document.body.querySelector('.loader').classList.add('-removed');
        return this;
    }

    add(parent) {
        this.div.className = 'loader';
        this.div.innerHTML = '<div></div>';
        parent.appendChild(this.div);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Loader;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const data = {
    images: [
        'images/background.svg',
        'modules/screens/menu/menu/images/button_menu.png',
        'modules/screens/menu/menu/images/title.svg',
        'modules/screens/menu/options/images/sound_off.svg',
        'modules/screens/menu/options/images/sound_on.svg',
        'modules/screens/prologue/prologue/images/prologue_image_00.gif',
        'modules/screens/prologue/prologue/images/prologue_image_01.gif',
        'modules/screens/prologue/prologue/images/prologue_image_02.gif',
        'modules/screens/room/images/room.svg',
        'modules/components/attacks/images/attack_image_00.svg',
        'modules/components/attacks/images/attack_image_01.svg',
        'modules/components/attacks/images/attack_image_02.svg',
        'modules/components/challenge/letters/images/letter_background.png',
        'modules/components/challenge/letters/images/placeholder.svg',
        'modules/components/challenge/listening/images/play.svg',
        'modules/components/challenge/shape/images/circle.gif',
        'modules/components/challenge/shape/images/square.gif',
        'modules/components/challenge/shape/images/triangle.gif',
        'modules/components/character/character/images/hit.png',
        'modules/components/character/enemy/images/circle_background.png',
        'modules/components/character/enemy/images/circle_bottom_00.svg',
        'modules/components/character/enemy/images/circle_bottom_01.svg',
        'modules/components/character/enemy/images/circle_bottom_02.svg',
        'modules/components/character/enemy/images/circle_bottom_03.svg',
        'modules/components/character/enemy/images/circle_middle_00.svg',
        'modules/components/character/enemy/images/circle_middle_01.svg',
        'modules/components/character/enemy/images/circle_middle_02.svg',
        'modules/components/character/enemy/images/circle_middle_03.svg',
        'modules/components/character/enemy/images/circle_top_00.svg',
        'modules/components/character/enemy/images/circle_top_01.svg',
        'modules/components/character/enemy/images/circle_top_02.svg',
        'modules/components/character/enemy/images/circle_top_03.svg',
        'modules/components/character/enemy/images/duct_tape_00.svg',
        'modules/components/character/enemy/images/duct_tape_01.svg',
        'modules/components/character/enemy/images/square_background.png',
        'modules/components/character/enemy/images/square_bottom_00.svg',
        'modules/components/character/enemy/images/square_bottom_01.svg',
        'modules/components/character/enemy/images/square_bottom_02.svg',
        'modules/components/character/enemy/images/square_bottom_03.svg',
        'modules/components/character/enemy/images/square_middle_00.svg',
        'modules/components/character/enemy/images/square_middle_01.svg',
        'modules/components/character/enemy/images/square_middle_02.svg',
        'modules/components/character/enemy/images/square_middle_03.svg',
        'modules/components/character/enemy/images/square_top_00.svg',
        'modules/components/character/enemy/images/square_top_01.svg',
        'modules/components/character/enemy/images/square_top_02.svg',
        'modules/components/character/enemy/images/square_top_03.svg',
        'modules/components/character/enemy/images/teacher.png',
        'modules/components/character/enemy/images/triangle_background.png',
        'modules/components/character/enemy/images/triangle_bottom_00.svg',
        'modules/components/character/enemy/images/triangle_bottom_00.svg',
        'modules/components/character/enemy/images/triangle_bottom_01.svg',
        'modules/components/character/enemy/images/triangle_bottom_02.svg',
        'modules/components/character/enemy/images/triangle_bottom_03.svg',
        'modules/components/character/enemy/images/triangle_middle_00.svg',
        'modules/components/character/enemy/images/triangle_middle_01.svg',
        'modules/components/character/enemy/images/triangle_middle_02.svg',
        'modules/components/character/enemy/images/triangle_middle_03.svg',
        'modules/components/character/enemy/images/triangle_top_00.svg',
        'modules/components/character/enemy/images/triangle_top_01.svg',
        'modules/components/character/enemy/images/triangle_top_02.svg',
        'modules/components/character/enemy/images/triangle_top_03.svg',
        'modules/components/character/you/images/you.png',
        'modules/components/cue/cue/images/cue_enemy.png',
        'modules/components/cue/cue/images/cue_you.png',
        'modules/components/health/images/health_foreground.png',
        'modules/components/inventory/images/artifact_placeholder.svg',
        'modules/components/inventory/images/gear_button_left.svg',
        'modules/components/inventory/images/gear_button_right.svg',
        'modules/components/inventory/images/gear_placeholder.svg',
        'modules/components/inventory/images/inventory_background.png',
    ]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = data;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Description:
The Score class adds functions used by all classes.
Use the .add() method to add utility functions and the .remove() method to remove them.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/

class Utilities {

    add() {
        Object.prototype.random = this._random;
        return this;
    }

    remove() {
        delete Object.prototype.random;
        return this;
    }

    _random(b, a = 0) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utilities;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Game class creates the main element of the game.
Use the .add() method to render and add the window to the page.
The .begin() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Game {

    constructor() {
        this.div = document.createElement('div');
    }

    launch() {
        this.add(document.body);
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].menu.add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.div).addListeners();
    }

    add(parent) {
        this.div.className = 'game';
        parent.appendChild(this.div);
        return this;
    }

    begin() {
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].prologue.remove();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room.add(this.div);
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.enemy.render('Sarge Peterson').add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room.div).hide();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.you.render('You').add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room.div).hide();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character.enemy.teacher().add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room.div);
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character.you.add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room.div);
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].inventory.add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room.div).addListeners();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].cue.render().add(this.div).addContinue();
        return this;
    }

    enemy(points) {
        if (__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.enemy.points < 1) {
            __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.enemy.render().plus();
            __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character.enemy.render();
        }
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].score.plus(points);
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].attacks.show();
        return this;
    }

    you() {
        if (__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.you.points < 1) {
            __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].score.add(this.div).addListeners().write();
        } else {
            __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].attacks.show();
        }
        return this;
    }

    reset() {
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].menu = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].menu.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].options = '';
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].exit = '';
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].prologue = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].prologue.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].room.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.enemy = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.enemy.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.you = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.you.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character.enemy = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character.enemy.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character.you = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].character.you.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].inventory = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].inventory.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].cue = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].cue.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].attacks = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].attacks.constructor();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].score = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].score.constructor();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options_options_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exit_exit_js__ = __webpack_require__(10);
/*
Description:
The Menu class creates a menu of the game.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/





class Menu {

    constructor() {
        this.div = document.createElement('div');
    }

    add(parent) {
        this.div.className = 'game-menu';
        this.div.innerHTML = '<div class="menu-image"></div><h1>Start</h1><h1>Options</h1><h1>Exit</h1>';
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.addEventListener('click', this._splitter);
        return this;
    }

    remove() {
        this.div.classList.add('-removed');
        return this;
    }

    _splitter(event) {
        switch (event.target.innerHTML.toLowerCase()) {
            case 'start':
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].menu.remove();
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].prologue.render().add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.div).addContinue();
                break;
            case 'options':
                if (__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].options) {
                    __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].options.show();
                } else {
                    __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].options = new __WEBPACK_IMPORTED_MODULE_1__options_options_js__["a" /* default */]().add(document.body).addListeners();
                }
                break;
            case 'exit':
                if (__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].exit) {
                    __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].exit.show();
                } else {
                    __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].exit = new __WEBPACK_IMPORTED_MODULE_2__exit_exit_js__["a" /* default */]().add(document.body).addListeners();
                }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Options class creates a options window.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Options {

    constructor() {
        this.div = document.createElement('div');
        this.listening = __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].list.length;
    }

    add(parent) {
        this.div.className = 'options-background';
        this.div.innerHTML = '<div class="options-window"><h1>OPTIONS</h1><div class="options-sound"><p>Sound</p><span class="checkbox -checked"></span></div><span class="button-back">BACK</span></div>';
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.checkbox').addEventListener('click', this._toggle.bind(this));
        this.div.querySelector('.button-back').addEventListener('click', this.hide.bind(this));
        return this;
    }

    show() {
        this.div.classList.remove('-hidden');
        return this;
    }

    hide() {
        this.div.classList.add('-hidden');
        return this;
    }

    _toggle(event) {
        this.listening = (isFinite(this.listening)) ?
            __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].list.pop() :
            __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].list.push(this.listening);
        event.target.classList.toggle('-checked');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Options;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Exit class creates an exit window.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Exit {

    constructor() {
        this.div = document.createElement('div');
    }

    add(parent) {
        this.div.className = 'exit-background';
        this.div.innerHTML = '<div class="exit-window"><p>ARE YOU SURE YOU WANT TO QUIT?</p><div class="exit-buttons"><span>YES</span><span>NO</span></div></div>';
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.addEventListener('click', this._splitter);
        return this;
    }

    show() {
        this.div.classList.remove('-hidden');
        return this;
    }

    hide() {
        this.div.classList.add('-hidden');
        return this;
    }

    _splitter(event) {
        switch (event.target.innerHTML.toLowerCase()) {
            case 'yes':
                window.close();
                break;
            case 'no':
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].exit.hide();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Exit;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__continue_continue_js__ = __webpack_require__(12);
/*
Description:
The Prologue class creates a prologue.
Use the .render() method to render the element and the .add() method to add it to the page.
The .addListeners() and .addContinue() methods is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Prologue {

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
            new __WEBPACK_IMPORTED_MODULE_0__continue_continue_js__["a" /* default */]().add(this.div).addListeners();
        }, this._delay);
        return this;
    }

    remove() {
        this.div.classList.add('-removed');
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Prologue;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Continue class is used by the Prologue class to tell the player to proceed further.
Use .add() method to render and add the element it to the page.
The .addListeners() and .addContinue() methods is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Continue {

    constructor() {
        this.span = document.createElement('span');
    }

    add(parent) {
        this.span.className = 'prologue-continue';
        this.span.innerHTML = 'CLICK TO CONTINUE';
        parent.appendChild(this.span);
        return this;
    }

    addListeners() {
        document.body.addEventListener('click', this._continue);
        return this;
    }

    _continue() {
        document.body.removeEventListener('click', Continue.prototype._continue);
        switch (__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].prologue.i) {
            case __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].prologue.lines.length:
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.begin();
                break;
            default:
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].prologue.render().addContinue();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Continue;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Description:
The Options class creates a room.
Use the .add() method to render and add the window to the page.
*/

class Room {

    constructor() {
        this.div = document.createElement('div')
    }

    add(parent) {
        this.div.className = 'room';
        parent.appendChild(this.div);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Room;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Health class creates a character health bar.
Use the .render() method to render the element and the .add() method to add it to the page.
The .plus(), .minus(), .enemy(), and .you() methods are for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Health {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Health;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_character_js__ = __webpack_require__(3);
/*
Description:
The You class creates a protagonist.
Use .add() method to render and add the element it to the page.
*/



class You extends __WEBPACK_IMPORTED_MODULE_0__character_character_js__["a" /* default */] {

    constructor() {
        super();
    }

    add(parent) {
        this.div.className = 'you';
        parent.appendChild(this.div);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = You;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Inventory class creates an inventory.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
*/



class Inventory {

    constructor() {
        this.div = document.createElement('div');
    }

    add(parent) {
        const items = `<div><p>Inventory</p><div class="inventory-items"><div class="items-button"></div>${new Array(5).join('<div></div>')}<div class="items-button"></div></div></div>`;
        const artifacts = `<div><p>Artifacts</p>\<div class="inventory-artifacts">${new Array(4).join('<div></div>')}</div></div>`;
        const menu = '<div class="inventory-menu"><span>Options</span><span>Exit</span></div>';
        this.div.className = 'inventory';
        this.div.innerHTML = items + artifacts + menu;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.inventory-menu').addEventListener('click', __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].menu._splitter);
        return this;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Inventory;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__continue_continue_js__ = __webpack_require__(18);
/*
Description:
The Cue class creates a character cue.
Use the .render() method to render the element and the .add() method to add it to the page.
The .addListeners() and .addContinue() methods is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/





class Cue {

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
        this.div.innerHTML = `<p>${__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health[turn].name}</p><p>${this.cues[this.i].cue}</p>`;
        this.i++;
        return this;
    }

    add(parent) {
        parent.appendChild(this.div);
        return this;
    }

    addContinue() {
        setTimeout(() => {
            new __WEBPACK_IMPORTED_MODULE_1__continue_continue_js__["a" /* default */]().add(this.div).addListeners()
        }, this._delay);
        return this;
    }

    remove() {
        this.div.classList.add('-removed');
        return this;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cue;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Continue class is used by the Cue class to tell the player to proceed further.
Use .add() method to render and add the element it to the page.
The .addListeners() and .addContinue() methods is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Continue {

    constructor() {
        this.span = document.createElement('span');
    }

    add(parent) {
        this.span.className = 'cue-continue';
        this.span.innerHTML = 'CLICK TO CONTINUE';
        parent.appendChild(this.span);
        return this;
    }

    addListeners() {
        document.body.addEventListener('click', this._continue);
        return this;
    }

    _continue() {
        document.body.removeEventListener('click', Continue.prototype._continue);
        switch (__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].cue.i) {
            case 3:
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.enemy.show();
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].health.you.show();
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].attacks.add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.div).addListeners();
                break;
            case __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].cue.cues.length:
                __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].cue.remove();
                return;
        }
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].cue.render().addContinue();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Continue;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Attacks class creates a modal window which allows the player to choose one of the attacks.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Attacks {

    constructor() {
        this.div = document.createElement('div');
        this._attacks = [
            'Water Splash',
            'Piercing Shot',
            'Paper Cut',
        ];
    }

    add(parent, i = this._attacks.length) {
        this.div.className = 'attacks';
        this.div.innerHTML = new Array(i).fill('').map((v, i) => `<div class="attack"><div class="attack-image-0${i}"></div><p>${this._attacks[i]}</p></div>`).join('');
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.addEventListener('click', this._addChallenge.bind(this));
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

    _addChallenge(event) {
        if (event.target.closest('.attack')) {
            this.hide();
            __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].challenge = new __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].list[this.random(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].list.length - 1)]().add(__WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.div).addListeners();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Attacks;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Articles class creates a challenge window that asks the player to insert the correct article.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Articles extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.sentence = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].articles[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].articles.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-articles';
        this.div.innerHTML = `<p>Insert A, AN or THE:</p><div><span>${this.sentence[0]}</span><input type="text" placeholder="?"><span>${this.sentence[2]}</span></div><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.sentence[1] === answer) ? 'enemy' : 'you', 20);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Articles;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Color class creates a challenge window that asks the player to name the color of the given square.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Color extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.color = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words.filter(v => v.tag === 'color');
        this.color = this.color[this.random(this.color.length - 1)].word;
    }

    add(parent) {
        this.div.className = 'challenge challenge-color';
        this.div.innerHTML = `<p>What color is the square?</p><div class="color-square color-${this.color}"></div><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.color === answer) ? 'enemy' : 'you', 10);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/*
Description:
The Comparing class creates a challenge window that asks the player to compare two numbers and tell which one is greater.
Numbers are chosen randomly from 1 to 99.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Comparing extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
    }

    add(parent) {
        const numbers = [this.random(99, 1), this.random(99, 1)];
        this.answer = (numbers[0] < numbers[1]) ? '<' : '>';
        this.div.className = 'challenge challenge-comparing';
        this.div.innerHTML = `<p>What number is greater?</p><div><span>${numbers[0]}</span><input type="text" placeholder="?"><span>${numbers[1]}</span></div><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.answer === answer) ? 'enemy' : 'you', 10);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Comparing;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Letter class creates a challenge window that asks the player to complete a word with a missing letter.
The word is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Letter extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.word = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words.length - 1)].word;
        this.index = this.random(this.word.length - 1);
    }

    add(parent) {
        this.div.className = 'challenge challenge-letter';
        this.div.innerHTML = `<p>Insert the missing letter:</p><div><span>${this.word.slice(0, this.index)}</span><input type="text" placeholder="?"><span>${this.word.slice(this.index + 1)}</span></div><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.word[this.index] === answer) ? 'enemy' : 'you', 15);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Letter;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__placeholder_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Letters class creates a challenge window that asks the player to rearrange letters into a word.
The word is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/





class Letters extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.word = __WEBPACK_IMPORTED_MODULE_2__challenge_data_js__["a" /* data */].words[this.random(__WEBPACK_IMPORTED_MODULE_2__challenge_data_js__["a" /* data */].words.length - 1)].word;
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
        const placeholder = new __WEBPACK_IMPORTED_MODULE_1__placeholder_js__["a" /* default */]().add(target);
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Letters;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
Description:
The Placeholder class is used by the Letters class to create a temporary placeholder and is not for separate usage.
Use the .add() method to render and add the element to the page.
*/

class Placeholder {

    constructor() {
        this.span = document.createElement('span');
    }

    add(element) {
        this.span.className = 'placeholder';
        element.parentElement.insertBefore(this.span, element);
        return this.span;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Placeholder;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Listening class creates a challenge window that asks the player to listen and write down what is spoken.
The word is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Listening extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.word = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words.length - 1)].word;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Listening;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to find a mistake in the sentence and rewrite it correctly.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Mistake extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.mistake = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].mistakes[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].mistakes.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-mistake';
        this.div.innerHTML = `<p>Find a mistake and rewrite the sentence correctly:</p><p>${this.mistake[0]}</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value;
        this.hit((this.mistake[1] === answer) ? 'enemy' : 'you', 15);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mistake;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to write a number in letters.
The number is chosen randomly from 0 to 99.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Number extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
    }

    add(parent) {
        const number = this.random(99);
        this.answer = this._word(number);
        this.div.className = 'challenge challenge-number';
        this.div.innerHTML = `<p>Write ${number} in letters:</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _word(n) {
        const remainder = n % 10;
        if (n > 20 && remainder) {
            return `${__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].numbers[n - remainder]} ${__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].numbers[remainder]}`;
        } else {
            return __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].numbers[n];
        }
    }

    _check() {
        const answer = this.div.querySelector('input').value;
        this.hit((this.answer === answer) ? 'enemy' : 'you', 15);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Number;



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Past class creates a challenge window that asks the player to name the past tense of the verb.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Past extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.past = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words.filter(v => v.pi);
        this.past = this.past[this.random(this.past.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-past';
        this.div.innerHTML = `<p>What&rsquo;s the past tense of ${this.past.word.toUpperCase()}?</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.past.pi === answer) ? 'enemy' : 'you', 15);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Past;



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to name the plural of a noun.
The noun is chosen randomly from the word collection.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Plural extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.word = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words.filter(v => v.plural);
        this.word = this.word[this.random(this.word.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-number';
        this.div.innerHTML = `<p>What&rsquo;s the plural of ${this.word.word}?</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check(event) {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.word.plural === answer) ? 'enemy' : 'you', 15);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plural;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to solve a arithmetic problem.
Numbers and operations are chosen randomly.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Problem extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
    }

    add(parent) {
        const limit = 10;
        const operation = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].operations[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].operations.length - 1)];
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Problem;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to finish the answer to a question.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Question extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.question = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].questions[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].questions.length - 1)];
        this.reply = this.question[1][0].split(' ')[0];
    }

    add(parent) {
        this.div.className = 'challenge challenge-question';
        this.div.innerHTML = `<p>Finish the answer:</p><p>${this.question[0]}</p><div><span>${this.reply}</span><input type="text" placeholder="?">.</div><span class="challenge-submit">OK</span>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value;
        this.hit(~this.question[1].indexOf(`${this.reply} ${answer}.`) ? 'enemy' : 'you', 20);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Question;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to solve the riddle.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Riddle extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.riddle = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].riddles[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].riddles.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-riddle';
        this.div.innerHTML = `<p>Solve the riddle:</p><p>${this.riddle[0]}</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        if (this.riddle[1] === answer) {
            this.hit('enemy', 25);
        } else {
            this.hit('you', 10);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Riddle;



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to name the shape.
The shape is chosen randomly from the list of the available shapes.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Shape extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */] {

    constructor() {
        super();
        this.shape = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].shapes[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].shapes.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-shape';
        this.div.innerHTML = `<p>What shape is it?</p><div class="shape shape-${this.shape}"></div><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((this.shape === answer) ? 'enemy' : 'you', 10);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Shape;



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__ = __webpack_require__(2);
/*
Description:
The Mistake class creates a challenge window that asks the player to translate the word into Russian.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/




class Translation extends __WEBPACK_IMPORTED_MODULE_0__challenge_challenge_js__["a" /* default */]{

    constructor() {
        super();
        this.word = __WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words[this.random(__WEBPACK_IMPORTED_MODULE_1__challenge_data_js__["a" /* data */].words.length - 1)];
    }

    add(parent) {
        this.div.className = 'challenge challenge-translation';
        this.div.innerHTML = `<p>What&rsquo;s <span>${this.word.word.toUpperCase()}</span> in Russian?</p><input type="text" placeholder="?"><div class="challenge-submit">OK</div>`;
        parent.appendChild(this.div);
        return this;
    }

    addListeners() {
        this.div.querySelector('.challenge-submit').addEventListener('click', this._check.bind(this));
        return this;
    }

    _check() {
        const answer = this.div.querySelector('input').value.toLowerCase();
        this.hit((~this.word.translation.indexOf(answer)) ? 'enemy' : 'you', 20);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Translation;



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_character_js__ = __webpack_require__(3);
/*
Description:
The Enemy class creates an enemy.
Use the .render() method to render the element and the .add() method to add it to the page.
*/



class Enemy extends __WEBPACK_IMPORTED_MODULE_0__character_character_js__["a" /* default */]{

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Enemy;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);
/*
Description:
The Score class creates a modal window that offers the the player to see the score or begin a new game.
Use the .add() method to render and add the window to the page.
The .plus() and .addListeners() methods are for in-game invoking only.
Methods and properties beginning with _ are deemed private and are used only by its class.
*/



class Score {

    constructor() {
        this.div = document.createElement('div');
        this.score = 0;
    }

    add(parent) {
        this.div.className = 'score-background';
        this.div.innerHTML = `<div class="score-window"><p>All right, that&rsquo;s it for today!</p><p>Nice job! Your score is ${this.score}. We&rsquo;ll continue tomorrow.</p><div class="score-show">SHOW SCORE</div><div class="score-begin">NEW GAME</div></div>`;
        parent.appendChild(this.div);
        return this;
    }

    plus(points) {
        this.score += points;
        return this;
    }

    addListeners() {
        this.div.querySelector('.score-show').addEventListener('click', this._render.bind(this));
        this.div.querySelector('.score-begin').addEventListener('click', this._launch);
        return this;
    }

    write() {
        const score = window.localStorage.getItem('score');
        if (score) {
            window.localStorage.setItem('score', `${score.slice(0, -1)},${this.score}]`);
        } else {
            window.localStorage.setItem('score', `[${this.score}]`);
        }
        return this;
    }

    _launch() {
        document.body.innerHTML = '';
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.reset();
        __WEBPACK_IMPORTED_MODULE_0__main_js__["game"].game.launch();
    }

    _render() {
        const score = JSON.parse(window.localStorage.getItem('score'));
        if (this.table) {
            this.table.classList.toggle('-removed');
        } else {
            this.table = document.createElement('div');
            this.table.innerHTML = `${score.sort((a, b) => b - a).map((v, i) => (i < 10) ? `<span>${i + 1}</span><span>${v}</span>` : '').join('')}`;
            this.div.querySelector('.score-show').insertAdjacentElement('afterEnd', this.table);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Score;



/***/ })
/******/ ]);