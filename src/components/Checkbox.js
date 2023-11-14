import styles from '../styles/checkbox.css';
import { Component } from './Component.js';

/**
 * 多选框组件
 * @example <tag name="" value="" checked disabled>text</tag>
 */
export class Checkbox extends Component {

    styles = styles;
    template = `<label><input type="checkbox"/><div><slot></slot></div></label>`;

    #nativeElement;

    onConnected() {
        this.#nativeElement = this.query('input');

        if (this.battr('checked')) {
            this.checked = true;
        }
        if (this.battr('disabled')) {
            this.internals.addClass('disabled');
            this.disabled = true;
        }
    }

    set value(v) {
        this.attr('value', v);
    }

    get value() {
        return this.#nativeElement.checked ? this.attr('value') : null;
    }

    set checked(v) {
        this.#nativeElement.checked = v;
    }

    get checked() {
        return this.#nativeElement.checked;
    }

    set disabled(v) {
        this.#nativeElement.disabled = v;
    }

    get disabled() {
        return this.#nativeElement.disabled;
    }

}