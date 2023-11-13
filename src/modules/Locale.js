export const Locale = {

    'zh-CN': {
        OK: '确定', YES: '确定', NO: '取消',
        MON: '一', TUE: '二', WED: '三', THU: '四', FRI: '五', SAT: '六', SUN: '日',
        EMPTY_OPTION: '<空>',

        UPLOAD: '上传附件',
        NO_FILES_SELECTED: '未选择任何文件',
        MAX_ALLOWED_FILES: '最多允许上传 {{maxFiles}} 个文件',
        MAX_ALLOWED_SIZE: '单文件大小不允许超过 {{maxSize}}',
        DELETE_PROMPT: '确定删除吗？',
        DELETE_SUCCESS: '删除成功',

        INCORRECT_INPUT: '光标处数据不能为空或输入格式有误',
        UNSUPPORTED_RESPONSE: '不支持的响应类型',
        NETWORK_ERROR: '网络连接异常'
    },
    'en': {
        OK: 'OK', YES: 'YES', NO: 'NO',
        MON: 'MON', TUE: 'TUE', WED: 'WED', THU: 'THU', FRI: 'FRI', SAT: 'SAT', SUN: 'SUN',
        EMPTY_OPTION: '<Empty>',

        UPLOAD: 'UPLOAD',
        NO_FILES_SELECTED: 'No files selected',
        MAX_ALLOWED_FILES: 'The maximum number of upload files allowed is {{maxFiles}}',
        MAX_ALLOWED_SIZE: 'Single file size is not allowed to exceed {{maxSize}}',
        DELETE_PROMPT: 'Sure to delete?',
        DELETE_SUCCESS: 'Delete succeeded',

        INCORRECT_INPUT: 'The data at the cursor cannot be empty or in the wrong format',
        UNSUPPORTED_RESPONSE: 'Unsupported response type',
        NETWORK_ERROR: 'Network connection error'
    },

    get(key, replacement) {
        const lang = this[navigator.language] ? navigator.language : 'en';
        let text = this[lang][key];
        if (replacement) {
            for (const [k, v] of Object.entries(replacement)) {
                text = text.replace(`{{${k}}}`, v);
            }
        }
        return text;
    }

}