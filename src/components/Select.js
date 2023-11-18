import styles from '../styles/select.css';
import arrowBottomIcon from "../icons/arrow-bottom.svg";
import { createElement } from "../modules/Util.js";
import { Locale } from "../modules/Locale.js";
import { Field } from './Field.js';

/**
 * 下拉选项组件
 * @example <quick-select></quick-select>
 */
export class Select extends Field {

    #template = `
    <div class="select">
        <div class="overlay"></div>
        <div class="options"></div>
    </div>`;

    onConnected() {
        this.query('style').append(styles);
        this.readonly = true;
        this.icon = arrowBottomIcon;
    }

    onRendered() {
        const slot = this.query('slot');
        const options = slot.assignedElements();
        slot.remove();

        this.icon.on('click', () => {
            this.#pulldown(options);
        });
    }

    #pulldown(options) {
        const $wrapper = createElement(this.#template);
        this.shadowRoot.append($wrapper);

        const $overlay = this.query('.overlay');
        $overlay.on('click', () => $wrapper.remove());

        const $options = this.query('.options');
        $options.addClass('expand');

        for (const option of options) {
            let { label, value, disabled } = option;
            label = label || Locale.get('EMPTY_OPTION');

            const $option = createElement(`<a class="option">${label}</a>`);
            $options.append($option);

            if (disabled) {
                $option.attr('disabled', true);
                $option.addClass('disabled');
            } else {
                $option.on('click', () => {
                    this.value = label;
                    $wrapper.remove();
                });
            }
        }
    }

}