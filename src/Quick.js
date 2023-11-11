import globalStyles from './styles/global.css';
import { createElement, enhanceElements } from './modules/Util.js';
import { Locale } from './modules/Locale.js';
import { Http } from './modules/Http.js';
import { Form } from './modules/Form.js';
import { Button } from './components/Button.js';
import { Calendar } from './components/Calendar.js';
import { Dialog } from './components/Dialog.js';
import { Field } from './components/Field.js';
import { Switch } from './components/Switch.js';
import { Toast } from './components/Toast.js';
import { Toptray } from './components/Toptray.js';
import { Upload } from './components/Upload.js';

window.Quick = class Quick { }
Quick.http = Http;
Quick.form = Form;
Quick.Button = Button;
Quick.Calendar = Calendar;
Quick.Dialog = Dialog;
Quick.Field = Field;
Quick.Switch = Switch;
Quick.Toast = Toast;
Quick.Toptray = Toptray;
Quick.Upload = Upload;

Quick.setup = function () {
    enhanceElements();
    customElements.define('quick-button', Button);
    customElements.define('quick-calendar', Calendar);
    customElements.define('quick-dialog', Dialog);
    customElements.define('quick-field', Field);
    customElements.define('quick-switch', Switch);
    customElements.define('quick-toast', Toast);
    customElements.define('quick-toptray', Toptray);
    customElements.define('quick-upload', Upload);

    const style = createElement('style');
    style.textContent = globalStyles;
    document.head.append(style);
}

Quick.alert = function (text, callback, isConfirm) {
    const dialog = createElement(`<quick-dialog>${text}</quick-dialog>`);
    document.body.appendChild(dialog);

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

Quick.confirm = function (text, callback) {
    this.alert(text, callback, true);
}

Quick.info = function (text, type, delay) {
    if (this._singleton) {
        this._singleton.remove();
        this._singleton = null;
    }
    this._singleton = createElement(`<quick-toast type="${type}" delay="${delay || 3000}">${text}</quick-toast>`);
    document.body.append(this._singleton);
};

Quick.warning = function (text) {
    this.info(text, 'warning');
};

Quick.error = function (text) {
    this.info(text, 'error', 5000);
};

Quick.success = function (text) {
    this.info(text, 'success');
};

Quick.setup();
export default Quick;