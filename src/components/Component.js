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
        this?.nativeElement?.focus();
    }

    get disabled() {
        return this?.nativeElement?.disabled;
    }

    set disabled(v) {
        if (this.nativeElement) {
            this.nativeElement.disabled = v;
        }
    }

}