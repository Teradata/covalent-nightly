import * as tslib_1 from "tslib";
import { Injectable, NgZone, SkipSelf, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { fromEvent } from 'rxjs/observable/fromEvent';
var TdMediaService = (function () {
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
        // we make sure that the resize checking happend outside of angular since it happens often
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return fromEvent(window, 'resize').subscribe(function () {
                // way to prevent the resize event from triggering the match media if there is already one event running already.
                if (!_this._resizing) {
                    _this._resizing = true;
                    setTimeout(function () {
                        _this._onResize();
                        _this._resizing = false;
                    }, 100);
                }
            });
        });
    }
    /**
     * Deregisters a query so its stops being notified or used.
     */
    TdMediaService.prototype.deregisterQuery = function (query) {
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
    TdMediaService.prototype.query = function (query) {
        if (this._queryMap.get(query.toLowerCase())) {
            query = this._queryMap.get(query.toLowerCase());
        }
        return this._ngZone.run(function () {
            return matchMedia(query).matches;
        });
    };
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     */
    TdMediaService.prototype.registerQuery = function (query) {
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
    TdMediaService.prototype.broadcast = function () {
        this._onResize();
    };
    TdMediaService.prototype._onResize = function () {
        var _this = this;
        var _loop_1 = function (query) {
            this_1._ngZone.run(function () {
                _this._matchMediaTrigger(query);
            });
        };
        var this_1 = this;
        for (var query in this._querySources) {
            _loop_1(query);
        }
    };
    TdMediaService.prototype._matchMediaTrigger = function (query) {
        this._querySources[query].next(matchMedia(query).matches);
    };
    TdMediaService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgZone])
    ], TdMediaService);
    return TdMediaService;
}());
export { TdMediaService };
export function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
    return parent || new TdMediaService(ngZone);
}
export var MEDIA_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdMediaService,
    deps: [[new Optional(), new SkipSelf(), TdMediaService], NgZone],
    useFactory: MEDIA_PROVIDER_FACTORY,
};
//# sourceMappingURL=media.service.js.map