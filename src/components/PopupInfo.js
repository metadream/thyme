import popupInfoStyles from '../styles/popup-info.css';
import { Component } from './Component.js';

export class PopupInfo extends Component {

    styles = popupInfoStyles;
    template = `
        <div class="quick-overlay quick-info">
            <div class="{{type}}">{{text}}</div>
        </div>
    `;

    onConnected() {
        // Show instance
        this.shadowBody.addClass('quick-fade-in');

        // Hide delay
        const delay = this.getAttribute('delay') || 3000;
        setTimeout(() => {
            this.shadowBody.addClass('quick-fade-out');
            this.shadowBody.on('animationend', () => this.remove());
        }, delay);
    }

}