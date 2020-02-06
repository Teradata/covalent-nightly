/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
var TdMediaService = /** @class */ (function () {
    function TdMediaService(_ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this._resizing = false;
        this._queryMap = new Map();
        this._querySources = {};
        this._queryObservables = {};
        this._queryMap.set('xs', '(max-width: 599px)');
        this._queryMap.set('gt-xs', '(min-width: 600px)');
        this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
        this._queryMap.set('gt-sm', '(min-width: 960px)');
        this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
        this._queryMap.set('gt-md', '(min-width: 1280px)');
        this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
        this._queryMap.set('gt-lg', '(min-width: 1920px)');
        this._queryMap.set('xl', '(min-width: 1920px)');
        this._queryMap.set('landscape', '(orientation: landscape)');
        this._queryMap.set('portrait', '(orientation: portrait)');
        this._queryMap.set('print', 'print');
        this._resizing = false;
        // we make sure that the resize checking happend outside of Angular since it happens often
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return fromEvent(window, 'resize').subscribe((/**
             * @return {?}
             */
            function () {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!_this._resizing) {
                    _this._resizing = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this._onResize();
                        _this._resizing = false;
                    }), 100);
                }
            }));
        }));
    }
    /**
     * Deregisters a query so its stops being notified or used.
     */
    /**
     * Deregisters a query so its stops being notified or used.
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype.deregisterQuery = /**
     * Deregisters a query so its stops being notified or used.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        this._querySources[query].unsubscribe();
        delete this._querySources[query];
        delete this._queryObservables[query];
    };
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     */
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype.query = /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run((/**
         * @return {?}
         */
        function () {
            return matchMedia(query).matches;
        }));
    };
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     */
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype.registerQuery = /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     * @param {?} query
     * @return {?}
     */
    function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        if (!this._querySources[query]) {
            this._querySources[query] = new BehaviorSubject(matchMedia(query).matches);
            this._queryObservables[query] = this._querySources[query].asObservable();
        }
        return this._queryObservables[query];
    };
    /**
     * Trigger a match media event on all subscribed observables.
     */
    /**
     * Trigger a match media event on all subscribed observables.
     * @return {?}
     */
    TdMediaService.prototype.broadcast = /**
     * Trigger a match media event on all subscribed observables.
     * @return {?}
     */
    function () {
        this._onResize();
    };
    /**
     * @private
     * @return {?}
     */
    TdMediaService.prototype._onResize = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        var _this = this;
        var _loop_1 = function (query) {
            this_1._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this._matchMediaTrigger(query);
            }));
        };
        var this_1 = this;
        try {
            for (var _b = __values(Object.keys(this._querySources)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var query = _c.value;
                _loop_1(query);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype._matchMediaTrigger = /**
     * @private
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this._querySources[query].next(matchMedia(query).matches);
    };
    TdMediaService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TdMediaService.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    return TdMediaService;
}());
export { TdMediaService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._resizing;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._globalSubscription;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._queryMap;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._querySources;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._queryObservables;
    /**
     * @type {?}
     * @private
     */
    TdMediaService.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL21lZGlhLyIsInNvdXJjZXMiOlsic2VydmljZXMvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1RTtJQVFFLHdCQUFvQixPQUFlO1FBQW5DLGlCQTRCQztRQTVCbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU4zQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDM0Qsa0JBQWEsR0FBZ0QsRUFBRSxDQUFDO1FBQ2hFLHNCQUFpQixHQUEyQyxFQUFFLENBQUM7UUFHckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDRDQUE0QyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FB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LENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLGtDQUFTOzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sa0NBQVM7Ozs7SUFBakI7O1FBQUEsaUJBTUM7Z0NBTFksS0FBSztZQUNkLE9BQUssT0FBTyxDQUFDLEdBQUc7OztZQUFDO2dCQUNmLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUMsQ0FBQzs7OztZQUhMLEtBQW9CLElBQUEsS0FBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBLGdCQUFBO2dCQUE5QyxJQUFNLEtBQUssV0FBQTt3QkFBTCxLQUFLO2FBSWY7Ozs7Ozs7OztJQUNILENBQUM7Ozs7OztJQUVPLDJDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsS0FBYTtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBL0ZGLFVBQVU7Ozs7Z0JBSFUsTUFBTTs7SUFtRzNCLHFCQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0EvRlksY0FBYzs7Ozs7O0lBQ3pCLG1DQUFtQzs7Ozs7SUFDbkMsNkNBQTBDOzs7OztJQUMxQyxtQ0FBbUU7Ozs7O0lBQ25FLHVDQUF3RTs7Ozs7SUFDeEUsMkNBQXVFOzs7OztJQUUzRCxpQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkTWVkaWFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZ2xvYmFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3F1ZXJ5TWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfcXVlcnlTb3VyY2VzOiB7IFtrZXk6IHN0cmluZ106IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiB9ID0ge307XG4gIHByaXZhdGUgX3F1ZXJ5T2JzZXJ2YWJsZXM6IHsgW2tleTogc3RyaW5nXTogT2JzZXJ2YWJsZTxib29sZWFuPiB9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3hzJywgJyhtYXgtd2lkdGg6IDU5OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3QteHMnLCAnKG1pbi13aWR0aDogNjAwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdzbScsICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3Qtc20nLCAnKG1pbi13aWR0aDogOTYwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdtZCcsICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LW1kJywgJyhtaW4td2lkdGg6IDEyODBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2xnJywgJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LWxnJywgJyhtaW4td2lkdGg6IDE5MjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3hsJywgJyhtaW4td2lkdGg6IDE5MjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2xhbmRzY2FwZScsICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3BvcnRyYWl0JywgJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdwcmludCcsICdwcmludCcpO1xuXG4gICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAvLyB3ZSBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzaXplIGNoZWNraW5nIGhhcHBlbmQgb3V0c2lkZSBvZiBBbmd1bGFyIHNpbmNlIGl0IGhhcHBlbnMgb2Z0ZW5cbiAgICB0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB3YXkgdG8gcHJldmVudCB0aGUgcmVzaXplIGV2ZW50IGZyb20gdHJpZ2dlcmluZyB0aGUgbWF0Y2ggbWVkaWEgaWYgdGhlcmUgaXMgYWxyZWFkeSBvbmUgZXZlbnQgcnVubmluZyBhbHJlYWR5LlxuICAgICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYSBxdWVyeSBzbyBpdHMgc3RvcHMgYmVpbmcgbm90aWZpZWQgb3IgdXNlZC5cbiAgICovXG4gIGRlcmVnaXN0ZXJRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0udW5zdWJzY3JpYmUoKTtcbiAgICBkZWxldGUgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XTtcbiAgICBkZWxldGUgdGhpcy5fcXVlcnlPYnNlcnZhYmxlc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBldmFsdWF0ZSB3aGV0aGVyIGEgZ2l2ZW4gbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZSBnaXZlbiB0aGUgY3VycmVudCBkZXZpY2UncyBzY3JlZW4gLyB3aW5kb3cgc2l6ZS5cbiAgICovXG4gIHB1YmxpYyBxdWVyeShxdWVyeTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIG1lZGlhIHF1ZXJ5IGFuZCByZXR1cm5zIGFuIFtPYnNlcnZhYmxlXSB0aGF0IHdpbGwgcmUtZXZhbHVhdGUgYW5kXG4gICAqIHJldHVybiBpZiB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcyBvbiB3aW5kb3cgcmVzaXplLlxuICAgKiBOb3RlOiBkb24ndCBmb3JnZXQgdG8gdW5zdWJzY3JpYmUgZnJvbSBbT2JzZXJ2YWJsZV0gd2hlbiBmaW5pc2hlZCB3YXRjaGluZy5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlclF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAodGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldKSB7XG4gICAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKTtcbiAgICAgIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldID0gdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBtYXRjaCBtZWRpYSBldmVudCBvbiBhbGwgc3Vic2NyaWJlZCBvYnNlcnZhYmxlcy5cbiAgICovXG4gIHB1YmxpYyBicm9hZGNhc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fb25SZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVzaXplKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcXVlcnkgb2YgT2JqZWN0LmtleXModGhpcy5fcXVlcnlTb3VyY2VzKSkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuX21hdGNoTWVkaWFUcmlnZ2VyKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hdGNoTWVkaWFUcmlnZ2VyKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLm5leHQobWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG4gIH1cbn1cbiJdfQ==