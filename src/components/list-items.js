import { LitElement, html } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat'
import './todo-items';

class ListItems extends LitElement {

    static get properties() {
        return {
            todolist: Array
        }
    }
    constructor() {
        super();
        this.todolist = []
    }

    render() {
        return html`
        <ul>
        ${repeat(this.todolist, todo => html`<todo-item .todoItem=${todo}></todo-item>`)}

        </ul > `
        //  works     ${repeat(this.todolist, todo => html` <li> ${todo.item}</li>`)} 
        //  const render = () => html`items = ${items.map((i) => `item: ${i}`)}`;
        //  ${repeat(this.todoList, todo => todo.id, todo => html` <li> ${todo.item}</li>`)}


    }

}

customElements.define('list-items', ListItems);