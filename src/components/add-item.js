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
        console.log(this.todoItem)

        if (e.keyCode == 13) {
            //call add item function
        }
        else {
            console.log(e.target.value)
            this.todoItem = e.target.value
        }
    }
    render() {
        const { todoList, todoItem } = this;
        return html`<div> 
         <input value=${this.todoItem} 
         @keyup="${(e) => this.inputKeyPress(e)}"
         </input>
        </div>`
    }
}

customElements.define('add-item', AddItem);