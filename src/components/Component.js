import shadowStyles from '../styles/shadow.css';
import { createElement } from '../modules/Util.js';

export class Component extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(this.createStyles());
        this.shadowRoot.append(this.createInternals());
        this.onConnected && this.onConnected();
    }

    createStyles() {
        const style = createElement('style');
        style.textContent = shadowStyles + this.styles;
        return style;
    }

    createInternals() {
        const names = this.getAttributeNames();
        for (const name of names) {
            this.template = this.template.replace(`{{${name}}}`, this.getAttribute(name));
        }
        this.template = this.template.replace(/{{[a-zA-Z0-9\-]+}}/g, '');
        this.internals = createElement(this.template);
        return this.internals;
    }

    getElement(selector) {
        return this.internals.querySelector(selector);
    }

    getElements(selector) {
        return this.internals.querySelectorAll(selector);
    }

    focus() {
        this.keyElement.focus();
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

}