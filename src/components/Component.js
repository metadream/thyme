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
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(createStyles(shadowStyles + this.styles));
        shadow.append(this.#createInternals());

        this.onConnected && this.onConnected();
        this.onRendered && setTimeout(() => this.onRendered());
    }

    query(selector) {
        return this.internals.querySelector(selector);
    }

    queryAll(selector) {
        return this.internals.querySelectorAll(selector);
    }

    #createInternals() {
        const names = this.getAttributeNames();
        let tpl = this.template;

        // 替换属性变量占位符
        names.forEach(n => tpl = tpl.replace(new RegExp('{{\\s*' + n + '\\s*}}', 'g'), this.attr(n)));
        // 删除未设置属性的占位符
        tpl = tpl.replace(/\s+[\w\-]+\s*=\s*["']\s*{{\s*[\w\-]+\s*}}\s*["']/g, '');
        tpl = tpl.replace(/{{\s*[\w\-]+\s*}}/g, '');

        this.internals = createElement(tpl);
        return this.internals;
    }

}