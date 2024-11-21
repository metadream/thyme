import styles from '../styles/dialog.css';
import { createElement, parseInteger } from '../modules/Util.js';
import { Scrollbar } from '../modules/Scrollbar.js';
import { Component } from './Component.js';

/**
 * 对话框组件
 * @example <th-dialog width="600" title="">content</th-dialog>
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
    #buttons;
    #removable;

    onConnected() {
        const width = parseInteger(this.attr('width'));
        if (width) {
            const panel = this.query('.dialog-panel');
            panel.style.width = width + 'px';
        }

        const header = this.query('.dialog-header');
        if (header) {
            const title = this.attr('title');
            title ? header.innerHTML = title : header.remove();
        }

        document.addEventListener('keyup', e => {
            if (e.keyCode === 27 && this.#buttons && this.#buttons.length) {
                this.hide();
            }
        });
    }

    // 添加按钮
    set buttons(items = []) {
        this.#buttons = items;
        const footer = this.query('.dialog-footer');
        footer.innerHTML = '';

        for (let item of items) {
            if (typeof item === 'string') {
                item = { label: item };
            }

            const button = createElement(`<button>${item.label}</button>`);
            this.#addLoading(button);
            footer.append(button);

            if (item.disabled === true) {
                button.disabled = true;
            }
            if (item.hidden === true) {
                button.style.display = 'none';
            }
            if (item.primary === true) {
                button.addClass('primary');
            }
            button.on('click', async () => {
                if (item.onclick) {
                    try {
                        button.loading = true;
                        await item.onclick.call(this, this, button);
                    } finally {
                        button.loading = false;
                    }
                } else {
                    this.hide();
                }
            });
        }
    }

    get buttons() {
        const footer = this.query('.dialog-footer');
        return footer.querySelectorAll('button');
    }

    open(removable = false) {
        if (this.#state != HIDDEN) return;
        Scrollbar.block();
        this.#removable = removable;
        this.#animate('fade-in', 'scale-in', OPENED);
        this.dispatchEvent(new Event('open'));
    }

    hide() {
        if (this.#state != OPENED) return;
        Scrollbar.unblock();
        this.#animate('fade-out', 'scale-out', HIDDEN);
        this.dispatchEvent(new Event('hide'));
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