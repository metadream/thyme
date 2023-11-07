import { enhanceElements } from './Util.js';
import { Calendar } from './Calendar.js';
import { Field } from './Field.js';
import { Switch } from './Switch.js';

class Quick {

}

Quick.init = function () {
    enhanceElements();
    customElements.define('quick-calendar', Calendar);
    customElements.define('quick-field', Field);
    customElements.define('quick-switch', Switch);
}

Quick.init();