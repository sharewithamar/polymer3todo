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
    onDone(id) {
        this.dispatchEvent(new CustomEvent('changeItem', { bubbles: true, composed: true, detail: { item: id } }));
        this.requestUpdate();
    }
    render() {
        return html`<li>
        <input type="checkbox" .checked=${this.todoItem.done} @click= ${() => this.onDone(this.todoItem.id)}>
        ${this.todoItem.item}
         <button @click=${() => this.onRemove(this.todoItem.id)}>Remove</button>
        </li>
       `
    }
}

customElements.define('todo-item', TodoItem);