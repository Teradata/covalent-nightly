/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
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
        var _this = this;
        var e_1, _a;
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
            for (var _b = tslib_1.__values(Object.keys(this._querySources)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    TdMediaService.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    /** @nocollapse */ TdMediaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TdMediaService_Factory() { return new TdMediaService(i0.ɵɵinject(i0.NgZone)); }, token: TdMediaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvc2VydmljZXMvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFNUU7SUFVRSx3QkFBb0IsT0FBZTtRQUFuQyxpQkE0QkM7UUE1Qm1CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFOM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixjQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzNELGtCQUFhLEdBQWdELEVBQUUsQ0FBQztRQUNoRSxzQkFBaUIsR0FBMkMsRUFBRSxDQUFDO1FBR3JFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENB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SSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxRTtRQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSxrQ0FBUzs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLGtDQUFTOzs7O0lBQWpCO1FBQUEsaUJBTUM7O2dDQUxZLEtBQUs7WUFDZCxPQUFLLE9BQU8sQ0FBQyxHQUFHOzs7WUFBQztnQkFDZixLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFDLENBQUM7Ozs7WUFITCxLQUFvQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUEsZ0JBQUE7Z0JBQTlDLElBQU0sS0FBSyxXQUFBO3dCQUFMLEtBQUs7YUFJZjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMkNBQWtCOzs7OztJQUExQixVQUEyQixLQUFhO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkFqR0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMb0IsTUFBTTs7O3lCQUEzQjtDQXFHQyxBQWxHRCxJQWtHQztTQS9GWSxjQUFjOzs7Ozs7SUFDekIsbUNBQW1DOzs7OztJQUNuQyw2Q0FBMEM7Ozs7O0lBQzFDLG1DQUFtRTs7Ozs7SUFDbkUsdUNBQXdFOzs7OztJQUN4RSwyQ0FBdUU7Ozs7O0lBRTNELGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZWRpYVNlcnZpY2Uge1xuICBwcml2YXRlIF9yZXNpemluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9nbG9iYWxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcXVlcnlNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwcml2YXRlIF9xdWVyeVNvdXJjZXM6IHsgW2tleTogc3RyaW5nXTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+IH0gPSB7fTtcbiAgcHJpdmF0ZSBfcXVlcnlPYnNlcnZhYmxlczogeyBba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPGJvb2xlYW4+IH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgneHMnLCAnKG1heC13aWR0aDogNTk5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC14cycsICcobWluLXdpZHRoOiA2MDBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3NtJywgJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1zbScsICcobWluLXdpZHRoOiA5NjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ21kJywgJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3QtbWQnLCAnKG1pbi13aWR0aDogMTI4MHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnbGcnLCAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3QtbGcnLCAnKG1pbi13aWR0aDogMTkyMHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgneGwnLCAnKG1pbi13aWR0aDogMTkyMHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnbGFuZHNjYXBlJywgJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgncG9ydHJhaXQnLCAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3ByaW50JywgJ3ByaW50Jyk7XG5cbiAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgIC8vIHdlIG1ha2Ugc3VyZSB0aGF0IHRoZSByZXNpemUgY2hlY2tpbmcgaGFwcGVuZCBvdXRzaWRlIG9mIEFuZ3VsYXIgc2luY2UgaXQgaGFwcGVucyBvZnRlblxuICAgIHRoaXMuX2dsb2JhbFN1YnNjcmlwdGlvbiA9IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIHdheSB0byBwcmV2ZW50IHRoZSByZXNpemUgZXZlbnQgZnJvbSB0cmlnZ2VyaW5nIHRoZSBtYXRjaCBtZWRpYSBpZiB0aGVyZSBpcyBhbHJlYWR5IG9uZSBldmVudCBydW5uaW5nIGFscmVhZHkuXG4gICAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vblJlc2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhIHF1ZXJ5IHNvIGl0cyBzdG9wcyBiZWluZyBub3RpZmllZCBvciB1c2VkLlxuICAgKi9cbiAgZGVyZWdpc3RlclF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS51bnN1YnNjcmliZSgpO1xuICAgIGRlbGV0ZSB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldO1xuICAgIGRlbGV0ZSB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGV2YWx1YXRlIHdoZXRoZXIgYSBnaXZlbiBtZWRpYSBxdWVyeSBpcyB0cnVlIG9yIGZhbHNlIGdpdmVuIHRoZSBjdXJyZW50IGRldmljZSdzIHNjcmVlbiAvIHdpbmRvdyBzaXplLlxuICAgKi9cbiAgcHVibGljIHF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbWVkaWEgcXVlcnkgYW5kIHJldHVybnMgYW4gW09ic2VydmFibGVdIHRoYXQgd2lsbCByZS1ldmFsdWF0ZSBhbmRcbiAgICogcmV0dXJuIGlmIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBtYXRjaGVzIG9uIHdpbmRvdyByZXNpemUuXG4gICAqIE5vdGU6IGRvbid0IGZvcmdldCB0byB1bnN1YnNjcmliZSBmcm9tIFtPYnNlcnZhYmxlXSB3aGVuIGZpbmlzaGVkIHdhdGNoaW5nLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyUXVlcnkocXVlcnk6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0pIHtcbiAgICAgIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMpO1xuICAgICAgdGhpcy5fcXVlcnlPYnNlcnZhYmxlc1txdWVyeV0gPSB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcXVlcnlPYnNlcnZhYmxlc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIG1hdGNoIG1lZGlhIGV2ZW50IG9uIGFsbCBzdWJzY3JpYmVkIG9ic2VydmFibGVzLlxuICAgKi9cbiAgcHVibGljIGJyb2FkY2FzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9vblJlc2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZXNpemUoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBxdWVyeSBvZiBPYmplY3Qua2V5cyh0aGlzLl9xdWVyeVNvdXJjZXMpKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbWF0Y2hNZWRpYVRyaWdnZXIocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWF0Y2hNZWRpYVRyaWdnZXIocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0ubmV4dChtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKTtcbiAgfVxufVxuIl19