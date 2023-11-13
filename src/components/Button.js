import styles from '../styles/button.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 按钮组件
 * @example <quick-button href="/users" target="_blank" disabled>text</quick-button>
 * @example <quick-button class="minor|warning|danger|success, tonal|outlined">text</quick-button>
 * @example this.disable = true|false
 * @example this.loading = true|false
 */
export class Button extends Component {

    styles = styles;

    #linkTemplate = '<a class="button {{class}}" href="{{href}}" target="{{target}}" draggable="false"><slot></slot></a>';
    #buttonTemplate = '<button class="{{class}}"><slot></slot></button>';
    #loader;

    onConnected() {
        this.disabled = this.getBooleanAttribute('disabled');
        this.#addRipples();
    }

    get template() {
        if (this._template) return this._template;
        return this.getAttribute('href') ? this.#linkTemplate : this.#buttonTemplate;
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
            this.#loader = createElement('<div class="loading"></div>');
            this.internals.append(this.#loader);
        } else {
            this.#loader && this.#loader.remove();
        }
    }

    #addRipples() {
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
                if (ripple != _ripple || ripple.up) {
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

}