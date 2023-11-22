import styles from '../styles/textbox.css';
import { createElement } from '../modules/Util.js';
import { Field } from './Field.js';

/**
 * 多行文本框组件
 * @example <quick-textbox name="" required></quick-textbox>
 */
export class TextBox extends Field {

    #editor;

    onConnected() {
        super.onConnected();
        this.addStyle(styles);

        this._native.mockHide();
        this.#editor = createElement('<div contenteditable="plaintext-only"></div>');
        this.query('.field-body').append(this.#editor);

        this.#editor.on('input', e => {
            this.value = e.target.textContent;
        })
    }

    reportValidity() {
        const validated = super.reportValidity();
        this.#editor.focus();
        return validated;
    }

}