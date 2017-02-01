var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var HttpInterceptorService = (function () {
    function HttpInterceptorService(_http, _injector, _httpInterceptorMatcher, requestInterceptorConfigs) {
        var _this = this;
        this._http = _http;
        this._injector = _injector;
        this._httpInterceptorMatcher = _httpInterceptorMatcher;
        this._requestInterceptors = [];
        requestInterceptorConfigs.forEach(function (config) {
            _this._requestInterceptors.push({
                interceptor: _injector.get(config.interceptor),
                paths: config.paths,
            });
        });
    }
    HttpInterceptorService.prototype.delete = function (url, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Delete;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.get = function (url, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Get;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.head = function (url, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Head;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.patch = function (url, data, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Patch;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.post = function (url, data, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Post;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.put = function (url, data, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.url = url;
        requestOptions.method = RequestMethod.Put;
        requestOptions.body = data;
        return this.request(url, requestOptions);
    };
    HttpInterceptorService.prototype.request = function (url, requestOptions) {
        var _this = this;
        if (requestOptions === void 0) { requestOptions = {}; }
        var requestUrl;
        if (url instanceof Request) {
            requestUrl = url.url ? url.url : requestOptions.url;
        }
        else {
            requestUrl = url;
        }
        if (!requestOptions.url) {
            requestOptions.url = requestUrl;
        }
        var interceptors = this._requestInterceptors.filter(function (mapping) {
            return _this._httpInterceptorMatcher.matches(requestOptions, mapping);
        }).map(function (mapping) {
            return mapping.interceptor;
        });
        return this._setupRequest(url, requestOptions, interceptors);
    };
    HttpInterceptorService.prototype._setupRequest = function (url, requestOptions, interceptors) {
        var _this = this;
        try {
            requestOptions = this._requestResolve(requestOptions, interceptors);
        }
        catch (e) {
            return new Observable(function (subscriber) {
                subscriber.error(e);
            });
        }
        return new Observable(function (subscriber) {
            _this._http.request(url, requestOptions)
                .subscribe(function (response) {
                subscriber.next(_this._responseResolve(response, interceptors));
                subscriber.complete();
            }, function (error) {
                subscriber.error(_this._responseErrorResolve(error, interceptors));
            });
        });
    };
    HttpInterceptorService.prototype._requestResolve = function (requestOptions, interceptors) {
        interceptors.forEach(function (interceptor) {
            if (interceptor.onRequest) {
                try {
                    requestOptions = interceptor.onRequest(requestOptions);
                }
                catch (e) {
                    if (interceptor.onRequestError) {
                        requestOptions = interceptor.onRequestError(requestOptions);
                        if (!requestOptions) {
                            throw e;
                        }
                    }
                    else {
                        throw e;
                    }
                }
            }
        });
        return requestOptions;
    };
    HttpInterceptorService.prototype._responseResolve = function (response, interceptors) {
        interceptors.forEach(function (interceptor) {
            if (interceptor.onResponse) {
                response = interceptor.onResponse(response);
            }
        });
        return response;
    };
    HttpInterceptorService.prototype._responseErrorResolve = function (error, interceptors) {
        interceptors.forEach(function (interceptor) {
            if (interceptor.onResponseError) {
                error = interceptor.onResponseError(error);
            }
        });
        return error;
    };
    return HttpInterceptorService;
}());
HttpInterceptorService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        Injector, Object, Array])
], HttpInterceptorService);
export { HttpInterceptorService };
//# sourceMappingURL=http-interceptor.service.js.map