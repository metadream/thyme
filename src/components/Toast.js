import styles from '../styles/toast.css';
import { Component } from './Component.js';

/**
 * 消息组件
 * @example <quick-toast type="warning|error|success">content</quick-toast>
 * @example Quick.info(text)
 * @example Quick.warning(text)
 * @example Quick.error(text)
 * @example Quick.success(text)
 */
export class Toast extends Component {

    styles = styles;
    template = `<div class="overlay toast"><div class="{{type}}"><slot></slot></div></div>`;

    onConnected() {
        const { internals } = this;
        internals.addClass('bounce-in');

        const delay = this.iattr('delay') || 3000;
        setTimeout(() => {
            internals.addClass('bounce-out');
            internals.on('animationend', () => this.remove());
        }, delay);
    }

}