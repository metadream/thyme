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

    styles = styles;
    template = `
    <div class="quick-select">
        <div class="quick-field"><input type="text" readonly/>${arrowBottomIcon}</div>
        <div class="quick-options"><slot></slot></div>
    </div>`;

    onRendered() {
        const slot = this.findElement('slot');
        const options = slot.assignedElements();
        slot.remove();

        this.$options = this.findElement('.quick-options');
        this.render(options);

        this.$field = this.findElement('.quick-field');
        this.$field.on('click', () => this.pulldown());
    }

    render(options) {
        const input = this.findElement('input');

        for (const option of options) {
            let { label, value, disabled } = option;
            label = label || Locale.get('EMPTY_SELECT_OPTION');

            const $option = createElement(`<a class="quick-option">${label}</a>`);
            this.$options.append($option);

            if (disabled) {
                $option.setAttribute('disabled', true);
                $option.addClass('disabled');
            } else {
                const event = new Event('change');
                $option.on('click', () => {
                    console.log('option.value=', { label, value });
                    input.value = label;

                    this.pullup();
                    // this.dispatchEvent(event);
                });
            }
        }
    }

    pulldown() {
        this.$options.addClass('dropdown');
        this.$overlay = createElement('<div class="quick-overlay"></div>');
        this.$overlay.on('click', () => this.pullup());
        this.internals.append(this.$overlay);
    }

    pullup() {
        this.$options.removeClass('dropdown');
        this.$overlay.remove();
    }

}