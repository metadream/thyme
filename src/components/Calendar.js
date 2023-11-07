import calendarStyles from '../styles/calendar.css';
import { formatDate } from '../utility/Util.js';
import { Component } from './Component.js';

export class Calendar extends Component {

    styles = calendarStyles;
    template = `
        <div>
            <div class="quick-overlay" style="background:none"></div>
            <div class="quick-calendar"></div>
        </div>
    `;

    lang = {
        zh: { MON: '一', TUE: '二', WED: '三', THU: '四', FRI: '五', SAT: '六', SUN: '日' },
        en: { MON: 'MON', TUE: 'TUE', WED: 'WED', THU: 'THU', FRI: 'FRI', SAT: 'SAT', SUN: 'SUN' }
    };

    onConnected() {
        this.$calendar = this.getElement('.quick-calendar');
        this.$overlay = this.getElement('.quick-overlay');
        this.$overlay.on('click', () => this.remove());
        this.i18n = this.lang[this.getAttribute('lang') || 'zh'];
        this.bindEventListeners();
    }

    attach(target) {
        const pos = target.getBoundingClientRect();
        this.$calendar.style.top = pos.y + pos.height + 1 + 'px';
        this.$calendar.style.left = pos.x + 'px';

        this.initDate = new Date(target.value);
        this.initDate = isNaN(this.initDate.getTime()) ? new Date() : this.initDate;
        this.render(this.initDate);
    }

    bindEventListeners() {
        // 点击日期选择器
        this.$calendar.on('click', e => {
            const $target = e.target;

            // 点击日历格中的日期
            if ($target.parentNode.tagName === 'TD') {
                const date = new Date(this.calData.year, this.calData.month - 1, $target.dataset.index);
                this.dispatchEvent(new CustomEvent('selected', { detail: formatDate(date, 'yyyy-MM-dd') }));
            }

            // 点击标题回到初始日期
            const $currText = this.getElement('.quick-calendar-text');
            if ($currText.contains($target)) {
                return this.render(this.initDate);
            }

            // 点击上下月/上下年按钮
            const $prevYear = this.getElement('.prev-year');
            const $prevMonth = this.getElement('.prev-month');
            const $nextMonth = this.getElement('.next-month');
            const $nextYear = this.getElement('.next-year');
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
            this.render(currDate);
        });
    }

    // 渲染日历
    render(date) {
        const data = this.calData = this.getCalendarData(date);
        let html = `
            <div class="quick-calendar-header">
              <svg class="quick-calendar-btn prev-year" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.984 7l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 7l.005.006L7.984 7zm0-4l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 3l.005.006L7.984 3z" transform="rotate(-90 7.949 7.822)"></path></svg>
              <svg class="quick-calendar-btn prev-month" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.978 11.997l-.005.006L2.3 6.33l.83-.831 4.848 4.848L12.826 5.5l.83.83-5.673 5.673-.005-.006z" transform="rotate(90 7.978 8.751)"></path></svg>
              <span class="quick-calendar-text">${data.year}-${data.month.toString().padStart(2, 0)}</span>
              <svg class="quick-calendar-btn next-month" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.978 11.498l-.005.005L2.3 5.831 3.13 5l4.848 4.848L12.826 5l.83.831-5.673 5.672-.005-.005z" transform="rotate(-90 7.978 8.252)"></path></svg>
              <svg class="quick-calendar-btn next-year" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.984 7l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 7l.005.006L7.984 7zm0-4l4.75 4.762-.832.817-3.924-3.924-3.99 3.99-.825-.836L7.973 3l.005.006L7.984 3z" transform="rotate(90 7.949 8.122)"></path></svg>
            </div>
            <div class="quick-calendar-body">
              <table>
                <thead><tr><th>${this.i18n.MON}</th><th>${this.i18n.TUE}</th><th>${this.i18n.WED}</th><th>${this.i18n.THU}</th><th>${this.i18n.FRI}</th><th>${this.i18n.SAT}</th><th>${this.i18n.SUN}</th></tr></thead>
                <tbody>
        `;

        const today = new Date();
        for (let i = 0; i < data.days.length; i++) {
            if (i % 7 === 0) html += '<tr>';

            const cellDay = data.days[i];
            let clazz = '';
            if (data.month != cellDay.month) clazz = 'minor';
            if (data.year == this.initDate.getFullYear() && cellDay.month == this.initDate.getMonth() + 1 && cellDay.day == this.initDate.getDate()) clazz = 'curr';
            if (data.year == today.getFullYear() && cellDay.month == today.getMonth() + 1 && cellDay.day == today.getDate()) clazz = 'today';
            html += '<td><div data-index="' + cellDay.index + '" class="' + clazz + '">' + cellDay.day + '</div></td>';

            if (i % 7 === 6) html += '</tr>';
        }

        html += '</tbody></table></div>';
        this.$calendar.innerHTML = html;
    }

    // 获取指定日期的日历格数据
    getCalendarData(date = new Date()) {
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