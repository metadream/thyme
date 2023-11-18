import styles from '../styles/toast.css';
import { parseInteger } from "../modules/Util.js";
import { Component } from './Component.js';

/**
 * 悬浮消息组件
 * @example <tag type="warning|error|success">text</tag>
 * @example Quick.info(text)
 * @example Quick.warning(text)
 * @example Quick.error(text)
 * @example Quick.success(text)
 */
export class Toast extends Component {

    static styles = styles;
    static template = `<div class="overlay toast"><div><slot></slot></div></div>`;

    onConnected() {
        const $toast = this.query('.toast');
        $toast.addClass('bounce-in');

        const type = this.attr('type');
        type && $toast.querySelector('div').addClass(type);

        const delay = parseInteger(this.attr('delay')) || 3000;
        setTimeout(() => {
            $toast.addClass('bounce-out');
            $toast.on('animationend', () => this.remove());
        }, delay);
    }

}