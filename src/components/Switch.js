import styles from '../styles/switch.css';
import { Component } from './Component.js';

/**
 * 开关组件
 * @example <tag checked></tag>
 * @example element.checked = true|false
 * @example element.value = 1|0
 */
export class Switch extends Component {

    static styles = styles;
    static attrs = ['checked'];
    static template = `<label class="switch"><input type="checkbox"/><i></i></label>`;

    onChanged(name, value) {
        this.query('input').attr(name, value);
    }

    onConnected() {
        this.value = this.value || 0;
        this.query('input').on('change', e => {
            this.checked = e.target.checked;
        });
    }

    get value() {
        return this.checked ? 1 : 0;
    }

    set value(v) {
        this.checked = !!v;
    }

}