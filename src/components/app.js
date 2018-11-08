import { LitElement, html } from '@polymer/lit-element';
import './add-item';

class TodoApp extends LitElement {

    static get properties() {
        return {
            todoList: Array
        }
    }

    constructor() {
        super();
        this.todoList = [];
    }

    render() {

        return html`<h1> Hello todo app</h1>
          <add-item></add-item>
`
    }
}

customElements.define('todo-app', TodoApp);