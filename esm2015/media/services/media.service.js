/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
export class TdMediaService {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
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
        this._globalSubscription = this._ngZone.runOutsideAngular(() => {
            return fromEvent(window, 'resize').subscribe(() => {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!this._resizing) {
                    this._resizing = true;
                    setTimeout(() => {
                        this._onResize();
                        this._resizing = false;
                    }, 100);
                }
            });
        });
    }
    /**
     * Deregisters a query so its stops being notified or used.
     * @param {?} query
     * @return {?}
     */
    deregisterQuery(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        this._querySources[query].unsubscribe();
        delete this._querySources[query];
        delete this._queryObservables[query];
    }
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     * @param {?} query
     * @return {?}
     */
    query(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run(() => {
            return matchMedia(query).matches;
        });
    }
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     * @param {?} query
     * @return {?}
     */
    registerQuery(query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        if (!this._querySources[query]) {
            this._querySources[query] = new BehaviorSubject(matchMedia(query).matches);
            this._queryObservables[query] = this._querySources[query].asObservable();
        }
        return this._queryObservables[query];
    }
    /**
     * Trigger a match media event on all subscribed observables.
     * @return {?}
     */
    broadcast() {
        this._onResize();
    }
    /**
     * @return {?}
     */
    _onResize() {
        for (let query in this._querySources) {
            this._ngZone.run(() => {
                this._matchMediaTrigger(query);
            });
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    _matchMediaTrigger(query) {
        this._querySources[query].next(matchMedia(query).matches);
    }
}
TdMediaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
TdMediaService.ctorParameters = () => [
    { type: NgZone }
];
/** @nocollapse */ TdMediaService.ngInjectableDef = i0.defineInjectable({ factory: function TdMediaService_Factory() { return new TdMediaService(i0.inject(i0.NgZone)); }, token: TdMediaService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TdMediaService.prototype._resizing;
    /** @type {?} */
    TdMediaService.prototype._globalSubscription;
    /** @type {?} */
    TdMediaService.prototype._queryMap;
    /** @type {?} */
    TdMediaService.prototype._querySources;
    /** @type {?} */
    TdMediaService.prototype._queryObservables;
    /** @type {?} */
    TdMediaService.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvc2VydmljZXMvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLGVBQWUsRUFBZ0IsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUs1RSxNQUFNLE9BQU8sY0FBYzs7OztJQU96QixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU4zQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDM0Qsa0JBQWEsR0FBZ0QsRUFBRSxDQUFDO1FBQ2hFLHNCQUFpQixHQUEyQyxFQUFFLENBQUM7UUFHckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDRDQUE0QyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMs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RUFBRSxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFLTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFTyxTQUFTO1FBQ2YsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVPLGtCQUFrQixDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7OztZQWpHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMb0IsTUFBTTs7Ozs7SUFPekIsbUNBQW1DOztJQUNuQyw2Q0FBMEM7O0lBQzFDLG1DQUFtRTs7SUFDbkUsdUNBQXdFOztJQUN4RSwyQ0FBdUU7O0lBRTNELGlDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZWRpYVNlcnZpY2Uge1xuICBwcml2YXRlIF9yZXNpemluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9nbG9iYWxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcXVlcnlNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICBwcml2YXRlIF9xdWVyeVNvdXJjZXM6IHsgW2tleTogc3RyaW5nXTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+IH0gPSB7fTtcbiAgcHJpdmF0ZSBfcXVlcnlPYnNlcnZhYmxlczogeyBba2V5OiBzdHJpbmddOiBPYnNlcnZhYmxlPGJvb2xlYW4+IH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgneHMnLCAnKG1heC13aWR0aDogNTk5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC14cycsICcobWluLXdpZHRoOiA2MDBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3NtJywgJyhtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdndC1zbScsICcobWluLXdpZHRoOiA5NjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ21kJywgJyhtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3QtbWQnLCAnKG1pbi13aWR0aDogMTI4MHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnbGcnLCAnKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3QtbGcnLCAnKG1pbi13aWR0aDogMTkyMHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgneGwnLCAnKG1pbi13aWR0aDogMTkyMHB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnbGFuZHNjYXBlJywgJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgncG9ydHJhaXQnLCAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3ByaW50JywgJ3ByaW50Jyk7XG5cbiAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgIC8vIHdlIG1ha2Ugc3VyZSB0aGF0IHRoZSByZXNpemUgY2hlY2tpbmcgaGFwcGVuZCBvdXRzaWRlIG9mIEFuZ3VsYXIgc2luY2UgaXQgaGFwcGVucyBvZnRlblxuICAgIHRoaXMuX2dsb2JhbFN1YnNjcmlwdGlvbiA9IHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIHdheSB0byBwcmV2ZW50IHRoZSByZXNpemUgZXZlbnQgZnJvbSB0cmlnZ2VyaW5nIHRoZSBtYXRjaCBtZWRpYSBpZiB0aGVyZSBpcyBhbHJlYWR5IG9uZSBldmVudCBydW5uaW5nIGFscmVhZHkuXG4gICAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vblJlc2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXJlZ2lzdGVycyBhIHF1ZXJ5IHNvIGl0cyBzdG9wcyBiZWluZyBub3RpZmllZCBvciB1c2VkLlxuICAgKi9cbiAgZGVyZWdpc3RlclF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS51bnN1YnNjcmliZSgpO1xuICAgIGRlbGV0ZSB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldO1xuICAgIGRlbGV0ZSB0aGlzLl9xdWVyeU9ic2VydmFibGVzW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGV2YWx1YXRlIHdoZXRoZXIgYSBnaXZlbiBtZWRpYSBxdWVyeSBpcyB0cnVlIG9yIGZhbHNlIGdpdmVuIHRoZSBjdXJyZW50IGRldmljZSdzIHNjcmVlbiAvIHdpbmRvdyBzaXplLlxuICAgKi9cbiAgcHVibGljIHF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbWVkaWEgcXVlcnkgYW5kIHJldHVybnMgYW4gW09ic2VydmFibGVdIHRoYXQgd2lsbCByZS1ldmFsdWF0ZSBhbmRcbiAgICogcmV0dXJuIGlmIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBtYXRjaGVzIG9uIHdpbmRvdyByZXNpemUuXG4gICAqIE5vdGU6IGRvbid0IGZvcmdldCB0byB1bnN1YnNjcmliZSBmcm9tIFtPYnNlcnZhYmxlXSB3aGVuIGZpbmlzaGVkIHdhdGNoaW5nLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyUXVlcnkocXVlcnk6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICh0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0pIHtcbiAgICAgIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXMpO1xuICAgICAgdGhpcy5fcXVlcnlPYnNlcnZhYmxlc1txdWVyeV0gPSB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcXVlcnlPYnNlcnZhYmxlc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIG1hdGNoIG1lZGlhIGV2ZW50IG9uIGFsbCBzdWJzY3JpYmVkIG9ic2VydmFibGVzLlxuICAgKi9cbiAgcHVibGljIGJyb2FkY2FzdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9vblJlc2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25SZXNpemUoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgcXVlcnkgaW4gdGhpcy5fcXVlcnlTb3VyY2VzKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbWF0Y2hNZWRpYVRyaWdnZXIocXVlcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWF0Y2hNZWRpYVRyaWdnZXIocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0ubmV4dChtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKTtcbiAgfVxufVxuIl19