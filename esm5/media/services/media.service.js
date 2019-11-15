/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __values } from "tslib";
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    TdMediaService.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    /** @nocollapse */ TdMediaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TdMediaService_Factory() { return new TdMediaService(i0.ɵɵinject(i0.NgZone)); }, token: TdMediaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvc2VydmljZXMvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBYyxlQUFlLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFNUU7SUFVRSx3QkFBb0IsT0FBZTtRQUFuQyxpQkE0QkM7UUE1Qm1CLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFOM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixjQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzNELGtCQUFhLEdBQWdELEVBQUUsQ0FBQztRQUNoRSxzQkFBaUIsR0FBMkMsRUFBRSxDQUFDO1FBR3JFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxTQUFTLENB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SSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxRTtRQUNELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSxrQ0FBUzs7OztJQUFoQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLGtDQUFTOzs7O0lBQWpCOztRQUFBLGlCQU1DO2dDQUxZLEtBQUs7WUFDZCxPQUFLLE9BQU8sQ0FBQyxHQUFHOzs7WUFBQztnQkFDZixLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsQ0FBQyxFQUFDLENBQUM7Ozs7WUFITCxLQUFvQixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQSxnQkFBQTtnQkFBOUMsSUFBTSxLQUFLLFdBQUE7d0JBQUwsS0FBSzthQUlmOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7Ozs7SUFFTywyQ0FBa0I7Ozs7O0lBQTFCLFVBQTJCLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQWpHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxvQixNQUFNOzs7eUJBQTNCO0NBcUdDLEFBbEdELElBa0dDO1NBL0ZZLGNBQWM7Ozs7OztJQUN6QixtQ0FBbUM7Ozs7O0lBQ25DLDZDQUEwQzs7Ozs7SUFDMUMsbUNBQW1FOzs7OztJQUNuRSx1Q0FBd0U7Ozs7O0lBQ3hFLDJDQUF1RTs7Ozs7SUFFM0QsaUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lZGlhU2VydmljZSB7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2dsb2JhbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9xdWVyeU1hcDogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3F1ZXJ5U291cmNlczogeyBba2V5OiBzdHJpbmddOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gfSA9IHt9O1xuICBwcml2YXRlIF9xdWVyeU9ic2VydmFibGVzOiB7IFtrZXk6IHN0cmluZ106IE9ic2VydmFibGU8Ym9vbGVhbj4gfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCd4cycsICcobWF4LXdpZHRoOiA1OTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LXhzJywgJyhtaW4td2lkdGg6IDYwMHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnc20nLCAnKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LXNtJywgJyhtaW4td2lkdGg6IDk2MHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnbWQnLCAnKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1tZCcsICcobWluLXdpZHRoOiAxMjgwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdsZycsICcobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1sZycsICcobWluLXdpZHRoOiAxOTIwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCd4bCcsICcobWluLXdpZHRoOiAxOTIwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdsYW5kc2NhcGUnLCAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdwb3J0cmFpdCcsICcob3JpZW50YXRpb246IHBvcnRyYWl0KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgncHJpbnQnLCAncHJpbnQnKTtcblxuICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgLy8gd2UgbWFrZSBzdXJlIHRoYXQgdGhlIHJlc2l6ZSBjaGVja2luZyBoYXBwZW5kIG91dHNpZGUgb2YgQW5ndWxhciBzaW5jZSBpdCBoYXBwZW5zIG9mdGVuXG4gICAgdGhpcy5fZ2xvYmFsU3Vic2NyaXB0aW9uID0gdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJldHVybiBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gd2F5IHRvIHByZXZlbnQgdGhlIHJlc2l6ZSBldmVudCBmcm9tIHRyaWdnZXJpbmcgdGhlIG1hdGNoIG1lZGlhIGlmIHRoZXJlIGlzIGFscmVhZHkgb25lIGV2ZW50IHJ1bm5pbmcgYWxyZWFkeS5cbiAgICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX29uUmVzaXplKCk7XG4gICAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlcmVnaXN0ZXJzIGEgcXVlcnkgc28gaXRzIHN0b3BzIGJlaW5nIG5vdGlmaWVkIG9yIHVzZWQuXG4gICAqL1xuICBkZXJlZ2lzdGVyUXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLnVuc3Vic2NyaWJlKCk7XG4gICAgZGVsZXRlIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV07XG4gICAgZGVsZXRlIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZXZhbHVhdGUgd2hldGhlciBhIGdpdmVuIG1lZGlhIHF1ZXJ5IGlzIHRydWUgb3IgZmFsc2UgZ2l2ZW4gdGhlIGN1cnJlbnQgZGV2aWNlJ3Mgc2NyZWVuIC8gd2luZG93IHNpemUuXG4gICAqL1xuICBwdWJsaWMgcXVlcnkocXVlcnk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICByZXR1cm4gbWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBtZWRpYSBxdWVyeSBhbmQgcmV0dXJucyBhbiBbT2JzZXJ2YWJsZV0gdGhhdCB3aWxsIHJlLWV2YWx1YXRlIGFuZFxuICAgKiByZXR1cm4gaWYgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG1hdGNoZXMgb24gd2luZG93IHJlc2l6ZS5cbiAgICogTm90ZTogZG9uJ3QgZm9yZ2V0IHRvIHVuc3Vic2NyaWJlIGZyb20gW09ic2VydmFibGVdIHdoZW4gZmluaXNoZWQgd2F0Y2hpbmcuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJRdWVyeShxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XSkge1xuICAgICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG4gICAgICB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XSA9IHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0uYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgbWF0Y2ggbWVkaWEgZXZlbnQgb24gYWxsIHN1YnNjcmliZWQgb2JzZXJ2YWJsZXMuXG4gICAqL1xuICBwdWJsaWMgYnJvYWRjYXN0KCk6IHZvaWQge1xuICAgIHRoaXMuX29uUmVzaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF9vblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHF1ZXJ5IG9mIE9iamVjdC5rZXlzKHRoaXMuX3F1ZXJ5U291cmNlcykpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9tYXRjaE1lZGlhVHJpZ2dlcihxdWVyeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tYXRjaE1lZGlhVHJpZ2dlcihxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS5uZXh0KG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMpO1xuICB9XG59XG4iXX0=