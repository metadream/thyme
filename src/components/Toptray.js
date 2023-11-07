import toptrayStyles from '../styles/toptray.css';
import { Component } from './Component.js';

export class Toptray extends Component {

    styles = toptrayStyles;
    template = `
        <div class="quick-toptray" style="bottom:{{x}}px;right:{{y}}px">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M954.176 707.328L894.752 768 512 377.344 129.248 768l-59.424-60.672L512 256z"/>
            </svg>
        </div>
    `;

    onConnected() {
        const tray = this.shadowBody;

        addEventListener('scroll', () => {
            const y = document.body.scrollTop || document.documentElement.scrollTop
            if (y > 450) tray.style.display = 'block';
            else tray.style.display = 'none';
        });

        let scrollTimer;
        tray.onclick = function () {
            cancelAnimationFrame(scrollTimer);
            scrollTimer = requestAnimationFrame(function scroll() {
                const top = document.body.scrollTop || document.documentElement.scrollTop;
                document.body.scrollTop = document.documentElement.scrollTop = parseInt(top / 1.2);
                if (top > 0) scrollTimer = requestAnimationFrame(scroll);
                else cancelAnimationFrame(scrollTimer);
            });
        }
    }

}