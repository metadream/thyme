import styles from '../styles/dialog.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 对话框组件
 * @example <tag title="">content</tag>
 * @example element.buttons = [{ label: string, primary: true|false, onclick: function(self, btn) }]
 * @example element.open(true|false)
 * @example element.hide()
 */
const HIDDEN = 0, TRANSFORMING = 1, OPENED = 2;
export class Dialog extends Component {

    static styles = styles;
    static template = `
        <div class="overlay dialog">
            <div class="dialog-panel">
                <div class="dialog-header">{{title}}</div>
                <div class="dialog-body"><slot></slot></div>
                <div class="dialog-footer"></div>
            </div>
        </div>
    `;

    #state = HIDDEN;
    #panel;
    #removable;

    onConnected() {
        this.#panel = this.query('.dialog-panel');
        if (!this.attr('title')) {
            this.query('.dialog-header').remove();
        }
        document.addEventListener('keyup', e => {
            if (e.keyCode === 27) this.hide();
        });
    }

    // 添加按钮
    set buttons(items = []) {
        const footer = this.query('.dialog-footer');
        for (let item of items) {
            if (typeof item === 'string') {
                item = { label: item };
            }

            const button = createElement(`<button>${item.label}</button>`);
            this.#addLoading(button);
            footer.append(button);

            if (item.primary === true) {
                button.addClass('primary');
            }
            button.on('click', () => {
                item.onclick ? item.onclick(this, button) : this.hide()
            });
        }
    }

    open(removable = false) {
        if (this.#state != HIDDEN) return;
        this.#removable = removable;
        this.#animate('fade-in', 'scale-in', OPENED);
    }

    hide() {
        if (this.#state != OPENED) return;
        this.#animate('fade-out', 'scale-out', HIDDEN);
    }

    #animate(bodyClass, panelClass, state) {
        this.#state = TRANSFORMING;
        const { shell } = this;

        if (state == OPENED) {
            shell.style.display = 'flex';
        }
        shell.addClass(bodyClass);
        this.#panel.addClass(panelClass);

        shell.onanimationend = () => {
            this.#panel.removeClass(panelClass);
            shell.removeClass(bodyClass);
            shell.onanimationend = null;

            this.#state = state;
            if (state == HIDDEN) {
                if (this.#removable) this.remove();
                else shell.style.display = 'none';
            }
        }
    }

    // 按钮Loading
    #addLoading(button) {
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

}