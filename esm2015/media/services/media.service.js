/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return fromEvent(window, 'resize').subscribe((/**
             * @return {?}
             */
            () => {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!this._resizing) {
                    this._resizing = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this._onResize();
                        this._resizing = false;
                    }), 100);
                }
            }));
        }));
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
        return this._ngZone.run((/**
         * @return {?}
         */
        () => {
            return matchMedia(query).matches;
        }));
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
     * @private
     * @return {?}
     */
    _onResize() {
        for (let query in this._querySources) {
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this._matchMediaTrigger(query);
            }));
        }
    }
    /**
     * @private
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
/** @nocollapse */ TdMediaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function TdMediaService_Factory() { return new TdMediaService(i0.ɵɵinject(i0.NgZone)); }, token: TdMediaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvc2VydmljZXMvbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLGVBQWUsRUFBZ0IsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUs1RSxNQUFNLE9BQU8sY0FBYzs7OztJQU96QixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU4zQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDM0Qsa0JBQWEsR0FBZ0QsRUFBRSxDQUFDO1FBQ2hFLHNCQUFpQixHQUEyQyxFQUFFLENBQUM7UUFHckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDRDQUE0QyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMs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QUFDLFlBQVksRUFBRSxDQUFDO1NBQzFFO1FBQ0QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFLTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7SUFFTyxrQkFBa0IsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFqR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTG9CLE1BQU07Ozs7Ozs7O0lBT3pCLG1DQUFtQzs7Ozs7SUFDbkMsNkNBQTBDOzs7OztJQUMxQyxtQ0FBbUU7Ozs7O0lBQ25FLHVDQUF3RTs7Ozs7SUFDeEUsMkNBQXVFOzs7OztJQUUzRCxpQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVkaWFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZ2xvYmFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3F1ZXJ5TWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfcXVlcnlTb3VyY2VzOiB7IFtrZXk6IHN0cmluZ106IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiB9ID0ge307XG4gIHByaXZhdGUgX3F1ZXJ5T2JzZXJ2YWJsZXM6IHsgW2tleTogc3RyaW5nXTogT2JzZXJ2YWJsZTxib29sZWFuPiB9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3hzJywgJyhtYXgtd2lkdGg6IDU5OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3QteHMnLCAnKG1pbi13aWR0aDogNjAwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdzbScsICcobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KScpO1xuICAgIHRoaXMuX3F1ZXJ5TWFwLnNldCgnZ3Qtc20nLCAnKG1pbi13aWR0aDogOTYwcHgpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdtZCcsICcobWluLXdpZHRoOiA5NjBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LW1kJywgJyhtaW4td2lkdGg6IDEyODBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2xnJywgJyhtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2d0LWxnJywgJyhtaW4td2lkdGg6IDE5MjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3hsJywgJyhtaW4td2lkdGg6IDE5MjBweCknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ2xhbmRzY2FwZScsICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknKTtcbiAgICB0aGlzLl9xdWVyeU1hcC5zZXQoJ3BvcnRyYWl0JywgJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyk7XG4gICAgdGhpcy5fcXVlcnlNYXAuc2V0KCdwcmludCcsICdwcmludCcpO1xuXG4gICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAvLyB3ZSBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzaXplIGNoZWNraW5nIGhhcHBlbmQgb3V0c2lkZSBvZiBBbmd1bGFyIHNpbmNlIGl0IGhhcHBlbnMgb2Z0ZW5cbiAgICB0aGlzLl9nbG9iYWxTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmV0dXJuIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB3YXkgdG8gcHJldmVudCB0aGUgcmVzaXplIGV2ZW50IGZyb20gdHJpZ2dlcmluZyB0aGUgbWF0Y2ggbWVkaWEgaWYgdGhlcmUgaXMgYWxyZWFkeSBvbmUgZXZlbnQgcnVubmluZyBhbHJlYWR5LlxuICAgICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25SZXNpemUoKTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVyZWdpc3RlcnMgYSBxdWVyeSBzbyBpdHMgc3RvcHMgYmVpbmcgbm90aWZpZWQgb3IgdXNlZC5cbiAgICovXG4gIGRlcmVnaXN0ZXJRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHRoaXMuX3F1ZXJ5U291cmNlc1txdWVyeV0udW5zdWJzY3JpYmUoKTtcbiAgICBkZWxldGUgdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XTtcbiAgICBkZWxldGUgdGhpcy5fcXVlcnlPYnNlcnZhYmxlc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBldmFsdWF0ZSB3aGV0aGVyIGEgZ2l2ZW4gbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZSBnaXZlbiB0aGUgY3VycmVudCBkZXZpY2UncyBzY3JlZW4gLyB3aW5kb3cgc2l6ZS5cbiAgICovXG4gIHB1YmxpYyBxdWVyeShxdWVyeTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcXVlcnkgPSB0aGlzLl9xdWVyeU1hcC5nZXQocXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHJldHVybiBtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIG1lZGlhIHF1ZXJ5IGFuZCByZXR1cm5zIGFuIFtPYnNlcnZhYmxlXSB0aGF0IHdpbGwgcmUtZXZhbHVhdGUgYW5kXG4gICAqIHJldHVybiBpZiB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcyBvbiB3aW5kb3cgcmVzaXplLlxuICAgKiBOb3RlOiBkb24ndCBmb3JnZXQgdG8gdW5zdWJzY3JpYmUgZnJvbSBbT2JzZXJ2YWJsZV0gd2hlbiBmaW5pc2hlZCB3YXRjaGluZy5cbiAgICovXG4gIHB1YmxpYyByZWdpc3RlclF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAodGhpcy5fcXVlcnlNYXAuZ2V0KHF1ZXJ5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBxdWVyeSA9IHRoaXMuX3F1ZXJ5TWFwLmdldChxdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldKSB7XG4gICAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKTtcbiAgICAgIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldID0gdGhpcy5fcXVlcnlTb3VyY2VzW3F1ZXJ5XS5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5T2JzZXJ2YWJsZXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBtYXRjaCBtZWRpYSBldmVudCBvbiBhbGwgc3Vic2NyaWJlZCBvYnNlcnZhYmxlcy5cbiAgICovXG4gIHB1YmxpYyBicm9hZGNhc3QoKTogdm9pZCB7XG4gICAgdGhpcy5fb25SZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uUmVzaXplKCk6IHZvaWQge1xuICAgIGZvciAobGV0IHF1ZXJ5IGluIHRoaXMuX3F1ZXJ5U291cmNlcykge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuX21hdGNoTWVkaWFUcmlnZ2VyKHF1ZXJ5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21hdGNoTWVkaWFUcmlnZ2VyKHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9xdWVyeVNvdXJjZXNbcXVlcnldLm5leHQobWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcyk7XG4gIH1cbn1cbiJdfQ==