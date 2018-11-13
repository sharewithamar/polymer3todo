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
        this.todoItem = ''
    }

    inputKeyPress(e) {
        //  console.log(this.todoItem)

        if (e.keyCode == 13) {
            this.onAddItem()
        }
        else {
            // console.log(e.target.value)
            this.todoItem = e.target.value
        }
    }

    onAddItem() {
        if (this.todoItem.length > 0) {

            let storedTodoList = JSON.parse(localStorage.getItem('todo-list'));
            storedTodoList = storedTodoList === null ? [] : storedTodoList;
            storedTodoList.push({
                id: new Date().valueOf(),
                item: this.todoItem,
                done: false
            })

            localStorage.setItem('todo-list', JSON.stringify(storedTodoList));
            this.dispatchEvent(new CustomEvent('addItem', { bubbles: true, composed: true, detail: { todoList: storedTodoList } }))
            this.todoItem = '';

        }

    }
    render() {
        const { todoList, todoItem } = this;
        return html`<div> 
         <input .value=${this.todoItem} 
         @keyup="${(e) => this.inputKeyPress(e)}"
         </input>
         <button @click="${() => this.onAddItem()}"> Add Item</button>
        </div>`
    }
}

customElements.define('add-item', AddItem);