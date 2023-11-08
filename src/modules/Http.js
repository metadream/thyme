import { Language } from './Language.js';

/**
 * HTTP请求方法集
 */
export const Http = {

    get(url) {
        return this.request('GET', url);
    },

    post(url, data) {
        return this.request('POST', url, data);
    },

    put(url, data) {
        return this.request('PUT', url, data);
    },

    patch(url, data) {
        return this.request('PATCH', url, data);
    },

    delete(url, data) {
        return this.request('DELETE', url, data);
    },

    async request(method, url, data) {
        const options = { method, headers: {}, body: data };

        if (Object.prototype.toString.call(data) != '[object FormData]') {
            options.headers['content-type'] = 'application/json; charset=utf-8';
            options.body = JSON.stringify(data);
        }
        try {
            const response = await fetch(url, options);
            const contentType = response.headers.get('content-type');
            let result = null;

            if (!contentType || contentType.includes('text/plain')) {
                result = await response.text();
            } else
                if (contentType.includes('application/json')) {
                    result = await response.json();
                } else {
                    throw new Error(Language.i18n('UNSUPPORTED_RESPONSE'));
                }

            if (!response.ok) {
                throw new Error(result.message);
            }
            return result;
        } catch (e) {
            Quick.error(e.message || Language.i18n('NETWORK_ERROR'));
        }
    }

}