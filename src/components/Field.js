import styles from '../styles/field.css';
import { createElement, parseBoolean } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 文本框组件
 * @example <tag variant="tonal|plain">not required</tag>
 * @example element.icon = Element|HTML
 *          element.icon.onclick = ...
 */
export class Field extends Component {

    static styles = styles;
    static attrs = ['label', 'required', 'type', 'maxlength', 'placeholder', 'value', 'readonly', 'disabled'];
    static template = '<div class="field"><div class="field-body"><slot><input/></slot></div></div>';

    #icon;
    #input = this.query('input');

    onChanged(name, value) {
        switch (name) {
            case 'label': this.#renderLabel(value); break;
            case 'required': this.#renderDivider(value); break;
            default: this.#renderInput(name, value);
        }
    }

    onConnected() {
        this.#input.on('change', e => this.value = e.target.value);
        this.value = this.#input.value;

        const variant = this.attr('variant');
        variant && this.shell.addClass(variant);
    }

    focus() {
        this.#input.focus();
    }

    set icon(el) {
        if (!this.#icon) this.#icon = this.#createIcon(el);
    }

    get icon() {
        return this.#icon;
    }

    #renderLabel(value) {
        if (value) {
            const $label = createElement(`<label>${value}</label>`);
            const $body = this.query('.field-body');
            $body.parentNode.insertBefore($label, $body);
        } else {
            this.query('label').remove();
        }
    }

    #renderDivider(value) {
        parseBoolean(value) ? this.shell.addClass('required') : this.shell.removeClass('required');
    }

    #renderInput(name, value) {
        this.#input.attr(name, value);
    }

    #createIcon(el) {
        const icon = createElement('<div class="field-icon"></div>');
        icon.innerHTML = icon._innerHTML = typeof el === 'string' ? el : el.outerHTML;
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
        return icon;
    }

}