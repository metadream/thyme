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
        console.log('----------------')
        this.panel = this.shadowRoot.querySelector('.quick-dialog-panel');
        this.footer = this.shadowRoot.querySelector('.quick-dialog-footer');

        if (!this.getAttribute('title')) {
            this.shadowRoot.querySelector('.quick-dialog-header').remove();
        }

        this.esc = this.esc.bind(this);
        document.addEventListener('keyup', this.esc);
    }

    addButtons(buttons) {
        for (const btn of buttons) {
            const button = createElement(`<button>${btn.label}</button>`);
            this.footer.appendChild(button);
        }
    }

    attach() {
        document.body.appendChild(this);
    }

    esc(e) {
        if (e.keyCode === 27) {
            document.removeEventListener('keyup', this.esc);
            this.hide();
        }
    }

    hide() {
        this.panel.addClass('quick-scale-out');
        this.shadowBody.addClass('quick-fade-out');
        this.shadowBody.on('animationend', () => this.remove());
    }

}