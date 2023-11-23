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

        Util.registerComponent('uc-button', Button);
        Util.registerComponent('uc-calendar', Calendar);
        Util.registerComponent('uc-checkbox', Checkbox);
        Util.registerComponent('uc-checkgroup', CheckGroup);
        Util.registerComponent('uc-dialog', Dialog);
        Util.registerComponent('uc-field', Field);
        Util.registerComponent('uc-select', Select);
        Util.registerComponent('uc-switch', Switch);
        Util.registerComponent('uc-textbox', TextBox);
        Util.registerComponent('uc-toast', Toast);
        Util.registerComponent('uc-toptray', Toptray);
        Util.registerComponent('uc-upload', Upload);
    }

    static alert(text, callback, isConfirm) {
        const dialog = Util.createElement(`<uc-dialog>${text}</uc-dialog>`);
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
        this.#toast = Util.createElement(`<uc-toast>${text}</uc-toast>`);
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