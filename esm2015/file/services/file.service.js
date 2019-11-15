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
export class TdFileService {
    /**
     * Creates a new instance
     * \@breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
     * @param {?} _http the http client instance
     */
    constructor(_http) {
        this._http = _http;
        this._progressSubject = new Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    /**
     * Gets progress observable to keep track of the files being uploaded.
     * Needs to be supported by backend.
     * @return {?}
     */
    get progress() {
        return this._progressObservable;
    }
    /**
     * Uploads a file to URL.
     * @param {?} url
     * @param {?} method
     * @param {?} body
     * @param {?=} __3
     * @return {?}
     */
    send(url, method, body, { headers, params } = {}) {
        if (!this._http) {
            throw new Error('The HttpClient module needs to be imported at root module level');
        }
        /** @type {?} */
        const req = new HttpRequest(method.toUpperCase(), url, body, {
            reportProgress: true,
            headers: new HttpHeaders(headers || {}),
            params: new HttpParams({ fromObject: params || {} }),
        });
        return this._http.request(req).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.handleEvent(event))));
    }
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
    upload(options) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => {
            /** @type {?} */
            const xhr = new XMLHttpRequest();
            /** @type {?} */
            let formData = new FormData();
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
            (event) => {
                /** @type {?} */
                let progress = 0;
                if (event.lengthComputable) {
                    progress = Math.round((event.loaded / event.total) * 100);
                }
                this._progressSubject.next(progress);
            });
            xhr.onreadystatechange = (/**
             * @return {?}
             */
            () => {
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
                for (const key of Object.keys(options.headers)) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.send(formData);
        }));
    }
    /**
     * @private
     * @template T
     * @param {?} event
     * @return {?}
     */
    handleEvent(event) {
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
    }
}
TdFileService.decorators = [
    { type: Injectable, args: [{
                providedIn: CovalentFileModule,
            },] }
];
/** @nocollapse */
TdFileService.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] }
];
/** @nocollapse */ TdFileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TdFileService_Factory() { return new TdFileService(i0.ɵɵinject(i1.HttpClient, 8)); }, token: TdFileService, providedIn: i2.CovalentFileModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJmaWxlL3NlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWEsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQUtwRCxvQ0FNQzs7O0lBTEMsNkJBQVk7O0lBQ1osZ0NBQXVCOztJQUN2Qiw4QkFBWTs7SUFDWixpQ0FBb0M7O0lBQ3BDLGtDQUFvQjs7Ozs7QUFHdEIsbUNBR0M7OztJQUZDLGdDQUFnRDs7SUFDaEQsK0JBQWdEOztBQU1sRCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBaUJ4QixZQUF5QyxLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBaEJsRCxxQkFBZ0IsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQWlCaEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFYRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7Ozs7SUFjRCxJQUFJLENBQ0YsR0FBVyxFQUNYLE1BQWMsRUFDZCxJQUFxQixFQUNyQixFQUFFLE9BQU8sRUFBRSxNQUFNLEtBQW9CLEVBQUU7UUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7U0FDcEY7O2NBQ0ssR0FBRyxHQUFpQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtZQUN6RixjQUFjLEVBQUUsSUFBSTtZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUN2QyxNQUFNLEVBQUUsSUFBSSxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQ3JELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQWdCRCxNQUFNLENBQUMsT0FBdUI7UUFDNUIsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBTSxDQUFDLFVBQTJCLEVBQUUsRUFBRTs7a0JBQ25ELEdBQUcsR0FBbUIsSUFBSSxjQUFjLEVBQUU7O2dCQUM1QyxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUU7WUFFdkMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO2FBQy9HO1lBRUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVOzs7O1lBQUcsQ0FBQyxLQUFvQixFQUFFLEVBQUU7O29CQUMzQyxRQUFRLEdBQVcsQ0FBQztnQkFDeEIsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQzNEO2dCQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFBLENBQUM7WUFFRixHQUFHLENBQUMsa0JBQWtCOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQzVCLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7b0JBQ3hCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7d0JBQ3pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM5QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3ZCO3lCQUFNO3dCQUNMLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNoQztpQkFDRjtZQUNILENBQUMsQ0FBQSxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDM0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM5QyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDakQ7YUFDRjtZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sV0FBVyxDQUFVLEtBQW1CO1FBQzlDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsY0FBYztnQkFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0UsTUFBTTtZQUNSLEtBQUssYUFBYSxDQUFDLFFBQVE7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7WUFwSEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUF2QlEsVUFBVSx1QkF5Q0osUUFBUTs7Ozs7Ozs7SUFoQnJCLHlDQUFrRTs7Ozs7SUFDbEUsNENBQWdEOzs7OztJQWVwQyw4QkFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb3ZhbGVudEZpbGVNb2R1bGUgfSBmcm9tICcuLi9maWxlLm1vZHVsZSc7XG4vKipcbiAqIEBkZXByZWNhdGVkIHNob3VsZCBiZSByZW1vdmVkIGluIGZhdm9yIG9mIElVcGxvYWRJbml0XG4gKiBAYnJlYWtpbmctY2hhbmdlIDMuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVVwbG9hZE9wdGlvbnMge1xuICB1cmw6IHN0cmluZztcbiAgbWV0aG9kOiAncG9zdCcgfCAncHV0JztcbiAgZmlsZT86IEZpbGU7XG4gIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBmb3JtRGF0YT86IEZvcm1EYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRFeHRyYXMge1xuICBoZWFkZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgcGFyYW1zPzogeyBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQ292YWxlbnRGaWxlTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Byb2dyZXNzT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHByb2dyZXNzIG9ic2VydmFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgZmlsZXMgYmVpbmcgdXBsb2FkZWQuXG4gICAqIE5lZWRzIHRvIGJlIHN1cHBvcnRlZCBieSBiYWNrZW5kLlxuICAgKi9cbiAgZ2V0IHByb2dyZXNzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBfaHR0cCB0aGUgaHR0cCBjbGllbnQgaW5zdGFuY2VcbiAgICogQGJyZWFraW5nLWNoYW5nZSAzLjAuMCByZW1vdmUgJ09wdGlvbmFsJyBkZWNvcmF0b3Igb25jZSB0aGUgbGVnYXkgdXBsb2FkIG1ldGhvZCBpcyByZW1vdmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlID0gdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSBmaWxlIHRvIFVSTC5cbiAgICovXG4gIHNlbmQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgYm9keTogRmlsZSB8IEZvcm1EYXRhLFxuICAgIHsgaGVhZGVycywgcGFyYW1zIH06IElVcGxvYWRFeHRyYXMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5faHR0cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgSHR0cENsaWVudCBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgYXQgcm9vdCBtb2R1bGUgbGV2ZWwnKTtcbiAgICB9XG4gICAgY29uc3QgcmVxOiBIdHRwUmVxdWVzdDxGaWxlIHwgRm9ybURhdGE+ID0gbmV3IEh0dHBSZXF1ZXN0KG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmwsIGJvZHksIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnMgfHwge30pLFxuICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IHBhcmFtcyB8fCB7fSB9KSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5yZXF1ZXN0KHJlcSkucGlwZSh0YXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4gdGhpcy5oYW5kbGVFdmVudChldmVudCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gb3B0aW9uczogSVVwbG9hZE9wdGlvbnMge1xuICAgKiAgICAgdXJsOiBzdHJpbmcsXG4gICAqICAgICBtZXRob2Q6ICdwb3N0JyB8ICdwdXQnLFxuICAgKiAgICAgZmlsZT86IEZpbGUsXG4gICAqICAgICBoZWFkZXJzPzoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAqICAgICBmb3JtRGF0YT86IEZvcm1EYXRhXG4gICAqIH1cbiAgICpcbiAgICogVXNlcyB1bmRlcmx5aW5nIFtYTUxIdHRwUmVxdWVzdF0gdG8gdXBsb2FkIGEgZmlsZSB0byBhIHVybC5cbiAgICogQGRlcHJlY2F0ZWQgdXNlIHNlbmQgaW5zdGVhZFxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDMuMC4wXG4gICAqL1xuICB1cGxvYWQob3B0aW9uczogSVVwbG9hZE9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxhbnk+KChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHhocjogWE1MSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgaWYgKG9wdGlvbnMuZmlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIG9wdGlvbnMuZmlsZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZm9ybURhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3JtRGF0YSA9IG9wdGlvbnMuZm9ybURhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5lcnJvcignRm9yIFtJVXBsb2FkT3B0aW9uc10geW91IGhhdmUgdG8gc2V0IGVpdGhlciB0aGUgW2ZpbGVdIG9yIHRoZSBbZm9ybURhdGFdIHByb3BlcnR5LicpO1xuICAgICAgfVxuXG4gICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgbGV0IHByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5yb3VuZCgoZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChwcm9ncmVzcyk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLnVybCwgdHJ1ZSk7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpKSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFdmVudDxUID0gYW55PihldmVudDogSHR0cEV2ZW50PFQ+KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuU2VudDpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQoMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzOlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KDEwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=