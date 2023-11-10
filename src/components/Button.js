import { createElement } from '../modules/Util.js';
import styles from '../styles/button.css';
import { Component } from './Component.js';

export class Button extends Component {

    styles = styles;

    onConnected() {
        const button = this.shadowBody;

        if (this.hasAttribute('disabled')) {
            button.setAttribute('disabled', true);
        }

        button.on('mousedown', () => {
            const rect = button.getBoundingClientRect();
            const size = (rect.width > rect.height ? rect.width : rect.height) * 2 + 'px';
            const ripple = createElement('<div class="ripple"></div>');
            button.append(ripple);

            ripple.style.width = size;
            ripple.style.height = size;
            ripple.addClass('spread');
            ripple.on('animationend', ripple.remove);
        });
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