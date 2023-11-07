import dialogStyles from '../styles/dialog.css';
import { createElement } from '../utility/Util.js';
import { Component } from './Component.js';

export class Dialog extends Component {

    styles = dialogStyles;
    template = `
        <div class="quick-overlay quick-dialog">
            <div class="quick-dialog-panel">
                <div class="quick-dialog-header">{{title}}</div>
                <div class="quick-dialog-body"></div>
                <div class="quick-dialog-footer"></div>
            </div>
        </div>
    `;

    onConnected() {
        if (!this.getAttribute('title')) {
            this.shadowRoot.querySelector('.quick-dialog-header').remove();
        }

        this.panel = this.shadowRoot.querySelector('.quick-dialog-panel');
        this.footer = this.shadowRoot.querySelector('.quick-dialog-footer');

        this.panel.addClass('quick-scale-in');
        this.shadowBody.addClass('quick-fade-in');

        this.escape = this.escape.bind(this);
        document.addEventListener('keyup', this.escape);
    }

    addButtons(items) {
        for (const item of items) {
            const button = createElement(`<button class="${item.type}">${item.label}</button>`);
            this.footer.appendChild(button);

            button.on('click', () => {
                item.onclick ? item.onclick(this.shadowBody, button) : this.hide()
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