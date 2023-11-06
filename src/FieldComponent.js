import { BaseComponent } from './BaseComponent.js';

export class FieldComponent extends BaseComponent {
    style = `
        .quick-field {
          display: flex;
          align-items: center;
          border-radius: var(--borderRadius, 5px);
          border: #ccc 1px solid;
          color: #666;
          height: 40px;
          margin: 5px;
          transition: .3s;
        }
        .quick-field:focus-within {
          border-color: var(--mainColor, #16c);
          color: var(--fontColor, #333);
          box-shadow: 0 0 5px 0 rgb(0 0 0 / 15%);
        }
        .quick-field:focus-within > label:after {
          background-color: var(--mainColor, #16c);
        }
        .quick-field > label {
          position: relative;
          cursor: default;
          white-space: nowrap;
          width: 120px;
          padding: 0 20px;
        }
        .quick-field > label:after {
          content: '';
          position: absolute;
          top: 2px;
          bottom: 2px;
          right: 0;
          width: 1px;
          background-color: #ccc;
          transition: .3s;
        }
        .quick-field.required > label:after {
          background-color: red;
        }
        .quick-field > input {
          font: inherit;
          outline: 0;
          border: 0;
          width: 100%;
          height: 100%;
          margin: 0 10px;
          flex: 1;
        }
        .quick-field > input[disabled] {
          color: #999;
          pointer-events: none;
        }
        .icon-trigger {
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: top 49% right 0;
          cursor: pointer;
        }
        .icon-calendar {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='lightgray' d='M10.9 3.2H5.1v1.6H3.9V3.2H1.2v3.2h13.6V3.2h-2.7v1.6h-1.2V3.2zM12.1 2H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.9V.4h1.2V2h5.8V.4h1.2V2zm2.7 5.6H1.2v7.2h13.6V7.6z'%3E%3C/path%3E%3C/svg%3E");
        }
    `;
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
            this.keyElement.addClass('icon-trigger').addClass('icon-calendar');

            this.keyElement.on('click', () => {
                const $calendar = document.createElement('quick-calendar');
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