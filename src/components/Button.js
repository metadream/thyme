import styles from '../styles/button.css';
import { Component } from './Component.js';

export class Button extends Component {

    styles = styles;
    template = `<button class="{{class}}"><slot></slot><div class="ripple"></div></button>`;

    onConnected() {
        const button = this.shadowBody;
        const ripple = this.getElement('.ripple');

        if (this.hasAttribute('disabled')) {
            button.setAttribute('disabled', true);
        }

        button.on('mousedown', () => {
            const rect = button.getBoundingClientRect();
            const size = (rect.width > rect.height ? rect.width : rect.height) * 2 + 'px';
            ripple.style.width = size;
            ripple.style.height = size;
        });
    }

}