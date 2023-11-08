import { Dialog } from "./Dialog.js";
import { Language } from '../modules/Language.js';

export class Confirm extends Dialog {

    constructor(message, callback) {
        super({
            slot: message,
            buttons: [{
                label: Language.i18n('NO'),
            }, {
                label: Language.i18n('YES'),
                primary: true,
                onclick: (self, btn) => {
                    callback && callback(self, btn);
                    this.hide();
                }
            }]
        });
    }
}