import switchStyles from '../styles/switch.css';
import { Component } from './Component.js';

export class Switch extends Component {

    styles = switchStyles;
    template = `
        <label class="quick-switch">
            <input type="checkbox" name="{{name}}"/><i></i>
        </label>
    `;

    get value() {
        return this.keyElement.checked ? 1 : 0;
    }

    set value(v) {
        this.keyElement.checked = v === 1 ? true : false;
    }

    onConnected(shadow) {
        this.keyElement = shadow.querySelector('input');
        if (this.hasAttribute('checked')) {
            this.keyElement.checked = true;
        }
    }
}