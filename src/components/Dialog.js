import styles from '../styles/dialog.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 对话框组件
 * @example <th-dialog title="">content</th-dialog>
 * @example element.buttons = [{ label: string, primary: true|false, onclick: function(self).call(this) }]
 * @example element.open(true|false)
 * @example element.hide()
 */
const HIDDEN = 0, TRANSFORMING = 1, OPENED = 2;
export class Dialog extends Component {

    static styles = styles;
    static template = `
        <div class="overlay dialog">
            <div class="dialog-panel">
                <div class="dialog-header"></div>
                <div class="dialog-body"><slot></slot></div>
                <div class="dialog-footer"></div>
            </div>
        </div>
    `;

    #state = HIDDEN;
    #removable;

    onConnected() {
        const header = this.query('.dialog-header');
        if (header) {
            const title = this.attr('title');
            title ? header.innerHTML = title : header.remove();
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
            button.on('click', async () => {
                if (item.onclick) {
                    button.loading = true;
                    await item.onclick.call(this, this);
                    button.loading = false;
                } else {
                    this.hide();
                }
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
        shell.addClass(bodyClass);

        if (state == OPENED) {
            shell.style.display = 'flex';
        }

        const panel = this.query('.dialog-panel');
        panel.addClass(panelClass);

        shell.onanimationend = () => {
            panel.removeClass(panelClass);
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
                    const loading = createElement('<div class="loading"></div>');
                    this.append(loading);
                } else {
                    const loading = button.query('.loading');
                    loading && loading.remove();
                }
            }
        });
    }

}