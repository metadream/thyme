import { Component } from './Component.js';

/**
 * 公式组件
 * Depends on http://asciimath.org
 * <script src="https://cdn.unpkg.net/assets/lib/asciimath.js"></script>
 * @example <th-formula>E=mc^2</th-formula>
            <th-formula>f(t)=(a_0)/2 + sum_(n=1)^ooa_ncos((npit)/L)+sum_(n=1)^oo b_nsin((npit)/L)</th-formula>
            <th-formula>\oint_C \vec{B}\circ \d\vec{l} = \mu_0 (I_{enc} + \varepsilon_0 \frac{\d}{\d t} \int_S \vec{E} \circ
            \hat{n} \d a)</th-formula>
            <th-formula display="block">x = (-b +- \sqrt(b^2 – 4ac))/(2a)</th-formula>
 */
export class Formula extends Component {

    onConnected() {
        new MutationObserver(() => {
            const text = this.textContent;
            const displayMode = this.attr('display') === 'block';
            try {
                this.shadowRoot.append(parseMath(text, displayMode));
            } catch (_) {
                this.shadowRoot.innerHTML = '<math><merror><mtext>' + text + '</mtext></merror></math>';
            }
        }).observe(this, {
            characterData: true, childList: true, attributes: true
        });
    }

}