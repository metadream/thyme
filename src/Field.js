import fieldStyles from '../css/field.css';
import { Component } from './Component.js';
import { createElement } from './Util.js';

export class Field extends Component {

    styles = fieldStyles;
    template = `
        <div class="quick-field">
            <label>{{label}}</label>
            <input type="{{type}}" value="{{value}}"/>
        </div>
    `;

    get value() {
        return this.keyElement.value;
    }

    set value(v) {
        this.keyElement.value = v;
    }

    onConnected(shadow) {
        this.keyElement = shadow.querySelector('input');

        if (this.getAttribute('type') == 'calendar') {
            this.keyElement.readOnly = true;
            this.keyElement.addClass('icon-trigger', 'icon-calendar');

            this.keyElement.on('click', () => {
                const $calendar = createElement('quick-calendar');
                shadow.append($calendar);

                $calendar.setAttribute('lang', this.getAttribute('lang') || '');
                $calendar.attach(this.keyElement);
                $calendar.on('selected', (e) => {
                    this.keyElement.value = e.detail;
                    $calendar.remove();
                })
            });
        }

        if (this.hasAttribute('disabled')) {
            this.keyElement.disabled = true;
        }

        if (this.hasAttribute('readonly')) {
            this.keyElement.readOnly = true;
        }

        if (this.hasAttribute('required')) {
            shadow.body.classList.add('required');
        }
    }

}