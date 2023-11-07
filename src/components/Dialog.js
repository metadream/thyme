import dialogStyles from '../styles/dialog.css';
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
        this.panel = this.shadowRoot.querySelector('.quick-dialog-panel');

        if (!this.getAttribute('title')) {
            this.shadowRoot.querySelector('.quick-dialog-header').remove();
        }

        this.esc = this.esc.bind(this);
        document.addEventListener('keyup', this.esc);
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