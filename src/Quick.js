import { enhanceElements } from './utility/Util.js';
import { Http } from './utility/Http.js';
import { Form } from './utility/Form.js';
import { Calendar } from './components/Calendar.js';
import { Field } from './components/Field.js';
import { Switch } from './components/Switch.js';
import { Dialog } from './components/Dialog.js';
import { Alert } from './components/Alert.js';
import { Confirm } from './components/Confirm.js';

window.Quick = class { }

Quick.Calendar = Calendar;
Quick.Field = Field;
Quick.Switch = Switch;
Quick.Dialog = Dialog;
Quick.Alert = Alert;
Quick.Confirm = Confirm;

Quick.http = Http;
Quick.form = Form;

Quick.setup = function () {
    enhanceElements();
    customElements.define('quick-calendar', Calendar);
    customElements.define('quick-field', Field);
    customElements.define('quick-switch', Switch);
    customElements.define('quick-dialog', Dialog);
    customElements.define('quick-alert', Alert);
    customElements.define('quick-confirm', Confirm);
}
Quick.setup();