import styles from '../styles/waterfall.css';
import { parseInteger } from '../modules/Util.js';
import { Component } from './Component.js';

/**
 * 瀑布流布局组件
 * @example <th-waterfall column="3" columnSpacing="10">
 *            <div>1</div>
 *            <div>2</div>
 *            <div>3</div>
 *          </th-waterfall>
 */
export class Waterfall extends Component {

    static styles = styles;
    static template = `<div><slot></slot></div>`;

    #columnSize;
    #columnSpacing;
    #columnWidth;
    #columnElements;
    #assignedElements;

    onConnected() {
        this.#columnSize = parseInteger(this.attr('column')) || 3;
        this.#columnSpacing = parseInteger(this.attr('spacing')) || 10;
        this.#columnElements = new Array(this.#columnSize);
    }

    onAssigned(slot) {
        this.#assignedElements = slot.assignedElements();
        this.#render();
        addEventListener('resize', () => this.#render());
    }

    #render() {
        this.#columnElements.fill(0);
        this.#columnWidth = (this.offsetWidth - this.#columnSpacing * (this.#columnSize - 1)) / this.#columnSize;

        for (const el of this.#assignedElements) {
            const column = this.#findLowestColumn();
            el.style.left = column.x + 'px';
            el.style.top = column.y + 'px';
            el.style.width = this.#columnWidth + 'px';

            this.#columnElements[column.i] = column.y + el.offsetHeight;
            this.style.height = Math.max.apply(null, this.#columnElements) + 'px';
        }
    }

    #findLowestColumn() {
        const min = Math.min.apply(null, this.#columnElements);
        const index = this.#columnElements.indexOf(min);
        return {
            i: index,
            x: index > 0 ? index * (this.#columnWidth + this.#columnSpacing) : 0,
            y: min > 0 ? min + this.#columnSpacing : 0
        }
    }

}