import { enhanceElements } from './utility/Util.js';
import { Http } from './utility/Http.js';
import { Form } from './utility/Form.js';
import { Calendar } from './components/Calendar.js';
import { Field } from './components/Field.js';
import { Switch } from './components/Switch.js';

window.Quick = class { }

Quick.http = Http;
Quick.form = Form;

Quick.setup = function () {
    enhanceElements();
    customElements.define('quick-calendar', Calendar);
    customElements.define('quick-field', Field);
    customElements.define('quick-switch', Switch);
}

Quick.setup();