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