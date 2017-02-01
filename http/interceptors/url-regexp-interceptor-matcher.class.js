/**
 * Concrete implementation for http interceptor matchers.
 * This implementation uses regex to check mapping paths vs request url.
 */
var URLRegExpInterceptorMatcher = (function () {
    function URLRegExpInterceptorMatcher() {
    }
    URLRegExpInterceptorMatcher.prototype.matches = function (options, mapping) {
        return mapping.paths.filter(function (path) {
            path = path.replace(/\*\*/gi, '<>')
                .replace(/\*/gi, '[a-zA-Z0-9\\-_]+')
                .replace(/<>/gi, '[a-zA-Z0-9\\-_\/]*');
            if (path) {
                path += '(\\?{1}.*)?$';
                return new RegExp(path).test(options.url);
            }
            return false;
        }).length > 0;
    };
    return URLRegExpInterceptorMatcher;
}());
export { URLRegExpInterceptorMatcher };
//# sourceMappingURL=url-regexp-interceptor-matcher.class.js.map