import { LitElement, html } from '@polymer/lit-element';
import './add-item';
import './list-items';

class TodoApp extends LitElement {

    static get properties() {
        return {
            todoList: Array
        }
    }

    constructor() {
        super();
        let list = JSON.parse(localStorage.getItem('todo-list'))
        this.todoList = list === null ? [] : list;

        console.log(this.todoList)
    }

    render() {

        return html`<h1> Hello todo app</h1>
          <add-item></add-item>
          <list-items .todolist=${this.todoList}></list-items>
`
    }
}

customElements.define('todo-app', TodoApp);