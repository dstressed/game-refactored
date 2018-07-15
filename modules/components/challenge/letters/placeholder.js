/*
Description:
The Placeholder class is used by the Letters class to create a temporary placeholder and is not for separate usage.
Use the .add() method to render and add the element to the page.
*/

export default class Placeholder {

    constructor() {
        this.span = document.createElement('span');
    }

    add(element) {
        this.span.className = 'placeholder';
        element.parentElement.insertBefore(this.span, element);
        return this.span;
    }
}
