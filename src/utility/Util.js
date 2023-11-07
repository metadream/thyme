export function createElement(tag) {
    if (!tag) return;
    tag = tag.replace(/[\t\r\n]/mg, '').trim();

    if (tag.indexOf('<') === 0) {
        const fragment = document.createRange().createContextualFragment(tag);
        return fragment.firstChild;
    }
    return document.createElement(tag);
}

export function enhanceElements() {
    Object.assign(Element.prototype, {
        on(event, fn) {
            this.addEventListener(event, fn);
            return this;
        },

        off(event, fn) {
            this.removeEventListener(event, fn);
            return this;
        },

        addClass(name) {
            this.classList.add(name);
            return this;
        },

        removeClass(name) {
            this.classList.remove(name);
            return this;
        },

        remove() {
            return this.parentNode && this.parentNode.removeChild(this);
        },

        swap(el) {
            if (el) el.insertAdjacentElement('beforeBegin', this);
            return this;
        },

        disable() {
            if (this.tagName !== 'BUTTON') return;
            if (this.disabled) return;
            this.disabled = true;

            // Add loading to BUTTON if disabled
            this.loader = createElement('<div class="quick-btn-loading"></div>');
            this.append(this.loader);
        },

        enable() {
            if (this.tagName !== 'BUTTON') return;
            if (!this.disabled) return;
            this.disabled = false;
            this.loader && this.loader.remove();
        }
    });
}


/**
 * 保留数值精度
 * @param number 数值
 * @param precision 小数点位数
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
 * @param text 文本内容
 */
export function copyText(text) {
    const clipboard = navigator.clipboard;
    if (!clipboard) return;

    clipboard.writeText(text);
}