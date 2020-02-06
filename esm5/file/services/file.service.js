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
     * Uploads a file to a URL.
     */
    /**
     * Uploads a file to a URL.
     * @param {?} url
     * @param {?} method
     * @param {?} body
     * @param {?=} __3
     * @return {?}
     */
    TdFileService.prototype.send = /**
     * Uploads a file to a URL.
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
        { type: Injectable }
    ];
    /** @nocollapse */
    TdFileService.ctorParameters = function () { return [
        { type: HttpClient, decorators: [{ type: Optional }] }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWEsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsSCxPQUFPLEVBQWMsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVyQyxtQ0FHQzs7O0lBRkMsZ0NBQWdEOztJQUNoRCwrQkFBZ0Q7O0FBR2xEO0lBYUU7Ozs7T0FJRztJQUNILHVCQUF5QyxLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBaEJsRCxxQkFBZ0IsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQWlCaEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBWEQsc0JBQUksbUNBQVE7UUFKWjs7O1dBR0c7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFXRDs7T0FFRzs7Ozs7Ozs7O0lBQ0gsNEJBQUk7Ozs7Ozs7O0lBQUosVUFDRSxHQUFXLEVBQ1gsTUFBYyxFQUNkLElBQXFCLEVBQ3JCLEVBQXVDO1FBSnpDLGlCQWVDO1lBWEMsNEJBQXVDLEVBQXJDLG9CQUFPLEVBQUUsa0JBQU07UUFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7U0FDcEY7O1lBQ0ssR0FBRyxHQUFpQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTtZQUN6RixjQUFjLEVBQUUsSUFBSTtZQUNwQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUN2QyxNQUFNLEVBQUUsSUFBSSxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQ3JELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQzs7Ozs7OztJQUVPLG1DQUFXOzs7Ozs7SUFBbkIsVUFBNkIsS0FBbUI7UUFDOUMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssYUFBYSxDQUFDLElBQUk7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLGFBQWEsQ0FBQyxjQUFjO2dCQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsUUFBUTtnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7O2dCQXhERixVQUFVOzs7O2dCQVRGLFVBQVUsdUJBMkJKLFFBQVE7O0lBdUN2QixvQkFBQztDQUFBLEFBekRELElBeURDO1NBeERZLGFBQWE7Ozs7OztJQUN4Qix5Q0FBa0U7Ozs7O0lBQ2xFLDRDQUFnRDs7Ozs7SUFlcEMsOEJBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXF1ZXN0LCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVcGxvYWRFeHRyYXMge1xuICBoZWFkZXJzPzogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgcGFyYW1zPzogeyBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3NTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Byb2dyZXNzT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIC8qKlxuICAgKiBHZXRzIHByb2dyZXNzIG9ic2VydmFibGUgdG8ga2VlcCB0cmFjayBvZiB0aGUgZmlsZXMgYmVpbmcgdXBsb2FkZWQuXG4gICAqIE5lZWRzIHRvIGJlIHN1cHBvcnRlZCBieSBiYWNrZW5kLlxuICAgKi9cbiAgZ2V0IHByb2dyZXNzKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzT2JzZXJ2YWJsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBfaHR0cCB0aGUgaHR0cCBjbGllbnQgaW5zdGFuY2VcbiAgICogQGJyZWFraW5nLWNoYW5nZSAzLjAuMCByZW1vdmUgJ09wdGlvbmFsJyBkZWNvcmF0b3Igb25jZSB0aGUgbGVnYXkgdXBsb2FkIG1ldGhvZCBpcyByZW1vdmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IF9odHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5fcHJvZ3Jlc3NPYnNlcnZhYmxlID0gdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZHMgYSBmaWxlIHRvIGEgVVJMLlxuICAgKi9cbiAgc2VuZChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBib2R5OiBGaWxlIHwgRm9ybURhdGEsXG4gICAgeyBoZWFkZXJzLCBwYXJhbXMgfTogSVVwbG9hZEV4dHJhcyA9IHt9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKCF0aGlzLl9odHRwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBIdHRwQ2xpZW50IG1vZHVsZSBuZWVkcyB0byBiZSBpbXBvcnRlZCBhdCByb290IG1vZHVsZSBsZXZlbCcpO1xuICAgIH1cbiAgICBjb25zdCByZXE6IEh0dHBSZXF1ZXN0PEZpbGUgfCBGb3JtRGF0YT4gPSBuZXcgSHR0cFJlcXVlc3QobWV0aG9kLnRvVXBwZXJDYXNlKCksIHVybCwgYm9keSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoaGVhZGVycyB8fCB7fSksXG4gICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogcGFyYW1zIHx8IHt9IH0pLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9odHRwLnJlcXVlc3QocmVxKS5waXBlKHRhcCgoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB0aGlzLmhhbmRsZUV2ZW50KGV2ZW50KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFdmVudDxUID0gYW55PihldmVudDogSHR0cEV2ZW50PFQ+KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuU2VudDpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NTdWJqZWN0Lm5leHQoMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzOlxuICAgICAgICB0aGlzLl9wcm9ncmVzc1N1YmplY3QubmV4dChNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEh0dHBFdmVudFR5cGUuUmVzcG9uc2U6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzU3ViamVjdC5uZXh0KDEwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=