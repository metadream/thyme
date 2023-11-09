import globalStyles from './styles/global.css';
import { createElement, enhanceElements } from './modules/Util.js';
import { Language } from './modules/Language.js';
import { Http } from './modules/Http.js';
import { Form } from './modules/Form.js';
import { Calendar } from './components/Calendar.js';
import { Field } from './components/Field.js';
import { Switch } from './components/Switch.js';
import { Dialog, DialogButton } from './components/Dialog.js';
import { Toast } from './components/Toast.js';
import { Toptray } from './components/Toptray.js';

window.Quick = class { }
Quick.http = Http;
Quick.form = Form;
Quick.Calendar = Calendar;
Quick.Field = Field;
Quick.Switch = Switch;
Quick.Dialog = Dialog;
Quick.Toptray = Toptray;

Quick.setup = function () {
    enhanceElements();
    customElements.define('quick-calendar', Calendar);
    customElements.define('quick-field', Field);
    customElements.define('quick-switch', Switch);
    customElements.define('quick-dialog', Dialog);
    customElements.define('quick-dialog-button', DialogButton);
    customElements.define('quick-toast', Toast);
    customElements.define('quick-toptray', Toptray);

    const style = createElement('style');
    style.textContent = globalStyles;
    document.head.append(style);
}

Quick.alert = function (text, callback) {
    const dialog = createElement(`<quick-dialog>${text}</quick-dialog>`);
    document.body.appendChild(dialog);

    dialog.buttons([{
        label: Language.i18n('OK'),
        primary: true,
        onclick: (self, btn) => {
            callback && callback(self, btn);
            self.hide();
        }
    }]);
    dialog.open(true);
}

Quick.confirm = function (text, callback) {
    const dialog = createElement(`<quick-dialog>${text}</quick-dialog>`);
    document.body.appendChild(dialog);

    dialog.buttons([{
        label: Language.i18n('NO'),
    }, {
        label: Language.i18n('YES'),
        primary: true,
        onclick: (self, btn) => {
            callback && callback(self, btn);
            self.hide();
        }
    }]);
    dialog.open(true);
}

Quick.info = function (text, type, delay) {
    if (this._singleton) {
        this._singleton.remove();
        this._singleton = null;
    }
    this._singleton = createElement(`<quick-toast text="${text}" type="${type}" delay="${delay || 3000}"></quick-toast>`);
    document.body.append(this._singleton);
};

Quick.warn = function (text) {
    this.info(text, 'warn');
};

Quick.error = function (text) {
    this.info(text, 'error', 5000);
};

Quick.success = function (text) {
    this.info(text, 'success');
};

Quick.setup();