/**
 * Nano Id without '-' and '_'
 * @see https://github.com/ai/nanoid/blob/main/index.browser.js
 * @param {number} size
 */
export function nanoId(size = 21) {
    return crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
        byte &= 61;
        if (byte < 36) {
            id += byte.toString(36);
        } else {
            id += (byte - 26).toString(36).toUpperCase();
        }
        return id;
    }, '');
}

/**
 * 注册自定义组件
 * @param {string} tagName
 * @param {HTMLElement} component
 */
export function registerComponent(tagName, component) {
    customElements.define(tagName, component);
}

/**
 * 从标签名或HTML字符串创建DOM元素
 * @param {string} content
 * @returns
 */
export function createElement(content) {
    if (!content) return;
    content = content.replace(/[\t\r\n]/mg, '').trim();

    if (content.indexOf('<') === 0) {
        const template = document.createElement('template');
        template.innerHTML = content;
        return template.content.firstElementChild.cloneNode(true);
    }
    return document.createElement(content);
}

/**
 * 创建样式标签
 * @param {string} content
 * @returns
 */
export function createStyle(content) {
    const style = createElement('style');
    style.textContent = content;
    return style;
}

/**
 * DOM元素原型扩展
 */
export function enhanceElements() {
    Object.assign(Element.prototype, {
        query(selector) {
            return this.querySelector(selector);
        },

        queryAll(selector) {
            return this.querySelectorAll(selector);
        },

        on(events, fn) {
            if (typeof events === 'string') {
                events = [events];
            }
            for (const event of events) {
                this.addEventListener(event, fn);
            }
            return this;
        },

        off(events, fn) {
            if (typeof events === 'string') {
                events = [events];
            }
            for (const event of events) {
                this.removeEventListener(event, fn);
            }
            return this;
        },

        addClass(...names) {
            this.classList.add(...names);
            return this;
        },

        removeClass(...names) {
            this.classList.remove(...names);
            return this;
        },

        attr(name, value) {
            if (value === null) {
                this.removeAttribute(name);
                return this;
            }
            if (value === undefined) {
                value = this.getAttribute(name);
                return isBooleanAttribute(name) ? parseBoolean(value) : value;
            }
            if (isBooleanAttribute(name) && !parseBoolean(value)) {
                return this.attr(name, null);
            }
            this.setAttribute(name, value);
            return this;
        },

        attach(target, fitWidth) {
            const rect = target.getBoundingClientRect();
            this.style.left = rect.x + 'px';
            this.style.top = rect.y + rect.height + getScrollTop() + 1 + 'px';
            fitWidth && (this.style.width = rect.width + 'px');
            return this;
        },

        swap(el) {
            if (el) el.insertAdjacentElement('beforeBegin', this);
            return this;
        },

        remove() {
            return this.parentNode && this.parentNode.removeChild(this);
        }
    });
}

/**
 * 是否布尔型属性
 * @param {string} name
 * @returns
 */
export function isBooleanAttribute(name) {
    return ['required', 'editable', 'readonly', 'checked', 'disabled'].includes(name);
}

/**
 * 转换为布尔值（undefined将转换为true）
 * @param {string} v
 * @returns
 */
export function parseBoolean(v) {
    return v !== null && v !== false && v !== 'null' && v !== 'undefined' && v !== 'false' && v !== '0';
}

/**
 * 转换为整型（非数字返回0）
 * @param {string} v
 * @returns
 */
export function parseInteger(v) {
    return /^\d+$/.test(v) ? parseInt(v) : 0;
}

/**
 * 获取滚动高度
 * @returns
 */
export function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
}

/**
 * SVG转换为DataUri
 * @param {string} svg
 * @returns
 */
export function toDataURI(svg) {
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

/**
 * Format date with pattern string
 * @param {Date} date
 * @param {string} pattern
 * @param {Boolean} utc
 * @returns {string}
 */
export function formatDate(date, pattern, utc) {
    const get = utc ? "getUTC" : "get";
    return pattern
        .replace(/yyyy/g, date[get + "FullYear"]())
        .replace(/yy/g, ("" + date[get + "FullYear"]()).slice(-2))
        .replace(/MM/g, ("0" + (date[get + "Month"]() + 1)).slice(-2))
        .replace(/M/g, date[get + "Month"]() + 1)
        .replace(/dd/g, ("0" + date[get + "Date"]()).slice(-2))
        .replace(/d/g, date[get + "Date"]())
        .replace(/hh/g, ("0" + date[get + "Hours"]()).slice(-2))
        .replace(/h/g, date[get + "Hours"]())
        .replace(/mm/g, ("0" + date[get + "Minutes"]()).slice(-2))
        .replace(/m/g, date[get + "Minutes"]())
        .replace(/ss/g, ("0" + date[get + "Seconds"]()).slice(-2))
        .replace(/s/g, date[get + "Seconds"]())
        .replace(/SSS/g, ("00" + date[get + "Milliseconds"]()).slice(-3))
        .replace(/S/g, date[get + "Milliseconds"]());
}

/**
 * Format the number of bytes to be easily recognizable by humans
 * @param {number} bytes
 * @returns {string}
 */
export function formatBytes(bytes) {
    const unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"];
    const base = Math.min(unit.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
    const scale = Math.max(0, base - 2);
    return parseFloat((bytes / Math.pow(1024, base)).toFixed(scale)) + unit[base];
}

/**
 * 将对象转换为查询字符串
 * @param {Object} params
 * @returns
 */
export function stringify(params) {
    return Object.keys(params).map(key => key + '=' + encodeURI(params[key])).join('&');
}