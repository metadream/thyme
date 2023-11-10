import styles from '../styles/button.css';
import { Component } from './Component.js';

export class Button extends Component {

    styles = styles;
    template = `<button class="{{class}}"><slot></slot></button>`;

    onConnected() {
        const button = this.shadowBody;

        if (this.hasAttribute('disabled')) {
            button.setAttribute('disabled', true);
        }
    }

}