import { createElement, enhanceElements } from './utility/Util.js';
import { Http } from './utility/Http.js';
import { Form } from './utility/Form.js';
import { Calendar } from './components/Calendar.js';
import { Field } from './components/Field.js';
import { Switch } from './components/Switch.js';
import { Dialog } from './components/Dialog.js';
import { Alert } from './components/Alert.js';
import { Confirm } from './components/Confirm.js';
import { PopupInfo } from './components/PopupInfo.js';
import { Toptray } from './components/Toptray.js';

window.Quick = class { }

Quick.Calendar = Calendar;
Quick.Field = Field;
Quick.Switch = Switch;
Quick.Dialog = Dialog;
Quick.Alert = Alert;
Quick.Confirm = Confirm;
Quick.Toptray = Toptray;

Quick.http = Http;
Quick.form = Form;

Quick.info = function (text, type, delay) {
    if (this.__singleton) {
        this.__singleton.remove();
        this.__singleton = null;
    }
    this.__singleton = createElement(`<quick-info text="${text}" type="${type}" delay="${delay || 3000}"></quick-info>`);
    document.body.append(this.__singleton);
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

Quick.setup = function () {
    enhanceElements();
    customElements.define('quick-calendar', Calendar);
    customElements.define('quick-field', Field);
    customElements.define('quick-switch', Switch);
    customElements.define('quick-dialog', Dialog);
    customElements.define('quick-alert', Alert);
    customElements.define('quick-confirm', Confirm);
    customElements.define('quick-info', PopupInfo);
    customElements.define('quick-toptray', Toptray);
}

Quick.setup();