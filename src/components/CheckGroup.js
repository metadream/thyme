import { Field } from './Field.js';

/**
 * 复选框组合组件
 * @example <th-checkgroup name="" required>
 *             <th-checkbox value="1">text1</th-checkbox>
 *             <th-checkbox value="2" checked>text2</th-checkbox>
 *          </th-checkgroup>
 */
export class CheckGroup extends Field {

    onConnected() {
        super.onConnected();
        this._native.mockHide();
    }

    onAssigned(slot) {
        const options = slot.assignedElements();
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