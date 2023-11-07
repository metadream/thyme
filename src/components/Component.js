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
        const shadow = this.attachShadow({ mode: 'open' });

        // Add styles
        const style = createElement('style');
        style.textContent = shadowStyles + (this.styles || '');
        shadow.append(style);

        // Add attributes
        const names = this.getAttributeNames();
        for (const name of names) {
            this.template = this.template.replace(`{{${name}}}`, this.getAttribute(name));
        }
        this.template = this.template.replace(/{{[a-zA-Z0-9\-]+}}/g, '');

        // Create shadow body
        const body = createElement(this.template);
        shadow.body = body;
        shadow.append(body);

        // Components callback
        this.onConnected && this.onConnected(shadow);
    }

}