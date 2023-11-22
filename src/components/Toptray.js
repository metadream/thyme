import styles from '../styles/toptray.css';
import arrowUpIcon from "../icons/arrow-up.svg";
import { getScrollTop } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 滚动到顶部的托盘组件
 * @example <quick-toptray x="30" y="30"></quick-toptray>
 */
export class Toptray extends Component {

    static styles = styles;
    static template = `<div class="toptray">${arrowUpIcon}</div>`;

    onConnected() {
        const { shell } = this;
        const x = this.attr('x');
        const y = this.attr('y');
        if (x) shell.style.right = x + 'px';
        if (y) shell.style.bottom = y + 'px';

        let scrollTimer;
        shell.onclick = () => {
            cancelAnimationFrame(scrollTimer);

            scrollTimer = requestAnimationFrame(function scroll() {
                const y = getScrollTop();
                document.body.scrollTop = document.documentElement.scrollTop = parseInt(y / 1.2);

                if (y > 0) scrollTimer = requestAnimationFrame(scroll);
                else cancelAnimationFrame(scrollTimer);
            });
        }

        addEventListener('scroll', () => {
            const y = getScrollTop();
            if (y > 450) shell.style.display = 'block';
            else shell.style.display = 'none';
        });
    }

}