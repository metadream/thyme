import styles from '../styles/select.css';
import arrowDownIcon from '../icons/arrow-down.svg';
import { createElement } from '../modules/Util.js';
import { Field } from './Field.js';

/**
 * 下拉选项组件
 * @example <th-select>
 *            <option value="1" disabled>text1</option>
 *            <option value="2" selected>text2</option>
 *          </th-selectg>
 */
export class Select extends Field {

    #template = `<div><div class="overlay"></div><div class="select"></div></div>`;
    #options;

    onChanged(name, value) {
        super.onChanged(name, value);
        if (name === 'value' && this.#options) {
            const option = this.#options.find(v => v.value == value);
            if (option) {
                this.#setFieldValue(value, option.label);
                this.#options.forEach(v => v.selected = false);
                option.selected = true;
                option.scrollIntoView({ block: 'nearest' });
            }
        }
    }

    onConnected() {
        super.onConnected();
        this.addStyle(styles);

        this.readonly = true;
        this.icon = arrowDownIcon;
        this.icon.on('click', () => this.#pulldown());
        this.query('.field-body').on('click', () => this.#pulldown());
    }

    onAssigned(slot) {
        // 获取选项列表并初始化标签和值
        this.#options = slot.assignedElements();
        const selected = this.#options.find(v => v.selected);
        selected && this.#setFieldValue(selected.value, selected.label);
    }

    #pulldown() {
        const $wrapper = createElement(this.#template);
        this.shadowRoot.append($wrapper);

        const $overlay = this.query('.overlay');
        $overlay.on('mousedown', () => $wrapper.remove());

        const $select = this.query('.select');
        $select.attachTo(this._native);

        // 创建选项节点
        for (const option of this.#options) {
            const { label, value, selected, disabled } = option;
            const $option = createElement(`<a class="option">${label || '&#160;'}</a>`);
            $select.append($option);

            if (selected && value) {
                $option.addClass('selected');
                $option.scrollIntoView({ block: 'nearest' });
            }
            if (disabled) {
                $option.addClass('disabled');
            } else {
                $option.on('click', () => {
                    this.#setFieldValue(value, label);
                    this.#options.forEach(v => v.selected = false);
                    option.selected = true;
                    $wrapper.remove();
                });
            }
        }
    }

    #setFieldValue(value, label) {
        this.value = value;
        this._native.value = label;
    }

}