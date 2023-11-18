import shadowStyles from '../styles/shadow.css';
import { createElement, createStyles } from '../modules/Util.js';

/**
 * 基础组件
 * 功能：创建样式、创建模板、提供公共方法
 */
export class Component extends HTMLElement {

    #props = {}; // Camelcase properties cache

    static get observedAttributes() {
        return this.attrs || [];
    };

    constructor() {
        super();
        this.#defineProps();

        const c = this.constructor;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(createStyles(shadowStyles + c.styles));
        this.shell = createElement(c.template || this.template);
        this.shadowRoot.append(this.shell);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        if (this.onAttributeChanged) {
            this.onAttributeChanged(name, oldValue, newValue);
        }
    }

    connectedCallback() {
        this.onConnected && this.onConnected();
        this.onRendered && setTimeout(() => this.onRendered());
    }

    query(selector) {
        return this.shadowRoot.querySelector(selector);
    }

    queryAll(selector) {
        return this.shadowRoot.querySelectorAll(selector);
    }

    slots(name) {
        const selector = name ? `slot[name="${name}"]` : 'slot';
        return this.query(selector).assignedElements();
    }

    // 同步更新属性值
    #defineProps() {
        const attrs = new Set([...this.constructor.observedAttributes]);
        attrs.forEach(name => {
            Object.defineProperty(this, this.#camelCase(name), {
                set: value => this.attr(name, value),
                get: () => this.attr(name)
            });
        });
    }

    // 将属性名转换为驼峰式
    #camelCase(name) {
        let prop = this.#props[name];
        if (!prop) {
            const np = name.split('-');
            prop = [np.shift(), ...np.map(n => n[0].toUpperCase() + n.slice(1))].join('');
            this.#props[name] = prop;
        }
        return prop;
    }

}