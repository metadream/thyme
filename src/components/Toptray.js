import toptrayStyles from '../styles/toptray.css';
import arrowTopIcon from "../icons/arrow-top.svg";
import { getScrollTop } from '../modules/Util.js';
import { Component } from './Component.js';

export class Toptray extends Component {

    styles = toptrayStyles;
    template = `<div class="quick-toptray" style="bottom:{{x}}px;right:{{y}}px">${arrowTopIcon}</div>`;

    onConnected() {
        const tray = this.shadowBody;

        addEventListener('scroll', () => {
            const y = getScrollTop();
            if (y > 450) tray.style.display = 'block';
            else tray.style.display = 'none';
        });

        let scrollTimer;
        tray.onclick = function () {
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