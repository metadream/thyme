import { Dialog } from "./Dialog.js";

export class Alert extends Dialog {

    constructor(message, callback) {
        super();
        this.message = message;
        this.callback = callback;
        document.body.append(this);
    }

    onConnected() {
        super.onConnected();

        this.slot(this.message);
        this.buttons([{
            label: "确定",
            primary: true,
            onclick: () => {
                this.callback && this.callback(this);
                this.hide();
            }
        }]);
    }
}