import shadowStyles from '../styles/shadow.css';
import { createElement } from '../utility/Util.js';

export class Component extends HTMLElement {

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
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Add styles
        const style = createElement('style');
        style.textContent = shadowStyles + (this.styles || '');
        shadowRoot.append(style);

        // Add attributes
        const names = this.getAttributeNames();
        for (const name of names) {
            this.template = this.template.replace(`{{${name}}}`, this.getAttribute(name));
        }
        this.template = this.template.replace(/{{[a-zA-Z0-9\-]+}}/g, '');

        // Create shadow body
        const shadowBody = createElement(this.template);
        this.shadowBody = shadowBody;
        shadowRoot.append(shadowBody);

        // Components callback
        this.onConnected && this.onConnected();
    }

}