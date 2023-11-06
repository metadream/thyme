export const Quick = {
    seed: 0,
    uuid: () => 'q-u-i-c-k-' + ++Quick.seed,
    append: e => document.body.appendChild(e),

    query(selector, multi = false) {
        // 如果不是字符串直接返回
        if (typeof selector != 'string') return selector;

        // 如果是以 '<' 开头的字符串则创建元素
        selector = selector.replace(/[\t\r\n]/mg, '').trim();
        if (selector.indexOf('<') === 0) {
            const fragment = document.createRange().createContextualFragment(selector);
            return fragment.firstChild;
        }

        // 返回单个或多个被选择的元素
        return multi
            ? document.querySelectorAll(selector)
            : document.querySelector(selector);
    }
}