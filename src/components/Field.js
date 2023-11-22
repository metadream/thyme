import styles from '../styles/field.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

const PATTERN = {
    email: '^\\w+([_\\-+\\.]\\w+)*@\\w+([\\-\\.]\\w+)*\\.([a-zA-Z]{2,})$',
    url: '^https?:\\/\\/([\\w\\-]+\\.){1,}[a-zA-Z]{2,6}(\\/[\\S]*)?$'
}

/**
 * 文本框组件
 * @example <tag type="text|password|email|url|number" variant="tonal|plain">not required</tag>
 * @example element.icon = Element|HTML
 *          element.icon.onclick = ...
 */
export class Field extends Component {

    static styles = styles;
    static attrs = ['name', 'value', 'required', 'readonly', 'disabled'];
    static template = '<div class="field"><label></label><div class="field-body"><input/><slot></slot></div></div>';

    #variants = ['tonal', 'plain'];
    #attrs = ['label', 'type', 'step', 'min', 'max', 'minlength', 'maxlength', 'placeholder', 'pattern'];
    #types = ['text', 'password', 'email', 'url', 'number'];
    _native = this.#getNativeInput();

    onChanged(name, value) {
        switch (name) {
            case 'readonly': this._native.mockReadOnly(); break;
            case 'value': this._native.value = value; break;
            default: this._native.attr(name, value);
        }
    }

    onConnected() {
        this.value = this._native.value;

        // 初始化变体
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
            let value = this.attr(name);
            if (!value) continue;

            if (name === 'type') {
                value = this.#types.includes(value) ? value : 'text';

                // 邮箱和网址额外增加正则表达式校验
                if (value === 'email' || value === 'url') {
                    this._native.attr('pattern', PATTERN[value]);
                }
            }
            this._native.attr(name, value);
        }
    }

    // 如果插槽有元素则隐藏原生文本框
    onAssigned() {
        const slots = this.slots();
        if (slots && slots.length) {
            this._native.mockHide();
        }
    }

    #getNativeInput() {
        const input = this.query('input');
        input.on('change', e => this.value = e.target.value);

        // 模拟隐藏以保证原生校验功能可用
        input.mockHide = () => {
            input.addClass('hidden');
            input.mockReadOnly();
        }
        // 模拟只读以保证原生校验功能可用
        input.mockReadOnly = () => {
            input.addClass('readonly');
            input.onkeydown = () => false;
            input.on('compositionend', () => input.value = '');
        }
        return input;
    }

    reportValidity() {
        const validated = this._native.validity.valid;
        this.#reportMessage(validated, this._native.validationMessage);
        this.focus();
        return validated;
    }

    focus() {
        this._native.focus();
    }

    #reportMessage(validated, message) {
        let tooltip = this.query('.tooltip');
        if (!tooltip) {
            tooltip = createElement(`<div class="tooltip"></div>`);
            this.shadowRoot.append(tooltip);
            setTimeout(() => {
                tooltip.remove();
            }, 5000);
        }

        if (validated) {
            tooltip.remove();
        } else {
            tooltip.innerHTML = message;
            tooltip.attach(this._native);
        }
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