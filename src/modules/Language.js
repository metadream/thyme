export const Language = {

    'zh-CN': {
        INPUT_INCORRECT: '光标处数据不能为空或输入格式有误',
    },
    'en': {
        INPUT_INCORRECT: 'The data at the cursor cannot be empty or in the wrong format',
    },

    i18n(key) {
        const lang = this[navigator.language] ? navigator.language : 'en';
        return this[lang][key];
    }

}