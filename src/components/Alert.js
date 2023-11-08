import { Dialog } from "./Dialog.js";
import { Language } from '../modules/Language.js';

export class Alert extends Dialog {

    constructor(message, callback) {
        super({
            slot: message,
            buttons: [{
                label: Language.i18n('OK'),
                primary: true,
                onclick: (self, btn) => {
                    callback && callback(self, btn);
                    this.hide();
                }
            }]
        });
    }

}