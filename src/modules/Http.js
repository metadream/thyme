import { Locale } from './Locale.js';

/**
 * HTTP请求方法集
 * @example Thyme.http.get/post/put/patch/delete
 */
export class Http {

    static {
        ['get', 'post', 'put', 'patch', 'delete'].forEach(method => {
            this[method] = (url, data) => this.#request(method.toUpperCase(), url, data);
        });
    }

    static async #request(method, url, data) {
        const options = { method, headers: {}, body: data };

        if (!(data instanceof FormData)) {
            options.headers['content-type'] = 'application/json; charset=utf-8';
            options.body = JSON.stringify(data);
        }
        try {
            const response = await fetch(url, options);
            const contentType = response.headers.get('content-type');
            let result = null;

            if (!contentType || contentType.includes('text/plain')) {
                result = await response.text();
            }
            else if (contentType.includes('application/json')) {
                result = await response.json();
            } else {
                throw new Error(Locale.get('UNSUPPORTED_RESPONSE'));
            }
            if (!response.ok) {
                throw new Error(result.message);
            }
            return result;
        } catch (e) {
            Thyme.error(e.message || Locale.get('NETWORK_ERROR'));
            throw e;
        }
    }

}