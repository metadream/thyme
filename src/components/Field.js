import styles from '../styles/field.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 文本框组件
 * @example <tag type="text|password|email|url|number" variant="tonal|plain">not required</tag>
 * @example element.icon = Element|HTML
 *          element.icon.onclick = ...
 */
export class Field extends Component {

    static styles = styles;
    static attrs = ['name', 'value', 'required', 'readonly', 'disabled'];
    static template = '<div class="field"><label></label><div class="field-body"><slot><input/></slot></div></div>';

    #variants = ['tonal', 'plain'];
    #attrs = ['label', 'type', 'step', 'min', 'max', 'minlength', 'maxlength', 'placeholder', 'pattern'];
    #types = ['text', 'password', 'email', 'url', 'number'];
    _input = this.query('input');

    onChanged(name, value) {
        if (name === 'name') return;
        if (name === 'value') this._input.value = value;
        this._input.attr(name, value);
    }

    onConnected() {
        this._input.on('change', e => this.value = e.target.value);
        this.value = this._input.value;

        // 初始化变形
        const variant = this.attr('variant');
        if (this.#variants.includes(variant)) {
            this.shell.addClass(variant);
        }

        // 初始化标签
        const name = this.#attrs.shift();
        const label = this.attr(name);
        const $label = this.query(name);
        label ? $label.innerHTML = label : $label.remove();

        // 初始化其他属性
        for (const name of this.#attrs) {
            const value = this.attr(name);
            if (!value) continue;

            if (name === 'type') {
                if (this.#types.includes(value)) {
                    this._input.attr(name, value);
                }
            } else {
                this._input.attr(name, value);
            }
        }
    }

    reportValidity() {
        return this._input.reportValidity();
    }

    focus() {
        this._input.focus();
    }

    set icon(el) {
        let icon = this.query('.field-icon');
        if (!icon) {
            icon = createElement('<div class="field-icon"></div>');
            icon.tabIndex = -1;
            this.shell.append(icon);

            Object.defineProperty(icon, 'loading', {
                set: value => {
                    if (value) {
                        icon.innerHTML = '';
                        icon.addClass('loading');
                    } else {
                        icon.removeClass('loading');
                        icon.innerHTML = icon._innerHTML;
                    }
                }
            });
        }

        const html = typeof el === 'string' ? el : el.outerHTML;
        icon.innerHTML = icon._innerHTML = html;
    }

    get icon() {
        return this.query('.field-icon');
    }

}