/**
 * 表单验证和获取
 * @example Thyme.form.getJsonObject/getJsonArray
 */
export class Form {

    /**
     * 将data值设置到指定范围内带name的文本域
     * @param scope 赋值范围
     * @param data 数据对象
     */
    static setJsonObject(scope, data) {
        const fields = scope.querySelectorAll('[name]:not([name=""])');
        for (const field of fields) {
            const { type, name } = field;
            if (type === 'checkbox') {
                field.checked = data[name];
            } else {
                field.value = data[name] || '';
            }
        }
    }

    /**
     * 将带有name属性的元素数据解析为JSON对象
     * @param scope 获取范围
     */
    static getJsonObject(scope) {
        scope = typeof scope === 'string' ? document.querySelector(scope) : scope;
        const fields = scope.querySelectorAll('[name]:not([name=""])');
        const data = {};

        for (const field of fields) {
            let { type, tagName, name, value, checked } = field;
            name = name || field.attr('name');
            if ((type === 'checkbox' || type === 'radio') && !checked) continue;

            if (tagName === 'TH-UPLOAD') {
                value = field.entries;
            }
            else if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName.startsWith('TH-')) {
                if (typeof value === 'string') {
                    value = field.value = value.trim();
                }
            }
            else if (tagName === 'SELECT') {
                value = field.options[field.selectedIndex].value;
            }
            else if (field.isContentEditable) {
                value = field.innerHTML = field.innerHTML.trim();
            }
            else {
                value = field.textContent = field.textContent.trim();
            }

            if (field.reportValidity && !field.reportValidity()) {
                return;
            }
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
        scopes = typeof scopes === 'string' ? document.querySelectorAll(scopes) : scopes;
        const array = [];

        for (const scope of scopes) {
            const obj = this.getJsonObject(scope);
            if (!obj) return; // !important

            if (Object.keys(obj).length) {
                array.push(obj);
            }
        }
        return array;
    }

}