import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var RESTService = (function () {
    function RESTService(http, config) {
        this.http = http;
        this._base = config.baseUrl.replace(/\/$/, '');
        this._path = config.path.replace(/^\//, '');
        this._baseHeaders = config.baseHeaders ? config.baseHeaders : new Headers();
        this._dynamicHeaders = config.dynamicHeaders ? config.dynamicHeaders : function () { return new Headers(); };
        this.transform = config.transform ? config.transform : function (response) { return response.json(); };
    }
    RESTService.prototype.query = function (query, transform) {
        var _this = this;
        var request = this.http.get(this.buildUrl(undefined, query), this.buildRequestOptions());
        return request.map(function (res) {
            if (transform) {
                return transform(res);
            }
            return _this.transform(res);
        }).catch(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        });
    };
    RESTService.prototype.get = function (id, transform) {
        var _this = this;
        var request = this.http.get(this.buildUrl(id), this.buildRequestOptions());
        return request.map(function (res) {
            if (transform) {
                return transform(res);
            }
            return _this.transform(res);
        }).catch(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        });
    };
    RESTService.prototype.create = function (obj, transform) {
        var _this = this;
        var requestOptions = this.buildRequestOptions();
        var request = this.http.post(this.buildUrl(), obj, requestOptions);
        return request.map(function (res) {
            if (res.status === 201) {
                if (transform) {
                    return transform(res);
                }
                return _this.transform(res);
            }
            else {
                return res;
            }
        }).catch(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        });
    };
    RESTService.prototype.update = function (id, obj, transform) {
        var _this = this;
        var requestOptions = this.buildRequestOptions();
        var request = this.http.patch(this.buildUrl(id), obj, requestOptions);
        return request.map(function (res) {
            if (res.status === 200) {
                if (transform) {
                    return transform(res);
                }
                return _this.transform(res);
            }
            else {
                return res;
            }
        }).catch(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        });
    };
    RESTService.prototype.delete = function (id, transform) {
        var _this = this;
        var request = this.http.delete(this.buildUrl(id), this.buildRequestOptions());
        return request.map(function (res) {
            if (res.status === 200) {
                if (transform) {
                    return transform(res);
                }
                return _this.transform(res);
            }
            else {
                return res;
            }
        }).catch(function (error) {
            return new Observable(function (subscriber) {
                try {
                    subscriber.error(_this.transform(error));
                }
                catch (err) {
                    subscriber.error(error);
                }
            });
        });
    };
    RESTService.prototype.buildRequestOptions = function () {
        var requestHeaders = new Headers();
        this._baseHeaders.forEach(function (value, key) {
            requestHeaders.set(key, value);
        });
        this._dynamicHeaders().forEach(function (value, key) {
            requestHeaders.set(key, value);
        });
        var requestOptions = {
            headers: requestHeaders,
        };
        return requestOptions;
    };
    RESTService.prototype.buildUrl = function (id, query) {
        var url = this._path ? this._path : '';
        if (id) {
            url += "/" + id;
        }
        if (query) {
            url += this.buildQuery(query);
        }
        url = this._base + "/" + url;
        return url;
    };
    RESTService.prototype.buildQuery = function (query) {
        var url = '';
        if (query) {
            url += '?';
            var params = [];
            for (var key in query) {
                var value = query[key];
                if (value !== undefined) {
                    params.push(key + "=" + value);
                }
            }
            url += params.join('&');
        }
        return url;
    };
    return RESTService;
}());
export { RESTService };
//# sourceMappingURL=http-rest.service.js.map