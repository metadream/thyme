import { Field } from './Field.js';

/**
 * 复选框组合组件
 * @example <uc-checkgroup name="" required>
 *             <uc-checkbox value="1">text1</uc-checkbox>
 *             <uc-checkbox value="2" checked>text2</uc-checkbox>
 *          </uc-checkgroup>
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