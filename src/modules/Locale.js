export const Locale = {

    'zh-CN': {
        OK: '确定',
        YES: '确定',
        NO: '取消',
        MON: '一',
        TUE: '二',
        WED: '三',
        THU: '四',
        FRI: '五',
        SAT: '六',
        SUN: '日',

        UPLOAD_BUTTON_TEXT: '上传附件',
        NO_FILES_SELECTED: '未选择任何文件',
        MAX_ALLOWED_COUNT: '单次最多允许上传文件数：',
        MAX_ALLOWED_SIZE: '单文件大小不允许超过',
        DELETE_FILE_CONFIRMATION: '确定删除该附件吗？',
        DELETE_FILE_SUCCESS: '删除成功',

        INCORRECT_INPUT: '光标处数据不能为空或输入格式有误',
        UNSUPPORTED_RESPONSE: '不支持的响应类型',
        NETWORK_ERROR: '网络连接异常'
    },
    'en': {
        OK: 'OK',
        YES: 'YES',
        NO: 'NO',
        MON: 'MON',
        TUE: 'TUE',
        WED: 'WED',
        THU: 'THU',
        FRI: 'FRI',
        SAT: 'SAT',
        SUN: 'SUN',

        UPLOAD_BUTTON_TEXT: 'UPLOAD',
        NO_FILES_SELECTED: 'No files selected',
        MAX_ALLOWED_COUNT: 'The maximum number of upload files allowed is: ',
        MAX_ALLOWED_SIZE: 'Single file size is not allowed to exceed ',
        DELETE_FILE_CONFIRMATION: 'Are you sure to delete the attachment?',
        DELETE_FILE_SUCCESS: 'Delete succeeded',

        INCORRECT_INPUT: 'The data at the cursor cannot be empty or in the wrong format',
        UNSUPPORTED_RESPONSE: 'Unsupported response type',
        NETWORK_ERROR: 'Network connection error'
    },

    get(key) {
        const lang = this[navigator.language] ? navigator.language : 'en';
        return this[lang][key];
    }

}