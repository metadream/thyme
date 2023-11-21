import styles from '../styles/select.css';
import arrowDownIcon from "../icons/arrow-down.svg";
import { createElement } from "../modules/Util.js";
import { Field } from './Field.js';

/**
 * 下拉选项组件
 * @example <tag><option value="" selected>text</option></tag>
 */
export class Select extends Field {

    #template = `<div><div class="overlay"></div><div class="select"></div></div>`;
    #options;

    onConnected() {
        super.onConnected();
        this.query('style').append(styles);

        // 添加用于显示的文本框
        this._input = createElement('input');
        this._input.attr('required', this.attr('required'));
        this.readonly = true;
        this.query('.field-body').append(this._input);

        this.icon = arrowDownIcon;
        this.icon.on('click', () => this.#pulldown());
    }

    onAssigned() {
        // 获取选项列表
        const slot = this.query('slot');
        this.#options = slot.assignedElements();
        slot.remove();

        // 初始化标签和值
        const selected = this.#options.find(v => v.selected);
        selected && this.#value(selected.value, selected.label);
    }

    #pulldown() {
        const $wrapper = createElement(this.#template);
        this.shadowRoot.append($wrapper);

        const $overlay = this.query('.overlay');
        $overlay.on('mousedown', () => $wrapper.remove());

        const $select = this.query('.select');
        $select.attach(this._input, true);

        // 创建选项节点
        for (const option of this.#options) {
            const { label, value, selected, disabled } = option;
            const $option = createElement(`<a class="option">${label || '&#160;'}</a>`);
            $select.append($option);

            if (selected) {
                $option.addClass('selected');
            }
            if (disabled) {
                $option.addClass('disabled');
            } else {
                $option.on('click', () => {
                    this.#value(value, label);
                    this.#options.forEach(v => v.selected = false);
                    option.selected = true;
                    $wrapper.remove();
                });
            }
        }
    }

    #value(value, label) {
        this.value = value;
        this._input.value = label;
    }

}