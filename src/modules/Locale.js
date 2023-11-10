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
        INCORRECT_INPUT: 'The data at the cursor cannot be empty or in the wrong format',
        UNSUPPORTED_RESPONSE: 'Unsupported response type',
        NETWORK_ERROR: 'Network connection error'
    },

    get(key) {
        const lang = this[navigator.language] ? navigator.language : 'en';
        return this[lang][key];
    }

}