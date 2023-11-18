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

    onChanged(name, value) {
        switch (name) {
            case 'label': this.#renderLabel(value); break;
            case 'required': this.#renderDivider(value); break;
            default: this.#renderInput(name, value);
        }
    }

    onConnected() {
        const $input = this.query('input');
        if ($input) {
            $input.on('change', e => this.value = e.target.value);
            this.value = $input.value;
            this.focus = () => $input.focus();
        }

        const variant = this.attr('variant');
        if (variant) {
            this.shell.addClass(variant);
        }
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
        const $input = this.query('input');
        $input && $input.attr(name, value);
    }

    set icon(el) {
        const $icon = createElement('<div class="field-icon"></div>');
        typeof el === 'string' ? $icon.innerHTML = el : $icon.append(el);
        $icon.tabIndex = -1;
        this.shell.append($icon);
    }

    get icon() {
        return this.query('.field-icon');
    }

}