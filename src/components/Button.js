import styles from '../styles/button.css';
import { createElement } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 按钮组件
 * @example <tag href="/users" target="_blank">text</tag>
 * @example <tag variant="minor|warning|danger|success, tonal|outlined">text</tag>
 * @example element.loading = true|false
 */
export class Button extends Component {

    static styles = styles;
    static attrs = ['disabled'];
    #attrs = ['variant', 'href', 'target'];

    onChanged(name, value) {
        const button = this.shell;
        if (button) { // 由于模板是后渲染的，所以初始时shell不存在
            if (name === 'variant') {
                value && button.addClass(...value.split(/\s+/));
            } else {
                button.attr(name, value);
            }
        }
    }

    onConnected() {
        // 由于属性无法在构造函数或静态变量中获取，故此处不能使用静态模板
        this.render(this.attr('href')
            ? '<a class="button" draggable="false"><slot></slot></a>'
            : '<button><slot></slot></button>');
        this.#addRipples();

        // 初始化所有属性
        const attrs = this.#attrs.concat(this.constructor.attrs);
        for (const name of attrs) {
            this.onChanged(name, this.attr(name));
        }
    }

    set loading(v) {
        v = !!v;
        if (this.disabled == v) return;
        this.disabled = v;

        if (v) {
            const loading = createElement('<div class="loading"></div>');
            this.shell.append(loading);
        } else {
            const loading = this.query('.loading');
            loading && loading.remove();
        }
    }

    #addRipples() {
        const button = this.shell;
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