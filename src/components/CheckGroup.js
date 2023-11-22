import { Field } from './Field.js';

/**
 * 复选框组合组件
 * @example <tag name="" required>
 *             <quick-checkbox value="">text</quick-checkbox>
 *          </tag>
 */
export class CheckGroup extends Field {

    onConnected() {
        super.onConnected();
        this._native.hide();
    }

    onAssigned() {
        const options = this.slots();
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