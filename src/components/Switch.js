import styles from '../styles/switch.css';
import { Component } from './Component.js';

/**
 * 开关组件
 * @example <tag checked></tag>
 * @example this.value = true|false, 0|1
 */
export class Switch extends Component {

    static styles = styles;
    static template = `<label class="switch"><input type="checkbox"/><i></i></label>`;

    #nativeElement;

    onConnected() {
        this.#nativeElement = this.query('input');
        if (this.battr('checked')) {
            this.#nativeElement.checked = true;
        }

        const event = new Event('change');
        this.#nativeElement.on('change', () => {
            this.dispatchEvent(event);
        });
    }

    get value() {
        return this.#nativeElement.checked ? 1 : 0;
    }

    set value(v) {
        this.#nativeElement.checked = !!v;
    }

}