import { LitElement, html } from '@polymer/lit-element';

class TodoItem extends LitElement {
    static get properties() {
        return {
            todoItem: Object
        }
    }
    constructor() {
        super();
        this.todoItem = {};
    }
    onRemove(id) {
        this.dispatchEvent(new CustomEvent('removeItem', { bubbles: true, composed: true, detail: { item: id } }));
    }
    render() {
        return html`<li>${this.todoItem.item}</li>
        <button @click=${() => this.onRemove(this.todoItem.id)}>Remove</button>`
    }
}

customElements.define('todo-item', TodoItem);