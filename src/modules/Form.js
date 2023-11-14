import { Locale } from './Locale.js';

/**
 * 表单验证和获取
 */
export class Form {

    /**
     * 将带有name属性的元素数据解析为JSON对象
     * @param scope 获取范围
     */
    static getJsonObject(scope) {
        scope = typeof scope === 'string' ? document.querySelector(scope) : scope;
        const fields = scope.querySelectorAll('[name]:not([name=""])');
        const data = {};

        for (const field of fields) {
            let value = '';
            if ((field.type == 'checkbox' || field.type == 'radio') && !field.checked) {
                continue;
            }
            if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA' || field.tagName.startsWith('QUICK-')) {
                if (typeof field.value === 'string') {
                    field.value = field.value.trim();
                }
                value = field.value;
            }
            else if (field.tagName === 'SELECT') {
                value = field.options[field.selectedIndex].value;
            }
            else if (field.isContentEditable) {
                value = field.innerHTML = field.innerHTML.trim();
            }
            else {
                value = field.textContent = field.textContent.trim();
            }

            // 数据校验
            const required = field.attr('required')?.asBoolean();
            if (!this.#validate(value, required, field.dataset.rule)) {
                field.focus();
                Quick.error(field.dataset.message || Locale.get('INCORRECT_INPUT'));
                return;
            }

            // 设置返回对象的键值
            const name = field.attr('name');
            if (data[name]) {
                data[name] += ',' + value;
            } else {
                data[name] = value;
            }
        }
        return data;
    }

    /**
     * 将带name属性的一组元素解析为JSON数组
     * @param scopes 数组内每组对象的获取范围
     */
    static getJsonArray(scopes) {
        const array = [];
        scopes = typeof scopes === 'string' ? document.querySelectorAll(scopes) : scopes;

        for (const scope of scopes) {
            const obj = this.getJsonObject(scope);
            if (!obj) return; // !important

            if (Object.keys(obj).length !== 0) {
                array.push(obj);
            }
        }
        return array;
    }

    /**
     * 数据校验
     * @param value 数据值
     * @param required 是否必填
     * @param rule 数据规则
     */
    static #validate(value, required, rule) {
        if (required && !value) return false; // 必填但空值，校验失败
        if (!rule) return true; // 无规则，视为成功
        if (!value) return true; // 空值无需校验，视为成功

        // 有规则但格式不匹配，视为成功（相当于无规则）
        const matches = rule.match(/^(?<type>[a-z0-9]+)(\((?<min>\-?\d+)(,\s*(?<max>\-?\d+))?\))?$/);
        if (!matches) return true;

        // 有规则但找不到预设的校验方法，视为成功（相当于无规则）
        const groups = matches.groups;
        const fn = this.#validator[groups.type];
        if (!fn) return true;

        // 由预设的校验方法判断
        return fn(value, groups.min, groups.max);
    }

    /**
     * 常用类型验证器
     */
    static #validator = {
        // 字符串格式
        varchar: function (value, min, max) {
            if (!max) { max = min, min = 0; }
            const pattern = new RegExp('^.{' + min + ',' + max + '}$');
            return pattern.test(value);
        },

        // 整数格式：m为整数位，允许负数
        integer: function (value, m) {
            const pattern = new RegExp('^\\-?\\d{0,' + m + '}$');
            return pattern.test(value);
        },

        // 数字格式：m为整数位，d为小数位，允许负数
        decimal: function (value, m, d) {
            const pattern = new RegExp('^\\-?\\d{0,' + m + '}(\\.\\d{0,' + d + '})?$');
            return pattern.test(value);
        },

        // 日期格式：yyyy-MM-dd
        date: function (value) {
            const m = value.match(/^(\d{4})\-(\d{2})\-(\d{2})$/);
            if (m) {
                const d = new Date(m[1], m[2] - 1, m[3]);
                return d.getFullYear() == m[1] && d.getMonth() == m[2] - 1 && d.getDate() == m[3];
            }
            return false;
        },

        // 邮件格式
        email: function (value) {
            return /^\w+([_\-+.]\w+)*@\w+([-.]\w+)*\.([a-zA-Z]{2,})$/.test(value);
        },

        // 网址格式
        url: function (value) {
            return /^$|^(https?\:\/\/)?([a-zA-Z0-9\-]+\.){1,}[a-zA-Z]{2,6}(\/[\S]*)?$/.test(value);
        }
    }

}