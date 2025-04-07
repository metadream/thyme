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

    #options = [];

    onChanged(name, value) {
        super.onChanged(name, value);
        if (name === 'value') {
            const values = value.split(',');
            this.#options.forEach(opt => {
                opt.checked = values.includes(opt.value);
            });
        }
    }

    onConnected() {
        super.onConnected();
        this._native.mockHide();
    }

    async onAssigned(slot) {
        for (const el of slot.assignedElements()) {
            if (el.tagName === 'TH-CHECKBOX') {
                this.#options.push(el);
            } else {
                await delay(10);
                this.#options.push(...el.querySelectorAll('th-checkbox'))
            }
        }

        this.#setFieldValue();
        for (const opt of this.#options) {
            opt.on('change', () => this.#setFieldValue());
        }
    }

    #setFieldValue() {
        const values = [];
        const opts = this.#options.filter(v => v.checked);
        opts.forEach(v => values.push(v.value));
        this.value = values.join(',');
    }

}