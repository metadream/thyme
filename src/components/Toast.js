import toastStyles from '../styles/toast.css';
import { Component } from './Component.js';

export class Toast extends Component {

    styles = toastStyles;
    template = `<div class="quick-overlay quick-toast"><div class="{{type}}"><slot></slot></div></div>`;

    onConnected() {
        // Show instance
        const body = this.shadowBody;
        body.addClass('quick-fade-in');

        // Hide delay
        const delay = this.getAttribute('delay') || 3000;
        setTimeout(() => {
            body.addClass('quick-fade-out');
            body.on('animationend', () => this.remove());
        }, delay);
    }

}