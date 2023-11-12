import styles from '../styles/field.css';
import calendarIcon from "../icons/calendar.svg";
import { createElement, toDataURI } from '../modules/Util.js';
import { Component } from './Component.js';

export class Field extends Component {

    styles = styles;
    template = `<div class="quick-field"><label>{{label}}</label><input type="{{type}}" value="{{value}}"/></div>`;

    onConnected() {
        const input = this.getElement('input');
        this.nativeElement = input;

        if (this.getAttribute('type') == 'calendar') {
            input.readOnly = true;
            input.addClass('icon-trigger');
            input.style.backgroundImage = `url(${toDataURI(calendarIcon)})`;

            input.on('click', () => {
                const $calendar = createElement('quick-calendar');
                this.shadowRoot.append($calendar);

                $calendar.setAttribute('lang', this.getAttribute('lang') || '');
                $calendar.attach(input);
                $calendar.on('selected', e => {
                    input.value = e.target.value;
                    $calendar.remove();
                });
            });
        }

        if (this.hasAttribute('required')) {
            this.internals.addClass('required');
        }
        if (this.hasAttribute('maxlength')) {
            input.maxLength = this.getAttribute('maxlength');
        }
        if (this.hasAttribute('readonly')) {
            input.readOnly = true;
        }
        if (this.hasAttribute('disabled')) {
            input.disabled = true;
        }
    }

    focus() {
        this.nativeElement.focus();
    }

    get value() {
        return this.nativeElement.value;
    }

    set value(v) {
        this.nativeElement.value = v;
    }

    get readOnly() {
        return this.nativeElement.readOnly;
    }

    set readOnly(v) {
        this.nativeElement.readOnly = v;
    }

    get disabled() {
        return this.nativeElement.disabled;
    }

    set disabled(v) {
        this.nativeElement.disabled = v;
    }

}