import styles from '../styles/dialog.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 对话框组件
 * @example <quick-dialog title="">any contents</quick-dialog>
 * @example this.buttons = [{ label: string, primary: true|false, onclick: function(self, btn) }]
 * @example this.open(true|false)
 * @example this.hide()
 */
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
        this.panel = this.findElement('.quick-dialog-panel');
        if (!this.getAttribute('title')) {
            this.findElement('.quick-dialog-header').remove();
        }
        document.addEventListener('keyup', e => {
            if (e.keyCode === 27) this.hide();
        });
    }

    // 添加按钮
    set buttons(items = []) {
        const footer = this.findElement('.quick-dialog-footer');
        for (let item of items) {
            if (typeof item === 'string') {
                item = { label: item };
            }

            const button = createElement(`<button>${item.label}</button>`);
            this.defineLoading(button);
            footer.appendChild(button);

            if (item.primary === true) {
                button.addClass('primary');
            }
            button.on('click', () => {
                item.onclick ? item.onclick(this, button) : this.hide()
            });
        }
    }

    // 定义按钮loading
    defineLoading(button) {
        Object.defineProperty(button, "loading", {
            set: function (v) {
                v = !!v;
                if (this.disabled == v) return;
                this.disabled = v;

                if (v) {
                    this._loader = createElement('<div class="loading"></div>');
                    this.append(this._loader);
                } else {
                    this._loader && this._loader.remove();
                }
            }
        });
    }

    open(removable = false) {
        if (this.state != HIDDEN) return;
        this.removable = removable;
        this.animate('fade-in', 'scale-in', OPENED);
    }

    hide() {
        if (this.state != OPENED) return;
        this.animate('fade-out', 'scale-out', HIDDEN);
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