/**
 * 本地化
 * @example Locale.get(key)
 */
export const Locale = {

    'zh-CN': {
        OK: '确定', YES: '确定', NO: '取消',
        MON: '一', TUE: '二', WED: '三', THU: '四', FRI: '五', SAT: '六', SUN: '日',

        UPLOAD: '上传附件',
        MAX_ALLOWED_FILES: '最多允许上传 {{maxFiles}} 个文件',
        MAX_ALLOWED_SIZE: '单文件大小不允许超过 {{maxSize}}',
        DELETE_PROMPT: '确定删除吗？',
        DELETE_SUCCESS: '删除成功',

        UNSUPPORTED_RESPONSE: '不支持的响应类型',
        NETWORK_ERROR: '网络连接异常'
    },

    'en': {
        OK: 'OK', YES: 'YES', NO: 'NO',
        MON: 'MON', TUE: 'TUE', WED: 'WED', THU: 'THU', FRI: 'FRI', SAT: 'SAT', SUN: 'SUN',

        UPLOAD: 'UPLOAD',
        MAX_ALLOWED_FILES: 'Uploaded files is not allowed to exceed {{maxFiles}}',
        MAX_ALLOWED_SIZE: 'Single file size is not allowed to exceed {{maxSize}}',
        DELETE_PROMPT: 'Sure you want to delete?',
        DELETE_SUCCESS: 'Delete succeeded',

        UNSUPPORTED_RESPONSE: 'Unsupported response type',
        NETWORK_ERROR: 'Network connection error'
    },

    get(key, replacement) {
        let lang = globalThis.Thyme?.locale || navigator.language;
        lang = this[lang] ? lang : 'en';
        let text = this[lang][key];
        if (replacement) {
            for (const [k, v] of Object.entries(replacement)) {
                text = text.replace(`{{${k}}}`, v);
            }
        }
        return text;
    }

}