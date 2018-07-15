/*
Description:
The Options class creates a room.
Use the .add() method to render and add the window to the page.
*/

export default class Room {

    constructor() {
        this.div = document.createElement('div')
    }

    add(parent) {
        this.div.className = 'room';
        parent.appendChild(this.div);
        return this;
    }
}
