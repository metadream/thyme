import styles from '../styles/field.css';
import calendarIcon from "../icons/calendar.svg";
import { createElement, toDataURI } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 文本框组件
 * @example <quick-field label="" type="text|password|calendar" maxlength="" name="" value=""></quick-field>
 * @example <quick-field data-rule="varchar|integer|decimal|date|email|url" data-message="" required></quick-field>
 */
export class Field extends Component {

    styles = styles;
    template = `<div class="quick-field"><label>{{label}}</label><input type="{{type}}" value="{{value}}"/></div>`;

    onConnected() {
        const input = this.findElement('input');
        this.nativeElement = input;

        if (this.getAttribute('type') == 'calendar') {
            input.readOnly = true;
            input.addClass('icon-trigger');
            input.style.backgroundImage = `url(${toDataURI(calendarIcon)})`;

            input.on('click', () => {
                const $calendar = createElement('quick-calendar');
                this.shadowRoot.append($calendar);

                $calendar.attach(input);
                $calendar.on('selected', e => {
                    input.value = e.target.value;
                    $calendar.remove();
                });
            });
        }

        const maxLength = this.getIntAttribute('maxlength');
        if (maxLength > 0) {
            input.maxLength = maxLength;
        }
        if (this.getBooleanAttribute('required')) {
            this.internals.addClass('required');
        }
        if (this.getBooleanAttribute('readonly')) {
            input.readOnly = true;
        }
        if (this.getBooleanAttribute('disabled')) {
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