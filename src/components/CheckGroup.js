import { Field } from './Field.js';

/**
 * 复选框组合组件
 * @example <quick-checkgroup name="" required>
 *             <quick-checkbox value="1">text1</quick-checkbox>
 *             <quick-checkbox value="2" checked>text2</quick-checkbox>
 *          </quick-checkgroup>
 */
export class CheckGroup extends Field {

    onConnected() {
        super.onConnected();
        this._native.mockHide();
    }

    onAssigned() {
        const options = this.query('slot').assignedElements();
        this.#setFieldValue(options);

        for (const opt of options) {
            opt.on('change', () => this.#setFieldValue(options));
        }
    }

    #setFieldValue(options) {
        const values = [];
        const opts = options.filter(v => v.checked);
        opts.forEach(v => values.push(v.value));
        this.value = values.join(',');
    }

}