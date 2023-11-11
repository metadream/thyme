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
 * DOM元素原型扩展
 */
export function enhanceElements() {
    Object.assign(Element.prototype, {
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

        addClass(...name) {
            this.classList.add(...name);
            return this;
        },

        removeClass(...name) {
            this.classList.remove(...name);
            return this;
        },

        remove() {
            return this.parentNode && this.parentNode.removeChild(this);
        },

        swap(el) {
            if (el) el.insertAdjacentElement('beforeBegin', this);
            return this;
        }
    });
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
 * @param {String} pattern
 * @param {Boolean} utc
 * @returns {String}
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
 * 保留数值精度
 * @param {number} number
 * @param {number} precision
 * @returns
 */
export function round(number, precision) {
    return Math.round(number + 'e' + precision) / Math.pow(10, precision);
}

/**
 * 将对象转换为查询字符串
 * @param params 参数对象
 */
export function stringify(params) {
    return Object.keys(params).map(key => key + '=' + encodeURI(params[key])).join('&');
}

/**
 * 将文本内容复制到剪贴板
 * @param {string} text
 * @returns
 */
export function copyText(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    }
}