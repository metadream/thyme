import shadowStyles from '../styles/shadow.css';
import { createElement, createStyles } from '../modules/Util.js';

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
        this.shadowRoot.append(createStyles(shadowStyles + this.styles));
        this.shadowRoot.append(this.#createInternals());
        this.onConnected && this.onConnected();
        this.onRendered && setTimeout(() => this.onRendered());
    }

    #createInternals() {
        const names = this.getAttributeNames();
        for (const name of names) {
            this.template = this.template.replace(`{{${name}}}`, this.attr(name));
        }
        this.template = this.template.replace(/{{[a-zA-Z0-9\-]+}}/g, '');
        this.internals = createElement(this.template);
        return this.internals;
    }

    query(selector) {
        return this.internals.querySelector(selector);
    }

    queryAll(selector) {
        return this.internals.querySelectorAll(selector);
    }

}