import styles from '../styles/toptray.css';
import arrowTopIcon from "../icons/arrow-top.svg";
import { getScrollTop } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 滚动到顶部的托盘组件
 * @example <tag x="10" y="10"></tag>
 */
export class Toptray extends Component {

    static styles = styles;
    static template = `<div class="toptray" style="bottom:{{x}}px;right:{{y}}px">${arrowTopIcon}</div>`;

    onConnected() {
        const { shell } = this;

        addEventListener('scroll', () => {
            const y = getScrollTop();
            if (y > 450) shell.style.display = 'block';
            else shell.style.display = 'none';
        });

        let scrollTimer;
        shell.onclick = function () {
            cancelAnimationFrame(scrollTimer);

            scrollTimer = requestAnimationFrame(function scroll() {
                const y = getScrollTop();
                document.body.scrollTop = document.documentElement.scrollTop = parseInt(y / 1.2);

                if (y > 0) scrollTimer = requestAnimationFrame(scroll);
                else cancelAnimationFrame(scrollTimer);
            });
        }
    }

}