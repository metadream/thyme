/**
 * 表单验证和获取
 */
export class Form {

    static email = '^\w+([_\-+\.]\w+)*@\w+([\-\.]\w+)*\.([a-zA-Z]{2,})$';
    static url = '^https?:\/\/([\w\-]+\.){1,}[a-zA-Z]{2,6}(\/[\S]*)?$';

    /**
     * 将带有name属性的元素数据解析为JSON对象
     * @param scope 获取范围
     */
    static getJsonObject(scope) {
        scope = typeof scope === 'string' ? document.querySelector(scope) : scope;
        const fields = scope.queryAll('[name]:not([name=""])');
        const data = {};

        for (const field of fields) {
            let { type, tagName, name, value, checked } = field;
            name = name || field.attr('name');
            if ((type === 'checkbox' || type === 'radio') && !checked) continue;

            if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName.startsWith('QUICK-')) {
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