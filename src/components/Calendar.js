import styles from '../styles/calendar.css';
import calendarIcon from "../icons/calendar.svg";
import prevYearIcon from "../icons/arrows-left.svg";
import nextYearIcon from "../icons/arrows-right.svg";
import prevMonthIcon from "../icons/arrow-left.svg";
import nextMonthIcon from "../icons/arrow-right.svg";
import { createElement, createStyles, getScrollTop, formatDate } from '../modules/Util.js';
import { Locale } from '../modules/Locale.js';
import { Field } from './Field.js';

/**
 * 日历组件
 * @example
 */
export class Calendar extends Field {

    #template = '<div><div class="overlay"></div><div class="calendar"></div></div>';
    #calendar;
    #initDate;
    #calData;
    #wrapper;

    onConnected() {
        super.onConnected();
        this.shadowRoot.append(createStyles(styles));
        this.readOnly = true;

        const icon = this.createIcon(calendarIcon);
        icon.on('click', () => {
            this.#wrapper = createElement(this.#template);
            this.shadowRoot.append(this.#wrapper);

            const overlay = this.#wrapper.querySelector('.overlay');
            overlay.on('click', () => this.#wrapper.remove());

            this.#calendar = this.#wrapper.querySelector('.calendar');
            this.#bindEvents();
            this.attach(this.query('input'));
        })
    }

    // 依附到某个元素
    attach(target) {
        const pos = target.getBoundingClientRect();
        this.#calendar.style.top = pos.y + pos.height + getScrollTop() + 1 + 'px';
        this.#calendar.style.left = pos.x + 'px';

        this.#initDate = new Date(target.value);
        this.#initDate = isNaN(this.#initDate.getTime()) ? new Date() : this.#initDate;
        this.#render(this.#initDate);
    }

    // 绑定事件
    #bindEvents() {
        // 点击日期选择器
        this.#calendar.on('click', e => {
            const $target = e.target;

            // 点击日历格中的日期
            if ($target.parentNode.tagName === 'TD') {
                const date = new Date(this.#calData.year, this.#calData.month - 1, $target.dataset.index);
                this.value = formatDate(date, 'yyyy-MM-dd');
                this.#wrapper.remove();
            }

            // 点击标题回到初始日期
            const $currText = this.#calendar.querySelector('.calendar-title');
            if ($currText.contains($target)) {
                return this.#render(this.#initDate);
            }

            // 点击上下月/上下年按钮
            const svgIcons = this.#calendar.querySelectorAll('svg.icon');
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
        const data = this.#calData = this.#getCalendarData(date);
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
            if (data.year == this.#initDate.getFullYear() && cellDay.month == this.#initDate.getMonth() + 1 && cellDay.day == this.#initDate.getDate()) clazz = 'curr';
            if (data.year == today.getFullYear() && cellDay.month == today.getMonth() + 1 && cellDay.day == today.getDate()) clazz = 'today';
            html += '<td><div data-index="' + cellDay.index + '" class="' + clazz + '">' + cellDay.day + '</div></td>';

            if (i % 7 === 6) html += '</tr>';
        }

        html += '</tbody></table></div>';
        this.#calendar.innerHTML = html;
    }

    // 获取指定日期的日历格数据
    #getCalendarData(date = new Date()) {
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