import styles from '../styles/select.css';
import arrowBottomIcon from "../icons/arrow-bottom.svg";
import { createElement } from "../modules/Util.js";
import { Locale } from "../modules/Locale.js";
import { Field } from './Field.js';

/**
 * 下拉选项组件
 * @example <tag><option value="" selected>text</option></tag>
 */
export class Select extends Field {

    #template = `<div><div class="overlay"></div><div class="select"></div></div>`;
    #input;
    #options;

    onConnected() {
        super.onConnected();
        this.query('style').append(styles);

        // 添加图标和用于显示标签的文本
        this.#input = createElement('<input readonly/>');
        this.query('.field-body').append(this.#input);
        this.icon = arrowBottomIcon;
    }

    onAssigned() {
        // 获取选项列表
        const slot = this.query('slot');
        this.#options = slot.assignedElements();
        slot.remove();

        // 初始化标签和值
        const selected = this.#options.find(v => v.selected);
        selected && this.#value(selected.value, selected.label);

        // 图标点击事件
        this.icon.on('click', () => this.#pulldown());
    }

    #pulldown() {
        const $wrapper = createElement(this.#template);
        this.shadowRoot.append($wrapper);

        const $overlay = this.query('.overlay');
        $overlay.on('click', () => $wrapper.remove());

        const $select = this.query('.select');
        $select.attach(this.#input, true);

        // 创建选项节点
        for (const option of this.#options) {
            let { label, value, selected, disabled } = option;
            label = label || Locale.get('EMPTY_OPTION');
            const $option = createElement(`<a class="option">${label}</a>`);
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
        this.#input.value = label;
    }

    focus() {
        this.#input.focus();
    }

}