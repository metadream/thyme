import styles from '../styles/dialog.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

const HIDDEN = 0, PENDING = 1, OPENED = 2;
export class Dialog extends Component {

    state = HIDDEN;
    styles = styles;
    template = `
        <div class="quick-overlay quick-dialog">
            <div class="quick-dialog-panel">
                <div class="quick-dialog-header">{{title}}</div>
                <div class="quick-dialog-body"><slot></slot></div>
                <div class="quick-dialog-footer"></div>
            </div>
        </div>
    `;

    onConnected() {
        this.panel = this.getElement('.quick-dialog-panel');
        if (!this.getAttribute('title')) {
            this.getElement('.quick-dialog-header').remove();
        }
        document.addEventListener('keyup', e => {
            if (e.keyCode === 27) this.hide();
        });
    }

    buttons(items = []) {
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

    open(removable = false) {
        if (this.state != HIDDEN) return;
        this.removable = removable;
        this.animate('quick-fade-in', 'quick-scale-in', OPENED);
    }

    hide() {
        if (this.state != OPENED) return;
        this.animate('quick-fade-out', 'quick-scale-out', HIDDEN);
    }

    animate(bodyClass, panelClass, state) {
        this.state = PENDING;
        const { internals, panel } = this;

        if (state == OPENED) {
            internals.style.display = 'flex';
        }
        internals.addClass(bodyClass);
        panel.addClass(panelClass);

        internals.onanimationend = () => {
            panel.removeClass(panelClass);
            internals.removeClass(bodyClass);
            internals.onanimationend = null;

            this.state = state;
            if (state == HIDDEN) {
                if (this.removable) this.remove();
                else internals.style.display = 'none';
            }
        }
    }

}