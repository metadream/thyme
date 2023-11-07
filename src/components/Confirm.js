import { Dialog } from "./Dialog.js";

export class Confirm extends Dialog {

    constructor(message, callback) {
        super({
            slot: message,
            buttons: [{
                label: "取消",
            }, {
                label: "确定",
                primary: true,
                onclick: (self, btn) => {
                    callback && callback(self, btn);
                    this.hide();
                }
            }]
        });
    }
}