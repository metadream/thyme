class QuickComponent extends HTMLElement {
    baseStyle = `
        *, *:before, *:after {
          box-sizing: border-box;
        }
        :host {
          line-height: 1.6;
          color: var(--fontColor, #333);
          font-size: var(--fontSize, 15px);
          font-family: var(--fontFamily, system-ui, -apple-system, BlinkMacSystemFont, Helvetica, Arial, Tahoma, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif);
        }
    `;
    constructor() {
        super();
    }

    get value() {
        return this.keyElement.value;
    }
    set value(v) {
        this.keyElement.value = v;
    }
    set disabled(v) {
        this.keyElement.disabled = v;
    }
    set readOnly(v) {
        this.keyElement.readOnly = v;
    }

    focus() {
        this.keyElement.focus();
    }

    createFragment(html) {
        html = html.replace(/[\t\r\n]/mg, '').trim();
        const fragment = document.createRange().createContextualFragment(html);
        return fragment.firstChild;
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        // Add styles
        const style = document.createElement("style");
        style.textContent = this.baseStyle + this.style;
        shadow.appendChild(style);

        // Add attributes
        const names = this.getAttributeNames();
        for (const name of names) {
            this.template = this.template.replace(`{{${name}}}`, this.getAttribute(name));
        }
        this.template = this.template.replace(/{{[a-zA-Z0-9\-]+}}/g, '');

        // Create shadow body
        const body = this.createFragment(this.template);
        shadow.appendChild(body);
        shadow.body = body;
        this.onConnected && this.onConnected(shadow);
    }

}

customElements.define("quick-field", class extends QuickComponent {
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

        .quick-datepicker-target {
  cursor: pointer;
  line-height: inherit;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='lightgray' d='M10.9 3.2H5.1v1.6H3.9V3.2H1.2v3.2h13.6V3.2h-2.7v1.6h-1.2V3.2zM12.1 2H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.9V.4h1.2V2h5.8V.4h1.2V2zm2.7 5.6H1.2v7.2h13.6V7.6z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: top 49% right 15px;
  background-size: 16px;
}
    `;
    template = `
        <div class="quick-field">
            <label>{{label}}</label>
            <input type="{{type}}" value="{{value}}"/>
        </div>
    `;

    onConnected(shadow) {
        this.keyElement = shadow.querySelector("input");

        if (this.getAttribute('type') == 'calendar') {

            new Quick.DatePicker(this.keyElement);
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
});

customElements.define("quick-switch", class extends QuickComponent {
    style = `
        .quick-switch {
          position: relative;
          display: inline-block;
          width: 46px;
          height: 28px;
        }
        .quick-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .quick-switch i {
          position: absolute;
          cursor: pointer;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: #ccc;
          border-radius: 28px;
          transition: .4s;
        }
        .quick-switch i:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 4px;
          bottom: 3px;
          background: white;
          border-radius: 50%;
          transition: .4s;
        }
        .quick-switch input:checked + i {
          background: var(--mainColor, #16c);
        }
        .quick-switch input:checked + i:before {
          transform: translateX(16px);
        }
    `;
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
});