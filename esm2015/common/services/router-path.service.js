/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
export class RouterPathService {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        this._router.events
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e instanceof RoutesRecognized)), pairwise())
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        }));
    }
    /*
       * Utility function to get the route the user previously went to
       * good for use in a "back button"
       */
    /**
     * @return {?}
     */
    getPreviousRoute() {
        return RouterPathService._previousRoute;
    }
}
RouterPathService._previousRoute = '/';
RouterPathService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterPathService.ctorParameters = () => [
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXBhdGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2NvbW1vbi8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07YUFDaEIsSUFBSSxDQUNILE1BQU07Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxZQUFZLGdCQUFnQixFQUFDLEVBQ2pELFFBQVEsRUFBRSxDQUNYO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDdEIsaUJBQWlCLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7Ozs7O0lBTUQsZ0JBQWdCO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDMUMsQ0FBQzs7QUFsQmMsZ0NBQWMsR0FBVyxHQUFHLENBQUM7O1lBRjdDLFVBQVU7Ozs7WUFKRixNQUFNOzs7Ozs7O0lBTWIsaUNBQTRDOzs7OztJQUNoQyxvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyUGF0aFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyBfcHJldmlvdXNSb3V0ZTogc3RyaW5nID0gJy8nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuX3JvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGU6IGFueSkgPT4gZSBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpLFxuICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZTogYW55W10pID0+IHtcbiAgICAgICAgUm91dGVyUGF0aFNlcnZpY2UuX3ByZXZpb3VzUm91dGUgPSBlWzBdLnVybEFmdGVyUmVkaXJlY3RzO1xuICAgICAgfSk7XG4gIH1cblxuICAvKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGdldCB0aGUgcm91dGUgdGhlIHVzZXIgcHJldmlvdXNseSB3ZW50IHRvXG4gICAqIGdvb2QgZm9yIHVzZSBpbiBhIFwiYmFjayBidXR0b25cIlxuICAgKi9cbiAgZ2V0UHJldmlvdXNSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZTtcbiAgfVxufVxuIl19