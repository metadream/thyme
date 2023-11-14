import styles from '../styles/field.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 文本框组件
 * @example <tag label="" icon="">not required</tag>
 */
export class Field extends Component {

    styles = styles;
    template = `<div class="field">
        <label>{{label}}</label>
        <slot>
            <input type="{{type}}" placeholder="{{placeholder}}" maxlength="{{maxlength}}" value="{{value}}"/>
            <input type="hidden" value="{{value}}"/>
        </slot>
    </div>`;

    #displayField;
    #hiddenField;

    onConnected() {
        this.#displayField = this.query('input');
        this.#hiddenField = this.query('input[type="hidden"]');
        if (!this.#hiddenField) return;

        this.#displayField.readOnly = this.battr('readonly');
        this.#displayField.disabled = this.battr('disabled');
        this.createIcon(this.attr('icon'));

        if (this.battr('required')) {
            this.internals.addClass('required');
        }
        if (!this.attr('label')) {
            this.query('label').remove();
        }
    }

    createIcon(src) {
        if (!src) return;
        src = src.trim();
        src = src.startsWith('<') ? src : `<img src="${src}"/>`;

        const $icon = createElement(`<i class="icon">${src}</i>`);
        this.internals.append($icon);
        return $icon;
    }

    focus() {
        this.#displayField.focus();
    }

    get value() {
        return this.#hiddenField.value;
    }

    set value(v) {
        this.#displayField.value = v;
        this.#hiddenField.value = v;
    }

    get readOnly() {
        return this.#displayField.readOnly;
    }

    set readOnly(v) {
        this.#displayField.readOnly = v;
    }

    get disabled() {
        return this.#displayField.disabled;
    }

    set disabled(v) {
        this.#displayField.disabled = v;
    }

}