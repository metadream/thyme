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
    static attrs = ['name', 'checked'];
    static template = `<label class="switch"><input type="checkbox"/><i></i></label>`;

    #input = this.query('input');

    onChanged(name, value) {
        this.#input.attr(name, value);
    }

    onConnected() {
        this.value = this.value || 0;
        this.#input.on('change', e => {
            this.checked = e.target.checked;
        });
    }

    reportValidity() {
        return this.#input.reportValidity();
    }

    get value() {
        return this.checked ? 1 : 0;
    }

    set value(v) {
        this.checked = !!v;
    }

}