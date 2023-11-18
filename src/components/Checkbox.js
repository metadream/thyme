import styles from '../styles/checkbox.css';
import { Component } from './Component.js';

/**
 * 多选框组件
 * @example <tag name="" value="" checked disabled>text</tag>
 */
export class Checkbox extends Component {

    static styles = styles;
    static attrs = ['value', 'checked', 'disabled'];
    static template = `<label><input type="checkbox"/><div><slot></slot></div></label>`;

    onChanged(name, _, value) {
        const $checkbox = this.query('input');
        $checkbox.attr(name, value);

        if (name === 'disabled') {
            this.shell.addClass('disabled');
        }
    }

    onConnected() {
        const $checkbox = this.query('input');
        $checkbox.on('change', e => {
            this.checked = e.target.checked;
        })
    }

}