import globalStyles from './styles/global.css';
import { createElement, createStyles, enhanceElements, registerComponent } from './modules/Util.js';
import { Locale } from './modules/Locale.js';
import { Http } from './modules/Http.js';
import { Form } from './modules/Form.js';
import { Button } from './components/Button.js';
import { Calendar } from './components/Calendar.js';
import { Dialog } from './components/Dialog.js';
import { Field } from './components/Field.js';
import { Select } from './components/Select.js';
import { Switch } from './components/Switch.js';
import { Toast } from './components/Toast.js';
import { Toptray } from './components/Toptray.js';
import { Upload } from './components/Upload.js';

class Quick {

    static http = Http;
    static form = Form;
    static #toast;

    static {
        enhanceElements();
        document.head.append(createStyles(globalStyles));

        registerComponent('quick-button', Button);
        registerComponent('quick-calendar', Calendar);
        registerComponent('quick-dialog', Dialog);
        registerComponent('quick-field', Field);
        registerComponent('quick-select', Select);
        registerComponent('quick-switch', Switch);
        registerComponent('quick-toast', Toast);
        registerComponent('quick-toptray', Toptray);
        registerComponent('quick-upload', Upload);
    }

    static alert(text, callback, isConfirm) {
        const dialog = createElement(`<quick-dialog>${text}</quick-dialog>`);
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
            onclick: (self, btn) => {
                callback && callback(self, btn);
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
        this.#toast = createElement(`<quick-toast type="${type}" delay="${delay}">${text}</quick-toast>`);
        document.body.append(this.#toast);
    }

    static warning(text) {
        this.info(text, 'warning');
    }

    static error(text) {
        this.info(text, 'error', 5000);
    }

    static success(text) {
        this.info(text, 'success');
    }

}

window.Quick = Quick;
export default Quick;