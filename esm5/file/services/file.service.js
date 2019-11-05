/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CovalentFileModule } from '../file.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../file.module";
/**
 * @deprecated should be removed in favor of IUploadInit
 * \@breaking-change 3.0.0
 * @record
 */
export function IUploadOptions() { }
if (false) {
    /** @type {?} */
    IUploadOptions.prototype.url;
    /** @type {?} */
    IUploadOptions.prototype.method;
    /** @type {?|undefined} */
    IUploadOptions.prototype.file;
    /** @type {?|undefined} */
    IUploadOptions.prototype.headers;
    /** @type {?|undefined} */
    IUploadOptions.prototype.formData;
}
/**
 * @record
 */
export function IUploadExtras() { }
if (false) {
    /** @type {?|undefined} */
    IUploadExtras.prototype.headers;
    /** @type {?|undefined} */
    IUploadExtras.prototype.params;
}
var TdFileService = /** @class */ (function () {
    /**
     * Creates a new instance
     * @param _http the http client instance
     * @breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
     */
    function TdFileService(_http) {
        this._http = _http;
        this._progressSubject = new Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    Object.defineProperty(TdFileService.prototype, "progress", {
        /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         */
        get: /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         * @return {?}
         */
        function () {
            return this._progressObservable;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a file to URL.
     */
    /**
     * Uploads a file to URL.
     * @param {?} url
     * @param {?} method
     * @param {?} body
     * @param {?=} __3
     * @return {?}
     */
    TdFileService.prototype.send = /**
     * Uploads a file to URL.
     * @param {?} url
     * @param {?} method
     * @param {?} body
     * @param {?=} __3
     * @return {?}
     */
    function (url, method, body, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, headers = _b.headers, params = _b.params;
        if (!this._http) {
            throw new Error('The HttpClient module needs to be imported at root module level');
        }
        /** @type {?} */
        var req = new HttpRequest(method.toUpperCase(), url, body, {
            reportProgress: true,
            headers: new HttpHeaders(headers || {}),
            params: new HttpParams({ fromObject: params || {} }),
        });
        return this._http.request(req).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.handleEvent(event); })));
    };
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * @deprecated use send instead
     * @breaking-change 3.0.0
     */
    /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * @deprecated use send instead
     * \@breaking-change 3.0.0
     * @param {?} options
     * @return {?}
     */
    TdFileService.prototype.upload = /**
     * params:
     * - options: IUploadOptions {
     *     url: string,
     *     method: 'post' | 'put',
     *     file?: File,
     *     headers?: {[key: string]: string},
     *     formData?: FormData
     * }
     *
     * Uses underlying [XMLHttpRequest] to upload a file to a url.
     * @deprecated use send instead
     * \@breaking-change 3.0.0
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            var e_1, _a;
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            /** @type {?} */
            var formData = new FormData();
            if (options.file !== undefined) {
                formData.append('file', options.file);
            }
            else if (options.formData !== undefined) {
                formData = options.formData;
            }
            else {
                return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
            }
            xhr.upload.onprogress = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var progress = 0;
                if (event.lengthComputable) {
                    progress = Math.round((event.loaded / event.total) * 100);
                }
                _this._progressSubject.next(progress);
            });
            xhr.onreadystatechange = (/**
             * @return {?}
             */
            function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        subscriber.next(xhr.response);
                        subscriber.complete();
                    }
                    else {
                        subscriber.error(xhr.response);
                    }
                }
            });
            xhr.open(options.method, options.url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if (options.headers) {
                try {
                    for (var _b = tslib_1.__values(Object.keys(options.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        xhr.setRequestHeader(key, options.headers[key]);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            xhr.send(formData);
        }));
    };
    /**
     * @private
     * @template T
     * @param {?} event
     * @return {?}
     */
    TdFileService.prototype.handleEvent = /**
     * @private
     * @template T
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.type) {
            case HttpEventType.Sent:
                this._progressSubject.next(0);
                break;
            case HttpEventType.UploadProgress:
                this._progressSubject.next(Math.round((100 * event.loaded) / event.total));
                break;
            case HttpEventType.Response:
                this._progressSubject.next(100);
                break;
            default:
                break;
        }
    };
    TdFileService.decorators = [
        { type: Injectable, args: [{
                    providedIn: CovalentFileModule,
                },] }
    ];
    /** @nocollapse */
    TdFileService.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ TdFileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TdFileService_Factory() { return new TdFileService(i0.ɵɵinject(i1.HttpClient, 8)); }, token: TdFileService, providedIn: i2.CovalentFileModule });
    return TdFileService;
}());
export { TdFileService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileService.prototype._progressSubject;
    /**
     * @type {?}
     * @private
     */
    TdFileService.prototype._progressObservable;
    /**
     * @type {?}
     * @private
     */
    TdFileService.prototype._http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJmaWxlL3NlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFhLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFLcEQsb0NBTUM7OztJQUxDLDZCQUFZOztJQUNaLGdDQUF1Qjs7SUFDdkIsOEJBQVk7O0lBQ1osaUNBQW9DOztJQUNwQyxrQ0FBb0I7Ozs7O0FBR3RCLG1DQUdDOzs7SUFGQyxnQ0FBZ0Q7O0lBQ2hELCtCQUFnRDs7QUFHbEQ7SUFlRTs7OztPQUlHO0lBQ0gsdUJBQXlDLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFoQmxELHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBaUJoRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xFLENBQUM7SUFYRCxzQkFBSSxtQ0FBUTtRQUpaOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVdEOztPQUVHOzs7Ozs7Ozs7SUFDSCw0QkFBSTs7Ozs7Ozs7SUFBSixVQUNFLEdBQVcsRUFDWCxNQUFjLEVBQ2QsSUFBcUIsRUFDckIsRUFB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ZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ292YWxlbnRGaWxlTW9kdWxlIH0gZnJvbSAnLi4vZmlsZS5tb2R1bGUnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaG91bGQgYmUgcmVtb3ZlZCBpbiBmYXZvciBvZiBJVXBsb2FkSW5pdFxuICogQGJyZWFraW5nLWNoYW5nZSAzLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRPcHRpb25zIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCc7XG4gIGZpbGU/OiBGaWxlO1xuICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgZm9ybURhdGE/OiBGb3JtRGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVXBsb2FkRXh0cmFzIHtcbiAgaGVhZGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gIHBhcmFtcz86IHsgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IENvdmFsZW50RmlsZU1vZHVsZSxcbn0pXG5leHBvcnQgY2xhc3MgVGRGaWxlU2VydmljZSB7XG4gIHByaXZhdGUgX3Byb2dyZXNzU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9wcm9ncmVzc09ic2VydmFibGU6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICAvKipcbiAgICogR2V0cyBwcm9ncmVzcyBvYnNlcnZhYmxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGZpbGVzIGJlaW5nIHVwbG9hZGVkLlxuICAgKiBOZWVkcyB0byBiZSBzdXBwb3J0ZWQgYnkgYmFja2VuZC5cbiAgICovXG4gIGdldCBwcm9ncmVzcygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc09ic2VydmFibGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX2h0dHAgdGhlIGh0dHAgY2xpZW50IGluc3RhbmNlXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMy4wLjAgcmVtb3ZlICdPcHRpb25hbCcgZGVjb3JhdG9yIG9uY2UgdGhlIGxlZ2F5IHVwbG9hZCBtZXRob2QgaXMgcmVtb3ZlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBfaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZSA9IHRoaXMuX3Byb2dyZXNzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWRzIGEgZmlsZSB0byBVUkwuXG4gICAqL1xuICBzZW5kKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGJvZHk6IEZpbGUgfCBGb3JtRGF0YSxcbiAgICB7IGhlYWRlcnMsIHBhcmFtcyB9OiBJVXBsb2FkRXh0cmFzID0ge30sXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAoIXRoaXMuX2h0dHApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIEh0dHBDbGllbnQgbW9kdWxlIG5lZWRzIHRvIGJlIGltcG9ydGVkIGF0IHJvb3QgbW9kdWxlIGxldmVsJyk7XG4gICAgfVxuICAgIGNvbnN0IHJlcTogSHR0cFJlcXVlc3Q8RmlsZSB8IEZvcm1EYXRhPiA9IG5ldyBIdHRwUmVxdWVzdChtZXRob2QudG9VcHBlckNhc2UoKSwgdXJsLCBib2R5LCB7XG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyhoZWFkZXJzIHx8IHt9KSxcbiAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBwYXJhbXMgfHwge30gfSksXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucmVxdWVzdChyZXEpLnBpcGUodGFwKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHRoaXMuaGFuZGxlRXZlbnQoZXZlbnQpKSk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG9wdGlvbnM6IElVcGxvYWRPcHRpb25zIHtcbiAgICogICAgIHVybDogc3RyaW5nLFxuICAgKiAgICAgbWV0aG9kOiAncG9zdCcgfCAncHV0JyxcbiAgICogICAgIGZpbGU/OiBGaWxlLFxuICAgKiAgICAgaGVhZGVycz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9LFxuICAgKiAgICAgZm9ybURhdGE/OiBGb3JtRGF0YVxuICAgKiB9XG4gICAqXG4gICAqIFVzZXMgdW5kZXJseWluZyBbWE1MSHR0cFJlcXVlc3RdIHRvIHVwbG9hZCBhIGZpbGUgdG8gYSB1cmwuXG4gICAqIEBkZXByZWNhdGVkIHVzZSBzZW5kIGluc3RlYWRcbiAgICogQGJyZWFraW5nLWNoYW5nZSAzLjAuMFxuICAgKi9cbiAgdXBsb2FkKG9wdGlvbnM6IElVcGxvYWRPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8YW55Pigoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBsZXQgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGlmIChvcHRpb25zLmZpbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBvcHRpb25zLmZpbGUpO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmZvcm1EYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9ybURhdGEgPSBvcHRpb25zLmZvcm1EYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoJ0ZvciBbSVVwbG9hZE9wdGlvbnNdIHlvdSBoYXZlIHRvIHNldCBlaXRoZXIgdGhlIFtmaWxlXSBvciB0aGUgW2Zvcm1EYXRhXSBwcm9wZXJ0eS4nKTtcbiAgICAgIH1cblxuICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB7XG4gICAgICAgIGxldCBwcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgucm91bmQoKGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKSAqIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQocHJvZ3Jlc3MpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUpO1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXZlbnQ8VCA9IGFueT4oZXZlbnQ6IEh0dHBFdmVudDxUPik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlNlbnQ6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzczpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQoTWF0aC5yb3VuZCgoMTAwICogZXZlbnQubG9hZGVkKSAvIGV2ZW50LnRvdGFsKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlOlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dCgxMDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19