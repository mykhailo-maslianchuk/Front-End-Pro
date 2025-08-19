'use strict';

class URLParser {
    constructor(url) {
        this._url = String(url);
    }

    _afterProtocol() {
        const parts = this._url.split('://');
        return parts.length > 1 ? parts[1] : this._url;
    }

    get protocol() {
        const i = this._url.indexOf('://');
        if (i === -1) return '';
        return this._url.slice(0, i) + ':';
    }

    get hostname() {
        const afterProtocol = this._afterProtocol();       // "example.com/..."
        const slash = afterProtocol.indexOf('/');
        return slash === -1 ? afterProtocol : afterProtocol.slice(0, slash);
    }

    get path() {
        const afterProtocol = this._afterProtocol();       // "example.com/products/item?..."
        const slash = afterProtocol.indexOf('/');
        if (slash === -1) return '/';
        const afterHost = afterProtocol.slice(slash);      // "/products/item?search=..."
        const q = afterHost.indexOf('?');
        return q === -1 ? (afterHost || '/') : (afterHost.slice(0, q) || '/');
    }

    get queryParams() {
        const afterProtocol = this._afterProtocol();
        const qIndex = afterProtocol.indexOf('?');
        if (qIndex === -1) return {};

        const queryString = afterProtocol.slice(qIndex + 1);
        if (!queryString) return {};

        const pairs = queryString.split('&');
        const params = {};

        for (const pair of pairs) {
            if (!pair) continue;
            const [rawKey, rawValue = ''] = pair.split('=');
            const key = decodeURIComponent(rawKey || '');
            const value = decodeURIComponent(rawValue || '');
            params[key] = value; // повтор ключа перезапише значення — ок для простої версії
        }

        return params;
    }
}

const parser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);
console.log(parser.queryParams);
