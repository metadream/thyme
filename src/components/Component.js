import shadowStyles from '../styles/shadow.css';
import { createElement, createStyles } from '../modules/Util.js';

/**
 * 基础组件
 * 功能：创建样式、创建模板、提供公共方法
 */
export class Component extends HTMLElement {

    // 驼峰式属性缓存
    #props = {};

    // 受监听的属性名列表
    static get observedAttributes() {
        return this.attrs || [];
    };

    // 构造函数（执行顺序1）
    constructor() {
        super();
        this.#defineProps();

        // 添加主机样式和组件样式
        const c = this.constructor;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(createStyles(shadowStyles + c.styles));

        // 添加模板元素
        // 由于 attributeChangedCallback 方法可能需要查找元素，故在构造函数而非 connectedCallback 中添加
        this.render(c.template);
    }

    // 属性值改变回调函数（执行顺序2）
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        this.onChanged && this.onChanged(name, oldValue, newValue);
    }

    // DOM渲染回调函数（执行顺序3）
    connectedCallback() {
        this.onConnected && this.onConnected();
        // 获取Slot插入元素需延迟回调
        this.onAssigned && setTimeout(() => this.onAssigned());
    }

    // 渲染模板并添加元素
    render(template) {
        this.shell = createElement(template);
        this.shadowRoot.append(this.shell || '');
    }

    // 查找影子内单个元素快捷方法
    query(selector) {
        return this.shadowRoot.querySelector(selector);
    }

    // 查找影子内所有元素快捷方法
    queryAll(selector) {
        return this.shadowRoot.querySelectorAll(selector);
    }

    // 查找Slot插入元素快捷方法
    slots(name) {
        const selector = name ? `slot[name="${name}"]` : 'slot';
        return this.query(selector).assignedElements();
    }

    // 同步更新属性值（props/attrs）
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