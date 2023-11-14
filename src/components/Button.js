import styles from '../styles/button.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 按钮组件
 * @example <tag href="/users" target="_blank">text</tag>
 * @example <tag class="minor|warning|danger|success, tonal|outlined" disabled>text</tag>
 * @example this.disable = true|false
 * @example this.loading = true|false
 */
export class Button extends Component {

    styles = styles;
    #loading;

    onConnected() {
        this.disabled = this.battr('disabled');
        this.#addRipples();
    }

    get template() {
        return this.attr('href')
            ? '<a class="button {{class}}" href="{{href}}" target="{{target}}" draggable="false"><slot></slot></a>'
            : '<button class="{{class}}"><slot></slot></button>';
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
            this.#loading = createElement('<div class="loading"></div>');
            this.internals.append(this.#loading);
        } else {
            this.#loading && this.#loading.remove();
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