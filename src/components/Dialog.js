import dialogStyles from '../styles/dialog.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

export class Dialog extends Component {

    styles = dialogStyles;
    template = `
        <div class="quick-overlay quick-dialog">
            <div class="quick-dialog-panel">
                <div class="quick-dialog-body"></div>
                <div class="quick-dialog-footer"></div>
            </div>
        </div>
    `;

    // options = { title, slot, buttons }
    constructor(options = {}) {
        super();
        this.options = options;
        document.body.append(this);
    }

    onConnected() {
        this.panel = this.getElement('.quick-dialog-panel');
        this.panel.addClass('quick-scale-in');
        this.shadowBody.addClass('quick-fade-in');

        this.addTitle(this.options.title);
        this.addSlot(this.options.slot);
        this.addButtons(this.options.buttons);

        this.escape = this.escape.bind(this);
        document.addEventListener('keyup', this.escape);
    }

    addTitle(text) {
        if (!text) return;
        const title = createElement(`<div class="quick-dialog-header">${text}</div>`);
        this.panel.insertBefore(title, this.panel.firstChild);
    }

    addSlot(tpl = '') {
        const body = this.getElement('.quick-dialog-body');
        if (tpl instanceof HTMLTemplateElement) {
            body.appendChild(tpl.content.cloneNode(true));
        } else {
            body.innerHTML = tpl;
        }
    }

    addButtons(items = []) {
        const footer = this.getElement('.quick-dialog-footer');
        for (const item of items) {
            const button = createElement(`<button>${item.label}</button>`);
            footer.appendChild(button);

            if (item.primary === true) {
                button.addClass('primary');
            }
            button.on('click', () => {
                item.onclick ? item.onclick(this, button) : this.hide()
            });
        }
    }

    escape(e) {
        if (e.keyCode === 27) {
            document.removeEventListener('keyup', this.escape);
            this.hide();
        }
    }

    hide() {
        this.panel.addClass('quick-scale-out');
        this.shadowBody.addClass('quick-fade-out');
        this.shadowBody.on('animationend', () => this.remove());
    }

}