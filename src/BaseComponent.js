import { Quick } from './quick.js';
export class BaseComponent extends HTMLElement {
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
        .quick-overlay {
          position: fixed;
          z-index: 5000;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }
    `;
    constructor() {
        super();
    }

    set disabled(v) {
        this.keyElement.disabled = v;
    }

    get disabled() {
        return this.keyElement.disabled;
    }

    set readOnly(v) {
        this.keyElement.readOnly = v;
    }

    get readOnly() {
        return this.keyElement.readOnly;
    }

    focus() {
        this.keyElement.focus();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        // Add styles
        const style = document.createElement('style');
        style.textContent = this.baseStyle + this.style;
        shadow.append(style);

        // Add attributes
        const names = this.getAttributeNames();
        for (const name of names) {
            this.template = this.template.replace(`{{${name}}}`, this.getAttribute(name));
        }
        this.template = this.template.replace(/{{[a-zA-Z0-9\-]+}}/g, '');

        // Create shadow body
        const body = Quick.query(this.template);
        shadow.body = body;
        shadow.append(body);
        this.onConnected && this.onConnected(shadow);
    }
}