import styles from '../styles/textbox.css';
import { createElement } from '../modules/Util.js';
import { Field } from './Field.js';

/**
 * 多行文本框组件
 * @example <th-textbox name="" required>content</th-textbox>
 */
export class TextBox extends Field {

    #editor;

    onChanged(name, value) {
        super.onChanged(name, value);
        if (this.#editor && name === 'value') {
            this.#editor.textContent = value;
        }
    }

    onConnected() {
        super.onConnected();
        this.addStyle(styles);

        this._native.mockHide();
        this.#editor = createElement('<div contenteditable="plaintext-only"></div>');
        this.query('.field-body').append(this.#editor);

        this.#editor.on('input', e => {
            this.value = e.target.textContent;
        });
    }

    onAssigned(slot) {
        let content = '';
        slot.assignedNodes().forEach(v => content += v.textContent);

        content = content.trim();
        this.#editor.textContent = content;
        this.value = content;
    }

    reportValidity() {
        const validated = super.reportValidity();
        if (!validated) this.#editor.focus();
        return validated;
    }

}