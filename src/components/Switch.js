import styles from '../styles/switch.css';
import { Component } from './Component.js';

export class Switch extends Component {

    styles = styles;
    template = `<label class="quick-switch"><input type="checkbox" name="{{name}}"/><i></i></label>`;

    onConnected() {
        this.nativeElement = this.getElement('input');
        if (this.getBooleanAttribute('checked')) {
            this.nativeElement.checked = true;
        }

        const event = new Event('change');
        this.nativeElement.on('change', () => {
            this.dispatchEvent(event);
        });
    }

    get value() {
        return this.nativeElement.checked ? 1 : 0;
    }

    set value(v) {
        this.nativeElement.checked = v === 1 ? true : false;
    }

}