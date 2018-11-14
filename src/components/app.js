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

    }
    firstUpdated() {
        this.addEventListener('addItem', (e) => {
            this.todoList = e.detail.todoList;
        })

        this.addEventListener('removeItem', (e) => {
            // console.log(e.detail.item)

            // let index = this.todoList.map(item=> item.id)
            let index = this.todoList.findIndex(x => x.id == e.detail.item);
            console.log(index)
            this.todoList.splice(index, 1)
            console.log(this.todoList)

            this.todoList = this.todoList.slice()
            console.log(this.todoList)

            localStorage.setItem('todo-list', JSON.stringify(this.todoList));

            // console.log(index)

        })


        this.addEventListener('changeItem', (e) => {

            let index = this.todoList.findIndex(x => x.id == e.detail.item);

            this.todoList[index].done = !this.todoList[index].done;

            this.todoList = this.todoList.slice()

            localStorage.setItem('todo-list', JSON.stringify(this.todoList));


        })
    }

    render() {

        return html`<h1> Hello todo app</h1>
          <add-item></add-item>
          <list-items .todolist=${this.todoList}></list-items>
`
    }
}

customElements.define('todo-app', TodoApp);