import shadowStyles from '../styles/shadow.css';
import { createElement } from '../modules/Util.js';

/**
 * 基础组件
 * 功能：创建样式、创建模板、提供公共方法
 */
export class Component extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(this.createStyles());
        this.shadowRoot.append(this.createInternals());
        this.onConnected && this.onConnected();
        this.onRendered && setTimeout(() => this.onRendered());
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

    findElement(selector) {
        return this.internals.querySelector(selector);
    }

    findElements(selector) {
        return this.internals.querySelectorAll(selector);
    }

}