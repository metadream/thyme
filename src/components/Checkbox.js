import styles from '../styles/checkbox.css';
import { Component } from './Component.js';

/**
 * 多选框组件
 * @example <tag name="" value="" checked disabled>text</tag>
 */
export class Checkbox extends Component {

    static styles = styles;
    static attrs = ['name', 'value', 'checked', 'disabled'];
    static template = `<label><input type="checkbox"/><div><slot></slot></div></label>`;

    type = 'checkbox';
    #input = this.query('input');

    onChanged(name, value) {
        this.#input.attr(name, value);
        if (name === 'disabled') {
            this.shell.addClass('disabled');
        }
    }

    onConnected() {
        this.#input.on('change', e => {
            this.checked = e.target.checked;
        });
    }

    reportValidity() {
        return this.#input.reportValidity();
    }

}