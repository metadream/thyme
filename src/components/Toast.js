import styles from '../styles/toast.css';
import { parseInteger } from "../modules/Util.js";
import { Component } from './Component.js';

/**
 * 悬浮消息组件
 * @example <th-toast type="warning|error|success">text</th-toast>
 */
export class Toast extends Component {

    static styles = styles;
    static attrs = ['type'];
    static template = `<div class="overlay toast"><div><slot></slot></div></div>`;

    onChanged(_, value) {
        this.query('.toast>div').addClass(value);
    }

    onConnected() {
        const $toast = this.query('.toast');
        $toast.addClass('bounce-in');

        const delay = parseInteger(this.attr('delay')) || 3000;
        setTimeout(() => {
            $toast.addClass('bounce-out');
            $toast.on('animationend', () => this.remove());
        }, delay);
    }

}