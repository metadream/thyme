import styles from '../styles/calendar.css';
import calendarIcon from "../icons/calendar.svg";
import prevYearIcon from "../icons/arrows-left.svg";
import nextYearIcon from "../icons/arrows-right.svg";
import prevMonthIcon from "../icons/arrow-left.svg";
import nextMonthIcon from "../icons/arrow-right.svg";
import { createElement, formatDate } from '../modules/Util.js';
import { Locale } from '../modules/Locale.js';
import { Field } from './Field.js';

/**
 * 日历组件
 * @example <th-calendar label="" name="" value="" required></th-calendar>
 */
export class Calendar extends Field {

    #template = '<div><div class="overlay"></div><div class="calendar"></div></div>';
    #wrapper;
    #calendar;
    #initialDate;
    #gridData;

    onConnected() {
        super.onConnected();
        this.addStyle(styles);

        this.readonly = true;
        this.icon = calendarIcon;
        this.icon.on('click', () => this.#pulldown());
        this.query('.field-body').on('click', () => this.#pulldown());
    }

    #pulldown() {
        // 创建外包装
        this.#wrapper = createElement(this.#template);
        this.shadowRoot.append(this.#wrapper);

        // 遮罩关闭事件
        const overlay = this.query('.overlay');
        overlay.on('mousedown', () => this.#wrapper.remove());

        // 日历面板事件
        this.#calendar = this.query('.calendar');
        this.#bindEvents();

        // 依附到文本框
        this.#calendar.attachTo(this._native);

        // 根据文本框日期初始化渲染
        this.#initialDate = new Date(this._native.value);
        this.#initialDate = isNaN(this.#initialDate.getTime()) ? new Date() : this.#initialDate;
        this.#render(this.#initialDate);
    }

    // 绑定事件
    #bindEvents() {
        // 点击日期选择器
        this.#calendar.on('click', e => {
            const $target = e.target;

            // 点击日历格中的日期
            if ($target.parentNode.tagName === 'TD') {
                const date = new Date(this.#gridData.year, this.#gridData.month - 1, $target.dataset.index);
                this.value = formatDate(date, 'yyyy-MM-dd');
                this.#wrapper.remove();
            }

            // 点击标题回到初始日期
            const $currText = this.#calendar.query('.calendar-title');
            if ($currText.contains($target)) {
                return this.#render(this.#initialDate);
            }

            // 点击上下月/上下年按钮
            const svgIcons = this.#calendar.queryAll('svg.icon');
            const $prevYear = svgIcons[0];
            const $prevMonth = svgIcons[1];
            const $nextMonth = svgIcons[2];
            const $nextYear = svgIcons[3];
            const currDate = new Date($currText.innerHTML);

            if ($prevYear.contains($target)) {
                currDate.setFullYear(currDate.getFullYear() - 1);
            } else if ($prevMonth.contains($target)) {
                currDate.setMonth(currDate.getMonth() - 1);
            } else if ($nextMonth.contains($target)) {
                currDate.setMonth(currDate.getMonth() + 1);
            } else if ($nextYear.contains($target)) {
                currDate.setFullYear(currDate.getFullYear() + 1);
            } else {
                return;
            }
            this.#render(currDate);
        });
    }

    // 渲染日历
    #render(date) {
        const data = this.#gridData = this.#getGridData(date);
        let html = `
            <div class="calendar-header">
              ${prevYearIcon}
              ${prevMonthIcon}
              <span class="calendar-title">${data.year}-${data.month.toString().padStart(2, 0)}</span>
              ${nextMonthIcon}
              ${nextYearIcon}
            </div>
            <div class="calendar-body">
              <table>
                <thead><tr>
                  <th>${Locale.get('MON')}</th>
                  <th>${Locale.get('TUE')}</th>
                  <th>${Locale.get('WED')}</th>
                  <th>${Locale.get('THU')}</th>
                  <th>${Locale.get('FRI')}</th>
                  <th>${Locale.get('SAT')}</th>
                  <th>${Locale.get('SUN')}</th>
                </tr></thead>
                <tbody>
        `;

        const today = new Date();
        for (let i = 0; i < data.days.length; i++) {
            if (i % 7 === 0) html += '<tr>';

            const cellDay = data.days[i];
            let clazz = '';
            if (data.month != cellDay.month) clazz = 'minor';
            if (data.year == this.#initialDate.getFullYear() && cellDay.month == this.#initialDate.getMonth() + 1 && cellDay.day == this.#initialDate.getDate()) clazz = 'curr';
            if (data.year == today.getFullYear() && cellDay.month == today.getMonth() + 1 && cellDay.day == today.getDate()) clazz = 'today';
            html += '<td><div data-index="' + cellDay.index + '" class="' + clazz + '">' + cellDay.day + '</div></td>';

            if (i % 7 === 6) html += '</tr>';
        }

        html += '</tbody></table></div>';
        this.#calendar.innerHTML = html;
    }

    // 获取指定日期的日历格数据
    #getGridData(date = new Date()) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        // 当前月的第一天
        const firstDay = new Date(year, month - 1, 1);
        // 当前月的最后一天
        const lastDay = new Date(year, month, 0).getDate();
        // 当前月第一天是星期几（用于判断第一天所在列）
        let firstWeekDay = firstDay.getDay();
        if (firstWeekDay === 0) firstWeekDay = 7;
        const weekdayIndex = firstWeekDay - 1;
        // 上个月的最后一天（用于填充当前月第一天之前的日期）
        const lastDayOfLastMonth = (new Date(year, month - 1, 0)).getDate();

        const days = [];
        for (let i = 0; i < 7 * 6; i++) {
            const index = i + 1 - weekdayIndex;
            let day = index;
            let realMonth = month;

            if (index <= 0) { //上一月
                realMonth = month - 1;
                day = lastDayOfLastMonth + index;
            } else if (index > lastDay) { //下一月
                realMonth = month + 1;
                day = day - lastDay;
            }
            if (realMonth === 0) realMonth = 12;
            if (realMonth > 12) realMonth = 1;
            days.push({ month: realMonth, day, index });
        }
        return { year, month, days };
    }

}