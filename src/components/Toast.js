import styles from '../styles/toast.css';
import { Component } from './Component.js';

export class Toast extends Component {

    styles = styles;
    template = `<div class="quick-overlay quick-toast"><div class="{{type}}"><slot></slot></div></div>`;

    onConnected() {
        // Show instance
        const { internals } = this;
        internals.addClass('quick-bounce-in');

        // Hide delay
        const delay = this.getAttribute('delay') || 3000;
        setTimeout(() => {
            internals.addClass('quick-bounce-out');
            internals.on('animationend', () => this.remove());
        }, delay);
    }

}