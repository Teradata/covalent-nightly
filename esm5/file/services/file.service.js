/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                for (var key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWEsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQUtwRCxvQ0FNQzs7O0lBTEMsNkJBQVk7O0lBQ1osZ0NBQXVCOztJQUN2Qiw4QkFBWTs7SUFDWixpQ0FBb0M7O0lBQ3BDLGtDQUFvQjs7Ozs7QUFHdEIsbUNBR0M7OztJQUZDLGdDQUFnRDs7SUFDaEQsK0JBQWdEOztBQUdsRDtJQWVFOzs7O09BSUc7SUFDSCx1QkFBeUMsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQWhCbEQscUJBQWdCLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFpQmhFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQVhELHNCQUFJLG1DQUFRO1FBSlo7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBV0Q7O09BRUc7Ozs7Ozs7OztJQUNILDRCQUFJOzs7Ozs7OztJQUFKLFVBQ0UsR0FBVyxFQUNYLE1BQWMsRUFDZCxJQUFxQixFQUNyQixFQUF1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QyxPQUFPLEVBQUU7b0JBQy9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDthQUNGO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxtQ0FBVzs7Ozs7O0lBQW5CLFVBQTZCLEtBQW1CO1FBQzlDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsY0FBYztnQkFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsTUFBTTtZQUNSLEtBQUssYUFBYSxDQUFDLFFBQVE7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOztnQkFwSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQXZCUSxVQUFVLHVCQXlDSixRQUFROzs7d0JBMUN2QjtDQTJJQyxBQXJIRCxJQXFIQztTQWxIWSxhQUFhOzs7Ozs7SUFDeEIseUNBQWtFOzs7OztJQUNsRSw0Q0FBZ0Q7Ozs7O0lBZXBDLDhCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cEV2ZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmliZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvdmFsZW50RmlsZU1vZHVsZSB9IGZyb20gJy4uL2ZpbGUubW9kdWxlJztcbi8qKlxuICogQGRlcHJlY2F0ZWQgc2hvdWxkIGJlIHJlbW92ZWQgaW4gZmF2b3Igb2YgSVVwbG9hZEluaXRcbiAqIEBicmVha2luZy1jaGFuZ2UgMy4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVXBsb2FkT3B0aW9ucyB7XG4gIHVybDogc3RyaW5nO1xuICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnO1xuICBmaWxlPzogRmlsZTtcbiAgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIGZvcm1EYXRhPzogRm9ybURhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVwbG9hZEV4dHJhcyB7XG4gIGhlYWRlcnM/OiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICBwYXJhbXM/OiB7IFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBDb3ZhbGVudEZpbGVNb2R1bGUsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9wcm9ncmVzc1N1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgLyoqXG4gICAqIEdldHMgcHJvZ3Jlc3Mgb2JzZXJ2YWJsZSB0byBrZWVwIHRyYWNrIG9mIHRoZSBmaWxlcyBiZWluZyB1cGxvYWRlZC5cbiAgICogTmVlZHMgdG8gYmUgc3VwcG9ydGVkIGJ5IGJhY2tlbmQuXG4gICAqL1xuICBnZXQgcHJvZ3Jlc3MoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2VcbiAgICogQHBhcmFtIF9odHRwIHRoZSBodHRwIGNsaWVudCBpbnN0YW5jZVxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDMuMC4wIHJlbW92ZSAnT3B0aW9uYWwnIGRlY29yYXRvciBvbmNlIHRoZSBsZWdheSB1cGxvYWQgbWV0aG9kIGlzIHJlbW92ZWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgX2h0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLl9wcm9ncmVzc09ic2VydmFibGUgPSB0aGlzLl9wcm9ncmVzc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBsb2FkcyBhIGZpbGUgdG8gVVJMLlxuICAgKi9cbiAgc2VuZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBib2R5OiBGaWxlIHwgRm9ybURhdGEsXG4gICAgeyBoZWFkZXJzLCBwYXJhbXMgfTogSVVwbG9hZEV4dHJhcyA9IHt9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKCF0aGlzLl9odHRwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBIdHRwQ2xpZW50IG1vZHVsZSBuZWVkcyB0byBiZSBpbXBvcnRlZCBhdCByb290IG1vZHVsZSBsZXZlbCcpO1xuICAgIH1cbiAgICBjb25zdCByZXE6IEh0dHBSZXF1ZXN0PEZpbGUgfCBGb3JtRGF0YT4gPSBuZXcgSHR0cFJlcXVlc3QobWV0aG9kLnRvVXBwZXJDYXNlKCksIHVybCwgYm9keSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyB8fCB7fSksXG4gICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogcGFyYW1zIHx8IHt9IH0pLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnJlcXVlc3QocmVxKS5waXBlKHRhcCgoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB0aGlzLmhhbmRsZUV2ZW50KGV2ZW50KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBvcHRpb25zOiBJVXBsb2FkT3B0aW9ucyB7XG4gICAqICAgICB1cmw6IHN0cmluZyxcbiAgICogICAgIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCcsXG4gICAqICAgICBmaWxlPzogRmlsZSxcbiAgICogICAgIGhlYWRlcnM/OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICogICAgIGZvcm1EYXRhPzogRm9ybURhdGFcbiAgICogfVxuICAgKlxuICAgKiBVc2VzIHVuZGVybHlpbmcgW1hNTEh0dHBSZXF1ZXN0XSB0byB1cGxvYWQgYSBmaWxlIHRvIGEgdXJsLlxuICAgKiBAZGVwcmVjYXRlZCB1c2Ugc2VuZCBpbnN0ZWFkXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMy4wLjBcbiAgICovXG4gIHVwbG9hZChvcHRpb25zOiBJVXBsb2FkT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPGFueT4oKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PikgPT4ge1xuICAgICAgbGV0IHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgaWYgKG9wdGlvbnMuZmlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZm9ybURhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3JtRGF0YSA9IG9wdGlvbnMuZm9ybURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5lcnJvcignRm9yIFtJVXBsb2FkT3B0aW9uc10geW91IGhhdmUgdG8gc2V0IGVpdGhlciB0aGUgW2ZpbGVdIG9yIHRoZSBbZm9ybURhdGFdIHByb3BlcnR5LicpO1xuICAgICAgfVxuXG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5yb3VuZCgoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChwcm9ncmVzcyk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFdmVudDxUID0gYW55PihldmVudDogSHR0cEV2ZW50PFQ+KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuU2VudDpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQoMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzOlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KDEwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=