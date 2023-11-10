import styles from '../styles/button.css';
import { Component } from './Component.js';

export class Button extends Component {

    styles = styles;

    onConnected() {
        const button = this.shadowBody;

        if (this.hasAttribute('disabled')) {
            button.setAttribute('disabled', true);
        }
    }

    set template(v) {
        this._template = v;
    }

    get template() {
        if (this._template) return this._template;

        const href = this.getAttribute('href');
        return href
            ? `<a class="button" href="{{href}}" target="{{target}}"><slot></slot></a>`
            : `<button class="{{class}}"><slot></slot></button>`;
    }

}