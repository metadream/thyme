import styles from '../styles/select.css';
import arrowBottomIcon from "../icons/arrow-bottom.svg";
import { Component } from './Component.js';
import { createElement } from "../modules/Util.js";
import { Locale } from "../modules/Locale.js";

/**
 * 下拉选项组件
 * @example <quick-select></quick-select>
 */
export class Select extends Component {

    static styles = styles;
    static template = `
    <div class="select">
        <div class="field"><input type="text" readonly/>${arrowBottomIcon}</div>
        <div class="options"><slot></slot></div>
    </div>`;

    #overlay;
    #options;

    onRendered() {
        const slot = this.query('slot');
        const options = slot.assignedElements();
        slot.remove();

        this.#options = this.query('.options');
        this.#render(options);

        const field = this.query('.field');
        field.on('click', () => this.#pulldown());
    }

    #render(options) {
        const input = this.query('input');

        for (const option of options) {
            let { label, value, disabled } = option;
            label = label || Locale.get('EMPTY_OPTION');

            const $option = createElement(`<a class="option">${label}</a>`);
            this.#options.append($option);

            if (disabled) {
                $option.attr('disabled', true);
                $option.addClass('disabled');
            } else {
                const event = new Event('change');
                $option.on('click', () => {
                    console.log('option.value=', { label, value });
                    input.value = label;

                    this.#pullup();
                    // this.dispatchEvent(event);
                });
            }
        }
    }

    #pulldown() {
        this.#options.addClass('dropdown');
        this.#overlay = createElement('<div class="overlay"></div>');
        this.#overlay.on('click', () => this.#pullup());
        this.shell.append(this.#overlay);
    }

    #pullup() {
        this.#options.removeClass('dropdown');
        this.#overlay.remove();
    }

}