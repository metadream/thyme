import { Scrollbar } from "./Scrollbar.js";


/** 延迟执行 */
export function delay(delayInms) {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

/**
 * Nano Id without '-' and '_'
 * @see https://github.com/ai/nanoid/blob/main/index.browser.js
 * @param {number} size
 */
export function nanoId(size = 24) {
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
    style.textContent = content || '';
    return style;
}

/**
 * 引入脚本
 * @param {Array|string} urls
 * @returns
 */
export function importScripts(...urls) {
    return new Promise((resolve, _) => {
        const head = document.getElementsByTagName('head')[0];
        const firstScript = head.querySelector('script');
        const loadScript = i => {
            const script = document.createElement('script');
            script.setAttribute('src', urls[i]);
            script.onload = script.onerror = () => {
                i++;
                if (i === urls.length) resolve();
                else loadScript(i);
            }
            head.insertBefore(script, firstScript);
        }
        loadScript(0);
    });
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

        attachTo(target) {
            const rect = target.getBoundingClientRect();
            this.style.left = rect.x + Scrollbar.left + 'px';
            this.style.top = rect.y + rect.height + Scrollbar.top + 1 + 'px';
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
    return ['required', 'editable', 'readonly', 'checked', 'disabled', 'autofocus'].includes(name);
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
 * Format a number with a specified max length of decimal
 * @param {*} number
 * @param {*} digits
 * @returns
 */
export function formatDecimal(number, digits) {
    return parseFloat(number.toFixed(digits));
}

/**
 * Format the number of bytes to be easily recognizable by humans
 * @param {number} bytes
 * @returns {string}
 */
export function formatBytes(bytes) {
    if (!bytes || bytes < 1) return "0";
    const unit = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB"];
    const base = Math.min(unit.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
    const scale = Math.max(0, base - 2);
    return parseFloat((bytes / Math.pow(1024, base)).toFixed(scale)) + " " + unit[base];
}

/**
 * Parse format string into milliseconds
 * @param {string} s
 * @returns {number}
 */
export function parseDuration(s) {
    if (!s) return 0;
    const m = s.trim().match(/^(\d{2}):(\d{2}):(\d{2})(\.\d{1,3})?$/);
    if (!m) return 0;

    const hours = parseInt(m[1], 10);
    const minutes = parseInt(m[2], 10);
    const seconds = parseInt(m[3], 10);
    const ms = parseFloat(m[4]) || 0;

    if (hours > 59 || minutes > 59 || seconds > 59) return 0;
    return (hours * 60 + minutes) * 60 + seconds + ms;
}

/**
 * Format seconds to d h m s
 * @param seconds
 * @returns
 */
export function formatSeconds(seconds) {
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return ((d > 0 ? d + "d " : "") + (h > 0 ? h + "h " : "") + (m > 0 ? m + "m " : "")
        + (s > 0 ? s + "s" : "")).trim();
}

/**
 * 将对象转换为查询字符串
 * @param {Object} params
 * @returns
 */
export function stringify(params) {
    return Object.keys(params).map(key => key + '=' + encodeURI(params[key])).join('&');
}

/**
 * SVG转换成PNG
 * @param {Element} svg
 * @param {number} scale
 * @param {Function} callback
 * @example svg2png(svg, callback)
 *          svg2png(svg, scale, callback)
 */
export function svg2png(svg, scale, callback) {
    if (callback === undefined) {
        callback = scale;
        scale = 1;
    }

    const box = svg.getBBox();
    const clone = svg.cloneNode(true);
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', box.width * scale);
    clone.setAttribute('height', box.height * scale);

    const svgXml = new XMLSerializer().serializeToString(clone);
    const base64 = 'data:image/svg+xml;base64,' + base64Encode(svgXml);

    const image = new Image();
    image.src = base64;
    image.crossOrigin = 'anonymous';
    image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        callback(canvas.toDataURL('image/png'));
    }
}

/**
 * Base64编码
 * @param {string} str
 * @returns
 */
export function base64Encode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, m) => String.fromCharCode('0x' + m)));
}