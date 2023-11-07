/**
 * 表单验证和获取
 */
export const Form = {
    /**
     * 将带有name属性的元素数据解析为JSON对象
     * @param scope 获取范围
     */
    getJsonObject(scope) {
        scope = typeof scope === 'string' ? document.querySelector(scope) : scope;
        const fields = scope.querySelectorAll('[name]:not([name=""])');
        const data = {};

        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            if ((field.type == 'checkbox' || field.type == 'radio') && !field.checked) continue;

            // 去除输入值空格
            let value = '';
            if (field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') {
                value = field.value = field.value.trim();
            } else
                if (field.tagName === 'SELECT') {
                    value = field.options[field.selectedIndex].value;
                } else
                    if (field.isContentEditable) {
                        value = field.innerHTML = field.innerHTML.trim();
                    } else {
                        value = field.textContent = field.textContent.trim();
                    }

            // 数据校验
            let required = field.getAttribute('required');
            required = (required === null || required === 'false') ? false : true;
            if (!this.validate(value, required, field.dataset.rule)) {
                field.focus();
                throw new Error(field.dataset.message);
            }

            // 设置返回对象的键值
            const name = field.getAttribute('name');
            if (data[name]) {
                data[name] += ',' + value;
            } else {
                data[name] = value;
            }
        }
        return data;
    },

    /**
     * 将带name属性的一组元素解析为JSON数组
     * @param scopes 数组内每组对象的获取范围
     */
    getJsonArray(scopes) {
        const array = [];
        scopes = typeof scopes === 'string' ? document.querySelectorAll(scopes) : scopes;

        for (let i = 0; i < scopes.length; i++) {
            const obj = this.getJsonObject(scopes[i]);
            if (!obj) return; // !important
            if (Object.keys(obj).length !== 0) {
                array.push(obj);
            }
        }
        return array;
    },

    /**
     * 数据校验
     * @param value 数据值
     * @param required 是否必填
     * @param rule 数据规则
     */
    validate(value, required, rule) {
        if (required && !value) return false; // 必填但空值，校验失败
        if (!rule) return true; // 无规则，视为成功
        if (!value) return true; // 空值无需校验，视为成功

        const matches = rule.match(/^(?<type>[a-z0-9]+)(\((?<min>\-?\d+)(,\s*(?<max>\-?\d+))?\))?$/);
        if (!matches) return true; // 有规则但格式不匹配，视为成功（相当于无规则）

        const groups = matches.groups;
        const fn = this.validator[groups.type];
        if (!fn) return true; // 有规则但找不到预设的校验方法，视为成功（相当于无规则）

        return fn(value, groups.min, groups.max); // 由预设的校验方法判断
    },

    /**
     * 常用类型验证器
     */
    validator: {
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
        }
    }
}