import styles from '../styles/button.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

export class Button extends Component {

    styles = styles;

    onConnected() {
        if (this.getBooleanAttribute('disabled')) {
            this.internals.setAttribute('disabled', true);
        }
        this.addRipples();
    }

    addRipples() {
        const button = this.internals;
        let _ripple;

        button.on('mousedown', () => {
            const ripple = createElement('<div class="ripple"></div>');
            button.append(ripple);
            _ripple = ripple;

            ripple.end = false;
            ripple.up = false;
            ripple.fadeOut = function () {
                ripple.addClass('fade-out');
                ripple.on('animationend', ripple.remove);
            }

            const rect = button.getBoundingClientRect();
            const size = Math.sqrt(rect.width ** 2 + rect.height ** 2) + 'px';
            ripple.style.width = size;
            ripple.style.height = size;

            ripple.addClass('spread');
            ripple.on('animationend', () => {
                ripple.end = true;
                if (ripple != _ripple) {
                    ripple.fadeOut();
                    return;
                }
                if (ripple.up) {
                    ripple.fadeOut();
                }
            });

        });

        button.on(['mouseup', 'mouseleave'], () => {
            if (!_ripple) return;
            _ripple.up = true;
            if (_ripple.end) {
                _ripple.fadeOut();
            }
        });
    }

    get template() {
        if (this._template) return this._template;

        const href = this.getAttribute('href');
        return href
            ? `<a class="button" href="{{href}}" target="{{target}}" draggable="false"><slot></slot></a>`
            : `<button class="{{class}}"><slot></slot></button>`;
    }

    set template(v) {
        this._template = v;
    }

    get disabled() {
        return this.internals.disabled;
    }

    set disabled(v) {
        this.internals.disabled = v;
    }

    set loading(v) {
        v = !!v;
        if (this.disabled == v) return;
        this.disabled = v;

        if (v) {
            this._loader = createElement('<div class="loading"></div>');
            this.internals.append(this._loader);
        } else {
            this._loader && this._loader.remove();
        }
    }

}