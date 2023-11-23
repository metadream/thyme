import styles from '../styles/checkbox.css';
import { Component } from './Component.js';

/**
 * 复选框组件
 * @example <th-checkbox name="" value="" checked disabled>text</th-checkbox>
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
        const event = new Event('change');
        this.#input.on('change', e => {
            this.checked = e.target.checked;
            this.dispatchEvent(event);
        });
    }

}