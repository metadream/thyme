import styles from '../styles/toptray.css';
import arrowTopIcon from "../icons/arrow-top.svg";
import { getScrollTop } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 滚动到顶部的托盘组件
 * @example <quick-toptray x="10" y="10"></quick-toptray>
 */
export class Toptray extends Component {

    styles = styles;
    template = `<div class="quick-toptray" style="bottom:{{x}}px;right:{{y}}px">${arrowTopIcon}</div>`;

    onConnected() {
        const { internals } = this;

        addEventListener('scroll', () => {
            const y = getScrollTop();
            if (y > 450) internals.style.display = 'block';
            else internals.style.display = 'none';
        });

        let scrollTimer;
        internals.onclick = function () {
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