import { LitElement, html } from '@polymer/lit-element'


class AddItem extends LitElement {

    static get properties() {
        return {
            todoList: Array,
            todoItem: String
        }
    }

    constructor() {
        super();
        this.todoItem = 'Amar gonna become a great value investor'
    }

    render() {
        const { todoList, todoItem } = this;
        return html` <h2> ${todoItem}</h2>`
    }
}

customElements.define('add-item', AddItem);