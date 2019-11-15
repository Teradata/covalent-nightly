/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
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
                    for (var _b = __values(Object.keys(options.headers)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    /** @nocollapse */ TdFileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TdFileService_Factory() { return new TdFileService(i0.ɵɵinject(i1.HttpClient, 8)); }, token: TdFileService, providedIn: i2.CovalentFileModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJmaWxlL3NlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFhLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFLcEQsb0NBTUM7OztJQUxDLDZCQUFZOztJQUNaLGdDQUF1Qjs7SUFDdkIsOEJBQVk7O0lBQ1osaUNBQW9DOztJQUNwQyxrQ0FBb0I7Ozs7O0FBR3RCLG1DQUdDOzs7SUFGQyxnQ0FBZ0Q7O0lBQ2hELCtCQUFnRDs7QUFHbEQ7SUFlRTs7OztPQUlHO0lBQ0gsdUJBQXlDLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFoQmxELHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBaUJoRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xFLENBQUM7SUFYRCxzQkFBSSxtQ0FBUTtRQUpaOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQVdEOztPQUVHOzs7Ozs7Ozs7SUFDSCw0QkFBSTs7Ozs7Ozs7SUFBSixVQUNFLEdBQVcsRUFDWCxNQUFjLEVBQ2QsSUFBcUIsRUFDckIsRUFB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LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3ZhbGVudEZpbGVNb2R1bGUgfSBmcm9tICcuLi9maWxlLm1vZHVsZSc7XG4vKipcbiAqIEBkZXByZWNhdGVkIHNob3VsZCBiZSByZW1vdmVkIGluIGZhdm9yIG9mIElVcGxvYWRJbml0XG4gKiBAYnJlYWtpbmctY2hhbmdlIDMuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVVwbG9hZE9wdGlvbnMge1xuICB1cmw6IHN0cmluZztcbiAgbWV0aG9kOiAncG9zdCcgfCAncHV0JztcbiAgZmlsZT86IEZpbGU7XG4gIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBmb3JtRGF0YT86IEZvcm1EYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRFeHRyYXMge1xuICBoZWFkZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgcGFyYW1zPzogeyBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQ292YWxlbnRGaWxlTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Byb2dyZXNzT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHByb2dyZXNzIG9ic2VydmFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgZmlsZXMgYmVpbmcgdXBsb2FkZWQuXG4gICAqIE5lZWRzIHRvIGJlIHN1cHBvcnRlZCBieSBiYWNrZW5kLlxuICAgKi9cbiAgZ2V0IHByb2dyZXNzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBfaHR0cCB0aGUgaHR0cCBjbGllbnQgaW5zdGFuY2VcbiAgICogQGJyZWFraW5nLWNoYW5nZSAzLjAuMCByZW1vdmUgJ09wdGlvbmFsJyBkZWNvcmF0b3Igb25jZSB0aGUgbGVnYXkgdXBsb2FkIG1ldGhvZCBpcyByZW1vdmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlID0gdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSBmaWxlIHRvIFVSTC5cbiAgICovXG4gIHNlbmQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgYm9keTogRmlsZSB8IEZvcm1EYXRhLFxuICAgIHsgaGVhZGVycywgcGFyYW1zIH06IElVcGxvYWRFeHRyYXMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5faHR0cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgSHR0cENsaWVudCBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgYXQgcm9vdCBtb2R1bGUgbGV2ZWwnKTtcbiAgICB9XG4gICAgY29uc3QgcmVxOiBIdHRwUmVxdWVzdDxGaWxlIHwgRm9ybURhdGE+ID0gbmV3IEh0dHBSZXF1ZXN0KG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmwsIGJvZHksIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnMgfHwge30pLFxuICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IHBhcmFtcyB8fCB7fSB9KSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5yZXF1ZXN0KHJlcSkucGlwZSh0YXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4gdGhpcy5oYW5kbGVFdmVudChldmVudCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gb3B0aW9uczogSVVwbG9hZE9wdGlvbnMge1xuICAgKiAgICAgdXJsOiBzdHJpbmcsXG4gICAqICAgICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnLFxuICAgKiAgICAgZmlsZT86IEZpbGUsXG4gICAqICAgICBoZWFkZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAqICAgICBmb3JtRGF0YT86IEZvcm1EYXRhXG4gICAqIH1cbiAgICpcbiAgICogVXNlcyB1bmRlcmx5aW5nIFtYTUxIdHRwUmVxdWVzdF0gdG8gdXBsb2FkIGEgZmlsZSB0byBhIHVybC5cbiAgICogQGRlcHJlY2F0ZWQgdXNlIHNlbmQgaW5zdGVhZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDMuMC4wXG4gICAqL1xuICB1cGxvYWQob3B0aW9uczogSVVwbG9hZE9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgaWYgKG9wdGlvbnMuZmlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZm9ybURhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3JtRGF0YSA9IG9wdGlvbnMuZm9ybURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5lcnJvcignRm9yIFtJVXBsb2FkT3B0aW9uc10geW91IGhhdmUgdG8gc2V0IGVpdGhlciB0aGUgW2ZpbGVdIG9yIHRoZSBbZm9ybURhdGFdIHByb3BlcnR5LicpO1xuICAgICAgfVxuXG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5yb3VuZCgoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChwcm9ncmVzcyk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFdmVudDxUID0gYW55PihldmVudDogSHR0cEV2ZW50PFQ+KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuU2VudDpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQoMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzOlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KDEwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=