import styles from '../styles/switch.css';
import { Component } from './Component.js';

export class Switch extends Component {

    styles = styles;
    template = `<label class="quick-switch"><input type="checkbox" name="{{name}}"/><i></i></label>`;

    onConnected() {
        this.nativeElement = this.getElement('input');
        if (this.hasAttribute('checked')) {
            this.nativeElement.checked = true;
        }
    }

    get value() {
        return this.nativeElement.checked ? 1 : 0;
    }

    set value(v) {
        this.nativeElement.checked = v === 1 ? true : false;
    }

}