/*
Description:
The Inventory class creates an inventory.
Use the .add() method to render and add the window to the page.
The .addListeners() method is for in-game invoking only.
*/

import {game} from '../../main.js';

export default class Inventory {

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
        this.div.querySelector('.inventory-menu').addEventListener('click', game.menu._splitter);
        return this;
    }
}
