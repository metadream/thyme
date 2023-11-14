import styles from '../styles/field.css';
import calendarIcon from "../icons/calendar.svg";
import { createElement, toDataURI } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 文本框组件
 * @example <quick-field label="" type="text|password|calendar" maxlength="" value=""></quick-field>
 * @example <quick-field data-rule="varchar|integer|decimal|date|email|url" data-message="" required></quick-field>
 */
export class Field extends Component {

    styles = styles;
    template = `<div class="field">
        <label>{{label}}</label>
        <slot>
            <input type="{{type}}" value="{{value}}"/>
            <i class="icon"></i>
        </slot>
    </div>`;

    #nativeElement;

    onConnected() {
        const input = this.query('input');
        this.#nativeElement = input;

        if (this.attr('type') == 'calendar') {
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

        const maxLength = this.iattr('maxlength');
        if (maxLength > 0) {
            input.maxLength = maxLength;
        }
        if (this.battr('required')) {
            this.internals.addClass('required');
        }
        if (this.battr('readonly')) {
            input.readOnly = true;
        }
        if (this.battr('disabled')) {
            input.disabled = true;
        }
    }

    focus() {
        this.#nativeElement.focus();
    }

    get value() {
        return this.#nativeElement.value;
    }

    set value(v) {
        this.#nativeElement.value = v;
    }

    get readOnly() {
        return this.#nativeElement.readOnly;
    }

    set readOnly(v) {
        this.#nativeElement.readOnly = v;
    }

    get disabled() {
        return this.#nativeElement.disabled;
    }

    set disabled(v) {
        this.#nativeElement.disabled = v;
    }

}