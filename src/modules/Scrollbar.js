// HTML Document 滚动条方法集
// deno-lint-ignore-file
export class Scrollbar {

    // 获取横向滚动距离
    static get left() {
        return document.body.scrollLeft || document.documentElement.scrollLeft;
    }

    // 获取纵向滚动距离
    static get top() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }

    // 设置横向滚动距离
    static set left(x) {
        document.body.scrollLeft = document.documentElement.scrollLeft = x;
    }

    // 设置纵向滚动距离
    static set top(y) {
        document.body.scrollTop = document.documentElement.scrollTop = y;
    }

    // 判断是否存在滚动条
    static exists() {
        return (document.body.scrollWidth > (window.innerWidth || document.documentElement.clientWidth))
            || document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
    }

    // 禁用滚动条
    static block() {
        if (!this.exists()) return;

        const $html = document.querySelector('html');
        $html.style.setProperty('--th-scroll-x', (0 - this.left) + 'px');
        $html.style.setProperty('--th-scroll-y', (0 - this.top) + 'px');
        $html.addClass('scroll-blocked');
    }

    // 恢复滚动条
    static unblock() {
        const $html = document.querySelector('html');
        $html.removeClass('scroll-blocked');

        this.left = 0 - parseInt($html.style.getPropertyValue('--th-scroll-x'));
        this.top = 0 - parseInt($html.style.getPropertyValue('--th-scroll-y'));
        $html.style.removeProperty('--th-scroll-x');
        $html.style.removeProperty('--th-scroll-y');
    }

}