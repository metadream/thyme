import { Field } from './Field.js';
import { delay } from '../modules/Util.js';

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

    async onAssigned(slot) {
        const options = [];
        for (const el of slot.assignedElements()) {
            if (el.tagName === 'TH-CHECKBOX') {
                options.push(el);
            } else {
                await delay(10);
                options.push(...el.querySelectorAll('th-checkbox'))
            }
        }

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