import globalStyles from './styles/global.css';
import * as Util from './modules/Util.js';
import { Locale } from './modules/Locale.js';
import { Http } from './modules/Http.js';
import { Form } from './modules/Form.js';
import { Button } from './components/Button.js';
import { Calendar } from './components/Calendar.js';
import { Checkbox } from './components/Checkbox.js';
import { CheckGroup } from './components/CheckGroup.js';
import { Dialog } from './components/Dialog.js';
import { Field } from './components/Field.js';
import { Select } from './components/Select.js';
import { Switch } from './components/Switch.js';
import { TextBox } from './components/TextBox.js';
import { Toast } from './components/Toast.js';
import { Toptray } from './components/Toptray.js';
import { Upload } from './components/Upload.js';

class Quick {

    static util = Util;
    static http = Http;
    static form = Form;
    static #toast;

    static {
        Util.enhanceElements();
        document.head.append(Util.createStyle(globalStyles));

        Util.registerComponent('quick-button', Button);
        Util.registerComponent('quick-calendar', Calendar);
        Util.registerComponent('quick-checkbox', Checkbox);
        Util.registerComponent('quick-checkgroup', CheckGroup);
        Util.registerComponent('quick-dialog', Dialog);
        Util.registerComponent('quick-field', Field);
        Util.registerComponent('quick-select', Select);
        Util.registerComponent('quick-switch', Switch);
        Util.registerComponent('quick-textbox', TextBox);
        Util.registerComponent('quick-toast', Toast);
        Util.registerComponent('quick-toptray', Toptray);
        Util.registerComponent('quick-upload', Upload);
    }

    static alert(text, callback, isConfirm) {
        const dialog = Util.createElement(`<quick-dialog>${text}</quick-dialog>`);
        document.body.append(dialog);

        const buttons = [];
        if (isConfirm) {
            buttons.push({ label: Locale.get('NO') });
            buttons.push({ label: Locale.get('YES') });
        } else {
            buttons.push({ label: Locale.get('OK') });
        }

        Object.assign(buttons[buttons.length - 1], {
            primary: true,
            onclick: async (self) => {
                callback && await callback.call(self, self);
                self.hide();
            }
        })
        dialog.buttons = buttons;
        dialog.open(true);
    }

    static confirm(text, callback) {
        this.alert(text, callback, true);
    }

    static info(text, type, delay) {
        if (this.#toast) {
            this.#toast.remove();
            this.#toast = null;
        }
        this.#toast = Util.createElement(`<quick-toast>${text}</quick-toast>`);
        this.#toast.attr('type', type);
        this.#toast.attr('delay', delay);
        document.body.append(this.#toast);
    }

    static error(text) {
        this.info(text, 'error', 5000);
    }

    static warning(text) {
        this.info(text, 'warning', 4000);
    }

    static success(text) {
        this.info(text, 'success');
    }

}

window.Quick = Quick;
export default Quick;