/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
var RouterPathService = /** @class */ (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e instanceof RoutesRecognized; })), pairwise())
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        }));
    }
    /*
     * Utility function to get the route the user previously went to
     * good for use in a "back button"
     */
    /*
       * Utility function to get the route the user previously went to
       * good for use in a "back button"
       */
    /**
     * @return {?}
     */
    RouterPathService.prototype.getPreviousRoute = /*
       * Utility function to get the route the user previously went to
       * good for use in a "back button"
       */
    /**
     * @return {?}
     */
    function () {
        return RouterPathService._previousRoute;
    };
    RouterPathService._previousRoute = '/';
    RouterPathService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouterPathService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return RouterPathService;
}());
export { RouterPathService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouterPathService._previousRoute;
    /**
     * @type {?}
     * @private
     */
    RouterPathService.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXBhdGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQ7SUFHRSwyQkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO2FBQ2hCLElBQUksQ0FDSCxNQUFNOzs7O1FBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLFlBQVksZ0JBQWdCLEVBQTdCLENBQTZCLEVBQUMsRUFDakQsUUFBUSxFQUFFLENBQ1g7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxDQUFRO1lBQ2xCLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDNUQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILDRDQUFnQjs7Ozs7OztJQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUMsY0FBYyxDQUFDO0lBQzFDLENBQUM7SUFsQmMsZ0NBQWMsR0FBVyxHQUFHLENBQUM7O2dCQUY3QyxVQUFVOzs7O2dCQUpGLE1BQU07O0lBeUJmLHdCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksaUJBQWlCOzs7Ozs7SUFDNUIsaUNBQTRDOzs7OztJQUNoQyxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyUGF0aFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBfcHJldmlvdXNSb3V0ZTogc3RyaW5nID0gJy8nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuX3JvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGU6IGFueSkgPT4gZSBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpLFxuICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZTogYW55W10pID0+IHtcbiAgICAgICAgUm91dGVyUGF0aFNlcnZpY2UuX3ByZXZpb3VzUm91dGUgPSBlWzBdLnVybEFmdGVyUmVkaXJlY3RzO1xuICAgICAgfSk7XG4gIH1cblxuICAvKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGdldCB0aGUgcm91dGUgdGhlIHVzZXIgcHJldmlvdXNseSB3ZW50IHRvXG4gICAqIGdvb2QgZm9yIHVzZSBpbiBhIFwiYmFjayBidXR0b25cIlxuICAgKi9cbiAgZ2V0UHJldmlvdXNSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZTtcbiAgfVxufVxuIl19