/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
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
     * Uploads a file to a URL.
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
    { type: Injectable }
];
/** @nocollapse */
TdFileService.ctorParameters = () => [
    { type: HttpClient, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWEsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsSCxPQUFPLEVBQWMsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVyQyxtQ0FHQzs7O0lBRkMsZ0NBQWdEOztJQUNoRCwrQkFBZ0Q7O0FBSWxELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFpQnhCLFlBQXlDLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFoQmxELHFCQUFnQixHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBaUJoRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQVhELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7OztJQWNELElBQUksQ0FDRixHQUFXLEVBQ1gsTUFBYyxFQUNkLElBQXFCLEVBQ3JCLEVBQUUsT0FBTyxFQUFFLE1BQU0sS0FBb0IsRUFBRTtRQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQztTQUNwRjs7Y0FDSyxHQUFHLEdBQWlDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO1lBQ3pGLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sRUFBRSxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLElBQUksRUFBRSxFQUFFLENBQUM7U0FDckQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7Ozs7SUFFTyxXQUFXLENBQVUsS0FBbUI7UUFDOUMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLGFBQWEsQ0FBQyxjQUFjO2dCQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsUUFBUTtnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7OztZQXhERixVQUFVOzs7O1lBVEYsVUFBVSx1QkEyQkosUUFBUTs7Ozs7OztJQWhCckIseUNBQWtFOzs7OztJQUNsRSw0Q0FBZ0Q7Ozs7O0lBZXBDLDhCQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVxdWVzdCwgSHR0cEV2ZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmliZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXBsb2FkRXh0cmFzIHtcbiAgaGVhZGVycz86IHsgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gIHBhcmFtcz86IHsgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRGaWxlU2VydmljZSB7XG4gIHByaXZhdGUgX3Byb2dyZXNzU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9wcm9ncmVzc09ic2VydmFibGU6IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICAvKipcbiAgICogR2V0cyBwcm9ncmVzcyBvYnNlcnZhYmxlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGZpbGVzIGJlaW5nIHVwbG9hZGVkLlxuICAgKiBOZWVkcyB0byBiZSBzdXBwb3J0ZWQgYnkgYmFja2VuZC5cbiAgICovXG4gIGdldCBwcm9ncmVzcygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzc09ic2VydmFibGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZVxuICAgKiBAcGFyYW0gX2h0dHAgdGhlIGh0dHAgY2xpZW50IGluc3RhbmNlXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMy4wLjAgcmVtb3ZlICdPcHRpb25hbCcgZGVjb3JhdG9yIG9uY2UgdGhlIGxlZ2F5IHVwbG9hZCBtZXRob2QgaXMgcmVtb3ZlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBfaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZSA9IHRoaXMuX3Byb2dyZXNzU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGxvYWRzIGEgZmlsZSB0byBhIFVSTC5cbiAgICovXG4gIHNlbmQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgYm9keTogRmlsZSB8IEZvcm1EYXRhLFxuICAgIHsgaGVhZGVycywgcGFyYW1zIH06IElVcGxvYWRFeHRyYXMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICghdGhpcy5faHR0cCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgSHR0cENsaWVudCBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0ZWQgYXQgcm9vdCBtb2R1bGUgbGV2ZWwnKTtcbiAgICB9XG4gICAgY29uc3QgcmVxOiBIdHRwUmVxdWVzdDxGaWxlIHwgRm9ybURhdGE+ID0gbmV3IEh0dHBSZXF1ZXN0KG1ldGhvZC50b1VwcGVyQ2FzZSgpLCB1cmwsIGJvZHksIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKGhlYWRlcnMgfHwge30pLFxuICAgICAgcGFyYW1zOiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IHBhcmFtcyB8fCB7fSB9KSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5yZXF1ZXN0KHJlcSkucGlwZSh0YXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4gdGhpcy5oYW5kbGVFdmVudChldmVudCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXZlbnQ8VCA9IGFueT4oZXZlbnQ6IEh0dHBFdmVudDxUPik6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlNlbnQ6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzczpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQoTWF0aC5yb3VuZCgoMTAwICogZXZlbnQubG9hZGVkKSAvIGV2ZW50LnRvdGFsKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlOlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dCgxMDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19